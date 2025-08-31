import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  Activity, 
  DollarSign, 
  ArrowUp, 
  ArrowDown,
  Calendar,
  Clock,
  Star,
  Download
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "App Downloads",
      value: "12,234",
      change: "+19%",
      trend: "up",
      icon: Download,
      color: "text-buzz-red",
    },
    {
      title: "Engagement Rate",
      value: "89.3%",
      change: "-2.1%",
      trend: "down",
      icon: Activity,
      color: "text-purple-600",
    },
  ];

  const recentActivities = [
    { id: 1, user: "Alice Johnson", action: "completed registration", time: "2 min ago", type: "success" },
    { id: 2, user: "Bob Smith", action: "made a purchase", time: "5 min ago", type: "revenue" },
    { id: 3, user: "Carol Davis", action: "shared content", time: "10 min ago", type: "engagement" },
    { id: 4, user: "David Wilson", action: "left a review", time: "15 min ago", type: "feedback" },
    { id: 5, user: "Eva Brown", action: "updated profile", time: "20 min ago", type: "profile" },
  ];

  const projects = [
    { name: "Mobile App Redesign", progress: 85, status: "In Progress", dueDate: "Dec 15" },
    { name: "User Analytics Dashboard", progress: 62, status: "In Progress", dueDate: "Dec 20" },
    { name: "API Integration", progress: 100, status: "Completed", dueDate: "Dec 10" },
    { name: "Marketing Campaign", progress: 35, status: "Planning", dueDate: "Jan 5" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-buzz-text mb-2">Dashboard</h1>
              <p className="text-muted-foreground flex items-center">
                <Calendar className="mr-2" size={16} />
                Today is {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-gradient-buzz text-white shadow-buzz hover:shadow-lg transition-all duration-300">
                <TrendingUp className="mr-2" size={18} />
                Generate Report
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="shadow-card border-0 bg-white/80 backdrop-blur-sm hover:shadow-buzz transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-buzz-text">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-buzz-red-light ${stat.color}`}>
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    {stat.trend === "up" ? (
                      <ArrowUp className="text-green-600 mr-1" size={16} />
                    ) : (
                      <ArrowDown className="text-red-600 mr-1" size={16} />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      from last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text flex items-center">
                  <Activity className="mr-2 text-buzz-red" size={20} />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-buzz-gray rounded-lg hover:bg-buzz-red-light transition-colors duration-200">
                      <div className="w-10 h-10 bg-gradient-buzz rounded-full flex items-center justify-center text-white font-semibold">
                        {activity.user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="text-buzz-text font-medium">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Clock size={12} className="mr-1" />
                          {activity.time}
                        </p>
                      </div>
                      <Badge 
                        variant="outline"
                        className={`${
                          activity.type === "success" ? "border-green-200 text-green-600" :
                          activity.type === "revenue" ? "border-blue-200 text-blue-600" :
                          activity.type === "engagement" ? "border-purple-200 text-purple-600" :
                          activity.type === "feedback" ? "border-yellow-200 text-yellow-600" :
                          "border-gray-200 text-gray-600"
                        }`}
                      >
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Progress */}
          <div>
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text flex items-center">
                  <TrendingUp className="mr-2 text-buzz-red" size={20} />
                  Project Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-buzz-text text-sm">
                          {project.name}
                        </h4>
                        <Badge 
                          variant="outline"
                          className={`text-xs ${
                            project.status === "Completed" ? "border-green-200 text-green-600" :
                            project.status === "In Progress" ? "border-buzz-red/30 text-buzz-red" :
                            "border-gray-200 text-gray-600"
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <Progress 
                        value={project.progress} 
                        className="h-2"
                      />
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{project.progress}% complete</span>
                        <span>Due: {project.dueDate}</span>
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

export default Dashboard;