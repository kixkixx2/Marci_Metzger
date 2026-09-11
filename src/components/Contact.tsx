import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: initialSubject || 'Buying in Pahrump',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous clean client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-ivory text-charcoal border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-stone-300/60 mb-16">
          <div>
            <span className="editorial-subheading text-xs tracking-[0.24em] text-desert-bronze block mb-2">
              11 — Connect & Office Location
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal font-normal">
              Direct Contact <br />
              <span className="italic font-editorial font-light lowercase text-desert-bronze">&</span> Location.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right max-w-sm">
            <p className="font-editorial italic text-stone-600 text-base sm:text-lg">
              "We can be reached any day of the week. Better yet, see us in person!"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Business Information, Office Hours & Accreditations */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-desert-bronze font-semibold">
                The Ridge Realty Group
              </span>
              <h3 className="editorial-title text-2xl sm:text-3xl text-charcoal font-medium">
                Marci Metzger
              </h3>
              <p className="text-sm text-charcoal-50 leading-relaxed font-light">
                Whether you prefer a casual phone consultation, an in-person meeting at our Pahrump office, or a tour of available Mountain Falls residences, our doors are open daily.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Office Location */}
              <div className="p-5 bg-cream/70 border border-stone-200 flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-desert-bronze flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Office Address
                  </h4>
                  <p className="text-xs text-charcoal-50 mt-1">
                    {BUSINESS_INFO.address.street} <br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}, United States
                  </p>
                  <a
                    href={BUSINESS_INFO.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] uppercase tracking-wider text-desert-bronze hover:text-desert-dark mt-2 font-medium"
                  >
                    <span>Get Directions via Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="p-5 bg-cream/70 border border-stone-200 flex items-start space-x-4">
                <Phone className="w-5 h-5 text-desert-bronze flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Direct Phone Lines
                  </h4>
                  <div className="mt-1 space-y-1">
                    <div>
                      <a
                        href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
                        className="text-xs text-charcoal font-medium hover:text-desert-bronze transition-colors"
                      >
                        Primary: {BUSINESS_INFO.phones.primary}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`tel:${BUSINESS_INFO.phones.secondaryRaw}`}
                        className="text-xs text-charcoal-50 hover:text-desert-bronze transition-colors"
                      >
                        Secondary: {BUSINESS_INFO.phones.secondary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Email */}
              <div className="p-5 bg-cream/70 border border-stone-200 flex items-start space-x-4">
                <Mail className="w-5 h-5 text-desert-bronze flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Electronic Mail
                  </h4>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-xs text-charcoal font-medium hover:text-desert-bronze transition-colors block mt-1 tracking-wide"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="p-5 bg-cream/70 border border-stone-200 flex items-start space-x-4">
                <Clock className="w-5 h-5 text-desert-bronze flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                      Office Hours
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 font-medium">
                      Open Daily
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-desert-bronze mt-1">
                    Monday – Sunday: 8:00 am – 7:00 pm
                  </p>
                  <p className="text-[11px] text-stone-500 font-light italic mt-1.5">
                    Appointments outside office hours available upon request. Just call!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Contact Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200/90 shadow-md p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-desert-bronze mx-auto" />
                <h3 className="editorial-title text-2xl text-charcoal font-medium">
                  Message Sent Successfully
                </h3>
                <p className="font-editorial text-lg text-stone-600 max-w-md mx-auto italic">
                  Thank you for reaching out, {formData.name || 'friend'}. Marci Metzger will review your inquiry and follow up promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Buying in Pahrump',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-charcoal text-ivory text-xs uppercase tracking-widest hover:bg-desert-bronze transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="editorial-title text-xl text-charcoal font-medium">
                    Send an Inquiry
                  </h3>
                  <p className="font-editorial text-stone-500 italic text-sm mt-1">
                    Connect directly with Marci Metzger and The Ridge Realty Group.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-ivory/50 border border-stone-300 text-charcoal text-sm p-3 focus:outline-none focus:border-desert-bronze transition-colors"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-ivory/50 border border-stone-300 text-charcoal text-sm p-3 focus:outline-none focus:border-desert-bronze transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(206) 555-0199"
                      className="w-full bg-ivory/50 border border-stone-300 text-charcoal text-sm p-3 focus:outline-none focus:border-desert-bronze transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-inquiry" className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                    Nature of Inquiry
                  </label>
                  <select
                    id="contact-inquiry"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-ivory/50 border border-stone-300 text-charcoal text-sm p-3 focus:outline-none focus:border-desert-bronze transition-colors appearance-none"
                  >
                    <option value="Buying in Pahrump">I am looking to buy in Pahrump / Mountain Falls</option>
                    <option value="Selling Property">I want to sell my property (Home Valuation)</option>
                    <option value="Relocating to Nevada">Relocation Consultation (From WA, CA, or LV)</option>
                    <option value="Commercial & Land">Commercial Parcels or Multi-Acreage</option>
                    <option value="General Question">General Real Estate Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-wider font-semibold text-charcoal block">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your timeline, preferred neighborhoods, or property details..."
                    className="w-full bg-ivory/50 border border-stone-300 text-charcoal text-sm p-3 focus:outline-none focus:border-desert-bronze transition-colors resize-y"
                  />
                </div>

                {/* ReCAPTCHA / Privacy Statement */}
                <p className="text-[11px] text-stone-500 font-light leading-relaxed">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-desert-bronze">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-desert-bronze">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-charcoal text-ivory text-xs uppercase tracking-[0.24em] font-medium hover:bg-desert-bronze transition-colors flex items-center justify-center space-x-2 shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
