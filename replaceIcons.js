import fs from 'fs';
import path from 'path';

const iconMap = {
  GeoAlt: 'MapPin',
  Telephone: 'Phone',
  Envelope: 'Mail',
  Clock: 'Clock',
  CalendarCheck: 'CalendarCheck',
  Star: 'Star',
  People: 'Users',
  Heart: 'Heart',
  Calendar3: 'Calendar',
  ShieldPlus: 'ShieldPlus',
  Search: 'Search',
  HeartPulse: 'HeartPulse',
  ClipboardCheck: 'ClipboardCheck',
  ArrowRight: 'ArrowRight',
  ShieldCheck: 'ShieldCheck',
  Award: 'Award',
  Activity: 'Activity',
  Lock: 'Lock',
  Quote: 'Quote',
  ChevronLeft: 'ChevronLeft',
  ChevronRight: 'ChevronRight',
  Lightning: 'Zap',
  Person: 'User',
  Eye: 'Eye',
  Gear: 'Settings',
  Eyedropper: 'Pipette',
  Truck: 'Truck',
  Cup: 'Coffee',
  Capsule: 'Pill',
  CheckCircle: 'CheckCircle',
  Send: 'Send',
  Compass: 'Compass',
  Tag: 'Tag',
  Calendar: 'Calendar',
  XLg: 'X',
  ZoomIn: 'ZoomIn',
  ArrowLeft: 'ArrowLeft',
  ArrowClockwise: 'RotateCw',
  ArrowRepeat: 'RefreshCw',
  Chat: 'MessageCircle',
  Plus: 'Plus',
  Pencil: 'Pencil',
  Trash: 'Trash2',
  Upload: 'Upload',
  ExclamationCircle: 'AlertCircle',
  QuestionCircle: 'HelpCircle',
  FileText: 'FileText',
  Globe: 'Globe',
  Image: 'Image', 
  BoxArrowRight: 'LogOut',
  List: 'List',
  Speedometer2: 'Gauge',
  GraphUp: 'TrendingUp',
  Bullseye: 'Target',
  Shield: 'Shield',
  Book: 'Book',
  Facebook: 'Facebook',
  Twitter: 'Twitter',
  Instagram: 'Instagram',
  Linkedin: 'Linkedin',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // 1. Find the react-bootstrap-icons import
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]react-bootstrap-icons['"];?/g;
  let match;
  let importedIcons = [];
  while ((match = importRegex.exec(content)) !== null) {
    const icons = match[1].split(',').map(i => i.trim()).filter(Boolean);
    importedIcons.push(...icons);
  }

  if (importedIcons.length === 0) return;

  // 2. Remove the react-bootstrap-icons import
  content = content.replace(importRegex, '');

  // 3. Figure out the lucide-react equivalents
  const lucideIconsToImport = new Set();
  const replacedIcons = new Set();
  
  for (const icon of importedIcons) {
    if (iconMap[icon]) {
      lucideIconsToImport.add(iconMap[icon]);
      replacedIcons.add(icon);
    } else {
      console.warn(`No mapping found for ${icon} in ${filePath}`);
      lucideIconsToImport.add(icon); // Fallback to same name just in case
    }
  }

  // 4. Update the content tags
  for (const icon of importedIcons) {
    const newIcon = iconMap[icon] || icon;
    if (icon !== newIcon) {
      // Replace <Icon ... />
      const tagRegex = new RegExp(`<${icon}(\\s|>)`, 'g');
      content = content.replace(tagRegex, `<${newIcon}$1`);
      
      // Replace <Icon/>
      const tagSelfCloseRegex = new RegExp(`<${icon}/>`, 'g');
      content = content.replace(tagSelfCloseRegex, `<${newIcon}/>`);
      
      // Replace Icon array references (like socials = [Facebook...])
      const wordRegex = new RegExp(`\\b${icon}\\b`, 'g');
      content = content.replace(wordRegex, newIcon);
    }
  }

  // 5. Add lucide-react import
  if (lucideIconsToImport.size > 0) {
    // Check if lucide-react is already imported
    const lucideImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/;
    const lucideMatch = content.match(lucideImportRegex);
    
    if (lucideMatch) {
      // Append to existing
      const existingIcons = lucideMatch[1].split(',').map(i => i.trim());
      for (const newIcon of lucideIconsToImport) {
        if (!existingIcons.includes(newIcon)) {
          existingIcons.push(newIcon);
        }
      }
      content = content.replace(lucideImportRegex, `import { ${existingIcons.join(', ')} } from 'lucide-react';`);
    } else {
      // Create new import at the top (after other imports)
      const importStatement = `import { ${Array.from(lucideIconsToImport).join(', ')} } from 'lucide-react';\n`;
      
      // Find last import statement to insert after
      const lines = content.split('\n');
      let lastImportIdx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          lastImportIdx = i;
        }
      }
      
      if (lastImportIdx >= 0) {
        lines.splice(lastImportIdx + 1, 0, importStatement);
        content = lines.join('\n');
      } else {
        content = importStatement + content;
      }
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

walkDir(path.join(process.cwd(), 'src'));
