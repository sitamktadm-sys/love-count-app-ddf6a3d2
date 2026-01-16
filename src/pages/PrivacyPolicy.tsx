import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import instagramIcon from "@/assets/instagram-icon.png";
import tiktokIcon from "@/assets/tiktok-icon.png";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <p className="text-sm text-foreground/60">Last updated: January 2026</p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
              <p>
                Welcome to LoveCount ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our NFC keychains with personalized digital pages.
              </p>
              <p>
                LoveCount is a UK-based company and we comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <p>We collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact Information:</strong> Your name and email address</li>
                <li><strong>Shipping Information:</strong> Your delivery address for physical products</li>
                <li><strong>Personalisation Data:</strong> Photos you upload and your relationship/anniversary date</li>
                <li><strong>Payment Information:</strong> Processed securely through Stripe (we do not store card details)</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and device information</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Create and host your personalized digital page</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Third-Party Services</h2>
              <p>We use the following third-party services to operate our business:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Stripe:</strong> For secure payment processing. Stripe's privacy policy can be found at stripe.com/privacy</li>
                <li><strong>Airtable:</strong> For secure data storage and order management</li>
                <li><strong>Loops:</strong> For email communications and marketing</li>
              </ul>
              <p>These services have their own privacy policies and we encourage you to review them.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, including hosting your digital page. If you cancel your subscription, we will delete your data within 30 days unless we are required to retain it for legal purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Your Rights Under UK GDPR</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of processing</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
                <li><strong>Right to Object:</strong> Object to processing of your data</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p>To exercise any of these rights, please contact us at support@lovecount.co.uk</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Cookies</h2>
              <p>
                We use essential cookies to ensure our website functions properly. We may also use analytics cookies to understand how visitors interact with our website. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@lovecount.co.uk" className="text-primary hover:underline">
                  support@lovecount.co.uk
                </a>
              </p>
              <p>
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data protection rights have been violated.
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

export default PrivacyPolicy;
