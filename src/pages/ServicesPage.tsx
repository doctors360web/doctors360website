import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  HeartPulse,
  UserRound,
  Scale,
  Footprints,
  Syringe,
  Smile,
  CalendarCheck,
  ArrowRight,
  ChevronDown,
  Shield,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

import ScrollReveal from '../components/ScrollReveal';
import SEOHead from '../components/SEOHead';
import Contact from '../sections/Contact';

// Interactive FAQ component
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
  const [menTab, setMenTab] = useState<'trt' | 'smc'>('trt');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleBookService = (service: string) => {
    setSelectedServices([service]);
    // Small timeout to allow state sync before scrolling
    setTimeout(() => {
      const element = document.getElementById('appointment-contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Handle smooth scroll to target hash anchor
  useEffect(() => {
    if (hash) {
      // Small timeout to allow render completion
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
        title="Comprehensive Medical Services — Women's & Men's Health, Podiatry, IV Therapy, Weight Management & Dental"
        description="Explore Doctors360's medical services. We offer personalized Women's Health, Men's Health (including TRT and Safe Male Circumcision), Weight Management, Podiatry, Dental Care, and Wellness IV Therapy."
        path="/services"
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

            {/* 1. WOMEN'S HEALTH */}
            <div id="womens-health" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 mx-auto lg:self-center">
                      <HeartPulse className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500">Women's Health Clinic</h2>
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

            {/* 2. MEN'S HEALTH */}
            <div id="mens-health" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 mx-auto lg:self-center">
                      <UserRound className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500">Men's Health Clinic</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Men face distinct physiological requirements and wellness issues. Doctors360 provides confidential, specialized medical assessment and treatment. Click below to view details on our specialized therapies and minor surgeries.
                    </p>

                    {/* Sub-tabs for Men's Health */}
                    <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl w-full max-w-sm">
                      <button
                        onClick={() => setMenTab('trt')}
                        className={`flex-1 text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${menTab === 'trt' ? 'bg-primary-500 text-white shadow-sm' : 'text-slate-600 hover:text-primary-500'}`}
                      >
                        Hormone Therapy (TRT)
                      </button>
                      <button
                        onClick={() => setMenTab('smc')}
                        className={`flex-1 text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${menTab === 'smc' ? 'bg-primary-500 text-white shadow-sm' : 'text-slate-600 hover:text-primary-500'}`}
                      >
                        Circumcision (SMC)
                      </button>
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
                    ) : (
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
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 3. WEIGHT MANAGEMENT */}
            <div id="weight-management" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mx-auto lg:self-center">
                      <Scale className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500">Weight Management Clinic</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Obesity is a complex, chronic medical condition influenced by genetics, metabolic rate, hormones, environment, and sleep quality. If you have struggled to achieve sustainable weight loss, our evidence-based, medically supervised programs are designed to assist you.
                    </p>
                    <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-amber-800 mb-2">Medically Supervised Care</h4>
                      <p className="text-sm text-amber-900/80 leading-relaxed">
                        We avoid crash diets. Our emphasis is on long-term lifestyle changes combined with clinical monitoring and medical therapies (such as GLP-1 weight-loss medications like Ozempic) for qualifying patients.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Comprehensive Assessments</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Clinical consultation, BMI and body measurements, blood pressure checks, review of sleep patterns and stress factors, and blood panels screening for thyroid or insulin resistance.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Lifestyle & Diet Coaching</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Personalized nutritional coaching, physical activity programming aligned with your fitness level, behavior adjustments, and support for emotional eating triggers.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Therapeutic Medical Aids</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Evaluations and prescriptions for clinically approved weight loss medications (e.g., GLP-1 receptor agonists) under strict medical oversight to help regulate appetite.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Metabolic Risk Management</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Active treatment and monitoring of conditions aggravated by excess weight, including type 2 diabetes, high blood pressure, sleep apnea, PCOS, and joint pains.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Weight Management")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book Weight Management Consultation
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
                      question="What makes the Doctors360 program different from commercial diets?"
                      answer="Commercial programs often promise rapid 'quick fixes' which are rarely sustainable and can cause muscle loss. Our clinic evaluates the underlying hormonal and medical reasons why you might struggle to lose weight, providing structured medical supervision and lifestyle coaching for long-term health."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 4. PODIATRY */}
            <div id="podiatry" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-100 text-teal-deep mx-auto lg:self-center">
                      <Footprints className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500">Podiatry (Foot & Ankle Care)</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Your feet carry you through life, yet they are often overlooked until pain or injury limits your mobility. Our specialized Podiatry Services provide professional clinical assessment, treatments, and preventative foot education.
                    </p>
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 text-teal-950">
                      <h4 className="font-semibold text-teal-800 mb-2">Diabetic Foot Screenings</h4>
                      <p className="text-xs leading-relaxed text-teal-900/90">
                        Patients living with diabetes have an elevated risk of nerve damage and circulation issues in their lower limbs. Regular podiatry screening is essential to identify early warning signs, manage calluses, and prevent diabetic ulcers or infections.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Nail Surgery & Care</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Safe, sterile clinic-based treatment and minor surgeries for painful ingrown toenails under local anesthetic, as well as management of thick, dystrophic, or fungal nails.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Skin Condition Treatments</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Pain-free removal and treatment of corns, deep calluses, plantar warts (verrucas), athlete's foot (tinea pedis), and cracked heels.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Foot Pain & Injury Assessment</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Diagnostic assessment of persistent heel pain (plantar fasciitis), arch discomfort, tendonitis, sports-related foot strain, and biomechanical issues.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-primary-500 mb-3">Wound Care & Dressing</h3>
                      <p className="text-sm text-slate-brand leading-relaxed">
                        Clinical management and sterile dressing of slow-healing foot wounds, pressure points, and lower limb ulcerations.
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
                      question="What is diabetic foot care and why is it important?"
                      answer="High blood sugar can cause nerve damage (neuropathy) and reduced blood flow, meaning a minor scratch or blister can quietly develop into a deep, slow-healing wound (ulcer). A podiatrist performs sensation testing, blood flow screening, and provides specialized nail trimming and callus care to prevent serious infections."
                    />
                    <FAQItem
                      question="When should I see a doctor about an ingrown toenail?"
                      answer="You should see a clinician if the toe becomes swollen, red, hot, leaks pus, or is too painful to allow normal walking. Self-treating by digging at the nail can introduce bacteria and lead to severe infections, particularly for individuals with poor circulation or diabetes."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 5. WELLNESS IV THERAPY */}
            <div id="iv-therapy" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-seafoam-100 text-teal-deep mx-auto lg:self-center">
                      <Syringe className="w-7 h-7 rotate-45" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500">Wellness IV Therapy</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Wellness IV Therapy delivers rehydration fluids, key electrolytes, and essential vitamins directly into the bloodstream to promote energy and restore fluid balance. Every drip is prescribed and monitored by qualified healthcare professionals.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-950">
                      <h4 className="font-semibold text-amber-800 mb-1 flex items-center gap-1.5 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" /> Safety First Policy
                      </h4>
                      <p className="text-xs leading-relaxed text-amber-900/90">
                        IV infusions are medical procedures. A medical consultation, vital signs review, allergy check, and screening of kidney/heart function history are required before any infusion. Wellness infusions are intended to support hydration and are not a substitute for medical treatments.
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
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
                </div>

                <div className="text-center mt-8">
                  <button onClick={() => handleBookService("Wellness IV Therapy")} className="btn-primary">
                    <CalendarCheck className="w-4 h-4" /> Book IV Therapy Consultation
                  </button>
                </div>

                <div className="mt-10 max-w-4xl">
                  <h3 className="font-semibold text-primary-500 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-1">
                    <FAQItem
                      question="Is Wellness IV Therapy safe?"
                      answer="Yes, when performed under proper clinical criteria. Our clinic implements strict pre-infusion checks. Patients with severe heart failure, kidney disease, or uncontrolled high blood pressure do not qualify for IV infusions due to the risk of fluid overload."
                    />
                    <FAQItem
                      question="How long does an IV infusion session take?"
                      answer="A standard hydration infusion session takes between 45 to 60 minutes. You will be seated comfortably in our wellness clinic while a clinical nurse monitors your flow rate and vital signs."
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <hr className="border-slate-100" />

            {/* 6. DENTAL */}
            <div id="dental" className="scroll-mt-28">
              <ScrollReveal animation="fade-up">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mx-auto lg:self-center">
                      <Smile className="w-7 h-7" />
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-500">Dental Services</h2>
                    <p className="text-base text-slate-brand leading-relaxed">
                      Maintaining good oral health is a vital component of your overall physical wellbeing. Doctors360 Dental Clinic provides professional, family-friendly dentistry covering prevention, pain management, restoration, and education.
                    </p>
                    <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-5">
                      <h4 className="font-semibold text-amber-800 mb-2">Routine Dental Checks</h4>
                      <p className="text-sm text-amber-900/80 leading-relaxed">
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

      {/* Fully functional Appointment Booking Contact Form */}
      <section id="appointment-contact" className="scroll-mt-20 border-t border-slate-100">
        <Contact initialServices={selectedServices} />
      </section>
    </div>
  );
}
