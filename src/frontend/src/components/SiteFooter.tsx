import { Camera, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold">VS Studio Photography</h3>
                <p className="text-sm text-muted-foreground">by Vikky Kumar</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Capturing your precious moments with professional quality and artistic vision.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:7070945104"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>7070945104</span>
              </a>
              <a
                href="mailto:vscomputer7070@gmail.com"
                className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>vscomputer7070@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Etwarpur Nizamat Chowk, Lalganj, Vaishali, Bihar 844121</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Event Coverage</li>
              <li>Studio Shoots</li>
              <li>Product Photography</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
