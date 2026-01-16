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
          
          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <p className="text-sm text-foreground/60 italic">Last updated: January 16, 2026</p>

            {/* Who We Are */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Who We Are</h2>
              <p>
                LoveCount UK is an e-commerce business that creates personalized NFC keychains with digital love pages for couples. Our website address is: lovecount.co.uk
              </p>
              <p>
                <strong>Contact:</strong>{" "}
                <a href="mailto:support@lovecount.co.uk" className="text-primary hover:underline">
                  support@lovecount.co.uk
                </a>
              </p>
            </section>

            {/* What Personal Data We Collect */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">What Personal Data We Collect</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Information You Provide</h3>
                <p>When you purchase from us, we collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal details:</strong> Your name, email address, phone number</li>
                  <li><strong>Shipping information:</strong> Delivery address, postcode</li>
                  <li><strong>Relationship data:</strong> Partner's name, relationship start date, special message</li>
                  <li><strong>Photos:</strong> Images you upload for your personalized page (up to 15 photos)</li>
                  <li><strong>Payment information:</strong> Processed securely by Stripe (we don't store card details)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Information We Automatically Collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Website usage:</strong> Pages visited, time spent, device type (via cookies)</li>
                  <li><strong>Page interactions:</strong> Views of your love page, Story downloads (anonymized)</li>
                  <li><strong>Communication:</strong> Records of support emails for service improvement</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Data */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">How We Use Your Data</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Service Delivery (Legitimate Interest & Contract Performance)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create your personalized NFC keychain and digital love page</li>
                  <li>Process payments and manage orders</li>
                  <li>Send order confirmations, shipping updates, and renewal reminders</li>
                  <li>Provide customer support and handle returns/refunds</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Marketing Communications (Consent Only)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Send newsletters about new products or special offers</li>
                  <li>Share relationship tips and inspiration content</li>
                  <li><strong>You can unsubscribe anytime</strong> – we'll never spam you</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Legal Compliance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain records for tax and accounting purposes</li>
                  <li>Respond to legal requests if required</li>
                  <li>Prevent fraud and protect our business</li>
                </ul>
              </div>
            </section>

            {/* Legal Basis for Processing */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Legal Basis for Processing</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/20">
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Data Type</th>
                      <th className="text-left py-2 pr-4 font-semibold text-foreground">Legal Basis</th>
                      <th className="text-left py-2 font-semibold text-foreground">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/70">
                    <tr className="border-b border-foreground/10">
                      <td className="py-2 pr-4">Order & shipping details</td>
                      <td className="py-2 pr-4">Contract performance</td>
                      <td className="py-2">Deliver your product</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-2 pr-4">Payment information</td>
                      <td className="py-2 pr-4">Contract performance</td>
                      <td className="py-2">Process payment</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-2 pr-4">Photos & relationship data</td>
                      <td className="py-2 pr-4">Contract performance</td>
                      <td className="py-2">Create personalized content</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-2 pr-4">Marketing emails</td>
                      <td className="py-2 pr-4">Consent</td>
                      <td className="py-2">Send promotional content</td>
                    </tr>
                    <tr className="border-b border-foreground/10">
                      <td className="py-2 pr-4">Support communications</td>
                      <td className="py-2 pr-4">Legitimate interest</td>
                      <td className="py-2">Provide customer service</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Website analytics</td>
                      <td className="py-2 pr-4">Legitimate interest</td>
                      <td className="py-2">Improve our website</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Data Storage & Security */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Data Storage & Security</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Where Your Data Is Stored</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Primary storage:</strong> EU/UK servers (GDPR compliant hosting)</li>
                  <li><strong>Photos:</strong> Secure cloud storage with encryption</li>
                  <li><strong>Payments:</strong> Processed by Stripe (PCI DSS compliant)</li>
                  <li><strong>Analytics:</strong> Anonymized data only</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">How We Protect Your Data</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Industry-standard SSL encryption for all data transmission</li>
                  <li>Secure server access with multi-factor authentication</li>
                  <li>Regular security audits and updates</li>
                  <li>Staff training on data protection best practices</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Data Retention Periods</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-foreground/20">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Data Type</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Retention Period</th>
                        <th className="text-left py-2 font-semibold text-foreground">Why</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground/70">
                      <tr className="border-b border-foreground/10">
                        <td className="py-2 pr-4"><strong>Photos</strong></td>
                        <td className="py-2 pr-4">1 year after page expiry</td>
                        <td className="py-2">Service delivery</td>
                      </tr>
                      <tr className="border-b border-foreground/10">
                        <td className="py-2 pr-4"><strong>Order details</strong></td>
                        <td className="py-2 pr-4">7 years</td>
                        <td className="py-2">Tax/legal requirements</td>
                      </tr>
                      <tr className="border-b border-foreground/10">
                        <td className="py-2 pr-4"><strong>Page content</strong></td>
                        <td className="py-2 pr-4">Until cancelled/expired</td>
                        <td className="py-2">Active service provision</td>
                      </tr>
                      <tr className="border-b border-foreground/10">
                        <td className="py-2 pr-4"><strong>Marketing consent</strong></td>
                        <td className="py-2 pr-4">Until withdrawn</td>
                        <td className="py-2">Ongoing communications</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4"><strong>Support emails</strong></td>
                        <td className="py-2 pr-4">3 years</td>
                        <td className="py-2">Customer service history</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Sharing Your Data */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Sharing Your Data</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">We Share With</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Stripe:</strong> Payment processing (PCI compliant)</li>
                  <li><strong>Shipping providers:</strong> Delivery address only (Royal Mail/DPD)</li>
                  <li><strong>Airtable:</strong> Secure database hosting (EU servers)</li>
                  <li><strong>Email provider:</strong> Order confirmations only (Loops/Zoho Mail)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">We Never Share</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your photos with anyone else</li>
                  <li>Personal details for marketing by others</li>
                  <li>Relationship information with third parties</li>
                  <li>Any data for profit or non-essential purposes</li>
                </ul>
              </div>
            </section>

            {/* Your Rights Under GDPR */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Your Rights Under GDPR</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Access & Control</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to access:</strong> Request copy of all data we hold about you</li>
                  <li><strong>Right to rectification:</strong> Correct any inaccurate information</li>
                  <li><strong>Right to erasure:</strong> Delete your data (subject to legal obligations)</li>
                  <li><strong>Right to portability:</strong> Receive your data in machine-readable format</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Communication Control</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to object:</strong> Stop marketing communications anytime</li>
                  <li><strong>Right to restrict:</strong> Limit how we process your data</li>
                  <li><strong>Right to withdraw consent:</strong> Unsubscribe from marketing instantly</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">How to Exercise Your Rights</h3>
                <p>
                  Email us at:{" "}
                  <a href="mailto:support@lovecount.co.uk" className="text-primary hover:underline">
                    support@lovecount.co.uk
                  </a>{" "}
                  with "Data Request" in the subject line
                </p>
                <p>We'll respond within 30 days (usually much faster)</p>
              </div>
            </section>

            {/* Cookies & Tracking */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Cookies & Tracking</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Essential Cookies (Always Active)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Shopping cart:</strong> Remember items during checkout</li>
                  <li><strong>Security:</strong> Protect against fraud and attacks</li>
                  <li><strong>Preferences:</strong> Remember your choices (language, etc.)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Analytics Cookies (You Can Opt Out)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Understand website usage (anonymized)</li>
                  <li><strong>Facebook Pixel:</strong> Measure advertising effectiveness</li>
                  <li><strong>TikTok Pixel:</strong> Track marketing campaign performance</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Marketing Cookies (Your Choice)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Retargeting:</strong> Show relevant ads on social media</li>
                  <li><strong>Conversion tracking:</strong> Measure which ads work best</li>
                </ul>
                <p>You can control cookies through your browser settings or our cookie banner.</p>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Stripe (Payments)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Privacy policy: stripe.com/privacy</li>
                  <li>Data location: EU/US (adequacy decision)</li>
                  <li>Purpose: Secure payment processing only</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Airtable (Database)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Privacy policy: airtable.com/privacy</li>
                  <li>Data location: EU servers</li>
                  <li>Purpose: Order and customer data management</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Social Media Platforms</h3>
                <p>When you interact with our social media or use sharing features:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Instagram/TikTok:</strong> Subject to their privacy policies</li>
                  <li><strong>Sharing:</strong> We only see public interactions (likes, comments, tags)</li>
                </ul>
              </div>
            </section>

            {/* International Transfers */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">International Transfers</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Primary storage:</strong> EU/UK only</li>
                <li><strong>Payment processing:</strong> Stripe (EU-US adequacy decision)</li>
                <li><strong>Support tools:</strong> EU-based providers where possible</li>
                <li><strong>Safeguards:</strong> Standard contractual clauses for any non-EU transfers</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Children's Privacy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Age requirement:</strong> 18+ to purchase (or parental consent)</li>
                <li><strong>Child photos:</strong> Only include with proper consent</li>
                <li><strong>Family gifts:</strong> Parents responsible for children's image rights</li>
                <li><strong>Data protection:</strong> Extra care with any under-18 information</li>
              </ul>
            </section>

            {/* Data Breaches */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Data Breaches</h2>
              <p>If we experience a data breach:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Immediate action:</strong> Secure systems and assess impact</li>
                <li><strong>Notification:</strong> Inform ICO within 72 hours if required</li>
                <li><strong>Customer notification:</strong> Direct contact if you're affected</li>
                <li><strong>Prevention:</strong> Learn and improve security measures</li>
              </ul>
            </section>

            {/* Changes to This Policy */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Changes to This Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Updates:</strong> We may update this policy occasionally</li>
                <li><strong>Notification:</strong> Major changes communicated by email</li>
                <li><strong>Acceptance:</strong> Continued use means you accept changes</li>
                <li><strong>Version control:</strong> Date at top shows last update</li>
              </ul>
            </section>

            {/* Contact & Complaints */}
            <section className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Contact & Complaints</h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Contact Us</h3>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@lovecount.co.uk" className="text-primary hover:underline">
                    support@lovecount.co.uk
                  </a>
                </p>
                <p><strong>Subject line:</strong> Use "Privacy" for data protection queries</p>
                <p><strong>Response time:</strong> Within 24 hours</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Complaints</h3>
                <p>If you're unhappy with how we handle your data:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Contact us first:</strong> We want to resolve issues quickly</li>
                  <li><strong>ICO complaint:</strong> You can complain to the UK data protection authority</li>
                  <li><strong>ICO website:</strong> ico.org.uk</li>
                  <li><strong>ICO helpline:</strong> 0303 123 1113</li>
                </ol>
              </div>
            </section>

            <p className="text-sm text-foreground/60 italic border-t border-foreground/10 pt-6">
              This privacy policy complies with UK GDPR, Data Protection Act 2018, and Privacy and Electronic Communications Regulations.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-foreground/10">
        <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
            <a 
              href="mailto:support@lovecount.co.uk" 
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <span className="text-foreground">Privacy Policy</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
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

export default PrivacyPolicy;
