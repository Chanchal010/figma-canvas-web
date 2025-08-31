import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Info, 
  Heart, 
  Users, 
  Globe, 
  Code, 
  Smartphone,
  Zap,
  Shield,
  Star,
  Award,
  Target,
  Mail,
  ExternalLink,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Built with mobile users in mind, ensuring perfect experience across all devices"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with instant loading and smooth animations"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security to protect your data and ensure privacy"
    },
    {
      icon: Code,
      title: "Modern Technology",
      description: "Built with the latest web technologies and best practices"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      description: "Visionary leader with 10+ years in product development",
      avatar: "AC"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      description: "Award-winning designer passionate about user experience",
      avatar: "SJ"
    },
    {
      name: "Mike Rodriguez",
      role: "CTO",
      description: "Full-stack engineer with expertise in scalable systems",
      avatar: "MR"
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      description: "Product strategist focused on user-centered solutions",
      avatar: "ED"
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to revolutionize mobile experiences" },
    { year: "2021", event: "First Product Launch", description: "Released our inaugural mobile application" },
    { year: "2022", event: "Series A Funding", description: "Raised $10M to accelerate growth and development" },
    { year: "2023", event: "50K+ Users", description: "Reached significant user milestone with global expansion" },
    { year: "2024", event: "Super Buzz Platform", description: "Launched comprehensive platform with advanced features" }
  ];

  const stats = [
    { label: "Happy Users", value: "50,000+", icon: Users },
    { label: "Countries", value: "25+", icon: Globe },
    { label: "App Rating", value: "4.9/5", icon: Star },
    { label: "Team Members", value: "45+", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-buzz rounded-2xl mb-6 shadow-buzz">
            <Info className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-buzz-text mb-6">About Super Buzz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating exceptional digital experiences that connect people, 
            inspire creativity, and drive innovation in the mobile-first world.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm mb-16">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-buzz-text mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To empower individuals and businesses with cutting-edge mobile technology that simplifies 
              complex tasks, enhances productivity, and creates meaningful connections in our increasingly 
              digital world.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="shadow-card border-0 bg-white/80 backdrop-blur-sm text-center hover:shadow-buzz transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-buzz-red-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-buzz-red" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-buzz-red mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-buzz-text">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-buzz-text mb-4">What Makes Us Special</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine innovative technology with thoughtful design to create products that truly matter
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-buzz transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-buzz-red-light rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-buzz-red" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-buzz-text mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-buzz-text mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a global platform, here's how we've grown
            </p>
          </div>

          <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-buzz rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-buzz-text">{milestone.event}</h3>
                        <Badge className="bg-buzz-red-light text-buzz-red border-buzz-red/30">
                          {milestone.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-buzz-text mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Super Buzz who make it all possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card border-0 bg-white/80 backdrop-blur-sm text-center hover:shadow-buzz transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-buzz rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg font-bold text-buzz-text mb-2">{member.name}</h3>
                  <p className="text-buzz-red font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-buzz-text mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions, feedback, or want to collaborate? We'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button className="bg-gradient-buzz text-white shadow-buzz hover:shadow-lg transition-all duration-300">
                <Mail className="mr-2" size={18} />
                Contact Us
              </Button>
              <Button variant="outline" className="border-buzz-red/30 text-buzz-red hover:bg-buzz-red hover:text-white">
                <ExternalLink className="mr-2" size={18} />
                View Documentation
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-buzz-red">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-buzz-red">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-buzz-red">
                <Linkedin size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;