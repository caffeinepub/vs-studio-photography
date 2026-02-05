import { Camera, Heart, Briefcase, Users, Package, Video } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Photography',
      description: 'Comprehensive wedding coverage from pre-wedding shoots to reception. We capture every emotion, every detail, and every precious moment of your special day.',
      features: ['Full day coverage', 'Pre-wedding shoot', 'Candid photography', 'Traditional portraits', 'Album design'],
    },
    {
      icon: Users,
      title: 'Portrait Sessions',
      description: 'Professional portrait photography for individuals, families, and groups. Perfect for personal branding, family memories, or special occasions.',
      features: ['Individual portraits', 'Family photos', 'Professional headshots', 'Graduation photos', 'Studio or outdoor'],
    },
    {
      icon: Briefcase,
      title: 'Event Coverage',
      description: 'Complete event documentation for corporate events, parties, and celebrations. We ensure every important moment is captured professionally.',
      features: ['Corporate events', 'Birthday parties', 'Anniversary celebrations', 'Cultural events', 'Social gatherings'],
    },
    {
      icon: Camera,
      title: 'Studio Shoots',
      description: 'Professional studio photography with controlled lighting and backdrops. Ideal for portfolios, product shots, and creative projects.',
      features: ['Controlled environment', 'Professional lighting', 'Multiple backdrops', 'Props available', 'Creative direction'],
    },
    {
      icon: Package,
      title: 'Product Photography',
      description: 'High-quality product photography for businesses and e-commerce. Showcase your products in the best light with professional images.',
      features: ['E-commerce ready', 'Multiple angles', 'Lifestyle shots', 'White background', 'Quick turnaround'],
    },
    {
      icon: Video,
      title: 'Video Services',
      description: 'Professional videography services to complement your photography needs. Capture motion and emotion in stunning video format.',
      features: ['Event videography', 'Highlight reels', 'Cinematic editing', 'Drone footage', 'Social media clips'],
    },
  ];

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Photography Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored to capture your unique moments and tell your story
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-warm group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We offer flexible packages tailored to your specific needs. Contact us to discuss your requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7070945104"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-warm"
              >
                Call: 7070945104
              </a>
              <a
                href="mailto:vscomputer7070@gmail.com"
                className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
