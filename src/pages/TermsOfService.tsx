import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import instagramIcon from "@/assets/instagram-icon.png";
import tiktokIcon from "@/assets/tiktok-icon.png";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="py-6 border-b border-foreground/10">
        <div className="container-narrow flex justify-center">
          <Link to="/" aria-label="LoveCount home">
            <img src={logo} alt="LoveCount logo" className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="container-narrow max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-foreground/60">Last updated: January 2026</p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                Welcome to LoveCount. These Terms of Service ("Terms") govern your use of our website and the purchase of our products and services. By placing an order with us, you agree to be bound by these Terms.
              </p>
              <p>
                LoveCount is a UK-based company. These Terms are governed by the laws of England and Wales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Products and Services</h2>
              <p>LoveCount offers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NFC Keychain:</strong> A physical keychain with embedded NFC technology</li>
                <li><strong>Personalized Digital Page:</strong> A custom webpage accessible via the NFC keychain, featuring your photos and relationship counter</li>
                <li><strong>1 Year Hosting:</strong> Your digital page is hosted for one year from the date of creation</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Pricing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Product Price:</strong> £34.99 (plus applicable shipping costs)</li>
                <li><strong>Annual Renewal:</strong> £9.99 per year to continue hosting your digital page after the first year</li>
              </ul>
              <p>
                All prices are in British Pounds (GBP) and include VAT where applicable. Shipping costs are calculated at checkout based on your delivery location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Order Process</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Place your order and complete payment</li>
                <li>Receive a personalisation form via email within 24 hours</li>
                <li>Complete the form with your photos and relationship details</li>
                <li>Your digital page is created within 24-48 hours of form completion</li>
                <li>Your NFC keychain is shipped to your provided address</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Personalisation Form Deadline</h2>
              <p>
                You must complete the personalisation form within <strong>10 days</strong> of receiving it. If you fail to complete the form within this timeframe, your order will be automatically cancelled and a full refund will be issued.
              </p>
              <p>
                This policy ensures timely delivery and allows us to manage our production efficiently.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Refund Policy</h2>
              <p>Our refund policy is as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Before Form Submission:</strong> Full refund available. Contact us to cancel your order.</li>
                <li><strong>After Page Created:</strong> No refunds are available once your personalized digital page has been created, as this is a custom digital product made specifically for you.</li>
                <li><strong>Faulty Products:</strong> If your NFC keychain is faulty or damaged upon arrival, contact us within 14 days for a replacement.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Delivery</h2>
              <p>
                <strong>Digital Page:</strong> Your personalized digital page will be created and accessible within 24-48 hours of completing the personalisation form.
              </p>
              <p>
                <strong>Physical Keychain:</strong> Shipping times vary based on your location. UK delivery typically takes 3-5 business days. International delivery may take 7-14 business days.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Intellectual Property and Photo Rights</h2>
              <p>
                <strong>Your Content:</strong> You retain full ownership of any photos you upload to LoveCount. By uploading photos, you grant LoveCount a non-exclusive, worldwide license to display your photos on your personalized digital page for the duration of your subscription.
              </p>
              <p>
                <strong>Our Content:</strong> The LoveCount website, branding, and digital page templates are the intellectual property of LoveCount and may not be copied or reproduced without permission.
              </p>
              <p>
                <strong>Warranty:</strong> By uploading photos, you confirm that you have the right to use them and that they do not infringe on any third party's rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Acceptable Use</h2>
              <p>You agree not to upload content that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Is illegal, harmful, or offensive</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains malware or harmful code</li>
                <li>Violates the privacy of others</li>
              </ul>
              <p>
                We reserve the right to remove content and terminate accounts that violate these terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">10. Subscription Renewal</h2>
              <p>
                Your digital page hosting is included for one year from the date of creation. Before your subscription expires, we will send you a reminder email with the option to renew for £9.99 per year.
              </p>
              <p>
                If you choose not to renew, your digital page will be deactivated and your NFC keychain will no longer link to your personalized content.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">11. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, LoveCount shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services.
              </p>
              <p>
                Our total liability shall not exceed the amount you paid for the product or service in question.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">12. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">14. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@lovecount.co.uk" className="text-primary hover:underline">
                  support@lovecount.co.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-foreground/10">
        <div className="container-narrow flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
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
          <p className="text-sm text-foreground/60">© 2026 Made with 💕 by LoveCount</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
