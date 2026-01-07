const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-coral flex items-center justify-center">
              <span className="text-background text-sm">♥</span>
            </div>
            <span className="text-lg font-bold">
              <span className="text-navy">Love</span>
              <span className="text-coral">Count</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-navy transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-navy transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-navy transition-colors">
              Terms
            </a>
            <a
              href="https://instagram.com/lovecount.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy transition-colors"
            >
              @lovecount.uk
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 LoveCount. Made with love in the UK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
