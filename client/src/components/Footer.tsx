import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { name: "Business Startup", href: "/start" },
  { name: "Growth Strategy", href: "/grow" },
  { name: "Certifications", href: "/certify" },
  { name: "Contract Opportunities", href: "/contracts" },
  { name: "Capital Solutions", href: "/capital" },
  { name: "Professional Services", href: "/services" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Success Stories", href: "/resources#case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const resourceLinks = [
  { name: "Business Guides", href: "/resources#guides" },
  { name: "Webinars", href: "/resources#webinars" },
  { name: "Tools & Calculators", href: "/resources#tools" },
  { name: "Templates", href: "/resources#templates" },
  { name: "Industry Reports", href: "/resources#reports" },
  { name: "FAQ", href: "/faq" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-vestra-navy text-white" data-testid="footer-main">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Stay Ahead with Business Insights
              </h3>
              <p className="text-gray-300 text-lg">
                Get exclusive business tips, funding opportunities, and industry insights 
                delivered directly to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vestra-orange focus:border-transparent"
                data-testid="input-newsletter-email"
              />
              <Button className="bg-vestra-orange hover:bg-vestra-orange/90 text-white px-6 py-3">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <img 
                src="/assets/vestra-logo-horizontal_1755105745518.png"
                alt="Vestra Strategies"
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Empowering businesses with strategic solutions, certifications, and capital 
              to achieve sustainable growth and success. Your trusted partner in business transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-vestra-orange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">1905 Sherman St Ste 200</p>
                  <p className="text-gray-300">Denver, CO 80003</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-vestra-orange mr-3 flex-shrink-0" />
                <a href="tel:+17203834221" className="text-gray-300 hover:text-white transition-colors">
                  (720) 383-4221
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-vestra-orange mr-3 flex-shrink-0" />
                <a href="mailto:main@vestrastrategies.com" className="text-gray-300 hover:text-white transition-colors">
                  main@vestrastrategies.com
                </a>
              </div>

              <div className="flex items-center">
                <Clock className="w-5 h-5 text-vestra-orange mr-3 flex-shrink-0" />
                <p className="text-gray-300">Mon - Fri: 9AM - 6PM EST</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/vestrastrategies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-vestra-orange rounded-full flex items-center justify-center hover:bg-vestra-orange/80 transition-colors"
                data-testid="link-social-linkedin"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/vestrastrategies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-vestra-orange rounded-full flex items-center justify-center hover:bg-vestra-orange/80 transition-colors"
                data-testid="link-social-instagram"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-vestra-orange transition-colors"
                    data-testid={`link-footer-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-vestra-orange transition-colors"
                    data-testid={`link-footer-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-vestra-orange transition-colors"
                    data-testid={`link-footer-resource-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-300">
              &copy; 2024 Vestra Strategies. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-vestra-orange transition-colors text-sm"
                  data-testid={`link-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}