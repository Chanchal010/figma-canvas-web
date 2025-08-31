import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Bell, 
  BellOff, 
  Mail, 
  MessageCircle, 
  Users, 
  Calendar, 
  Check, 
  X,
  Settings as SettingsIcon,
  Star,
  Gift,
  AlertCircle,
  TrendingUp
} from "lucide-react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "message",
      title: "New message from Alice",
      description: "Hey! Just wanted to check in about the project timeline...",
      time: "2 minutes ago",
      unread: true,
      icon: MessageCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      type: "achievement",
      title: "Achievement Unlocked!",
      description: "You've completed 10 projects this month. Great work!",
      time: "1 hour ago",
      unread: true,
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: 3,
      type: "team",
      title: "New team member joined",
      description: "Bob Wilson has joined your design team workspace",
      time: "3 hours ago",
      unread: false,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 4,
      type: "reminder",
      title: "Meeting reminder",
      description: "Design review meeting starts in 30 minutes",
      time: "5 hours ago",
      unread: false,
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 5,
      type: "promotion",
      title: "Special offer available",
      description: "Upgrade to Premium and get 50% off for the first month",
      time: "1 day ago",
      unread: false,
      icon: Gift,
      color: "text-buzz-red",
      bgColor: "bg-red-50"
    },
    {
      id: 6,
      type: "alert",
      title: "System maintenance",
      description: "Scheduled maintenance will occur tonight from 2-4 AM",
      time: "2 days ago",
      unread: false,
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ]);

  const [settings, setSettings] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true,
    updates: true,
    reminders: true
  });

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, unread: false }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-buzz-text mb-2 flex items-center">
                <Bell className="mr-3 text-buzz-red" size={36} />
                Notifications
                {unreadCount > 0 && (
                  <Badge className="ml-3 bg-buzz-red text-white">
                    {unreadCount} new
                  </Badge>
                )}
              </h1>
              <p className="text-muted-foreground">Stay updated with your latest activities</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button
                variant="outline"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
                className="border-buzz-red/30 text-buzz-red hover:bg-buzz-red hover:text-white"
              >
                <Check className="mr-2" size={16} />
                Mark all read
              </Button>
              <Button className="bg-gradient-buzz text-white shadow-buzz hover:shadow-lg transition-all duration-300">
                <SettingsIcon className="mr-2" size={16} />
                Settings
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Notifications List */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text">Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                          notification.unread 
                            ? 'bg-buzz-red-light/30 border-buzz-red/20' 
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-2 rounded-full ${notification.bgColor}`}>
                            <IconComponent className={notification.color} size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className={`font-semibold ${notification.unread ? 'text-buzz-text' : 'text-gray-700'}`}>
                                  {notification.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {notification.description}
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                  {notification.time}
                                </p>
                              </div>
                              <div className="flex space-x-2">
                                {notification.unread && (
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => markAsRead(notification.id)}
                                    className="text-buzz-red hover:bg-buzz-red-light"
                                  >
                                    <Check size={14} />
                                  </Button>
                                )}
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => deleteNotification(notification.id)}
                                  className="text-gray-500 hover:text-red-600"
                                >
                                  <X size={14} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            {/* Notification Settings */}
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text flex items-center">
                  <SettingsIcon className="mr-2 text-buzz-red" size={20} />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-sm font-medium text-buzz-text">
                        Email Notifications
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch 
                      id="email"
                      checked={settings.email}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, email: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="push" className="text-sm font-medium text-buzz-text">
                        Push Notifications
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Receive push notifications
                      </p>
                    </div>
                    <Switch 
                      id="push"
                      checked={settings.push}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, push: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="sms" className="text-sm font-medium text-buzz-text">
                        SMS Notifications
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Receive SMS for urgent updates
                      </p>
                    </div>
                    <Switch 
                      id="sms"
                      checked={settings.sms}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, sms: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="marketing" className="text-sm font-medium text-buzz-text">
                        Marketing Updates
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Promotions and special offers
                      </p>
                    </div>
                    <Switch 
                      id="marketing"
                      checked={settings.marketing}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, marketing: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="updates" className="text-sm font-medium text-buzz-text">
                        Product Updates
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        New features and improvements
                      </p>
                    </div>
                    <Switch 
                      id="updates"
                      checked={settings.updates}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, updates: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="reminders" className="text-sm font-medium text-buzz-text">
                        Reminders
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Calendar and task reminders
                      </p>
                    </div>
                    <Switch 
                      id="reminders"
                      checked={settings.reminders}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, reminders: checked }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-buzz-text flex items-center">
                  <TrendingUp className="mr-2 text-buzz-red" size={20} />
                  Notification Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-buzz-gray rounded-lg">
                    <div className="text-2xl font-bold text-buzz-red">{notifications.length}</div>
                    <div className="text-sm font-medium text-buzz-text">Total Notifications</div>
                  </div>
                  <div className="text-center p-4 bg-buzz-gray rounded-lg">
                    <div className="text-2xl font-bold text-buzz-red">{unreadCount}</div>
                    <div className="text-sm font-medium text-buzz-text">Unread</div>
                  </div>
                  <div className="text-center p-4 bg-buzz-gray rounded-lg">
                    <div className="text-2xl font-bold text-buzz-red">24h</div>
                    <div className="text-sm font-medium text-buzz-text">Last Activity</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;