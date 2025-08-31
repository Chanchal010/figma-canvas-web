import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Settings as SettingsIcon, 
  User, 
  Shield, 
  Bell, 
  Palette, 
  Globe, 
  Download,
  Trash2,
  Lock,
  Eye,
  Moon,
  Sun,
  Monitor,
  Smartphone,
  Save,
  AlertTriangle
} from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    // Account Settings
    twoFactor: true,
    dataCollection: false,
    marketing: true,
    
    // Appearance
    theme: "light",
    language: "en",
    timezone: "UTC-8",
    
    // Privacy
    profileVisibility: "public",
    activityStatus: true,
    dataSharing: false,
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const settingsSections = [
    {
      title: "Account & Security",
      icon: Shield,
      items: [
        {
          type: "switch",
          key: "twoFactor",
          label: "Two-Factor Authentication",
          description: "Add an extra layer of security to your account",
          value: settings.twoFactor,
          recommended: true
        },
        {
          type: "button",
          label: "Change Password",
          description: "Update your account password",
          buttonText: "Change",
          icon: Lock
        },
        {
          type: "button",
          label: "Download Your Data",
          description: "Get a copy of your account data",
          buttonText: "Download",
          icon: Download
        }
      ]
    },
    {
      title: "Appearance",
      icon: Palette,
      items: [
        {
          type: "select",
          key: "theme",
          label: "Theme",
          description: "Choose your preferred color theme",
          value: settings.theme,
          options: [
            { value: "light", label: "Light", icon: Sun },
            { value: "dark", label: "Dark", icon: Moon },
            { value: "system", label: "System", icon: Monitor }
          ]
        },
        {
          type: "select",
          key: "language",
          label: "Language",
          description: "Select your preferred language",
          value: settings.language,
          options: [
            { value: "en", label: "English" },
            { value: "es", label: "Español" },
            { value: "fr", label: "Français" },
            { value: "de", label: "Deutsch" }
          ]
        },
        {
          type: "select",
          key: "timezone",
          label: "Timezone",
          description: "Your local timezone",
          value: settings.timezone,
          options: [
            { value: "UTC-8", label: "Pacific Time (UTC-8)" },
            { value: "UTC-5", label: "Eastern Time (UTC-5)" },
            { value: "UTC+0", label: "GMT (UTC+0)" },
            { value: "UTC+1", label: "Central European Time (UTC+1)" }
          ]
        }
      ]
    },
    {
      title: "Privacy & Data",
      icon: Eye,
      items: [
        {
          type: "select",
          key: "profileVisibility",
          label: "Profile Visibility",
          description: "Who can see your profile information",
          value: settings.profileVisibility,
          options: [
            { value: "public", label: "Public" },
            { value: "friends", label: "Friends Only" },
            { value: "private", label: "Private" }
          ]
        },
        {
          type: "switch",
          key: "activityStatus",
          label: "Show Activity Status",
          description: "Let others see when you're online",
          value: settings.activityStatus
        },
        {
          type: "switch",
          key: "dataCollection",
          label: "Data Collection",
          description: "Allow us to collect usage data to improve our service",
          value: settings.dataCollection
        },
        {
          type: "switch",
          key: "dataSharing",
          label: "Data Sharing",
          description: "Share anonymized data with partners",
          value: settings.dataSharing
        }
      ]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: [
        {
          type: "switch",
          key: "emailNotifications",
          label: "Email Notifications",
          description: "Receive notifications via email",
          value: settings.emailNotifications
        },
        {
          type: "switch",
          key: "pushNotifications",
          label: "Push Notifications",
          description: "Receive push notifications on your devices",
          value: settings.pushNotifications
        },
        {
          type: "switch",
          key: "smsNotifications",
          label: "SMS Notifications",
          description: "Receive important updates via SMS",
          value: settings.smsNotifications
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-buzz-text mb-2 flex items-center">
                <SettingsIcon className="mr-3 text-buzz-red" size={36} />
                Settings
              </h1>
              <p className="text-muted-foreground">Manage your account preferences and settings</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-gradient-buzz text-white shadow-buzz hover:shadow-lg transition-all duration-300">
                <Save className="mr-2" size={16} />
                Save Changes
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm sticky top-6">
              <CardHeader>
                <CardTitle className="text-buzz-text text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {settingsSections.map((section, index) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={index}
                        className="w-full text-left p-3 rounded-lg hover:bg-buzz-red-light transition-colors duration-200 flex items-center space-x-3"
                      >
                        <IconComponent className="text-buzz-red" size={18} />
                        <span className="text-buzz-text font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            {settingsSections.map((section, sectionIndex) => {
              const SectionIcon = section.icon;
              return (
                <Card key={sectionIndex} className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-buzz-text flex items-center">
                      <SectionIcon className="mr-3 text-buzz-red" size={24} />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <Label className="text-buzz-text font-medium">
                                {item.label}
                              </Label>
                              {item.recommended && (
                                <Badge className="bg-green-100 text-green-700 border-green-200">
                                  Recommended
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </div>
                          
                          <div className="ml-6">
                            {item.type === "switch" && (
                              <Switch
                                checked={item.value}
                                onCheckedChange={(checked) => updateSetting(item.key!, checked)}
                              />
                            )}
                            
                            {item.type === "select" && (
                              <Select 
                                value={item.value} 
                                onValueChange={(value) => updateSetting(item.key!, value)}
                              >
                                <SelectTrigger className="w-48 border-buzz-red/20 focus:border-buzz-red">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {item.options?.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      <div className="flex items-center space-x-2">
                                        {option.icon && <option.icon size={16} />}
                                        <span>{option.label}</span>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                            
                            {item.type === "button" && (
                              <Button
                                variant="outline"
                                className="border-buzz-red/30 text-buzz-red hover:bg-buzz-red hover:text-white"
                              >
                                {item.icon && <item.icon className="mr-2" size={16} />}
                                {item.buttonText}
                              </Button>
                            )}
                          </div>
                        </div>
                        
                        {itemIndex < section.items.length - 1 && <Separator className="mt-6" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}

            {/* Danger Zone */}
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <AlertTriangle className="mr-3" size={24} />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-red-800">Delete Account</h4>
                      <p className="text-sm text-red-600 mt-1">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                    <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                      <Trash2 className="mr-2" size={16} />
                      Delete Account
                    </Button>
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

export default Settings;