import { Camera, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'services' | 'gallery' | 'contact';

interface SiteHeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function SiteHeader({ currentPage, onNavigate }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top contact strip - hidden on mobile */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-xs text-muted-foreground border-b border-border/40">
          <a href="tel:7070945104" className="hover:text-primary transition-colors">
            📞 7070945104
          </a>
          <a href="mailto:vscomputer7070@gmail.com" className="hover:text-primary transition-colors">
            ✉️ vscomputer7070@gmail.com
          </a>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-serif font-bold text-foreground leading-tight">
                VS Studio Photography
              </h1>
              <p className="text-xs text-muted-foreground">by Vikky Kumar</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('contact')}
              className="ml-2 px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-warm"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`px-4 py-3 rounded-md text-sm font-medium text-left transition-colors ${
                    currentPage === item.page
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('contact')}
                className="mt-2 px-4 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-warm"
              >
                Book Now
              </button>
            </div>
            {/* Mobile contact info */}
            <div className="mt-4 pt-4 border-t border-border/40 space-y-2 text-sm text-muted-foreground">
              <a href="tel:7070945104" className="block hover:text-primary transition-colors">
                📞 7070945104
              </a>
              <a href="mailto:vscomputer7070@gmail.com" className="block hover:text-primary transition-colors">
                ✉️ vscomputer7070@gmail.com
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
