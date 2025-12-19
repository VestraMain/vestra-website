import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      data-testid="navbar-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link href="/" data-testid="link-logo">
              {/* Desktop Logo */}
              <img 
                src="/assets/vestra-logo-horizontal_1755105745518.png"
                alt="Vestra Strategies"
                className="hidden sm:block h-8 lg:h-10 w-auto transition-opacity duration-300"
                style={{
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
                }}
              />
              {/* Mobile Logo */}
              <img 
                src="/assets/vestra-logo-stacked_1755105745519.png"
                alt="Vestra Strategies"
                className="block sm:hidden h-10 w-auto transition-opacity duration-300"
                style={{
                  filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${
                      location === item.href
                        ? isScrolled
                          ? "text-vestra-orange"
                          : "text-vestra-orange"
                        : isScrolled
                        ? "text-vestra-slate hover:text-vestra-orange"
                        : "text-white/90 hover:text-white"
                    }`}
                    data-testid={`link-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-vestra-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  className={`border-2 transition-all duration-300 ${
                    isScrolled
                      ? "border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                      : "border-white text-vestra-navy bg-white hover:bg-vestra-navy hover:text-white"
                  }`}
                  data-testid="button-get-started"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  className="bg-vestra-orange text-white hover:bg-vestra-orange/90 transition-all duration-300"
                  data-testid="button-book-consultation"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href="/login" data-testid="link-login">
                  <Button
                    variant="ghost"
                    className={`transition-colors duration-300 ${
                      isScrolled
                        ? "text-vestra-slate hover:text-vestra-orange hover:bg-vestra-orange/10"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    Login
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-vestra-slate hover:text-vestra-orange hover:bg-vestra-orange/10"
                  : "text-white hover:text-vestra-orange hover:bg-white/10"
              }`}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl border-t"
            data-testid="menu-mobile"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-300 ${
                      location === item.href
                        ? "text-vestra-orange bg-vestra-orange/10"
                        : "text-vestra-slate hover:text-vestra-orange hover:bg-vestra-orange/10"
                    }`}
                    data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                  onClick={closeMenu}
                  data-testid="button-mobile-get-started"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  className="w-full bg-vestra-orange text-white hover:bg-vestra-orange/90"
                  onClick={closeMenu}
                  data-testid="button-mobile-consultation"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book Consultation
                </Button>

                <Link href="/login" onClick={closeMenu} data-testid="link-mobile-login">
                  <Button
                    variant="ghost"
                    className="w-full text-vestra-slate hover:text-vestra-orange hover:bg-vestra-orange/10"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}