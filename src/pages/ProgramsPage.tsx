import { useState } from 'react';
import { Globe, Users, HeartHandshake, BookOpen, ArrowRight, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const programs = [
  {
    icon: HeartHandshake,
    tag: 'Community Outreach',
    title: 'Free Community Health Clinics',
    description:
      'Every month, Doctors360 teams travel to remote and underserved villages across South Sudan to provide free consultations, basic screenings, vaccinations, and essential medications. These mobile clinics serve thousands of patients who cannot access formal healthcare facilities.',
    impact: ['12,000+ patients reached annually', 'Active in 6 counties', 'Malaria, TB, and maternal health focus'],
    image: 'https://images.pexels.com/photos/6234610/pexels-photo-6234610.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: BookOpen,
    tag: 'Health Promotion',
    title: 'Health Education & Awareness',
    description:
      'Our health promotion team runs structured awareness campaigns in schools, churches, and community centres. Topics include maternal and child health, nutrition, disease prevention, hygiene, and mental health. All materials are adapted to local languages and cultural contexts.',
    impact: ['30+ schools reached', '5 local languages', '50,000+ leaflets distributed in 2024'],
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Users,
    tag: 'Capacity Building',
    title: 'Community Health Worker Training',
    description:
      'We recruit, train, and equip community health workers (CHWs) with the skills to deliver basic healthcare services, identify referral cases, and educate their communities. Trained CHWs become long-term change agents in their local areas.',
    impact: ['200+ CHWs trained to date', '3-month structured curriculum', 'Ongoing mentorship & supervision'],
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Globe,
    tag: 'Partnerships',
    title: 'Strategic Partnerships & Collaboration',
    description:
      'Doctors360 works alongside international NGOs, government health ministries, UN agencies, and private sector partners to amplify impact. Our collaborative model ensures we leverage every resource to serve more people more effectively.',
    impact: ['8 active partnerships', 'WHO & UNICEF-aligned programs', 'Ministry of Health collaboration'],
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const impactStats = [
  { value: '50K+', label: 'Patients Served' },
  { value: '200+', label: 'CHWs Trained' },
  { value: '12K+', label: 'Outreach Visits / yr' },
  { value: '6', label: 'Counties Active' },
  { value: '8', label: 'Active Partnerships' },
  { value: '3', label: 'Countries Reached' },
];

const partners = [
  'Ministry of Health, South Sudan',
  'World Health Organization (WHO)',
  'UNICEF South Sudan',
  'MSF (Médecins Sans Frontières)',
  'African Development Bank',
  'German Development Cooperation (GIZ)',
];

export default function ProgramsPage() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-primary-500 via-teal-deep to-primary-700 relative overflow-hidden noise-overlay">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-seafoam-300/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-alt" />
        <div className="container-x relative text-center">
          <ScrollReveal animation="fade-up">
            <span className="section-eyebrow text-seafoam-300">NGO Programs</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
              Health without boundaries —<br />
              <span className="gradient-text-seafoam">reaching every community</span>
            </h1>
            <p className="mt-6 text-seafoam-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Beyond our medical centre walls, Doctors360 runs a portfolio of community health programs
              that bring prevention, education, and care directly to the people who need it most.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white border-b border-seafoam-50">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((s, i) => (
              <ScrollReveal key={s.label} animation="fade-up" delay={i * 60}>
                <div className="text-center">
                  <p className="text-3xl font-bold gradient-text">{s.value}</p>
                  <p className="text-xs text-slate-brand uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs accordion */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-seafoam-50 rounded-full blur-3xl opacity-50" />
        <div className="container-x relative">
          <ScrollReveal animation="fade-up" className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Our programs, <span className="gradient-text">your community</span></h2>
            <p className="mt-4 text-slate-brand text-lg">
              Four interconnected program areas that together create a comprehensive community health system.
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-4">
            {programs.map((prog, i) => (
              <ScrollReveal key={prog.title} animation="fade-up" delay={i * 80}>
                <div className="rounded-3xl border border-seafoam-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="w-full flex items-center gap-5 p-6 lg:p-8 text-left group"
                  >
                    <span className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${expanded === i ? 'bg-gradient-to-br from-primary-500 to-teal-deep text-white' : 'bg-seafoam-50 text-teal-deep group-hover:bg-seafoam-100'}`}>
                      <prog.icon className="w-7 h-7" />
                    </span>
                    <div className="flex-1">
                      <span className="inline-block text-xs text-teal-deep font-semibold uppercase tracking-wider mb-1">{prog.tag}</span>
                      <h3 className="text-lg font-bold text-primary-500">{prog.title}</h3>
                    </div>
                    {expanded === i
                      ? <ChevronUp className="w-5 h-5 text-teal-deep flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    }
                  </button>

                  {expanded === i && (
                    <div className="px-6 lg:px-8 pb-8 grid lg:grid-cols-2 gap-8">
                      <div>
                        <p className="text-slate-brand leading-relaxed">{prog.description}</p>
                        <ul className="mt-6 space-y-2">
                          {prog.impact.map((point) => (
                            <li key={point} className="flex items-center gap-2 text-sm text-primary-500 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-seafoam-400 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg aspect-video lg:aspect-auto">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 lg:py-24 bg-seafoam-50/50 relative overflow-hidden">
        <div className="container-x relative">
          <ScrollReveal animation="fade-up" className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow">Partnerships</span>
            <h2 className="section-title">Better together — our <span className="gradient-text">partners</span></h2>
            <p className="mt-4 text-slate-brand text-lg">
              We collaborate with government bodies, international agencies, and private sector organisations
              to multiply impact across Africa.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <ScrollReveal key={p} animation="fade-up" delay={i * 60}>
                <div className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-seafoam-100 shadow-sm hover:shadow-md hover:border-seafoam-200 transition-all duration-300">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-seafoam-400" />
                  <p className="text-primary-500 font-medium text-sm">{p}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic reach */}
      <section className="py-20 lg:py-28 bg-primary-500 relative overflow-hidden noise-overlay">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-deep/20 rounded-full blur-3xl" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal animation="fade-right">
              <span className="section-eyebrow text-seafoam-300">Where We Work</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Active across <span className="gradient-text-seafoam">East & Central Africa</span>
              </h2>
              <p className="mt-5 text-seafoam-100 leading-relaxed">
                Our programs are currently active in South Sudan, Uganda, and Kenya. We are expanding
                into two additional countries by the end of 2026.
              </p>
              <div className="mt-8 space-y-3">
                {['South Sudan — Primary operations', 'Uganda — Community health programs', 'Kenya — Training & partnerships'].map((loc) => (
                  <div key={loc} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-seafoam-300 flex-shrink-0" />
                    <span className="text-seafoam-100 text-sm">{loc}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150}>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-72">
                <iframe
                  title="Doctors360 Programs Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=25.0%2C-5.0%2C45.0%2C15.0&layer=mapnik"
                  className="w-full h-full"
                  style={{ filter: 'grayscale(0.3) invert(0.85) hue-rotate(180deg)' }}
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-x text-center">
          <ScrollReveal animation="scale-up">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-500">Want to support our programs?</h2>
            <p className="mt-3 text-slate-brand">Every contribution directly funds community health work across Africa.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/donate" className="btn-primary">
                Donate Now <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/donate#volunteer" className="btn-outline">Volunteer With Us</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
