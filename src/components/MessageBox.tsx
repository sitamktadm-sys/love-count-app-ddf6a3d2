import { Check } from "lucide-react";

const MessageBox = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border-l-4 border-r-4 border-coral animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
        <span>📧</span> What happens next?
      </h3>
      
      <p className="text-white/90 text-sm md:text-base mb-4 text-center">
        You'll receive an email shortly with:
      </p>
      
      <ul className="space-y-3 mb-6 text-sm md:text-base flex flex-col items-center">
        <li className="flex items-start gap-3">
          <Check className="text-coral mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
          <span className="text-white">Your order confirmation</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="text-coral mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
          <span className="text-white">A link to personalise your LoveCount</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="text-coral mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
          <span className="text-white">All the details about your order</span>
        </li>
      </ul>
      
      <p className="text-white/90 text-sm md:text-base mb-4 text-center">
        Please complete the personalisation form within <span className="text-white font-medium">7 days</span> so we can start creating your unique love page.
      </p>
      
      <p className="text-pink/80 text-xs md:text-sm italic text-center">
        We're already working on your order and will keep you updated on its progress!
      </p>
    </div>
  );
};

export default MessageBox;
