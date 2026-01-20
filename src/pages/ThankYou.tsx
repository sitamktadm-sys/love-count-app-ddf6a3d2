import Logo from "@/components/Logo";
import SuccessIcon from "@/components/SuccessIcon";
import MessageBox from "@/components/MessageBox";
import ConsumerRightsSection from "@/components/ConsumerRightsSection";
import SocialLinks from "@/components/SocialLinks";

const ThankYou = () => {
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
              Thank you for your order! 💕
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              We're so excited to help you celebrate your love story.
            </p>
          </div>

          {/* Message Box */}
          <MessageBox />

          {/* Consumer Rights */}
          <ConsumerRightsSection />

          {/* Spam Notice */}
          <p className="text-center text-white/70 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
            💡 Can't find the email? Check your spam or junk folder.
          </p>

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

export default ThankYou;
