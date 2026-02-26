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
          
          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <p className="text-sm text-foreground/60 italic">Last updated: January 16, 2026</p>

            {/* Product Description */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Product Description</h2>
              <p>LoveCount sells a combined product package consisting of:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Physical Product:</strong> Premium LoveCount Keychain (silicone, waterproof)</li>
                <li><strong>Digital Content:</strong> Personalized love page with photo carousel and day counter</li>
                <li><strong>Digital Asset:</strong> Downloadable Instagram Story image (renewable)</li>
              </ol>
              <p><strong>Price:</strong> £39.99 + shipping</p>
              <p><strong>Annual hosting renewal:</strong> £11.99/year</p>
            </section>

            {/* Additional Keychains */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Additional Keychains</h2>
              <p>Existing customers may purchase additional keychains for £19.99 that link to their current LoveCount page. Additional keychain purchases are subject to the following terms:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Requires an active LoveCount page with current hosting subscription</li>
                <li>Additional keychains link to the same existing page as the original purchase</li>
                <li>No new page creation, personalization, or additional hosting included</li>
                <li>Same 14-day return policy applies to physical keychain only</li>
                <li>Digital page access remains tied to original purchase and renewal schedule</li>
                <li>Additional keychains are shipped to the same address as original order unless otherwise specified</li>
                <li>LoveCount Keychain functionality links to existing page - no setup required</li>
              </ul>
            </section>

            {/* Returns & Refunds Policy */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Returns & Refunds Policy</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Physical Product (LoveCount Keychain)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>14-day return right:</strong> You can return the unopened keychain within 14 days of delivery</li>
                  <li><strong>30-day warranty:</strong> Free replacement if keychain is defective or doesn't work</li>
                  <li><strong>Return shipping:</strong> Customer pays return postage unless item is defective</li>
                  <li><strong>Refund processing:</strong> 3-5 business days after we receive returned item</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Digital Content (Love Page & Story)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Immediate delivery waiver:</strong> By submitting your personalization form, you consent to immediate digital content creation and waive your 14-day cancellation right for digital content</li>
                  <li><strong>Personalization deadline:</strong> You must complete your personalization form within 10 days of purchase, or we will automatically process a full refund</li>
                  <li><strong>Technical faults:</strong> Full refund if your love page doesn't load or function correctly</li>
                  <li><strong>No refunds after creation:</strong> Once your personalized page is created, digital content cannot be returned</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Combined Product Scenarios</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Before personalization:</strong> Full refund available for any reason</li>
                  <li><strong>After personalization:</strong> Physical keychain returnable for 14 days, digital content non-returnable</li>
                  <li><strong>Technical issues:</strong> Full refund or replacement for any technical problems</li>
                  <li><strong>Quality issues:</strong> Free replacement keychain + page recreation if quality doesn't meet standards</li>
                </ul>
              </div>
            </section>

            {/* Delivery & Performance */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Delivery & Performance</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Physical Product</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Delivery timeframe:</strong> 3-7 business days (UK)</li>
                  <li><strong>Tracking provided:</strong> Email with tracking number when shipped</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Digital Content</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Page hosting:</strong> Minimum 1 year included, renewable at £11.99/year</li>
                  <li><strong>Digital delivery:</strong> Love page live within 24-48 hours of form completion</li>
                  <li><strong>Story downloads:</strong> Unlimited downloads with updated day counter</li>
                  <li><strong>Photo storage:</strong> Your photos stored securely, deleted after page expiry unless renewed</li>
                </ul>
              </div>
            </section>

            {/* Customer Responsibilities */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Customer Responsibilities</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Personalization Form</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Complete within 10 days:</strong> Automatic refund if not completed</li>
                  <li><strong>Accurate information:</strong> Provide correct names, dates, and contact details</li>
                  <li><strong>Photo quality:</strong> Upload high-resolution photos (minimum 720px)</li>
                  <li><strong>Appropriate content:</strong> No offensive, inappropriate, or copyrighted content</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Usage Rights</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Your photos:</strong> You retain ownership and responsibility for all uploaded photos</li>
                  <li><strong>Page content:</strong> You own your personalized page content</li>
                  <li><strong>Sharing permission:</strong> You grant LoveCount permission to feature your page in marketing if you tag us on social media (revocable on request)</li>
                </ul>
              </div>
            </section>

            {/* Annual Renewal Terms */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Annual Renewal Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Auto-renewal:</strong> Annual hosting renewal unless cancelled with 30 days notice</li>
                <li><strong>Price changes:</strong> 60 days notice for any price increases</li>
                <li><strong>Payment failure:</strong> 30-day grace period before page deactivation</li>
              </ul>
            </section>

            {/* Data Protection & Privacy */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Data Protection & Privacy</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Information We Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal:</strong> Names, email, shipping address, relationship dates</li>
                  <li><strong>Content:</strong> Photos you upload, personal messages</li>
                  <li><strong>Usage:</strong> Page views, download activity (anonymized)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">How We Use Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service delivery:</strong> Create and host your personalized page</li>
                  <li><strong>Communication:</strong> Order updates, renewal reminders</li>
                  <li><strong>Marketing:</strong> Only with your consent, unsubscribe anytime</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Data Storage</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Location:</strong> EU/UK servers (GDPR compliant)</li>
                  <li><strong>Retention:</strong> Photos deleted 1 year after page expiry</li>
                  <li><strong>Security:</strong> Industry-standard encryption and security measures</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Emotional outcomes:</strong> No guarantee of specific emotional reactions or relationship outcomes</li>
                <li><strong>Technical limitations:</strong> Occasional downtime for maintenance</li>
                <li><strong>Photo quality:</strong> Final result depends on quality of photos you provide</li>
                <li><strong>Compatibility:</strong> Most modern phones (2018+) compatible, older phones may vary</li>
              </ul>
            </section>

            {/* Dispute Resolution */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Dispute Resolution</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Customer Service</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact:</strong> support@lovecount.uk</li>
                  <li><strong>Response time:</strong> Within 24 hours</li>
                  <li><strong>Escalation:</strong> Manager review for unresolved issues</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Formal Disputes</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>UK Law:</strong> These terms governed by English law</li>
                  <li><strong>Jurisdiction:</strong> Courts of England and Wales</li>
                </ul>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Changes to Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Notification:</strong> 30 days notice for material changes</li>
                <li><strong>Acceptance:</strong> Continued use constitutes acceptance</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>
              <p><strong>LoveCount UK</strong></p>
              <p>
                Email:{" "}
                <a href="mailto:support@lovecount.uk" className="text-foreground hover:underline">
                  support@lovecount.uk
                </a>
              </p>
              <p>Website: lovecount.uk</p>
            </section>

            <p className="text-sm text-foreground/60 italic border-t border-foreground/10 pt-6">
              These terms comply with UK Consumer Rights Act 2015, GDPR, and Distance Selling Regulations.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-foreground/10">
        <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
            <a 
              href="mailto:support@lovecount.uk" 
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-foreground">Terms of Service</span>
          </div>
          
          <div className="flex items-center gap-4 absolute left-1/2 -translate-x-1/2">
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
