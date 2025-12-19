import { motion } from "framer-motion";
import { 
  Navbar,
  Hero,
  CTASection,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components";
import { 
  Target, 
  Eye, 
  Heart,
  Award,
  Users,
  Building,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  CheckCircle
} from "lucide-react";

const teamMembers = [
  {
    name: "Christian Jimenez",
    title: "Founder & Chief Executive Officer",
    bio: "Visionary leader with over 15 years of experience in business development and government relations. Christian founded Vestra Strategies to bridge the gap between ambitious entrepreneurs and the opportunities that fuel sustainable growth.",
    expertise: ["Strategic Leadership", "Business Development", "Government Relations", "Executive Management"],
    image: "/api/placeholder/300/300"
  },
  {
    name: "Angelica Rodriguez", 
    title: "Chief Business Development Officer",
    bio: "Business development expert with a proven track record of identifying and cultivating growth opportunities. Angelica leads our client success initiatives and drives strategic partnerships that accelerate business expansion.",
    expertise: ["Business Development", "Strategic Partnerships", "Client Success", "Growth Strategy"],
    image: "/api/placeholder/300/300"
  },
  {
    name: "Kevin Vargas",
    title: "Director Of Government and Community Affairs", 
    bio: "Government affairs specialist with deep knowledge of public sector processes and community engagement strategies. Kevin navigates complex regulatory environments and builds meaningful government and community relationships.",
    expertise: ["Government Affairs", "Community Relations", "Regulatory Compliance", "Public Sector Engagement"],
    image: "/api/placeholder/300/300"
  },
  {
    name: "Tobias Lopez",
    title: "Strategic Partnerships Specialist",
    bio: "Partnership development expert who identifies and cultivates strategic alliances that drive mutual growth. Tobias builds relationships with key stakeholders, vendors, and organizations to expand our clients' opportunities.",
    expertise: ["Partnership Development", "Stakeholder Relations", "Alliance Management", "Opportunity Creation"],
    image: "/api/placeholder/300/300"
  }
];

const companyValues = [
  {
    title: "Results-Driven Excellence",
    description: "We measure success by your success. Every strategy, process, and recommendation is designed to deliver measurable business outcomes.",
    icon: Target
  },
  {
    title: "Transparent Partnership",
    description: "No hidden agendas or surprise fees. We believe in clear communication, honest guidance, and building long-term relationships based on trust.",
    icon: Eye
  },
  {
    title: "Community Impact",
    description: "Strong businesses build strong communities. We help you grow in ways that create positive economic impact for everyone.",
    icon: Heart
  },
  {
    title: "Expert Knowledge",
    description: "Our team combines insider government experience with proven business development expertise to give you an unfair advantage.",
    icon: Award
  },
  {
    title: "Inclusive Growth",
    description: "We specialize in helping minority-owned, women-owned, and emerging businesses access opportunities traditionally reserved for larger competitors.",
    icon: Users
  },
  {
    title: "Technology-Powered",
    description: "We leverage the latest AI and automation technologies to make your business more efficient, competitive, and profitable.",
    icon: Building
  }
];

const stats = [
  { number: "250+", label: "Businesses Supported" },
  { number: "$75M+", label: "Contracts Secured" },
  { number: "95%", label: "Certification Success Rate" },
  { number: "15+", label: "Years Combined Experience" }
];

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Building Stronger Businesses, Stronger Communities"
        subtitle="Meet the Vestra Strategies Team"
        description="We're a team of government insiders, business development experts, and technology specialists dedicated to helping entrepreneurs and small businesses achieve extraordinary growth through strategic guidance and expert execution."
        primaryCta="Meet Our Team"
        secondaryCta="Our Approach"
        onPrimaryClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('values-section')?.scrollIntoView({ behavior: 'smooth' })}
        showVideo={false}
        features={[
          "Government contracting specialists",
          "Certified business development experts", 
          "Technology and AI implementation leaders",
          "Community engagement professionals"
        ]}
      />

      {/* Company Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-vestra-navy mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To democratize access to government contracting and business development opportunities by providing expert guidance, insider knowledge, and cutting-edge technology solutions that level the playing field for small and emerging businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-vestra-navy mb-1">Expertise That Matters</h3>
                    <p className="text-gray-600">Real experience from government insiders and successful business developers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-vestra-navy mb-1">Results-Focused Approach</h3>
                    <p className="text-gray-600">We execute strategies and measure outcomes, not just provide advice</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-vestra-navy mb-1">Technology-Powered Solutions</h3>
                    <p className="text-gray-600">Leverage AI and automation to scale your business efficiently</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-vestra-navy mb-6">Our Vision</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A future where every entrepreneur, regardless of background or resources, has equal access to the knowledge, networks, and opportunities needed to build successful, sustainable businesses that strengthen their communities.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-br from-vestra-navy to-vestra-blue rounded-xl p-6 text-white"
                  >
                    <div className="text-3xl font-bold text-vestra-orange mb-2">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50" id="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vestra-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-vestra-slate max-w-3xl mx-auto">
              These principles guide every interaction, strategy, and decision we make for our clients and community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-vestra-orange/10 rounded-2xl flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-vestra-orange" />
                    </div>
                    <CardTitle className="text-vestra-navy">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white" id="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vestra-navy mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-vestra-slate max-w-3xl mx-auto">
              Our diverse team combines government experience, business expertise, and technology innovation to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-vestra-navy to-vestra-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-12 h-12 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-vestra-navy mb-1">{member.name}</h3>
                        <p className="text-vestra-orange font-semibold mb-4">{member.title}</p>
                        <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                        <div>
                          <h4 className="font-semibold text-sm text-vestra-navy mb-2">Areas of Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="text-xs bg-vestra-navy/10 text-vestra-navy px-3 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-vestra-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-200">
              Ready to transform your business? Let's start a conversation about your goals and how we can help you achieve them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-vestra-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-blue-200 mb-2">Ready to discuss your project?</p>
              <p className="text-white font-semibold">(720) 383-4221</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-vestra-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-200 mb-2">Send us your questions</p>
              <p className="text-white font-semibold">main@vestrastrategies.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-vestra-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Office</h3>
              <p className="text-blue-200 mb-2">Visit us in Denver</p>
              <p className="text-white font-semibold">Denver, Colorado</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-blue-200">
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p>8:00 AM - 6:00 PM MT</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Weekend Support</p>
                  <p>By appointment only</p>
                </div>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                Emergency support available 24/7 for active government contract deadlines
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Ready to Partner with Vestra Strategies?"
        description="Join hundreds of successful businesses who have transformed their growth with our expert guidance. Let's discuss your goals and create a strategy that delivers results."
        primaryButton={{
          text: "Schedule Free Consultation",
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        secondaryButton={{
          text: "View Our Services",
          onClick: () => window.location.href = "/services"
        }}
        variant="gradient"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}