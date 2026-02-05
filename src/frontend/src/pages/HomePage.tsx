import { Camera, Award, Users, Clock } from 'lucide-react';

interface HomePageProps {
  onBookNow: () => void;
}

export default function HomePage({ onBookNow }: HomePageProps) {
  const features = [
    {
      icon: Camera,
      title: 'Professional Equipment',
      description: 'State-of-the-art cameras and lighting for stunning results',
    },
    {
      icon: Award,
      title: 'Expert Photography',
      description: 'Years of experience capturing life\'s precious moments',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Tailored approach to meet your unique vision',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Quick turnaround without compromising quality',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/vs-studio-hero.dim_1920x800.png"
            alt="VS Studio Photography Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <div className="mb-6">
              <img
                src="/assets/generated/vs-studio-logo.dim_512x512.png"
                alt="VS Studio Photography Logo"
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-warm"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Capture Your
              <br />
              <span className="text-primary">Perfect Moments</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Professional photography services in Lalganj, Vaishali, Bihar. 
              Specializing in weddings, portraits, events, and studio shoots.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookNow}
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all shadow-warm hover:shadow-xl hover:scale-105"
              >
                Book Now for Best Quality
              </button>
              <button
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose VS Studio Photography
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with artistic vision to deliver exceptional photography services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all hover:shadow-warm group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Capture Your Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your photography session today and let us create beautiful memories that last a lifetime
            </p>
            <button
              onClick={onBookNow}
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all shadow-warm hover:shadow-xl hover:scale-105"
            >
              Book Your Session Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
