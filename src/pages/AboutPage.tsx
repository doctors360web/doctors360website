import { Target, Shield, BookOpen, Globe, Award, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const leadership = [
  {
    name: 'Dr. Emmanuel Lado',
    title: 'Founder & Executive Director',
    image: '/images/leader-1.jpg',
    bio: 'A visionary physician with over 15 years of experience in Africa\'s healthcare sector. Dr. Lado founded Doctors360 with a belief that quality healthcare must be both accessible and ethical.',
  },
  {
    name: 'Dr. Amina Wek',
    title: 'Medical Director',
    image: '/images/leader-2.jpg',
    bio: 'Specialist in internal medicine and public health, Dr. Wek oversees all clinical operations and ensures the highest standards of patient-centred care across every department.',
  },
  {
    name: 'James Deng',
    title: 'Director of Operations',
    image: '/images/leader-3.jpg',
    bio: 'With a background in healthcare management and NGO operations, James leads the administrative, logistics, and community outreach functions of the organisation.',
  },
  {
    name: 'Grace Akol',
    title: 'Director of Programs & Partnerships',
    image: '/images/leader-4.jpg',
    bio: 'Grace brings over a decade of experience in health program design across East Africa. She leads all NGO initiatives, donor relations, and strategic partnerships.',
  },
];

const governance = [
  { role: 'Board Chair', name: 'Hon. Peter Kolong' },
  { role: 'Vice Chair', name: 'Dr. Sarah Machar' },
  { role: 'Board Secretary', name: 'Beatrice Lam' },
  { role: 'Treasurer', name: 'Simon Taban' },
  { role: 'Independent Member', name: 'Prof. David Okello' },
  { role: 'Independent Member', name: 'Dr. Fatima Al-Hassan' },
];

const objectives = [
  {
    icon: Globe,
    title: 'Expand Access Across Africa',
    text: 'Establish Doctors360 facilities and digital health services in underserved communities across East and Central Africa by 2027.',
  },
  {
    icon: BookOpen,
    title: 'Health Education at Scale',
    text: 'Train 500+ community health workers annually through our outreach and capacity-building programs.',
  },
  {
    icon: Shield,
    title: 'Sustainable Healthcare Delivery',
    text: 'Build financially sustainable models that combine fee-for-service, donor funding, and government partnerships.',
  },
  {
    icon: Target,
    title: 'Digital Health Integration',
    text: 'Launch a fully integrated patient portal, telemedicine service, and laboratory results platform by 2026.',
  },
];

const milestones = [
  { year: '2019', event: 'Doctors360 founded in Juba, South Sudan' },
  { year: '2020', event: 'First community health outreach program launched' },
  { year: '2021', event: 'NGO registration and first international partnership secured' },
  { year: '2022', event: 'Medical centre expanded — Emergency Department added' },
  { year: '2023', event: 'Digital health pilot launched; 5,000+ patients served' },
  { year: '2024', event: 'Regional expansion — programs active in 3 countries' },
  { year: '2025', event: '50,000+ patients served; new laboratory wing opened' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-primary-500 via-teal-deep to-primary-700 relative overflow-hidden noise-overlay">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-seafoam-300/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-alt" />
        <div className="container-x relative text-center">
          <ScrollReveal animation="fade-up">
            <span className="section-eyebrow text-seafoam-300">About Doctors360</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
              Our story, our people,<br />
              <span className="gradient-text-seafoam">our purpose</span>
            </h1>
            <p className="mt-6 text-seafoam-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Doctors360 is an integrated medical services provider and registered NGO
              committed to making quality, ethical, patient-centred healthcare accessible
              to all — digitally and physically, across Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* History / Timeline */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-seafoam-50 rounded-full blur-3xl opacity-50" />
        <div className="container-x relative">
          <ScrollReveal animation="fade-up" className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow">Our History</span>
            <h2 className="section-title">From a single vision to <span className="gradient-text">a movement</span></h2>
            <p className="mt-4 text-slate-brand text-lg">
              Founded in 2019, Doctors360 has grown from a small clinic into a multi-service healthcare
              organisation serving communities across Africa.
            </p>
          </ScrollReveal>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-seafoam-300 to-teal-deep/20 -translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} animation="fade-up" delay={i * 80}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-teal-deep text-white text-xs font-bold shadow-lg z-10 flex-shrink-0">
                      {i + 1}
                    </div>
                    {/* Content */}
                    <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? 'md:mr-[calc(50%+2rem)] md:text-right' : 'md:ml-[calc(50%+2rem)]'} bg-white border border-seafoam-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex-1 max-w-md`}>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-seafoam-50 text-teal-deep text-xs font-bold mb-2">{m.year}</span>
                      <p className="text-primary-500 font-medium">{m.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-seafoam-50/40 to-white relative overflow-hidden">
        <div className="container-x relative">
          <ScrollReveal animation="fade-up" className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow">Our Team</span>
            <h2 className="section-title">The people behind <span className="gradient-text">Doctors360</span></h2>
            <p className="mt-4 text-slate-brand text-lg">
              Our leadership team brings together clinical expertise, operational excellence, and a shared passion for transforming healthcare in Africa.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} animation="fade-up" delay={i * 100}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-seafoam-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary-500">{person.name}</h3>
                    <p className="text-xs text-teal-deep font-medium uppercase tracking-wider mt-0.5">{person.title}</p>
                    <p className="mt-3 text-sm text-slate-brand leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 lg:py-28 bg-primary-500 relative overflow-hidden noise-overlay">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-deep/20 rounded-full blur-3xl" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <span className="section-eyebrow text-seafoam-300">Governance</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Accountable leadership,<br />
                <span className="gradient-text-seafoam">transparent governance</span>
              </h2>
              <p className="mt-5 text-seafoam-100 leading-relaxed">
                Doctors360 is governed by an independent Board of Directors that provides strategic
                oversight, fiduciary responsibility, and accountability to the communities we serve.
                All operations adhere to registered NGO compliance requirements.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Award className="w-5 h-5 text-seafoam-300 flex-shrink-0" />
                <span className="text-seafoam-100 text-sm">Registered NGO — South Sudan</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150}>
              <div className="grid sm:grid-cols-2 gap-4">
                {governance.map((g, i) => (
                  <div key={i} className="glass-card p-5 hover:bg-white/12 transition-colors duration-300">
                    <p className="text-xs text-seafoam-300 uppercase tracking-wider">{g.role}</p>
                    <p className="mt-1 text-white font-semibold">{g.name}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-seafoam-50 rounded-full blur-3xl opacity-60" />
        <div className="container-x relative">
          <ScrollReveal animation="fade-up" className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow">Strategic Objectives</span>
            <h2 className="section-title">Where we're <span className="gradient-text">headed</span></h2>
            <p className="mt-4 text-slate-brand text-lg">
              Our 2025–2027 strategic plan focuses on four pillars that will define the next
              phase of Doctors360's impact across Africa.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <ScrollReveal key={obj.title} animation="fade-up" delay={i * 100}>
                <div className="group flex gap-5 p-7 rounded-3xl bg-white border border-seafoam-100 hover:border-seafoam-300 hover:shadow-xl transition-all duration-400">
                  <span className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-seafoam-100 to-teal-light/20 text-teal-deep group-hover:scale-110 transition-transform duration-300">
                    <obj.icon className="w-7 h-7" />
                  </span>
                  <div>
                    <h3 className="font-bold text-primary-500 text-lg">{obj.title}</h3>
                    <p className="mt-2 text-slate-brand leading-relaxed text-sm">{obj.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-seafoam-50">
        <div className="container-x text-center">
          <ScrollReveal animation="scale-up">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-500">Ready to be part of the journey?</h2>
            <p className="mt-3 text-slate-brand">Support our mission or book your appointment today.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/donate" className="btn-primary">
                Support Our Mission
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="/#contact" className="btn-outline">Book Appointment</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
