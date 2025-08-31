import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Edit3, 
  Save,
  Star,
  Calendar,
  Award,
  Target,
  TrendingUp
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const achievements = [
    { title: "Early Adopter", description: "Joined in the first month", icon: Star, color: "text-yellow-500" },
    { title: "Super User", description: "Over 1000 app interactions", icon: Award, color: "text-purple-600" },
    { title: "Goal Achiever", description: "Completed 50 tasks", icon: Target, color: "text-green-600" },
    { title: "Trending Creator", description: "Most shared content", icon: TrendingUp, color: "text-buzz-red" },
  ];

  const activities = [
    { action: "Updated profile picture", date: "2 days ago", type: "profile" },
    { action: "Completed project milestone", date: "5 days ago", type: "achievement" },
    { action: "Shared content with team", date: "1 week ago", type: "social" },
    { action: "Joined Super Buzz community", date: "2 weeks ago", type: "milestone" },
  ];

  const stats = [
    { label: "Projects Completed", value: "24", change: "+3 this month" },
    { label: "Team Collaborations", value: "18", change: "+5 this month" },
    { label: "Community Points", value: "1,247", change: "+89 this week" },
    { label: "Achievement Level", value: "Gold", change: "Upgraded!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-buzz-text mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your account and personal information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-buzz-text flex items-center">
                    <User className="mr-2 text-buzz-red" size={20} />
                    Personal Information
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                    className="border-buzz-red/30 text-buzz-red hover:bg-buzz-red hover:text-white"
                  >
                    {isEditing ? (
                      <>
                        <Save className="mr-2" size={16} />
                        Save
                      </>
                    ) : (
                      <>
                        <Edit3 className="mr-2" size={16} />
                        Edit
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24 shadow-buzz">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="bg-gradient-buzz text-white text-2xl font-bold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-buzz-red rounded-full flex items-center justify-center text-white shadow-lg hover:bg-buzz-red-dark transition-colors">
                        <Camera size={14} />
                      </button>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-buzz-text">John Doe</h3>
                    <p className="text-muted-foreground">Product Designer</p>
                    <Badge className="mt-2 bg-buzz-red-light text-buzz-red border-buzz-red/30">
                      Premium Member
                    </Badge>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-buzz-text font-medium">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        id="firstName"
                        defaultValue="John"
                        disabled={!isEditing}
                        className="pl-10 border-buzz-red/20 focus:border-buzz-red"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-buzz-text font-medium">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        id="lastName"
                        defaultValue="Doe"
                        disabled={!isEditing}
                        className="pl-10 border-buzz-red/20 focus:border-buzz-red"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-buzz-text font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john.doe@example.com"
                        disabled={!isEditing}
                        className="pl-10 border-buzz-red/20 focus:border-buzz-red"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-buzz-text font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        disabled={!isEditing}
                        className="pl-10 border-buzz-red/20 focus:border-buzz-red"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="location" className="text-buzz-text font-medium">
                      Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        id="location"
                        defaultValue="San Francisco, CA"
                        disabled={!isEditing}
                        className="pl-10 border-buzz-red/20 focus:border-buzz-red"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio" className="text-buzz-text font-medium">
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      defaultValue="Passionate product designer with 5+ years of experience creating user-centered digital experiences. I love bringing ideas to life through thoughtful design and collaboration."
                      disabled={!isEditing}
                      className="border-buzz-red/20 focus:border-buzz-red min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text flex items-center">
                  <Award className="mr-2 text-buzz-red" size={20} />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-buzz-gray rounded-lg hover:bg-buzz-red-light transition-colors duration-200"
                      >
                        <div className={`p-3 rounded-full bg-white shadow-sm ${achievement.color}`}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-buzz-text">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text flex items-center">
                  <TrendingUp className="mr-2 text-buzz-red" size={20} />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-buzz-gray rounded-lg">
                      <div className="text-2xl font-bold text-buzz-red">{stat.value}</div>
                      <div className="text-sm font-medium text-buzz-text">{stat.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{stat.change}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text flex items-center">
                  <Calendar className="mr-2 text-buzz-red" size={20} />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-buzz-red rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-buzz-text">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;