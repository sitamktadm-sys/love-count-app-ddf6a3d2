import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-foreground/10 bg-background">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="LoveCount" className="h-8 w-auto" />
            </a>
            <nav className="flex items-center gap-4 text-sm text-foreground/60">
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
            </nav>
          </div>

          {/* Instagram - Centered */}
          <a
            href="https://www.instagram.com/lovecount.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            @lovecount.uk
          </a>

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
