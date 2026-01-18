import logo from "@/assets/logo.svg";
import instagramIcon from "@/assets/instagram-icon.png";
import tiktokIcon from "@/assets/tiktok-icon.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-foreground/10 bg-background">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a href="/" className="flex items-center gap-2" aria-label="LoveCount home">
              <img src={logo} alt="LoveCount logo" width={32} height={32} className="h-8 w-auto" />
            </a>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/60" aria-label="Footer navigation">
              <a href="mailto:support@lovecount.co.uk" className="hover:text-foreground transition-colors">
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

          {/* Social Links */}
          <div className="flex items-center gap-4 order-first md:order-none md:absolute md:left-1/2 md:-translate-x-1/2">
            <a
              href="https://instagram.com/lovecount.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Follow LoveCount on Instagram"
            >
              <img src={instagramIcon} alt="Instagram" className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@lovecountuk"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Follow LoveCount on TikTok"
            >
              <img src={tiktokIcon} alt="TikTok" className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/60">
            © 2026 Made with 💕 by LoveCount
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;