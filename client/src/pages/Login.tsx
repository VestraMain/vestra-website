import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Navbar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label
} from "@/components";
import { 
  User, 
  Lock,
  ExternalLink,
  HelpCircle,
  Mail,
  Phone,
  Shield,
  Key,
  LogIn,
  UserPlus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Submitted",
      description: "Redirecting to your client portal..."
    });
    // In a real app, this would handle authentication
    console.log("Login attempt:", loginData);
  };

  const handleInputChange = (field: string, value: string) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-vestra-navy via-vestra-blue to-vestra-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <Shield className="w-16 h-16 text-vestra-orange mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Portal Access
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Access your project dashboard, documents, reports, and communication hub. 
              Stay connected with your Vestra Strategies team and track your business development progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-vestra-navy flex items-center">
                    <LogIn className="w-6 h-6 mr-3 text-vestra-orange" />
                    Client Login
                  </CardTitle>
                  <p className="text-gray-600">
                    Access your personalized business development dashboard
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <Label htmlFor="email" className="text-vestra-navy font-medium flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        data-testid="input-login-email"
                        value={loginData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="password" className="text-vestra-navy font-medium flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        data-testid="input-login-password"
                        value={loginData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="mt-2"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-vestra-orange focus:ring-vestra-orange mr-2" />
                        <span className="text-gray-600">Remember me</span>
                      </label>
                      <button 
                        type="button" 
                        className="text-vestra-orange hover:text-vestra-orange/80 font-medium"
                        data-testid="button-forgot-password"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-vestra-orange hover:bg-vestra-orange/90"
                      data-testid="button-login"
                    >
                      Sign In to Portal
                      <LogIn className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Go High Level Access */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8"
              >
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Key className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-vestra-navy mb-2">Go High Level Members</h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Access your advanced CRM dashboard, automation settings, and lead management tools.
                        </p>
                        <Button 
                          variant="outline" 
                          className="border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
                          onClick={() => window.open('https://app.gohighlevel.com', '_blank')}
                          data-testid="button-ghl-access"
                        >
                          Go High Level Portal
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Help & Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* New Client Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-vestra-navy flex items-center">
                    <UserPlus className="w-5 h-5 mr-3 text-vestra-orange" />
                    New Client?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Your client portal access will be provided after you begin working with our team. 
                    Ready to get started with professional business development services?
                  </p>
                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-vestra-navy hover:bg-vestra-navy/90"
                      onClick={() => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")}
                      data-testid="button-schedule-consultation"
                    >
                      Schedule Free Consultation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                      onClick={() => window.location.href = "/services"}
                      data-testid="button-view-services"
                    >
                      View Our Services
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-vestra-navy flex items-center">
                    <HelpCircle className="w-5 h-5 mr-3 text-vestra-orange" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-5 h-5 text-vestra-orange mr-3" />
                      <div>
                        <p className="font-semibold text-sm text-vestra-navy">Email Support</p>
                        <p className="text-sm text-gray-600">main@vestrastrategies.com</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-5 h-5 text-vestra-orange mr-3" />
                      <div>
                        <p className="font-semibold text-sm text-vestra-navy">Phone Support</p>
                        <p className="text-sm text-gray-600">(720) 383-4221</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-sm text-vestra-navy mb-2">Business Hours</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><span className="font-medium">Mon-Fri:</span> 8:00 AM - 6:00 PM MT</p>
                      <p><span className="font-medium">Weekend:</span> By appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Portal Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-vestra-navy">What's in Your Portal?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-vestra-orange rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Real-time project progress tracking</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-vestra-orange rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Document storage and sharing</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-vestra-orange rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Direct messaging with your team</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-vestra-orange rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Performance analytics and reports</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-vestra-orange rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Appointment scheduling</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-vestra-orange rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Resource library access</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <Shield className="w-12 h-12 text-vestra-orange mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-vestra-navy mb-4">Your Data is Secure</h2>
              <p className="text-gray-600 mb-6">
                We use enterprise-grade security measures to protect your business information, 
                including SSL encryption, secure data storage, and regular security audits.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium text-vestra-navy">SSL Encrypted</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Lock className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium text-vestra-navy">Secure Storage</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <User className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="font-medium text-vestra-navy">Private Access</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}