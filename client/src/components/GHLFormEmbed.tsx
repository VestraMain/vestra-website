import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GHLFormEmbedProps {
  formId?: string;
  title?: string;
  description?: string;
  height?: number;
  showTitle?: boolean;
  containerClass?: string;
  onFormSubmit?: (data: any) => void;
  fallbackForm?: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  serviceInterest: string;
}

export default function GHLFormEmbed({
  formId = "your-ghl-form-id",
  title = "Get Started Today",
  description = "Fill out the form below and our team will contact you within 24 hours to discuss your business needs.",
  height = 600,
  showTitle = true,
  containerClass = "",
  onFormSubmit,
  fallbackForm = true
}: GHLFormEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    serviceInterest: ""
  });

  useEffect(() => {
    // Simulate loading time and check if GHL form is available
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In a real implementation, you would check if the GHL script loaded successfully
      // For now, we'll show the fallback form as a demonstration
      if (fallbackForm) {
        setShowFallback(true);
      } else {
        setHasError(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [fallbackForm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send this data to your backend
      // which would then integrate with Go High Level's API
      console.log("Form submitted:", formData);
      
      onFormSubmit?.(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center ${containerClass}`}
        data-testid="ghl-form-success"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-vestra-navy mb-4">
          Thank You for Your Interest!
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We've received your information and will contact you within 24 hours to discuss 
          how we can help transform your business. Check your email for a confirmation message.
        </p>
        
        <div className="bg-vestra-orange/10 rounded-lg p-4 mb-6">
          <p className="text-sm text-vestra-navy font-medium">
            📧 Confirmation sent to: {formData.email}
          </p>
        </div>

        <Button
          className="bg-vestra-orange hover:bg-vestra-orange/90 text-white"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              company: "",
              message: "",
              serviceInterest: ""
            });
          }}
          data-testid="button-submit-another"
        >
          Submit Another Form
        </Button>
      </motion.div>
    );
  }

  return (
    <div className={`${containerClass}`} data-testid="ghl-form-container">
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-vestra-navy mb-4" data-testid="ghl-form-title">
            {title}
          </h2>
          <p className="text-lg text-vestra-slate max-w-2xl mx-auto" data-testid="ghl-form-description">
            {description}
          </p>
        </motion.div>
      )}

      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 text-center"
          style={{ height: height }}
          data-testid="ghl-form-loading"
        >
          <Loader2 className="w-8 h-8 animate-spin text-vestra-orange mx-auto mb-4" />
          <p className="text-gray-600">Loading form...</p>
        </motion.div>
      ) : hasError && !showFallback ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg border border-red-200 p-12 text-center"
          data-testid="ghl-form-error"
        >
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Form Temporarily Unavailable
          </h3>
          <p className="text-gray-600 mb-6">
            We're experiencing technical difficulties with our form. Please contact us directly.
          </p>
          <Button
            className="bg-vestra-orange hover:bg-vestra-orange/90 text-white"
            data-testid="button-contact-direct"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Contact Us Directly
          </Button>
        </motion.div>
      ) : showFallback ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          data-testid="ghl-form-fallback"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vestra-orange focus:border-transparent transition-all duration-300"
                  placeholder="Enter your first name"
                  data-testid="input-first-name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vestra-orange focus:border-transparent transition-all duration-300"
                  placeholder="Enter your last name"
                  data-testid="input-last-name"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vestra-orange focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vestra-orange focus:border-transparent transition-all duration-300"
                  placeholder="(720) 383-4221"
                  data-testid="input-phone"
                />
              </div>
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vestra-orange focus:border-transparent transition-all duration-300"
                placeholder="Your company name"
                data-testid="input-company"
              />
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Interest
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={formData.serviceInterest}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vestra-orange focus:border-transparent transition-all duration-300"
                data-testid="select-service-interest"
              >
                <option value="">Select a service</option>
                <option value="business-startup">Business Startup</option>
                <option value="growth-strategy">Growth Strategy</option>
                <option value="certifications">Certifications</option>
                <option value="contracts">Government Contracts</option>
                <option value="capital">Capital Solutions</option>
                <option value="consulting">General Consulting</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vestra-orange focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us about your business goals and how we can help..."
                data-testid="textarea-message"
              />
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vestra-orange hover:bg-vestra-orange/90 text-white py-4 text-lg font-semibold transition-all duration-300"
                data-testid="button-submit-form"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </motion.div>

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our privacy policy and consent to being contacted 
              by our team regarding your business needs.
            </p>
          </form>
        </motion.div>
      ) : (
        // Actual GHL Embed (placeholder for real implementation)
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          data-testid="ghl-form-embed"
        >
          <iframe
            src={`https://your-ghl-domain.com/forms/${formId}`}
            width="100%"
            height={height}
            frameBorder="0"
            title="Go High Level Contact Form"
            className="w-full"
          />
        </motion.div>
      )}
    </div>
  );
}