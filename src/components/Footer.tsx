import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-foreground/10 bg-background">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="LoveCount" className="h-8 w-auto" />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a
              href="https://instagram.com/lovecount.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              @lovecount.uk
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © 2026 LoveCount. Made with love in the UK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
