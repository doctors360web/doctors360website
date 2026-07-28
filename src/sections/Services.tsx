import { HeartPulse, UserRound, Scale, Footprints, Syringe, Smile, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: HeartPulse,
    title: "Women's Health",
    text: "Comprehensive healthcare tailored to women's unique needs, including wellness screenings, family planning, pregnancy care, and menopause management.",
    points: ['Family Planning & Contraception', 'Pregnancy & Antenatal Care', 'Menopause Symptom Clinic'],
    accent: 'from-rose-50 to-pink-100/40',
    iconBg: 'bg-rose-100 text-rose-600',
    dot: 'bg-rose-400',
    slug: 'womens-health',
  },
  {
    icon: UserRound,
    title: "Men's Health",
    text: "Dedicated medical services for men, specializing in Testosterone Replacement Therapy (TRT), safe male circumcision, and overall wellness monitoring.",
    points: ['Hormone Replacement (TRT)', 'Safe Male Circumcision (SMC)', 'General Screening & Exams'],
    accent: 'from-blue-50 to-indigo-100/40',
    iconBg: 'bg-blue-100 text-blue-600',
    dot: 'bg-blue-400',
    slug: 'mens-health',
  },
  {
    icon: Scale,
    title: 'Weight Management',
    text: 'Evidence-based weight-loss programmes under medical supervision, focusing on metabolism, lifestyle adjustments, and supportive medications.',
    points: ['Medical Weight Loss Plans', 'Metabolic Assessments', 'GLP-1 Medication Guidance'],
    accent: 'from-amber-50 to-yellow-100/40',
    iconBg: 'bg-amber-100 text-amber-600',
    dot: 'bg-amber-400',
    slug: 'weight-management',
  },
  {
    icon: Footprints,
    title: 'Podiatry',
    text: 'Comprehensive foot and ankle care covering diabetic screenings, minor nail surgeries, chronic pain treatments, and wound care.',
    points: ['Diabetic Foot Screenings', 'Ingrown Toenail Treatments', 'Heel & Foot Pain Relief'],
    accent: 'from-emerald-50 to-teal-100/40',
    iconBg: 'bg-emerald-100 text-emerald-600',
    dot: 'bg-emerald-400',
    slug: 'podiatry',
  },
  {
    icon: Syringe,
    title: 'Wellness IV Therapy',
    text: 'Intravenous hydration and micronutrient replacement therapies designed to aid post-illness dehydration, physical exertion, and jetlag.',
    points: ['Hydration & Nutrient Infusions', 'Recovery & Executive Packages', 'Clinical Vital Signs Check'],
    accent: 'from-seafoam-100 to-teal-light/20',
    iconBg: 'bg-seafoam-100 text-teal-deep',
    dot: 'bg-seafoam-300',
    slug: 'iv-therapy',
  },
  {
    icon: Smile,
    title: 'Dental Services',
    text: 'Professional preventive, restorative, and cosmetic dentistry services to maintain and restore oral health for patients of all ages.',
    points: ['Routine Check-ups & Cleaning', 'Fillings & Extractions', 'Oral Hygiene & Education'],
    accent: 'from-purple-50 to-violet-100/40',
    iconBg: 'bg-purple-100 text-purple-600',
    dot: 'bg-purple-400',
    slug: 'dental',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-seafoam-50/50 to-white relative overflow-hidden" aria-label="Doctors360 Medical Services — Prevention, Diagnostics, Treatment, and Follow-up">
      <div className="absolute top-40 -right-20 w-80 h-80 bg-seafoam-100/40 rounded-full blur-3xl" />

      <div className="container-x relative">
        <ScrollReveal animation="fade-up" className="max-w-2xl mx-auto text-center">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">
            Complete care, <span className="gradient-text">every step</span> of the way
          </h2>
          <p className="mt-4 text-slate-brand text-lg">
            Our multi-disciplinary medical specialties ensure your health journey is covered from every angle.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} animation="fade-up" delay={i * 100}>
              <div className="group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden flex flex-col justify-between">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className={`flex items-center justify-center w-14 h-14 rounded-2xl ${s.iconBg} mb-5 mx-auto group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                      <s.icon className={`w-7 h-7 ${s.title === 'Wellness IV Therapy' ? 'rotate-45' : ''}`} />
                    </span>
                    <h3 className="text-xl font-semibold text-primary-500 text-center">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-brand leading-relaxed text-center sm:text-left">{s.text}</p>
                    <ul className="mt-5 space-y-2.5 flex flex-col items-center sm:items-start">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-primary-500 justify-center sm:justify-start">
                          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center sm:justify-start mt-6">
                    <Link
                      to={`/services#${s.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-teal-deep hover:gap-2 transition-all duration-300"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
