# Plan: Add 3 New Content Tabs Under Men's Health

## Overview
Add 3 new sub-tabs to the existing **Men's Health** section on the `/services` page: **Cardiovascular Health**, **Mental Health**, and **Sexual Health** (content from 3 DOCX files).

## Files to Modify

### 1. `src/pages/ServicesPage.tsx`

#### A. Import (`Heart` and `Brain` icons)
**Location:** Lines 3-21 (lucide-react import block)

**Action:** Add `Heart` and `Brain` to the import list.

#### B. `menTab` state type (line 110)
**Change:**
```tsx
const [menTab, setMenTab] = useState<'trt' | 'smc' | 'cardiovascular' | 'mental' | 'sexual'>('trt');
```

#### C. Tab buttons (lines 385-398)
**Action:** Replace the 2-button tab bar with a 5-button tab bar. Remove `max-w-sm` constraint to allow wrapping. Use 2 rows for mobile-friendliness (flex-wrap).
**New buttons:**
- `'trt'` → "Hormone Therapy (TRT)"
- `'smc'` → "Circumcision (SMC)"
- `'cardiovascular'` → "Cardiovascular Health"
- `'mental'` → "Mental Health"
- `'sexual'` → "Sexual Health"

Each button follows the same pattern as existing ones with conditional `menTab === 'xxx' ? 'bg-primary-500 text-white shadow-sm' : 'text-slate-600 hover:text-primary-500'`.

#### D. Content sections (after line 478, before closing `)}` of the content area)
Add 3 new conditional content blocks after the SMC block:

**Tab: `cardiovascular`** — Content from `Doctors360_Cardiovascular_Health_Content.docx`:
- Title: "Cardiovascular Health Clinic"
- Subtitle/eyebrow: "Protect Your Heart. Protect Your Future."
- Intro paragraph about heart disease prevention
- Grid cards for: Comprehensive Heart Health Assessment, Hypertension Management, Cholesterol & Lipid Management, Diabetes & Heart Disease Prevention, Heart Disease Screening, Weight Management for Heart Health, Smoking & Tobacco Cessation, Alcohol Reduction Programme, Healthy Lifestyle Coaching
- "Who Should Consider" section with list
- "Why Choose Doctors360?" box

**Tab: `mental`** — Content from `Doctors360_Mens_Mental_Health_Content.docx`:
- Title: "Men's Mental Health"
- Subtitle/eyebrow: "Strong Minds. Healthier Lives."
- Intro paragraph about stigma and seeking help
- Grid cards for: Stress Management, Anxiety Assessment & Treatment, Depression Screening & Care, Burnout Recovery, Sleep Health, Alcohol Reduction & Cessation, Smoking & Substance Use Support, Relationship & Family Counselling, Grief & Loss Counselling, Workplace Mental Health
- "Who Can Benefit?" section
- "Why Choose Doctors360?" box

**Tab: `sexual`** — Content from `Doctors360_Mens_Sexual_Health_Content.docx`:
- Title: "Men's Sexual Health"
- Subtitle/eyebrow: "Confidential Care for Every Stage of Life"
- Intro paragraph about sexual health as part of wellbeing
- Grid cards for: ED Assessment & Treatment, Premature Ejaculation Management, Low Libido Evaluation, STI Screening & Treatment, HIV Testing Prevention & Care, Male Fertility Assessment, Testosterone Deficiency Assessment, Safe Male Circumcision, Sexual Health Counselling, Routine Sexual Health Check-ups
- "Who Should Consider?" section
- "Why Choose Doctors360?" box

#### E. FAQ items (after line 499)
Add 1-2 FAQ items for each new tab, total ~3-6 new FAQItem components.

