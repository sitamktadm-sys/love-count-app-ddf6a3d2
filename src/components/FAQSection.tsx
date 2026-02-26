import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the LoveCount Keychain work?",
      answer:
        "Just tap your anniversary gift keychain on the back of any smartphone (iPhone or Android). Your personalised love page opens instantly in the browser — no app needed.",
    },
    {
      question: "How long does it take for the keychain to arrive?",
      answer:
        "Standard UK delivery is 3-5 working days. Need it faster? Express delivery (1-2 days) is available for £6.99.",
    },
    {
      question: "Can I order an additional keychain for my partner or as a replacement?",
      answer:
        "Absolutely! If you need an additional keychain for your partner, as a replacement for a lost keychain, or for any other reason, simply contact us at support@lovecount.uk. Additional keychains cost £19.99 and will link to your existing LoveCount page — no setup required. Just let us know your existing page ID (LC-XXX) when you contact us, and we'll arrange your additional keychain order.",
    },
    {
      question: "Can I update my page later?",
      answer:
        "Yes! Just contact us and we'll update your photos or message within 24 hours. No extra charge.",
    },
    {
      question: "What's the annual renewal?",
      answer:
        "After the first year, it's £11.99/year to keep your page active. You can cancel anytime — we'll remind you before renewal.",
    },
    {
      question: "Is the keychain waterproof?",
      answer:
        "Yes! The silicone keychain is IP65 rated — safe for rain, splashes, and everyday life. Perfect for an anniversary gift that lasts.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-20" aria-labelledby="faq-heading">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-coral mb-3">Questions about your anniversary gift</p>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">Got Questions?</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-foreground/5 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5">
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