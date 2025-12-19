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
  FileText, 
  CheckCircle, 
  Search, 
  Target, 
  Award,
  TrendingUp,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Building,
  Briefcase
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceIncludes = [
  "Daily bid opportunity scans",
  "Proposal strategy & development", 
  "Technical writing & submission",
  "SAM profile optimization",
  "Capability statement creation",
  "Past performance documentation",
  "Pricing strategy consultation",
  "Submission tracking & follow-up"
];

const contractTypes = [
  {
    type: "Federal Contracts",
    description: "Direct federal agency contracts and subcontracting opportunities",
    avgValue: "$25K - $500M",
    icon: Building,
    examples: ["GSA Schedules", "OASIS contracts", "SeaPort-e", "CIO-SP3"]
  },
  {
    type: "State & Local",
    description: "State, county, and municipal contracting opportunities",
    avgValue: "$10K - $50M", 
    icon: Users,
    examples: ["CDOT projects", "City services", "County contracts", "School districts"]
  },
  {
    type: "Prime Contracting",
    description: "Direct contracts as the primary contractor",
    avgValue: "$50K - $100M",
    icon: Award,
    examples: ["Construction", "IT services", "Consulting", "Professional services"]
  },
  {
    type: "Subcontracting",
    description: "Subcontractor opportunities with established primes",
    avgValue: "$5K - $10M",
    icon: Briefcase,
    examples: ["Specialized trades", "Support services", "Material supply", "Technical expertise"]
  }
];

const successMetrics = [
  {
    title: "Higher Win Rate",
    description: "Focus on winnable bids with better targeting and positioning",
    metric: "30-40% win rate",
    icon: Target
  },
  {
    title: "Faster Bidding",
    description: "Streamlined processes and templates reduce bid preparation time",
    metric: "50% time savings",
    icon: Clock
  },
  {
    title: "Better Positioning",
    description: "Strategic partnerships and teaming arrangements improve competitiveness",
    metric: "3x more opportunities",
    icon: TrendingUp
  }
];