### 2. `src/sections/Services.tsx`
**Location:** Lines 16-22 (Men's Health card)
**Action:** Update description text:
```tsx
text: "Dedicated medical services for men, including Testosterone Replacement Therapy (TRT), safe male circumcision, cardiovascular health, mental health support, and sexual wellness.",
```

### 3. `src/App.tsx`
**Location:** Line 39 (SEO meta description for HomePage)
**Action:** Update to include the new service areas.

## Content Layout Pattern (per tab)

Each new tab follows this structure:
```
<div className="space-y-6 animate-scale-in">
  <div>
    <span className="text-xs font-bold text-teal-deep uppercase tracking-widest block mb-1">
      [Eyebrow Title]
    </span>
    <h3 className="text-2xl font-bold text-primary-500">[Main Title]</h3>
  </div>
  <p className="text-sm md:text-base text-slate-brand leading-relaxed">
    [Intro paragraph]
  </p>
  <div className="grid sm:grid-cols-2 gap-4">
    <!-- Service cards -->
    <div className="bg-white p-4 rounded-xl border border-slate-200/50">
      <h4 className="font-semibold text-primary-500 text-sm mb-1.5">[Service Name]</h4>
      <p className="text-xs text-slate-brand leading-relaxed">[Description]</p>
    </div>
    <!-- ... more cards ... -->
  </div>
  <!-- Optional: Who benefits / Why choose section -->
  <div className="p-4 rounded-xl bg-[color]-50 border border-[color]-200">
    <h4 className="font-semibold text-[color]-800 mb-1">[Section Title]</h4>
    <ul class="text-xs text-[color]-900/80 space-y-1">
      <li>• [Item]</li>
    </ul>
  </div>
</div>
```

## Icon Colors for New Tabs
- **Cardiovascular Health:** `bg-red-100 text-red-600` (heart-themed)
- **Mental Health:** `bg-purple-100 text-purple-600` (brain-themed)
- **Sexual Health:** `bg-pink-100 text-pink-600` (same as existing sexual health section)

## Per-Tab Content Breakdown

### Cardiovascular Health Tab
**Grid cards (8):**
1. Comprehensive Heart Health Assessment — BP measurement, heart rate, BMI, waist circumference, cardiovascular risk assessment, family history, lifestyle/nutrition assessment
2. Hypertension Management — Early diagnosis, medication management, regular monitoring, lifestyle counselling, home BP monitoring guidance
3. Cholesterol & Lipid Management — Lipid profile testing, individual risk assessment, dietary counselling, medication management, regular follow-up
4. Diabetes & Heart Disease Prevention — Blood sugar monitoring, diabetes risk assessment, weight management, nutrition planning, prevention of diabetic heart complications
5. Heart Disease Screening — ECG, BP monitoring, blood tests, cardiovascular risk scoring, referral for specialised investigations
6. Weight Management for Heart Health — Medical weight-loss consultations, nutrition advice, exercise planning, lifestyle coaching, ongoing progress monitoring
7. Smoking & Tobacco Cessation — Cessation counselling, behavioural support, nicotine replacement therapy guidance, relapse prevention, long-term follow-up
8. Alcohol Reduction & Cessation — Alcohol use assessment, personalised reduction/cessation plans, medical evaluation, counselling, nutritional guidance, referral for specialised care

**"Who Should Consider" list:**
Adults over 40, people with high BP/diabetes/overweight, smokers, regular/excessive drinkers, family history of heart disease, anyone with chest pain/shortness of breath/palpitations, anyone wanting proactive health

**"Why Choose Doctors360" box:**
Comprehensive cardiovascular risk assessment, evidence-based prevention and treatment, personalised lifestyle and wellness plans, confidential and compassionate care, integrated services with Preventive Health, Laboratory, Weight Management and Wellness Clinics

### Mental Health Tab
**Grid cards (10):**
1. Stress Management — Practical strategies for work, family, financial, and daily life pressures
2. Anxiety Assessment & Treatment — Professional assessment, counselling, and treatment plans for anxiety disorders
3. Depression Screening & Care — Early identification and personalised management for depression
4. Burnout Recovery — Support for professionals, business owners, and caregivers experiencing emotional exhaustion
5. Sleep Health — Assessment and treatment of insomnia and other sleep-related concerns
6. Alcohol Reduction & Cessation — Confidential support to reduce or stop alcohol use, counselling, relapse prevention, referral for specialised care when needed
7. Smoking & Substance Use Support — Help to quit tobacco and address other harmful substance use
8. Relationship & Family Counselling — Support for communication, parenting, marriage, and family challenges
9. Grief & Loss Counselling — Compassionate care following bereavement or major life changes
10. Workplace Mental Health — Support for work-related stress, conflict, and career transitions

**"Who Can Benefit" list:**
Men with persistent stress/sadness/anxiety, those struggling with alcohol or substance use, men facing relationship or family difficulties, individuals with sleep problems or burnout, anyone wanting to improve emotional wellbeing

**"Why Choose Doctors360" box:**
Confidential and respectful care, evidence-based assessment and treatment, integrated support with preventive health and wellness services, personalised care plans and follow-up, a safe judgement-free environment

### Sexual Health Tab
**Grid cards (10):**
1. ED Assessment & Treatment — Comprehensive evaluation and personalised treatment to restore confidence and sexual function
2. Premature Ejaculation Management — Medical assessment, counselling, and treatment options tailored to your needs
3. Low Libido Evaluation — Assessment of hormonal, medical, and lifestyle factors contributing to reduced sexual desire
4. STI Screening & Treatment — Confidential testing and treatment for common sexually transmitted infections
5. HIV Testing, Prevention & Care — Rapid HIV testing, counselling, access to PrEP and PEP where appropriate
6. Male Fertility Assessment — Evaluation for men experiencing difficulty conceiving, referral for semen analysis and specialist care
7. Testosterone Deficiency Assessment — Clinical assessment and laboratory testing for men with symptoms of low testosterone
8. Safe Male Circumcision — Professional circumcision using approved techniques with comprehensive follow-up care
9. Sexual Health Counselling — Support for sexual wellbeing, relationship concerns, performance anxiety, and healthy sexual practices
10. Routine Sexual Health Check-ups — Regular screening and preventive care to maintain lifelong sexual health

**"Who Should Consider" list:**
Men with concerns about sexual performance or libido, anyone with STI symptoms, men starting a new relationship, men planning to start a family, anyone seeking confidential sexual health advice, men interested in preventive sexual health screening

**"Why Choose Doctors360" box:**
Confidential and discreet consultations, evidence-based diagnosis and treatment, experienced healthcare professionals, modern laboratory support, integrated care with Men's Health/Preventive Health/Laboratory/Mental Health services, respectful judgement-free environment

## FAQ Items to Add

### Cardiovascular Health FAQ (2 items)
1. Q: "How often should I have a heart health check?" — A: "We recommend a baseline cardiovascular assessment from age 40, or earlier if you have risk factors such as high blood pressure, diabetes, obesity, smoking, or a family history of heart disease. Your clinician will advise on the appropriate follow-up interval based on your individual risk profile."
2. Q: "What lifestyle changes can improve my heart health?" — A: "A heart-healthy lifestyle includes a balanced diet low in saturated fats and salt, regular physical activity (at least 150 minutes per week), maintaining a healthy weight, avoiding tobacco, limiting alcohol intake, and managing stress effectively. Our clinicians can help you create a personalised plan."

### Mental Health FAQ (1-2 items)
1. Q: "How do I know if I need mental health support?" — A: "If you have been experiencing persistent feelings of sadness, anxiety, irritability, or hopelessness for more than two weeks, or if stress, sleep problems, or substance use are affecting your daily life, we encourage you to book a confidential consultation. Seeking help early can prevent more serious difficulties."

### Sexual Health FAQ (1-2 items)
1. Q: "Is a sexual health check confidential?" — A: "Yes, absolutely. All sexual health consultations and test results are strictly confidential and will not be shared without your explicit consent, except where required by law."

## Testing
After making all changes, run the dev server to verify:
```bash
npm run dev
```
