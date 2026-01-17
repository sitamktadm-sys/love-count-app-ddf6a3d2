import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ConsumerRightsSection = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border-l-4 border-r-4 border-coral animate-fade-in" style={{ animationDelay: '0.35s' }}>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
        <Shield className="text-coral" size={20} />
        <span>Your Consumer Rights</span>
      </h3>
      
      <ul className="space-y-3 text-sm md:text-base text-white/90">
        <li className="text-center">
          <span className="text-coral">•</span> You have 14 days from delivery to return your LoveCount for a full refund
        </li>
        <li className="text-center">
          <span className="text-coral">•</span> Physical products: Return the keychain in original condition
        </li>
        <li className="text-center">
          <span className="text-coral">•</span> Digital content: Access revoked upon return request
        </li>
        <li className="text-center">
          <span className="text-coral">•</span> View our complete{" "}
          <Link 
            to="/terms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-coral hover:underline font-medium"
          >
            Terms of Service
          </Link>
          {" "}and{" "}
          <Link 
            to="/privacy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-coral hover:underline font-medium"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ConsumerRightsSection;
