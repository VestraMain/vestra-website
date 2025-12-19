import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Navbar,
  Hero,
  CTASection,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea
} from "@/components";
import { 
  Award, 
  CheckCircle, 
  FileText, 
  Users, 
  Building,
  Clock,
  ArrowRight,
  Shield,
  Target,
  Briefcase,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const certificationTypes = [
  {
    type: "M/WBE",
    fullName: "Minority/Women Business Enterprise",
    description: "Certification for businesses owned and controlled by minorities or women",
    requirements: ["51% ownership by qualifying individuals", "Daily operational control", "Personal net worth requirements"],
    icon: Users
  },
  {
    type: "SBE",
    fullName: "Small Business Enterprise", 
    description: "Certification for qualifying small businesses based on size and revenue",
    requirements: ["Meet size standards", "Revenue thresholds", "Independent operation"],
    icon: Building
  },
  {
    type: "DBE",
    fullName: "Disadvantaged Business Enterprise",
    description: "Federal certification for socially and economically disadvantaged businesses",
    requirements: ["Social disadvantage", "Economic disadvantage", "Good character"],
    icon: Shield
  },
  {
    type: "EBE",
    fullName: "Emerging Business Enterprise",
    description: "Certification for newer businesses meeting emerging criteria",
    requirements: ["Recently established", "Growth potential", "Size limitations"],
    icon: Target
  },
  {
    type: "ACDBE",
    fullName: "Airport Concessions DBE",
    description: "Specialized certification for airport concession opportunities",
    requirements: ["DBE eligibility", "Airport experience preferred", "Financial capacity"],
    icon: Globe
  }
];

const processSteps = [
  {
    step: "Assessment",
    title: "Eligibility Assessment",
    description: "We review your business structure, ownership, and financials to determine which certifications you qualify for.",
    duration: "2-3 days"
  },
  {
    step: "Checklist",
    title: "Document Checklist",
    description: "Receive a comprehensive checklist of required documents and guidance on obtaining missing items.",
    duration: "1 day"
  },
  {
    step: "Preparation",
    title: "Document Preparation", 
    description: "Our team helps you prepare, organize, and review all required documentation for submission.",
    duration: "2-3 weeks"
  },
  {
    step: "Submission",
    title: "Application Submission",
    description: "We submit your complete application and manage all communication with certification agencies.",
    duration: "1-2 days"
  },
  {
    step: "Follow-through",
    title: "Follow-Through Support",
    description: "Ongoing support through the review process, responding to requests, and ensuring approval.",
    duration: "3-6 months"
  }
];

export default function Certify() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownershipStructure: "",
    ownerEthnicity: "",
    ownerGender: "",
    yearsInBusiness: "",
    annualRevenue: "",
    employeeCount: "",
    industryType: "",
    targetCertifications: [] as string[],
    businessGoals: "",
    email: "",
    phone: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Certification Application Submitted!",
      description: "Our certification specialists will review your information and contact you within 24 hours."
    });
    console.log("Certification application:", formData);
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCertificationToggle = (certType: string) => {
    setFormData(prev => ({
      ...prev,
      targetCertifications: prev.targetCertifications.includes(certType)
        ? prev.targetCertifications.filter(c => c !== certType)
        : [...prev.targetCertifications, certType]
    }));
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Certifications that Open Doors."
        subtitle="Navigate Complex Certification Processes with Expert Guidance"
        description="From M/WBE to DBE certifications, we handle the entire process so you can focus on growing your business. Our specialists have helped hundreds of businesses achieve certification and unlock new opportunities."
        primaryCta="Get Certified"
        secondaryCta="Check Eligibility"
        onPrimaryClick={() => document.getElementById('certification-form')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('certification-types')?.scrollIntoView({ behavior: 'smooth' })}
        showVideo={false}
        features={[
          "Expert guidance through every step",
          "Document preparation & submission", 
          "Multi-certification strategy",
          "Ongoing compliance support"
        ]}
      />

      {/* Certification Support Package */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Package */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold text-vestra-navy mb-4">
                  Comprehensive Certification Support
                </h2>
                <p className="text-xl text-vestra-slate mb-8">
                  End-to-end support for M/WBE, SBE, DBE, EBE, and ACDBE certifications with ongoing compliance management.
                </p>
                
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-8 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Certification Package</h3>
                      <p className="text-purple-200">Complete certification support & compliance</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">$4,500</div>
                      <div className="text-purple-200 text-sm">$2,500 + $400/mo × 6 months</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-sm">Eligibility assessment & strategy</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-sm">Document preparation & review</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-sm">Application submission & tracking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-sm">Response to agency requests</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-sm">Dedicated client portal access</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-sm">Renewal reminders & support</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-vestra-navy mb-8">Our Proven Certification Process</h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={step.step} className="flex items-start bg-gray-50 rounded-xl p-6">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-vestra-navy">{step.title}</h4>
                          <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Rail CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-vestra-navy flex items-center">
                      <Award className="w-5 h-5 mr-2 text-purple-600" />
                      Ready to Get Certified?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete our eligibility assessment and we'll create your certification roadmap.
                    </p>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      onClick={() => document.getElementById('certification-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-vestra-navy">Need Guidance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Not sure which certifications are right for you? Schedule a free consultation.
                    </p>
                    <Button variant="outline" className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white">
                      Free Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Types */}
      <section className="py-20 bg-gray-50" id="certification-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Certification Types We Support
            </h2>
            <p className="text-xl text-vestra-slate">
              We specialize in the certifications that matter most for government and corporate contracting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationTypes.map((cert, index) => (
              <motion.div
                key={cert.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <cert.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-vestra-navy">{cert.type}</CardTitle>
                    <p className="text-sm text-gray-500">{cert.fullName}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-sm text-vestra-navy">Key Requirements:</h5>
                      <ul className="space-y-1">
                        {cert.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-xs text-gray-600 flex items-start">
                            <div className="w-1 h-1 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Assessment Form */}
      <section className="py-20 bg-white" id="certification-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Certification Eligibility Assessment
            </h2>
            <p className="text-xl text-vestra-slate">
              Tell us about your business and we'll determine which certifications you qualify for
            </p>
          </motion.div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessName" className="text-vestra-navy font-medium">
                      Legal Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      data-testid="input-business-name"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="ownershipStructure" className="text-vestra-navy font-medium">
                      Business Structure *
                    </Label>
                    <Select value={formData.ownershipStructure} onValueChange={(value) => handleInputChange('ownershipStructure', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-ownership-structure">
                        <SelectValue placeholder="Select structure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="s-corp">S-Corporation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="ownerEthnicity" className="text-vestra-navy font-medium">
                      Owner Ethnicity (for M/DBE qualification)
                    </Label>
                    <Select value={formData.ownerEthnicity} onValueChange={(value) => handleInputChange('ownerEthnicity', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-owner-ethnicity">
                        <SelectValue placeholder="Select ethnicity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="african-american">African American</SelectItem>
                        <SelectItem value="hispanic">Hispanic</SelectItem>
                        <SelectItem value="asian-pacific">Asian Pacific American</SelectItem>
                        <SelectItem value="subcontinent-asian">Subcontinent Asian American</SelectItem>
                        <SelectItem value="native-american">Native American</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="not-applicable">Not Applicable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="ownerGender" className="text-vestra-navy font-medium">
                      Owner Gender (for WBE qualification)
                    </Label>
                    <Select value={formData.ownerGender} onValueChange={(value) => handleInputChange('ownerGender', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-owner-gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="non-binary">Non-Binary</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="yearsInBusiness" className="text-vestra-navy font-medium">
                      Years in Business *
                    </Label>
                    <Select value={formData.yearsInBusiness} onValueChange={(value) => handleInputChange('yearsInBusiness', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-years-in-business">
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="annualRevenue" className="text-vestra-navy font-medium">
                      Annual Revenue *
                    </Label>
                    <Select value={formData.annualRevenue} onValueChange={(value) => handleInputChange('annualRevenue', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-annual-revenue">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-100k">$0 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                        <SelectItem value="1m-5m">$1 million - $5 million</SelectItem>
                        <SelectItem value="5m+">$5 million+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="employeeCount" className="text-vestra-navy font-medium">
                      Number of Employees *
                    </Label>
                    <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange('employeeCount', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-employee-count">
                        <SelectValue placeholder="Select count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Just me</SelectItem>
                        <SelectItem value="2-5">2-5 employees</SelectItem>
                        <SelectItem value="6-25">6-25 employees</SelectItem>
                        <SelectItem value="26-100">26-100 employees</SelectItem>
                        <SelectItem value="100+">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="industryType" className="text-vestra-navy font-medium">
                      Industry Type *
                    </Label>
                    <Select value={formData.industryType} onValueChange={(value) => handleInputChange('industryType', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-industry-type">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="professional-services">Professional Services</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="transportation">Transportation</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-vestra-navy font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-testid="input-email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-vestra-navy font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-testid="input-phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-vestra-navy font-medium">
                    Which certifications are you interested in? (Select all that apply)
                  </Label>
                  <div className="mt-3 grid md:grid-cols-3 gap-4">
                    {certificationTypes.map((cert) => (
                      <label 
                        key={cert.type} 
                        className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={formData.targetCertifications.includes(cert.type)}
                          onChange={() => handleCertificationToggle(cert.type)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          data-testid={`checkbox-${cert.type.toLowerCase()}`}
                        />
                        <div>
                          <div className="font-medium text-sm text-vestra-navy">{cert.type}</div>
                          <div className="text-xs text-gray-500">{cert.fullName}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessGoals" className="text-vestra-navy font-medium">
                    Business Goals & Target Markets *
                  </Label>
                  <Textarea
                    id="businessGoals"
                    data-testid="textarea-business-goals"
                    value={formData.businessGoals}
                    onChange={(e) => handleInputChange('businessGoals', e.target.value)}
                    rows={4}
                    className="mt-1"
                    placeholder="Describe your business goals and the types of contracts or opportunities you're targeting..."
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 px-8"
                    data-testid="button-submit-certification"
                  >
                    Start My Certification Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Ready to Unlock New Opportunities?"
        description="Don't let complex paperwork stand between you and lucrative government contracts. Our certification experts handle everything so you can focus on growing your business."
        primaryButton={{
          text: "Get Certified Now",
          onClick: () => document.getElementById('certification-form')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryButton={{
          text: "Free Consultation",
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        variant="navy"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}