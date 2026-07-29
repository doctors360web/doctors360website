import { Shield, UserRound, HeartPulse, Baby, HeartHandshake, Stethoscope, FlaskConical, Pill, Smile, Footprints, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: Shield,
    title: "Concierge & Preventive Medicine",
    text: "Comprehensive health management including routine check-ups, preventive screenings, weight management programs, and wellness IV therapy tailored to your needs.",
    accent: 'from-teal-50 to-seafoam-100/40',
    iconBg: 'bg-teal-100 text-teal-deep',
    slug: 'concierge-preventive',
  },
  {
    icon: UserRound,
    title: "Men's Health",
    text: "Dedicated medical services for men, specializing in Testosterone Replacement Therapy (TRT), safe male circumcision, and overall wellness monitoring.",
    accent: 'from-blue-50 to-indigo-100/40',
    iconBg: 'bg-blue-100 text-blue-600',
    slug: 'mens-health',
  },
  {
    icon: HeartPulse,
    title: "Women's Health",
    text: "Comprehensive healthcare tailored to women's unique needs, including wellness screenings, family planning, pregnancy care, and menopause management.",
    accent: 'from-rose-50 to-pink-100/40',
    iconBg: 'bg-rose-100 text-rose-600',
    slug: 'womens-health',
  },
  {
    icon: Baby,
    title: "Children's Health",
    text: "Specialised paediatric care for infants, children, and adolescents, including well-child checkups, vaccinations, growth monitoring, and management of common childhood illnesses.",
    accent: 'from-yellow-50 to-amber-100/40',
    iconBg: 'bg-amber-100 text-amber-600',
    slug: 'childrens-health',
  },
  {
    icon: HeartHandshake,
    title: 'Sexual Health',
    text: 'Confidential sexual health services including STI screening and treatment, reproductive health counseling, and education for individuals and couples.',
    accent: 'from-pink-50 to-rose-100/40',
    iconBg: 'bg-pink-100 text-pink-600',
    slug: 'sexual-health',
  },
  {
    icon: Stethoscope,
    title: 'General Medical Services',
    text: 'Comprehensive primary care for acute and chronic conditions, including routine consultations, diagnostic evaluations, and ongoing management of common medical conditions.',
    accent: 'from-slate-50 to-gray-100/40',
    iconBg: 'bg-slate-100 text-slate-700',
    slug: 'general-medical',
  },
  {
    icon: Footprints,
    title: 'Podiatry',
    text: "Doctors360's specialised foot and ankle care including treatment of common conditions like fungal infections, ingrown nails, heel pain, and diabetic foot assessments.",
    accent: 'from-orange-50 to-amber-100/40',
    iconBg: 'bg-orange-100 text-orange-600',
    slug: 'podiatry',
  },
  {
    icon: FlaskConical,
    title: 'Laboratory',
    text: 'State-of-the-art diagnostic laboratory services providing accurate and timely test results to support clinical decision-making and patient care.',
    accent: 'from-cyan-50 to-sky-100/40',
    iconBg: 'bg-cyan-100 text-cyan-700',
    slug: 'laboratory',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    text: 'Full-service pharmacy offering prescribed medications, over-the-counter products, and professional pharmaceutical care with a focus on patient safety and education.',
    accent: 'from-green-50 to-emerald-100/40',
    iconBg: 'bg-green-100 text-green-700',
    slug: 'pharmacy',
  },
  {
    icon: Smile,
    title: 'Dental Services',
    text: 'Professional preventive, restorative, and cosmetic dentistry services to maintain and restore oral health for patients of all ages.',
    accent: 'from-purple-50 to-violet-100/40',
    iconBg: 'bg-purple-100 text-purple-600',
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
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className={`flex items-center justify-center w-14 h-14 rounded-2xl ${s.iconBg} mb-5 mx-auto group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                      <s.icon className="w-7 h-7" />
                    </span>
                    <h3 className="text-xl font-semibold text-primary-500 text-center">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-brand leading-relaxed text-center">{s.text}</p>
                  </div>
                  <div className="flex justify-center mt-6">
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
