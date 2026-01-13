import { Check } from "lucide-react";

const MessageBox = () => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 border-l-4 border-primary animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <span>📧</span> What happens next?
      </h3>
      
      <p className="text-muted-foreground text-sm md:text-base mb-4">
        You'll receive an email shortly with:
      </p>
      
      <ul className="space-y-3 mb-6 text-muted-foreground text-sm md:text-base">
        <li className="flex items-start gap-3">
          <Check className="text-primary mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
          <span>Your order confirmation</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="text-primary mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
          <span>A link to personalise your LoveCount</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="text-primary mt-0.5 flex-shrink-0" size={20} strokeWidth={3} />
          <span>All the details about your order</span>
        </li>
      </ul>
      
      <p className="text-muted-foreground text-sm md:text-base mb-4">
        Please complete the personalisation form within <span className="text-foreground font-medium">7 days</span> so we can start creating your unique love page.
      </p>
      
      <p className="text-muted-foreground/80 text-xs md:text-sm italic">
        We're already working on your order and will keep you updated on its progress!
      </p>
    </div>
  );
};

export default MessageBox;
