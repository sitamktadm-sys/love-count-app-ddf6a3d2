import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-foreground/10 bg-background">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Links */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2" aria-label="LoveCount home">
              <img src={logo} alt="LoveCount logo" width={32} height={32} className="h-8 w-auto" />
            </a>
            <nav className="flex items-center gap-4 text-sm text-foreground/60" aria-label="Footer navigation">
              <a href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Instagram - Centered */}
          <a
            href="https://www.instagram.com/lovecount.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Follow LoveCount on Instagram"
          >
            @lovecount.uk
          </a>

          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © 2026 LoveCount. Made with 💕 in the UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;