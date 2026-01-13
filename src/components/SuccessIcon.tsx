import { Check } from "lucide-react";

const SuccessIcon = () => {
  return (
    <div className="animate-pulse-soft">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-primary/20 flex items-center justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center">
          <Check className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground stroke-[3]" />
        </div>
      </div>
    </div>
  );
};

export default SuccessIcon;
