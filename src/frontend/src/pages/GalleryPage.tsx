import { useState } from 'react';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/assets/generated/vs-studio-gallery-01.dim_1200x800.png', alt: 'Wedding photography sample' },
    { src: '/assets/generated/vs-studio-gallery-02.dim_1200x800.png', alt: 'Portrait photography sample' },
    { src: '/assets/generated/vs-studio-gallery-03.dim_1200x800.png', alt: 'Event photography sample' },
    { src: '/assets/generated/vs-studio-gallery-04.dim_1200x800.png', alt: 'Studio photography sample' },
    { src: '/assets/generated/vs-studio-gallery-05.dim_1200x800.png', alt: 'Wedding ceremony photography' },
    { src: '/assets/generated/vs-studio-gallery-06.dim_1200x800.png', alt: 'Family portrait sample' },
    { src: '/assets/generated/vs-studio-gallery-07.dim_1200x800.png', alt: 'Event coverage sample' },
    { src: '/assets/generated/vs-studio-gallery-08.dim_1200x800.png', alt: 'Professional portrait sample' },
    { src: '/assets/generated/vs-studio-gallery-09.dim_1200x800.png', alt: 'Creative photography sample' },
  ];

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of captured moments. Each image tells a unique story and showcases our commitment to quality and artistry.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[3/2] overflow-hidden rounded-lg bg-muted animate-fade-in hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-accent transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedImage ? 'bg-primary w-8' : 'bg-muted-foreground/50'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Like What You See?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let us create stunning images for your special moments. Book your photography session today.
            </p>
            <a
              href="tel:7070945104"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-warm hover:shadow-xl hover:scale-105"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
