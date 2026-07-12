import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { X, ZoomIn } from 'lucide-react';

const photoGallery = [
  {
    src: 'https://images.pexels.com/photos/6234610/pexels-photo-6234610.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/6234610/pexels-photo-6234610.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Community health outreach clinic, South Sudan',
    category: 'Outreach',
  },
  {
    src: 'https://images.pexels.com/photos/5215028/pexels-photo-5215028.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/5215028/pexels-photo-5215028.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Medical team consultations at Doctors360 facility',
    category: 'Medical Centre',
  },
  {
    src: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Health education session for community members',
    category: 'Outreach',
  },
  {
    src: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Community health worker training graduation ceremony',
    category: 'Training',
  },
  {
    src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Antenatal care services for expectant mothers',
    category: 'Medical Centre',
  },
  {
    src: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Dr. Emmanuel Lado at the Doctors360 Emergency Department',
    category: 'Medical Centre',
  },
  {
    src: 'https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Patient care and recovery at our facility',
    category: 'Medical Centre',
  },
  {
    src: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Mental health counselling services',
    category: 'Medical Centre',
  },
  {
    src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Partnership meeting with international health agencies',
    category: 'Partnerships',
  },
  {
    src: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Dr. Amina Wek conducting patient rounds',
    category: 'Medical Centre',
  },
  {
    src: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Malaria prevention outreach campaign',
    category: 'Outreach',
  },
  {
    src: 'https://images.pexels.com/photos/7438101/pexels-photo-7438101.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/7438101/pexels-photo-7438101.jpeg?auto=compress&cs=tinysrgb&w=400',
    caption: 'Child nutrition screening and supplementation program',
    category: 'Outreach',
  },
];

const galleryCategories = ['All', 'Medical Centre', 'Outreach', 'Training', 'Partnerships'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof photoGallery[0] | null>(null);

  const filtered = filter === 'All' ? photoGallery : photoGallery.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-primary-500 via-teal-deep to-primary-700 relative overflow-hidden noise-overlay">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-seafoam-300/10 rounded-full blur-3xl animate-float" />
        <div className="container-x relative text-center">
          <ScrollReveal animation="fade-up">
            <span className="section-eyebrow text-seafoam-300">Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4">
              Our work in <span className="gradient-text-seafoam">pictures</span>
            </h1>
            <p className="mt-6 text-seafoam-100 text-lg max-w-xl mx-auto leading-relaxed">
              A visual story of Doctors360's medical services, community programs, and the people we serve across Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-seafoam-50 shadow-sm py-4">
        <div className="container-x flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-seafoam-50 text-primary-500 hover:bg-seafoam-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <ScrollReveal key={photo.src} animation="fade-up" delay={i * 50}>
                <button
                  onClick={() => setLightbox(photo)}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-400 break-inside-avoid"
                >
                  <img
                    src={photo.thumb}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-700/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4 px-4">
                    <ZoomIn className="w-8 h-8 text-white mb-2 drop-shadow-lg" />
                    <p className="text-white text-sm font-medium text-center drop-shadow-md">{photo.caption}</p>
                  </div>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/40 text-white text-[10px] font-semibold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.category}
                  </span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"
            />
            <p className="mt-4 text-center text-seafoam-100 text-sm">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
