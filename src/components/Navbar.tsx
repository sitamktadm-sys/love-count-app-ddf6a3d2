import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import lovecountText from "@/assets/lovecount-text.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="LoveCount" className="h-10 md:h-12 w-auto" />
            <img src={lovecountText} alt="LoveCount" className="h-4 md:h-5 w-auto" />
          </a>

          {/* CTA Button */}
          <a
            href="https://buy.stripe.com/5kQbJ3fF1alfceU0WycbC02"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="cta" size="sm">
              Get Started
            </Button>
          </a>
          
          <a
            href="https://buy.stripe.com/5kQbJ3fF1alfceU0WycbC02"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden"
          >
            <Button variant="cta" size="sm" className="text-sm px-4">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
