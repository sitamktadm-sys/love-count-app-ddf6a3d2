import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the NFC work?",
      answer:
        "Just tap the keychain on the back of any smartphone (iPhone or Android). Your page opens instantly in the browser — no app needed.",
    },
    {
      question: "When will it arrive?",
      answer:
        "Standard UK delivery is 3-5 working days. Need it faster? Express delivery (1-2 days) is available for £6.99.",
    },
    {
      question: "Can I update my page later?",
      answer:
        "Yes! Just contact us and we'll update your photos or message within 24 hours. No extra charge.",
    },
    {
      question: "What's the annual renewal?",
      answer:
        "After the first year, it's £9.99/year to keep your page active. You can cancel anytime — we'll remind you before renewal.",
    },
    {
      question: "Is it waterproof?",
      answer:
        "Yes! The silicone keychain is IP65 rated — safe for rain, splashes, and everyday life.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-pink">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Got Questions?</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-navy font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy/70 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
