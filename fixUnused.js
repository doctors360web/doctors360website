import fs from 'fs';
import path from 'path';

// List of unused icons from the tsc output
const unusedIcons = {
  'src/pages/AboutPage.tsx': ['Book'],
  'src/pages/admin/AdminDashboard.tsx': ['RotateCw'],
  'src/pages/admin/AdminLayout.tsx': ['List', 'Gauge', 'RotateCw'],
  'src/pages/admin/AdminLogin.tsx': ['RotateCw'],
  'src/pages/admin/ManageGallery.tsx': ['Pencil', 'RotateCw'],
  'src/pages/admin/ManageNews.tsx': ['Pencil', 'RotateCw'],
  'src/pages/admin/ManagePrograms.tsx': ['Pencil', 'RotateCw'],
  'src/pages/admin/ManageTestimonials.tsx': ['Pencil', 'RotateCw'],
  'src/pages/admin/ViewSubmissions.tsx': ['RotateCw', 'MessageCircle'],
  'src/pages/DonatePage.tsx': ['CheckCircle'],
  'src/sections/About.tsx': ['Sprout'],
  'src/sections/Contact.tsx': ['CheckCircle', 'Compass'],
  'src/sections/Departments.tsx': ['Zap', 'Activity', 'User', 'Settings', 'HeartPulse', 'Pipette', 'Truck', 'Coffee', 'Search'],
  'src/sections/Hero.tsx': ['Star', 'Calendar'],
  'src/sections/Services.tsx': ['Search', 'HeartPulse'],
  'src/sections/WhyChooseUs.tsx': ['Heart']
};

for (const [relativePath, icons] of Object.entries(unusedIcons)) {
  const filePath = path.join(process.cwd(), relativePath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Find the lucide-react import
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/;
    const match = content.match(importRegex);
    
    if (match) {
      const importedIcons = match[1].split(',').map(i => i.trim());
      const newIcons = importedIcons.filter(i => !icons.includes(i));
      
      if (newIcons.length === 0) {
        content = content.replace(importRegex, '');
      } else {
        content = content.replace(importRegex, `import { ${newIcons.join(', ')} } from 'lucide-react';`);
      }
      
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Fixed unused imports in ${filePath}`);
    }
  }
}