export default function Contracts() {
  const [formData, setFormData] = useState({
    businessName: "",
    primaryTrades: [] as string[],
    targetAreas: "",
    contractValue: "",
    bidHistory: "",
    certifications: [] as string[],
    capabilities: "",
    teamingInterest: "",
    email: "",
    phone: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Contracting Assessment Submitted!",
      description: "Our contracting specialists will review your profile and contact you within 24 hours with opportunities."
    });
    console.log("Contracting application:", formData);
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: 'primaryTrades' | 'certifications', item: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const tradeOptions = [
    "Construction", "IT Services", "Professional Services", "Engineering", 
    "Architecture", "Consulting", "Transportation", "Healthcare", 
    "Environmental", "Security", "Facilities Management", "Training"
  ];

  const certificationOptions = [
    "M/WBE", "SBE", "DBE", "ACDBE", "EBE", "8(a)", "HUBZone", "VOSB", "SDVOSB", "WOSB"
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Find. Bid. Win."
        subtitle="Government Contract Opportunities Made Simple"
        description="Stop missing out on lucrative government contracts. Our bidding specialists help you find the right opportunities, craft winning proposals, and manage the entire submission process."
        primaryCta="Start Winning Bids"
        secondaryCta="See Opportunities"
        onPrimaryClick={() => document.getElementById('contracting-form')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('contract-types')?.scrollIntoView({ behavior: 'smooth' })}
        showVideo={false}
        features={[
          "Daily opportunity scanning",
          "Expert proposal development", 
          "Complete submission management",
          "Strategic teaming support"
        ]}
      />

      {/* Bidding & Support Package */}
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
                  Complete Bidding & Support Services
                </h2>
                <p className="text-xl text-vestra-slate mb-8">
                  From opportunity identification to proposal submission, we handle every aspect of government contracting.
                </p>
                
                <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-8 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Bidding Support Package</h3>
                      <p className="text-orange-100">Complete contracting support & bid management</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">$700/Month</div>
                      <div className="text-orange-100 text-sm">Complete monthly support</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceIncludes.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Success Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-vestra-navy mb-8">Focus on Winnable Bids</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-vestra-navy mb-2">{metric.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{metric.description}</p>
                      <div className="text-orange-600 font-semibold text-lg">{metric.metric}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Rail CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-vestra-navy flex items-center">
                      <Search className="w-5 h-5 mr-2 text-orange-600" />
                      Ready to Start Bidding?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete our contracting assessment and we'll identify your best opportunities.
                    </p>
                    <Button 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => document.getElementById('contracting-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-vestra-navy">Contract Database Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Get access to our proprietary database of active and upcoming opportunities.
                    </p>
                    <Button variant="outline" className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white">
                      View Opportunities
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20 bg-gray-50" id="contract-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Contract Opportunities We Support
            </h2>
            <p className="text-xl text-vestra-slate">
              From federal agencies to local municipalities, we help you access all levels of government contracting
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contractTypes.map((contract, index) => (
              <motion.div
                key={contract.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <contract.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{contract.avgValue}</div>
                        <div className="text-xs text-gray-500">Typical range</div>
                      </div>
                    </div>
                    <CardTitle className="text-vestra-navy">{contract.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{contract.description}</p>
                    <div>
                      <h5 className="font-semibold text-sm text-vestra-navy mb-2">Examples:</h5>
                      <div className="flex flex-wrap gap-2">
                        {contract.examples.map((example, exampleIndex) => (
                          <span 
                            key={exampleIndex} 
                            className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contracting Assessment Form */}
      <section className="py-20 bg-white" id="contracting-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Government Contracting Assessment
            </h2>
            <p className="text-xl text-vestra-slate">
              Tell us about your business capabilities and we'll identify your best contracting opportunities
            </p>
          </motion.div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessName" className="text-vestra-navy font-medium">
                      Business Name *
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
                    <Label htmlFor="contractValue" className="text-vestra-navy font-medium">
                      Target Contract Value Range *
                    </Label>
                    <Select value={formData.contractValue} onValueChange={(value) => handleInputChange('contractValue', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-contract-value">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-100k">$25,000 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                        <SelectItem value="1m-5m">$1 million - $5 million</SelectItem>
                        <SelectItem value="5m+">$5 million+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="targetAreas" className="text-vestra-navy font-medium">
                      Target Geographic Areas *
                    </Label>
                    <Input
                      id="targetAreas"
                      data-testid="input-target-areas"
                      value={formData.targetAreas}
                      onChange={(e) => handleInputChange('targetAreas', e.target.value)}
                      placeholder="e.g., Colorado, Rocky Mountain Region, National"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="bidHistory" className="text-vestra-navy font-medium">
                      Government Contracting Experience *
                    </Label>
                    <Select value={formData.bidHistory} onValueChange={(value) => handleInputChange('bidHistory', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-bid-history">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No prior experience</SelectItem>
                        <SelectItem value="some-bids">Submitted a few bids</SelectItem>
                        <SelectItem value="regular-bidder">Regular bidder, few wins</SelectItem>
                        <SelectItem value="experienced">Experienced with several wins</SelectItem>
                        <SelectItem value="established">Established contractor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="teamingInterest" className="text-vestra-navy font-medium">
                      Interest in Teaming Arrangements *
                    </Label>
                    <Select value={formData.teamingInterest} onValueChange={(value) => handleInputChange('teamingInterest', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-teaming-interest">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prime-only">Prime contractor only</SelectItem>
                        <SelectItem value="sub-only">Subcontractor only</SelectItem>
                        <SelectItem value="both">Both prime and sub opportunities</SelectItem>
                        <SelectItem value="joint-ventures">Joint ventures</SelectItem>
                        <SelectItem value="not-interested">Not interested in teaming</SelectItem>
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
                    Primary Trades/Services (Select all that apply) *
                  </Label>
                  <div className="mt-3 grid md:grid-cols-3 gap-3">
                    {tradeOptions.map((trade) => (
                      <label 
                        key={trade} 
                        className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={formData.primaryTrades.includes(trade)}
                          onChange={() => handleArrayToggle('primaryTrades', trade)}
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                          data-testid={`checkbox-trade-${trade.toLowerCase().replace(/[\s/]/g, '-')}`}
                        />
                        <span className="text-sm font-medium text-vestra-navy">{trade}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-vestra-navy font-medium">
                    Current Certifications (Select all that apply)
                  </Label>
                  <div className="mt-3 grid md:grid-cols-5 gap-3">
                    {certificationOptions.map((cert) => (
                      <label 
                        key={cert} 
                        className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={formData.certifications.includes(cert)}
                          onChange={() => handleArrayToggle('certifications', cert)}
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                          data-testid={`checkbox-cert-${cert.toLowerCase()}`}
                        />
                        <span className="text-sm font-medium text-vestra-navy">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="capabilities" className="text-vestra-navy font-medium">
                    Key Capabilities & Past Performance *
                  </Label>
                  <Textarea
                    id="capabilities"
                    data-testid="textarea-capabilities"
                    value={formData.capabilities}
                    onChange={(e) => handleInputChange('capabilities', e.target.value)}
                    rows={4}
                    className="mt-1"
                    placeholder="Describe your key capabilities, notable projects, and relevant past performance..."
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 px-8"
                    data-testid="button-submit-contracting"
                  >
                    Find My Opportunities
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
        title="Ready to Win More Government Contracts?"
        description="Stop leaving money on the table. Our contracting experts help you identify the right opportunities, craft winning proposals, and maximize your success rate."
        primaryButton={{
          text: "Start Winning Bids",
          onClick: () => document.getElementById('contracting-form')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryButton={{
          text: "View Current Opportunities",
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        variant="orange"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}