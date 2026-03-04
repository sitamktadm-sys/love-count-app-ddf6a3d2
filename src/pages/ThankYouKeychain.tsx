import Logo from "@/components/Logo";
import SuccessIcon from "@/components/SuccessIcon";
import ConsumerRightsSection from "@/components/ConsumerRightsSection";
import SocialLinks from "@/components/SocialLinks";
import { Check } from "lucide-react";

const ThankYouKeychain = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 border-b border-border flex justify-center">
        <Logo linkToHome />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-lg space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <SuccessIcon />
          </div>

          {/* Thank You Message */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Your extra keychain is confirmed! 💕
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              We're so excited to help you celebrate your love story.
            </p>
          </div>

          {/* Message Box */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border-l-4 border-r-4 border-coral animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <span>📧</span> What happens next?
            </h3>

            <p className="text-white/90 text-sm md:text-base mb-4 text-center">
              You'll receive a confirmation email shortly with your order details.
            </p>

            <ul className="space-y-3 mb-6 text-sm md:text-base flex flex-col items-center">
              <li className="flex items-start gap-3">
                <Check className="text-coral mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
                <span className="text-white">Your order confirmation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-coral mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
                <span className="text-white">Your shipping details</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-coral mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
                <span className="text-white">Estimated delivery within 3–5 working days</span>
              </li>
            </ul>

            <p className="text-pink/80 text-xs md:text-sm italic text-center">
              We're already programming your keychain to your existing love story page.
            </p>
          </div>

          {/* Consumer Rights */}
          <ConsumerRightsSection />

          {/* Support Info */}
          <div className="text-center text-white/70 text-sm animate-fade-in" style={{ animationDelay: '0.45s' }}>
            <p>Questions or problems? We're here to help:</p>
            <a href="mailto:support@lovecount.uk" className="text-coral hover:underline font-medium">
              support@lovecount.uk
            </a>
          </div>

          {/* Social Links */}
          <SocialLinks />

          {/* Footer Logo */}
          <div className="flex justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-xl font-bold">
              <span className="text-white">Love</span>
              <span className="text-coral">Count</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYouKeychain;
