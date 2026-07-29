import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Shield,
  UserRound,
  HeartPulse,
  Baby,
  HeartHandshake,
  Stethoscope,
  FlaskConical,
  Pill,
  Smile,
  Footprints,
  CalendarCheck,
  ArrowRight,
  ChevronDown,
  Scale,
  Syringe,
  AlertCircle,
  CheckCircle2,
  Heart,
  Brain,
} from 'lucide-react';

import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import Contact from '../sections/Contact';

function SickleCellSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-100 text-red-600">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </span>
          <div>
            <h3 className="font-semibold text-primary-500">Sickle Cell Disease Management</h3>
            <p className="text-sm text-slate-500">Comprehensive care for children and adults living with sickle cell disease</p>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-teal-deep' : ''}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className="px-6 pb-6 space-y-6">
          <p className="text-sm text-slate-brand leading-relaxed">
            We provide comprehensive care for children and adults living with sickle cell disease through early diagnosis, routine follow-up, prevention, treatment, and patient education. Our multidisciplinary approach aims to improve quality of life, reduce complications, and support patients and their families with evidence-based care.
          </p>

          <div>
            <h4 className="font-semibold text-primary-500 mb-3">Our Services Include</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'Screening and diagnosis',
                'Comprehensive clinical assessment and routine follow-up',
                'Pain crisis management',
                'Infection prevention and treatment',
                'Blood transfusion support (where clinically indicated)',
                'Hydroxyurea therapy and monitoring',
                'Laboratory investigations and monitoring',
                'Nutrition and lifestyle counselling',
                'Genetic counselling and family education',
                'Referral to specialised care when required',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-brand">
                  <span className="text-teal-deep mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-5">
            <h4 className="font-semibold text-red-800 mb-1 text-sm">Our Commitment</h4>
            <p className="text-sm text-red-900/80 leading-relaxed">
              Doctors360 is committed to improving the lives of people living with sickle cell disease through accessible, patient-centred healthcare, early intervention, continuous follow-up, community education, and strong partnerships that promote better health outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-medium text-primary-500 hover:text-teal-deep transition-colors focus:outline-none"
      >
        <span className="text-base md:text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-deep' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
        <p className="text-sm md:text-base text-slate-brand leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { hash } = useLocation();
  const [menTab, setMenTab] = useState<'trt' | 'smc' | 'cardiovascular' | 'mental' | 'sexual'>('trt');
  const [conciergeTab, setConciergeTab] = useState<'screening' | 'weight' | 'iv' | 'metabolic'>('screening');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleBookService = (service: string) => {
    setSelectedServices([service]);
    setTimeout(() => {
      const element = document.getElementById('appointment-contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Comprehensive Medical Services — Concierge & Preventive Medicine, Men's & Women's Health, Children's Health, Sexual Health, Podiatry, Lab, Pharmacy & Dental"
        description="Explore Doctors360's full range of medical services. We offer Concierge & Preventive Medicine, Men's Health (TRT, SMC, cardiovascular, mental health, sexual health), Women's Health, Children's Health, Sexual Health, General Medical Services, Podiatry, Laboratory, Pharmacy, and Dental Care."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Doctors360 Medical Services",
          "description": "Full range of medical services including Concierge & Preventive Medicine, Men's Health, Women's Health, Children's Health, Sexual Health, General Medical Services, Podiatry, Laboratory, Pharmacy, and Dental Care.",
          "url": "https://www.doctors360.org/services",
          "isPartOf": { "@id": "https://www.doctors360.org/#website" },
          "about": {
            "@type": "Thing",
            "name": "Medical Services"
          }
        }}
      />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-primary-500 via-teal-deep to-primary-700 relative overflow-hidden noise-overlay">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-seafoam-300/10 rounded-full blur-3xl " />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-seafoam-300/5 rounded-full blur-3xl " />
        <div className="container-x relative text-center">
          <ScrollReveal animation="fade-up">
            <span className="section-eyebrow text-seafoam-300">Doctors360 Medical Center</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
              Comprehensive medical services<br />
              <span className="gradient-text-seafoam">centered around you</span>
            </h1>
            <p className="mt-6 text-seafoam-100 text-lg max-w-2xl mx-auto leading-relaxed">
              We provide professional, evidence-based physical and digital health services in Juba, South Sudan, and Kigogwa, Uganda, to support you through every stage of your health journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Services Container */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container-x">
          <div className="space-y-24 md:space-y-32">

            {/* 1. CONCIERGE & PREVENTIVE MEDICINE */}
            <div id="concierge-preventive" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-100 text-teal-deep mx-auto lg:self-center">
                      <Shield className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Concierge & Preventive Medicine</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Our Concierge and Preventive Medicine program is designed for patients who value proactive health management. We combine comprehensive wellness assessments, preventive screenings, and personalised care plans to help you stay ahead of illness. This service includes our medically supervised Weight Management and Wellness IV Therapy programmes.
                    </p>

                    {/* Sub-tabs */}
                    <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl w-full flex-wrap">
                      {(['screening', 'weight', 'iv', 'metabolic'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setConciergeTab(tab)}
                          className={`flex-1 text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                            conciergeTab === tab
                              ? 'bg-teal-deep text-white shadow-sm'
                              : 'text-slate-600 hover:text-teal-deep'
                          }`}
                        >
                          {tab === 'screening' ? 'Screenings' : tab === 'weight' ? 'Weight Mgmt' : tab === 'iv' ? 'IV Therapy' : 'Metabolic'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    {conciergeTab === 'screening' && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                          <h3 className="font-semibold text-primary-500 mb-3">Annual Wellness Exams</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Comprehensive yearly physical examinations including vital signs, blood work, urinalysis, and lifestyle assessment to establish a baseline and detect early changes.
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                          <h3 className="font-semibold text-primary-500 mb-3">Cardiovascular Screening</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Blood pressure monitoring, cholesterol panels, ECG, and risk stratification for heart disease and stroke.
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                          <h3 className="font-semibold text-primary-500 mb-3">Diabetes & Metabolic Screening</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Fasting blood glucose, HbA1c, and insulin resistance markers for early detection of prediabetes and type 2 diabetes.
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                          <h3 className="font-semibold text-primary-500 mb-3">Cancer Risk Assessments</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Age-appropriate cancer screenings including breast exams, cervical cancer screening, prostate evaluation, and colorectal risk assessment.
                          </p>
                        </div>
                      </div>
                    )}

                    {conciergeTab === 'weight' && (
                      <div className="space-y-6">
                        <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5">
                          <h4 className="font-semibold text-amber-800 mb-2">Medically Supervised Care</h4>
                          <p className="text-sm text-amber-900/80 leading-relaxed">
                            We avoid crash diets. Our emphasis is on long-term lifestyle changes combined with clinical monitoring and medical therapies (such as GLP-1 weight-loss medications like Ozempic) for qualifying patients.
                          </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-semibold text-primary-500 mb-3">Comprehensive Assessments</h3>
                            <p className="text-sm text-slate-brand leading-relaxed">
                              Clinical consultation, BMI and body measurements, blood pressure checks, review of sleep patterns and stress factors, and blood panels screening for thyroid or insulin resistance.
                            </p>
                          </div>
                          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-semibold text-primary-500 mb-3">Lifestyle & Diet Coaching</h3>
                            <p className="text-sm text-slate-brand leading-relaxed">
                              Personalized nutritional coaching, physical activity programming aligned with your fitness level, behavior adjustments, and support for emotional eating triggers.
                            </p>
                          </div>
                          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-semibold text-primary-500 mb-3">Therapeutic Medical Aids</h3>
                            <p className="text-sm text-slate-brand leading-relaxed">
                              Evaluations and prescriptions for clinically approved weight loss medications (e.g., GLP-1 receptor agonists) under strict medical oversight to help regulate appetite.
                            </p>
                          </div>
                          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-semibold text-primary-500 mb-3">Metabolic Risk Management</h3>
                            <p className="text-sm text-slate-brand leading-relaxed">
                              Active treatment and monitoring of conditions aggravated by excess weight, including type 2 diabetes, high blood pressure, sleep apnea, PCOS, and joint pains.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {conciergeTab === 'iv' && (
                      <div className="space-y-6">
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-950">
                          <h4 className="font-semibold text-amber-800 mb-1 flex items-center gap-1.5 text-sm">
                            <AlertCircle className="w-4 h-4 flex-shrink-0" /> Safety First Policy
                          </h4>
                          <p className="text-xs leading-relaxed text-amber-900/90">
                            IV infusions are medical procedures. A medical consultation, vital signs review, allergy check, and screening of kidney/heart function history are required before any infusion. Wellness infusions are intended to support hydration and are not a substitute for medical treatments.
                          </p>
                        </div>

                        <h3 className="text-xl font-semibold text-primary-500">Our Wellness IV Packages</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <h4 className="font-semibold text-primary-500 text-sm">Essential Hydration</h4>
                            <p className="text-xs text-slate-brand mt-1">
                              A targeted isotonic saline or Ringer's solution infusion designed to quickly restore fluid and electrolyte balance in the body.
                            </p>
                          </div>
                          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <h4 className="font-semibold text-primary-500 text-sm">Recovery IV</h4>
                            <p className="text-xs text-slate-brand mt-1">
                              Rehydration and mineral replacement following minor illness, stomach bug fluid loss, strenuous athletic events, or jetlag.
                            </p>
                          </div>
                          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <h4 className="font-semibold text-primary-500 text-sm">Executive Wellness</h4>
                            <p className="text-xs text-slate-brand mt-1">
                              Hydration therapy containing selected B-complex vitamins, vitamin C, and micronutrients to support fatigue recovery in busy professionals.
                            </p>
                          </div>
                          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                            <h4 className="font-semibold text-primary-500 text-sm">Customized Wellness Infusion</h4>
                            <p className="text-xs text-slate-brand mt-1">
                              A bespoke hydration and nutritional formula prescribed by our clinician based on your health history and metabolic requirements.
                            </p>
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                          <h4 className="font-semibold text-primary-500 text-sm mb-2">Who May Benefit?</h4>
                          <ul className="text-xs text-slate-brand grid sm:grid-cols-2 gap-2">
                            <li>• Adults dehydrated from travel or heat</li>
                            <li>• Rehydration after diarrhoea or vomiting</li>
                            <li>• Fatigue recovery after extreme physical exertion</li>
                            <li>• Mild dehydration with hangover symptoms</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {conciergeTab === 'metabolic' && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                          <h3 className="font-semibold text-primary-500 mb-3">Diabetes Management</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Comprehensive monitoring and treatment for type 2 diabetes including blood glucose tracking, medication management, dietary guidance, and complication screening.
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                          <h3 className="font-semibold text-primary-500 mb-3">Hypertension Care</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Ongoing blood pressure monitoring, lifestyle modification support, and medication management to reduce cardiovascular risk.
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                          <h3 className="font-semibold text-primary-500 mb-3">Sleep Apnoea Screening</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Assessment for obstructive sleep apnoea and referral for sleep studies, with management options including lifestyle changes and CPAP therapy.
                          </p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                          <h3 className="font-semibold text-primary-500 mb-3">PCOS & Hormonal Health</h3>
                          <p className="text-sm text-slate-brand leading-relaxed">
                            Diagnosis and management of polycystic ovary syndrome and other hormonal imbalances that affect weight, fertility, and overall metabolic health.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Concierge & Preventive Medicine")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Concierge & Preventive Medicine Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="Who qualifies for prescription weight-loss medications?"
                      answer="Prescription weight loss support is typically indicated for adults with a BMI of 30 or higher, or a BMI of 27 or higher in the presence of weight-related health conditions (like high blood pressure or type 2 diabetes), after a complete metabolic medical evaluation."
                    />
                    <FAQItem
                      question="Is Wellness IV Therapy safe?"
                      answer="Yes, when performed under proper clinical criteria. Our clinic implements strict pre-infusion checks. Patients with severe heart failure, kidney disease, or uncontrolled high blood pressure do not qualify for IV infusions due to the risk of fluid overload."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 2. MEN'S HEALTH */}
            <div id="mens-health" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 mx-auto lg:self-center">
                      <UserRound className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Men's Health Clinic</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Men face distinct physiological requirements and wellness issues. Doctors360 provides confidential, specialized medical assessment and treatment including Testosterone Replacement Therapy, safe male circumcision, and general wellness monitoring.
                    </p>

                    <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 rounded-xl w-full">
                      {([
                        { key: 'trt' as const, label: 'TRT' },
                        { key: 'smc' as const, label: 'SMC' },
                        { key: 'cardiovascular' as const, label: 'Cardiovascular' },
                        { key: 'mental' as const, label: 'Mental Health' },
                        { key: 'sexual' as const, label: 'Sexual Health' },
                      ]).map(({ key, label }) => (
                        <button
                          key={key}
                          onClick={() => setMenTab(key)}
                          className={`flex-1 text-center py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                            menTab === key
                              ? 'bg-primary-500 text-white shadow-sm'
                              : 'text-slate-600 hover:text-primary-500'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-slate-50/50 border border-slate-100 rounded-3xl p-6 md:p-8">
                    {menTab === 'trt' ? (
                      <div className="space-y-6 animate-scale-in">
                        <div>
                          <span className="text-xs font-bold text-teal-deep uppercase tracking-widest block mb-1">Specialized Program</span>
                          <h3 className="text-2xl font-bold text-primary-500">Testosterone Replacement Therapy (TRT)</h3>
                        </div>
                        <p className="text-sm md:text-base text-slate-brand leading-relaxed">
                          Many men experience a gradual decline in energy, physical strength, motivation, and sexual function as they age. When testosterone deficiency is clinically confirmed through blood work, medically supervised TRT helps restore levels to the physiological range.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Common Symptoms Evaluated</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Chronic, unexplained fatigue</li>
                              <li>• Reduced muscle mass & increased body fat</li>
                              <li>• Loss of libido (sex drive)</li>
                              <li>• Changes in mood & concentration</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Clinical Diagnostics Included</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Full medical history & exam</li>
                              <li>• Early morning blood testosterone tests</li>
                              <li>• Pituitary check (LH, FSH, Prolactin)</li>
                              <li>• Full blood count & liver/kidney screening</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3 text-amber-900">
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="text-xs leading-relaxed">
                            <strong>Medical Monitoring & Fertility:</strong> TRT is an active medical intervention. It can suppress sperm production. If you are planning to have children in the future, please notify your clinician during your consult. Routine follow-ups, blood count tests, and blood pressure checks are required during therapy.
                          </div>
                        </div>
                      </div>
                    ) : menTab === 'smc' ? (
                      <div className="space-y-6 animate-scale-in">
                        <div>
                          <span className="text-xs font-bold text-teal-deep uppercase tracking-widest block mb-1">Minor Surgical Service</span>
                          <h3 className="text-2xl font-bold text-primary-500">Safe Male Circumcision (SMC)</h3>
                        </div>
                        <p className="text-sm md:text-base text-slate-brand leading-relaxed">
                          Doctors360 provides professional, safe, and confidential circumcision services for infants, children, adolescents, and adults. All procedures are performed by trained medical personnel in sterile, fully equipped environments.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Why Patients Choose SMC</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Recurrent foreskin infections (balanitis)</li>
                              <li>• Phimosis (difficulty retracting foreskin)</li>
                              <li>• Chronic inflammation or hygiene requirements</li>
                              <li>• Cultural, religious, or personal preference</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">The Care Pathway</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Pre-op health assessment & counseling</li>
                              <li>• Sterile surgical procedure</li>
                              <li>• Effective local anesthesia/pain relief</li>
                              <li>• Detailed instructions & post-op checkups</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex gap-3 text-teal-900">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <p className="text-xs leading-relaxed">
                            <strong>Note on Sexual Health:</strong> In addition to hygiene, circumcision is shown to reduce the risk of certain STIs in specific populations. However, it does not offer complete protection; safe sex practices like condom use remain necessary.
                          </p>
                        </div>
                      </div>
                    ) : menTab === 'cardiovascular' ? (
                      <div className="space-y-6 animate-scale-in">
                        <div>
                          <span className="text-xs font-bold text-teal-deep uppercase tracking-widest block mb-1">Protect Your Heart. Protect Your Future.</span>
                          <h3 className="text-2xl font-bold text-primary-500">Cardiovascular Health Clinic</h3>
                        </div>
                        <p className="text-sm md:text-base text-slate-brand leading-relaxed">
                          Your heart works around the clock to keep you healthy. At Doctors360, our Cardiovascular Health Clinic is dedicated to helping you prevent, detect, and manage heart disease before it becomes life-threatening. Whether you have risk factors such as high blood pressure, diabetes, obesity, smoking, excessive alcohol use, or a family history of heart disease, our team provides personalised care to keep your heart healthy for years to come.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Comprehensive Heart Health Assessment</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Blood pressure measurement</li>
                              <li>• Heart rate assessment</li>
                              <li>• BMI & waist circumference measurement</li>
                              <li>• Cardiovascular risk & family history review</li>
                              <li>• Lifestyle and nutrition assessment</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Hypertension Management</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Early diagnosis and medication management</li>
                              <li>• Regular blood pressure monitoring</li>
                              <li>• Lifestyle counselling</li>
                              <li>• Home blood pressure monitoring guidance</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Cholesterol & Lipid Management</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Lipid profile testing and risk assessment</li>
                              <li>• Dietary counselling</li>
                              <li>• Medication management</li>
                              <li>• Regular follow-up monitoring</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Diabetes & Heart Disease Prevention</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Blood sugar and diabetes risk assessment</li>
                              <li>• Weight management and nutrition planning</li>
                              <li>• Prevention of diabetes-related heart complications</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Heart Disease Screening</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Electrocardiogram (ECG)</li>
                              <li>• Blood pressure monitoring and blood tests</li>
                              <li>• Cardiovascular risk scoring</li>
                              <li>• Referral for specialised cardiac investigations</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Weight Management for Heart Health</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Medical weight-loss consultations</li>
                              <li>• Personalised nutrition and exercise planning</li>
                              <li>• Lifestyle coaching and progress monitoring</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Smoking & Tobacco Cessation</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Smoking cessation counselling and behavioural support</li>
                              <li>• Nicotine replacement therapy guidance</li>
                              <li>• Relapse prevention and long-term follow-up</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Alcohol Reduction & Cessation</h4>
                            <ul className="text-xs text-slate-brand space-y-1.5">
                              <li>• Comprehensive alcohol use assessment</li>
                              <li>• Personalised reduction or cessation plans</li>
                              <li>• Counselling, nutritional guidance and follow-up</li>
                              <li>• Referral for specialised addiction care when needed</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                          <h4 className="font-semibold text-red-800 text-sm mb-1">Who Should Consider a Heart Health Check?</h4>
                          <p className="text-xs text-red-900/80 leading-relaxed">
                            Adults over 40 years, people with high blood pressure or diabetes, individuals who are overweight or obese, smokers or tobacco users, people who drink alcohol regularly or excessively, anyone with a family history of heart disease, people experiencing chest pain, shortness of breath, or palpitations, and anyone wanting to take a proactive approach to their health.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex gap-3 text-teal-900">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="text-xs leading-relaxed">
                            <strong>Why Choose Doctors360?</strong> Comprehensive cardiovascular risk assessment, evidence-based prevention and treatment, personalised lifestyle and wellness plans, confidential and compassionate care, integrated services with Preventive Health, Laboratory, Weight Management and Wellness Clinics.
                          </div>
                        </div>
                      </div>
                    ) : menTab === 'mental' ? (
                      <div className="space-y-6 animate-scale-in">
                        <div>
                          <span className="text-xs font-bold text-teal-deep uppercase tracking-widest block mb-1">Strong Minds. Healthier Lives.</span>
                          <h3 className="text-2xl font-bold text-primary-500">Men's Mental Health</h3>
                        </div>
                        <p className="text-sm md:text-base text-slate-brand leading-relaxed">
                          Mental health is an essential part of overall wellbeing, yet many men delay seeking help due to stigma or the belief that they should cope alone. At Doctors360, we provide confidential, compassionate, and evidence-based mental health services designed specifically for men. Whether you are experiencing stress, anxiety, depression, burnout, relationship challenges, or substance use concerns, our team is here to support you.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Stress Management</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Learn practical strategies to manage work, family, financial, and daily life pressures.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Anxiety Assessment & Treatment</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Professional assessment, counselling, and treatment plans for anxiety disorders.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Depression Screening & Care</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Early identification and personalised management for depression.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Burnout Recovery</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Support for professionals, business owners, and caregivers experiencing emotional exhaustion.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Sleep Health</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Assessment and treatment of insomnia and other sleep-related concerns.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Alcohol & Substance Use Support</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Confidential support to reduce or stop alcohol and tobacco use, including counselling, relapse prevention, and referral for specialised care.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Relationship & Family Counselling</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Support for communication, parenting, marriage, and family challenges.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Grief & Loss Counselling</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Compassionate care following bereavement or major life changes.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Workplace Mental Health</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Support for work-related stress, conflict, and career transitions.
                            </p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
                          <h4 className="font-semibold text-purple-800 text-sm mb-1">Who Can Benefit?</h4>
                          <p className="text-xs text-purple-900/80 leading-relaxed">
                            Men experiencing persistent stress, sadness, or anxiety. Those struggling with alcohol or substance use. Men facing relationship or family difficulties. Individuals with sleep problems or burnout. Anyone wanting to improve emotional wellbeing and resilience.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex gap-3 text-teal-900">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="text-xs leading-relaxed">
                            <strong>Why Choose Doctors360?</strong> Confidential and respectful care. Evidence-based assessment and treatment. Integrated support with preventive health and wellness services. Personalised care plans and follow-up. A safe, judgement-free environment.
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 animate-scale-in">
                        <div>
                          <span className="text-xs font-bold text-teal-deep uppercase tracking-widest block mb-1">Confidential Care for Every Stage of Life</span>
                          <h3 className="text-2xl font-bold text-primary-500">Men's Sexual Health</h3>
                        </div>
                        <p className="text-sm md:text-base text-slate-brand leading-relaxed">
                          Sexual health is an important part of a man's physical, emotional, and reproductive wellbeing. At Doctors360, we provide confidential, respectful, and evidence-based sexual health services to help men prevent, diagnose, and treat sexual health concerns. Whether you are experiencing changes in sexual performance, have concerns about sexually transmitted infections, or simply want a routine sexual health check, our experienced clinicians are here to help.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">ED Assessment & Treatment</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Comprehensive evaluation and personalised treatment to restore confidence and sexual function.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Premature Ejaculation Management</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Medical assessment, counselling, and treatment options tailored to your needs.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Low Libido Evaluation</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Assessment of hormonal, medical, and lifestyle factors contributing to reduced sexual desire.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">STI Screening & Treatment</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Confidential testing and treatment for common sexually transmitted infections.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">HIV Testing, Prevention & Care</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Rapid HIV testing, counselling, and access to prevention services including PrEP and PEP where appropriate.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Male Fertility Assessment</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Evaluation for men experiencing difficulty conceiving, including referral for semen analysis and specialist care.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Testosterone Deficiency Assessment</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Clinical assessment and laboratory testing for men with symptoms of low testosterone.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Safe Male Circumcision</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Professional circumcision services using approved techniques with comprehensive follow-up care.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Sexual Health Counselling</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Support for sexual wellbeing, relationship concerns, performance anxiety, and healthy sexual practices.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl border border-slate-200/50">
                            <h4 className="font-semibold text-primary-500 text-sm mb-1.5">Routine Sexual Health Check-ups</h4>
                            <p className="text-xs text-slate-brand leading-relaxed">
                              Regular screening and preventive care to maintain lifelong sexual health.
                            </p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-pink-50 border border-pink-200">
                          <h4 className="font-semibold text-pink-800 text-sm mb-1">Who Should Consider a Sexual Health Check?</h4>
                          <p className="text-xs text-pink-900/80 leading-relaxed">
                            Men with concerns about sexual performance or libido. Anyone with symptoms of a sexually transmitted infection. Men starting a new sexual relationship. Men planning to start a family. Anyone seeking confidential sexual health advice. Men interested in preventive sexual health screening.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex gap-3 text-teal-900">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="text-xs leading-relaxed">
                            <strong>Why Choose Doctors360?</strong> Confidential and discreet consultations. Evidence-based diagnosis and treatment. Experienced healthcare professionals. Modern laboratory support. Integrated care with Men's Health, Preventive Health, Laboratory and Mental Health services. Respectful, judgement-free environment.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Men's Health")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Men's Health Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="What is the difference between TRT and anabolic steroids?"
                      answer="TRT is a medically supervised treatment aimed at restoring testosterone levels to a normal, healthy physiological range in men with confirmed clinical deficiency. Anabolic steroids are typically self-administered, often at highly elevated supraphysiological doses for performance or cosmetic purposes, which carries significant health risks."
                    />
                    <FAQItem
                      question="What is the recovery period after an adult circumcision?"
                      answer="For adults, full recovery typically takes between 4 to 6 weeks. Light activities can be resumed in a few days, but heavy lifting and sexual activity must be avoided for the full recovery period to allow complete wound healing. Detailed care instructions are provided immediately after the procedure."
                    />
                    <FAQItem
                      question="How often should I have a heart health check?"
                      answer="We recommend a baseline cardiovascular assessment from age 40, or earlier if you have risk factors such as high blood pressure, diabetes, obesity, smoking, or a family history of heart disease. Your clinician will advise on the appropriate follow-up interval based on your individual risk profile."
                    />
                    <FAQItem
                      question="How do I know if I need mental health support?"
                      answer="If you have been experiencing persistent feelings of sadness, anxiety, irritability, or hopelessness for more than two weeks, or if stress, sleep problems, or substance use are affecting your daily life, we encourage you to book a confidential consultation. Seeking help early can prevent more serious difficulties."
                    />
                    <FAQItem
                      question="Is a men's sexual health consultation confidential?"
                      answer="Yes, absolutely. All sexual health consultations and test results are strictly confidential and will not be shared without your explicit consent, except where required by law. Our clinicians provide a respectful, judgement-free environment for all patients."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 3. WOMEN'S HEALTH */}
            <div id="womens-health" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 mx-auto lg:self-center">
                      <HeartPulse className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Women's Health Clinic</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      At Doctors360, our Women's Health Clinic provides comprehensive clinical support, preventative checkups, and educational tools designed to support your wellbeing through every life transition. From contraception to pregnancy care and menopause, we offer sensitive, evidence-based gynecological care.
                    </p>
                    <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-rose-800 mb-2">Our Goal</h4>
                      <p className="text-sm text-rose-900/80 leading-relaxed">
                        To empower women with diagnostic screening, compassionate family planning advice, and personalized treatments that support active, healthy lifestyles.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">General Wellness & Screenings</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Annual wellness checkups, blood pressure & diabetes screening, breast examinations, cervical cancer screening (Pap smear), and lifestyle counseling.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Family Planning & Contraception</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Personalized contraceptive counseling, oral pills, injectables, long-acting implants, intrauterine devices (IUDs), and emergency contraception.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Pregnancy & Prenatal Care</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Early pregnancy testing, comprehensive antenatal (prenatal) counseling, maternal nutrition assessment, birth preparedness, and postnatal follow-up.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Menstrual & Vaginal Health</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Medical support for painful periods (dysmenorrhea), heavy or irregular bleeding, yeast infections (thrush), bacterial vaginosis (BV), and fertility preconception.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2">
                      <h3 className="font-semibold text-primary-500 mb-3">Menopause Clinic</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Evidence-based assessment and management of menopausal symptoms including hot flushes, mood changes, sleep disturbances, hormonal fluctuations, bone density monitoring, and heart health.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Women's Health")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Women's Health Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="When should I go for a cervical cancer screening?"
                      answer="Routine cervical screening (Pap smear) is recommended for women aged 21 to 65. It helps detect early abnormal changes in the cervix. Talk to our healthcare provider to determine the best screening interval based on your history."
                    />
                    <FAQItem
                      question="What family planning options are available at Doctors360?"
                      answer="We provide a full range of methods, including short-term solutions (pills, injections) and long-acting reversible contraceptives (IUDs and subdermal implants). Our clinicians help you assess the options to select what best matches your body and lifestyle."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 4. CHILDREN'S HEALTH */}
            <div id="childrens-health" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mx-auto lg:self-center">
                      <Baby className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Children's Health</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Our paediatric services are designed to support the healthy development of infants, children, and adolescents. From newborn checkups to adolescent health screenings, we provide compassionate, family-centred care in a child-friendly environment.
                    </p>
                    <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-amber-800 mb-2">Safe & Gentle Care</h4>
                      <p className="text-sm text-amber-900/80 leading-relaxed">
                        We understand that children respond best when they feel safe and comfortable. Our team is trained to provide gentle, age-appropriate care that puts both children and parents at ease.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Well-Child Checkups</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Routine growth and development monitoring, vision and hearing screenings, and age-appropriate physical examinations from infancy through adolescence.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Vaccination Programmes</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Childhood immunisation schedules following national guidelines, including routine vaccines, catch-up schedules, and travel vaccines for older children.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Common Illness Management</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Diagnosis and treatment of common childhood conditions including respiratory infections, fevers, ear infections, allergies, and digestive complaints.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Adolescent Health</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Confidential health consultations for teenagers covering nutrition, mental health, growth concerns, and preventive guidance for healthy lifestyle habits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Children's Health")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Children's Health Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="What vaccinations does my child need?"
                      answer="Vaccination schedules vary by age and country. Our paediatric team follows national immunisation guidelines and can advise on routine vaccines, boosters, and any catch-up doses your child may need."
                    />
                    <FAQItem
                      question="When should I bring my child for a checkup?"
                      answer="Well-child visits are recommended at regular intervals: shortly after birth, at 2 weeks, 2 months, 4 months, 6 months, 9 months, 12 months, 18 months, and annually thereafter. These visits track growth, development, and vaccination status."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 5. SEXUAL HEALTH */}
            <div id="sexual-health" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 mx-auto lg:self-center">
                      <HeartHandshake className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Sexual Health</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Doctors360 provides confidential, non-judgmental sexual health services for individuals and couples. Our clinic offers STI screening and treatment, reproductive health counselling, and comprehensive sexual health education in a private and supportive environment.
                    </p>
                    <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-pink-800 mb-2">Confidential & Respectful</h4>
                      <p className="text-sm text-pink-900/80 leading-relaxed">
                        We prioritise your privacy and dignity. All consultations are strictly confidential, and our clinicians are trained to provide culturally sensitive, non-judgmental care.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">STI Screening & Treatment</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Confidential testing and treatment for sexually transmitted infections including HIV, syphilis, gonorrhoea, chlamydia, and hepatitis B. Results are delivered discreetly with counselling.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Reproductive Health Counselling</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Guidance on fertility awareness, preconception health, contraception methods, and family planning options tailored to your individual needs and circumstances.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Sexual Health Education</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Evidence-based education for individuals, couples, and groups covering safe sex practices, consent, healthy relationships, and prevention of STIs and unintended pregnancy.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Counselling & Support</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Private counselling for concerns related to sexual dysfunction, relationship health, post-exposure prophylaxis (PEP), and emotional wellbeing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Sexual Health")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Sexual Health Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="How often should I get tested for STIs?"
                      answer="Testing frequency depends on your sexual activity. In general, sexually active individuals should consider testing at least once a year, or more frequently if you have multiple partners or new partners. Our clinicians can advise on the right schedule for you."
                    />
                    <FAQItem
                      question="Are sexual health services confidential?"
                      answer="Yes, absolutely. All sexual health consultations and test results are strictly confidential and will not be shared without your explicit consent, except where required by law."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 6. GENERAL MEDICAL SERVICES */}
            <div id="general-medical" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 mx-auto lg:self-center">
                      <Stethoscope className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">General Medical Services</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Our General Medical Services provide comprehensive primary care for acute and chronic conditions. From routine consultations and diagnostic evaluations to ongoing management of common medical conditions, our team is here to support your everyday health needs.
                    </p>
                    <div className="bg-slate-50/50 border border-slate-200 rounded-2xl p-5">
                      <h4 className="font-semibold text-slate-700 mb-2">Your Medical Home</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        We believe in continuity of care. Establishing a relationship with a primary care provider ensures your health history is known, your preferences are respected, and your care is coordinated across all services.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Routine Consultations</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Comprehensive medical consultations for the diagnosis and treatment of acute illnesses such as colds, flu, sore throat, urinary tract infections, and minor injuries.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Chronic Disease Management</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Ongoing care and monitoring for chronic conditions including hypertension, diabetes, asthma, thyroid disorders, and arthritis, with regular follow-ups and medication management.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Diagnostic Evaluations</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        On-site and referral-based diagnostic testing including blood work, urinalysis, ECG, and imaging to support accurate diagnosis and treatment planning.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Referral Coordination</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Seamless referrals to specialists within our network or external providers when specialised care is needed, ensuring your treatment journey remains coordinated.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sickle Cell Disease Management */}
                <div className="mt-8">
                  <SickleCellSection />
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("General Medical Services")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book General Medical Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="How do I book a general consultation?"
                      answer="You can book a general consultation by filling out the appointment form on this page or calling our clinic directly. We aim to confirm appointments within 2 hours during business days."
                    />
                    <FAQItem
                      question="Do I need a referral to see a specialist?"
                      answer="Some services may require a referral from a primary care provider. During your general consultation, our clinician will assess your needs and coordinate any necessary referrals to specialists within our network."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 7. PODIATRY */}
            <div id="podiatry" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 mx-auto lg:self-center">
                      <Footprints className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Podiatry</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Doctors360's podiatry service provides specialised care for foot and ankle conditions. From common issues like fungal infections and ingrown nails to complex diabetic foot assessments and minor surgical procedures, our team delivers comprehensive podiatric care to keep you mobile and pain-free.
                    </p>
                    <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-orange-800 mb-2">Expert Foot Care</h4>
                      <p className="text-sm text-orange-900/80 leading-relaxed">
                        Your feet endure significant stress every day. Our podiatry professionals are trained to diagnose and treat a wide range of foot and ankle conditions, helping you maintain an active and healthy lifestyle.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Fungal Nail Treatment</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Effective antifungal therapies for nail infections, including topical and oral medications, to restore healthy nail appearance and prevent recurrence.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Heel Pain &amp; Injury Care</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Comprehensive treatment for plantar fasciitis, Achilles tendonitis, and sports-related foot injuries, including orthotic recommendations and rehabilitation guidance.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Diabetic Foot Assessment</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Specialised foot examinations for diabetic patients, including neuropathy screening, circulation assessment, ulcer prevention, and wound care management.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Minor Procedures</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        In-office minor surgical procedures including wart removal, ingrown toenail correction, callus debridement, and treatment of corns and verrucae.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Podiatry")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Podiatry Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="When should I see a podiatrist for foot pain?"
                      answer="You should consider seeing a podiatrist if you experience persistent foot or ankle pain that lasts more than a few days, have visible changes in the shape or colour of your feet, notice swelling or inflammation that does not improve with rest, or have a chronic condition like diabetes that requires regular foot monitoring."
                    />
                    <FAQItem
                      question="Why are diabetics at higher risk for foot problems?"
                      answer="Diabetes can cause two major complications that affect the feet: peripheral neuropathy (nerve damage that reduces sensation, making it difficult to feel injuries) and peripheral vascular disease (reduced blood flow that impairs healing). These factors mean minor cuts or blisters can quickly become serious infections if not properly managed. Regular diabetic foot assessments are essential for prevention."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 8. LABORATORY */}
            <div id="laboratory" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-700 mx-auto lg:self-center">
                      <FlaskConical className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Laboratory Services</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Our state-of-the-art diagnostic laboratory provides accurate and timely test results to support clinical decision-making and patient care. From routine blood work to specialised diagnostic panels, our lab is equipped to handle a wide range of investigations.
                    </p>
                    <div className="bg-cyan-50/50 border border-cyan-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-cyan-800 mb-2">Quality & Accuracy</h4>
                      <p className="text-sm text-cyan-900/80 leading-relaxed">
                        We adhere to strict quality control standards to ensure every test result is reliable. Our laboratory technicians are trained professionals committed to precision and patient safety.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Haematology</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Complete blood counts, haemoglobin levels, white cell differentials, coagulation profiles, and blood typing for transfusion readiness.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Clinical Chemistry</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Comprehensive metabolic panels, liver and kidney function tests, lipid profiles, blood glucose monitoring, and electrolyte analysis.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Microbiology & Infectious Disease</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Culture and sensitivity testing, malaria rapid diagnostics, tuberculosis screening, STI testing, and other infectious disease markers.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Hormone & Specialised Testing</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Thyroid function tests, reproductive hormone panels (LH, FSH, prolactin, testosterone), vitamin D and B12 levels, and tumour markers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Laboratory")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Laboratory Appointment
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="Do I need a doctor's referral for lab tests?"
                      answer="Most laboratory tests require a request from a licensed healthcare provider. Our clinicians can order the appropriate tests during a consultation based on your symptoms and medical history."
                    />
                    <FAQItem
                      question="How long do lab results take?"
                      answer="Turnaround times vary by test. Routine blood work is typically available within 24 hours, while specialised tests such as cultures or hormone panels may take 2 to 5 days. Our team will inform you of expected timelines when you submit your sample."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 9. PHARMACY */}
            <div id="pharmacy" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-100 text-green-700 mx-auto lg:self-center">
                      <Pill className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Pharmacy</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Our full-service pharmacy offers prescribed medications, over-the-counter products, and professional pharmaceutical care. We prioritise patient safety through accurate dispensing, medication counselling, and careful management of your prescriptions.
                    </p>
                    <div className="bg-green-50/50 border border-green-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-green-800 mb-2">Your Health, Our Priority</h4>
                      <p className="text-sm text-green-900/80 leading-relaxed">
                        Our pharmacists take the time to understand your medication needs, explain proper usage, and check for potential interactions to ensure you receive the safest and most effective care.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Prescription Dispensing</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Accurate and timely dispensing of prescribed medications with thorough verification of dosage, interactions, and patient allergies to ensure safe use.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Medication Counselling</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Personalised guidance on how to take your medications correctly, potential side effects, food and drug interactions, and what to do if you miss a dose.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Over-the-Counter Products</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        A wide range of OTC products including pain relievers, allergy medications, vitamins and supplements, first aid supplies, and personal care items.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Chronic Medication Management</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Ongoing support for patients on long-term medications, including refill reminders, dosage adjustments in coordination with your doctor, and medication reviews.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Pharmacy")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Pharmacy Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="Do I need a prescription to buy medication?"
                      answer="Some medications require a prescription from a licensed healthcare provider. Our pharmacists can advise you on which products are available over the counter and which require a prescription."
                    />
                    <FAQItem
                      question="Can I refill my prescription at your pharmacy?"
                      answer="Yes, we can refill most prescriptions. Please bring your current prescription or medication container, and we will verify the details with your healthcare provider if necessary."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 10. DENTAL */}
            <div id="dental" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 mx-auto lg:self-center">
                      <Smile className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500 text-center lg:self-center">Dental Services</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Maintaining good oral health is a vital component of your overall physical wellbeing. Doctors360 Dental Clinic provides professional, family-friendly dentistry covering prevention, pain management, restoration, and education.
                    </p>
                    <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-purple-800 mb-2">Routine Dental Checks</h4>
                      <p className="text-sm text-purple-900/80 leading-relaxed">
                        We recommend a dental visit twice a year to screen for early signs of decay, clean plaque buildup, and check gum condition to prevent infections.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Preventive Dentistry</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Professional scale and polish cleanings, fluoride therapy, fissure sealants for kids, and tailored oral hygiene education.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Restorative Procedures</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Tooth-colored composite fillings for cavities, temporary dressings, and structural dental restorations.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Extractions & Emergency</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Safe, pain-free simple extractions for damaged or decayed teeth under sterile, local anesthesia, plus relief for acute toothaches.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Periodontal Care</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Assessment and treatments for red, swollen, bleeding gums (gingivitis) and supporting bone health.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Dental Services")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Dental Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="How often should I change my toothbrush?"
                      answer="Dental professionals recommend replacing your toothbrush every 3 to 4 months, or sooner if the bristles become frayed. A worn toothbrush is less effective at removing plaque and can harbor bacteria."
                    />
                    <FAQItem
                      question="What causes sensitive teeth?"
                      answer="Sensitive teeth can result from worn tooth enamel, exposed tooth roots, cavities, gum disease, or cracked teeth. Our dentist can identify the underlying cause and recommend targeted treatments or products to relieve sensitivity."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      <section id="appointment-contact" className="scroll-mt-20 border-t border-slate-100">
        <Contact initialServices={selectedServices} />
      </section>
    </div>
  );
}
