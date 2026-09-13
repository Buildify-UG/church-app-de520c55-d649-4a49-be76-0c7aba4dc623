import React, { useState } from 'react';
import { Calendar, MapPin, Users, Heart, Clock, Phone, Mail, ChevronRight, Bell, MessageCircle, BookOpen, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  icon: React.ReactNode;
}

interface Announcement {
  id: string;
  title: string;
  date: string;
  preview: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'events' | 'about' | 'leadership' | 'contact'>('home');

  const events: Event[] = [
    {
      id: '1',
      title: 'Online Fellowship & Teaching',
      date: 'Every Wednesday',
      time: '9:00 PM - 10:00 PM',
      location: 'Google Meet',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: '2',
      title: 'Prayer & Fasting',
      date: 'Every Wednesday',
      time: 'All Day',
      location: 'Online & In-Person',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: '3',
      title: 'Leadership Meetings',
      date: 'Monthly',
      time: 'TBD',
      location: 'Google Meet',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: '4',
      title: 'Mission & Outreach',
      date: 'Ongoing',
      time: 'Various',
      location: 'Across Kenya',
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'Join Our WhatsApp Community',
      date: 'Latest',
      preview: 'Connect with our prayer chain, get updates, and stay engaged with the RCM family.'
    },
    {
      id: '2',
      title: 'Wednesday Online Fellowship',
      date: 'Weekly',
      preview: 'Join us every Wednesday 9pm-10pm via Google Meet for teaching, fellowship, and prayer.'
    },
    {
      id: '3',
      title: 'Prayer & Fasting Initiative',
      date: 'Every Wednesday',
      preview: 'Dedicate Wednesdays to prayer and fasting for spiritual growth and ministry breakthrough.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Rooted in Christ</h1>
                <p className="text-xs text-muted-foreground">Ministry (RCM)</p>
              </div>
            </div>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white dark:bg-slate-900 border-b border-border sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {(['home', 'events', 'about', 'leadership', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium text-sm transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600 dark:text-green-400'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 p-12 text-white">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">Welcome to Rooted in Christ Ministry</h2>
                <p className="text-lg text-green-100 mb-8 max-w-2xl">
                  Growing deeper in faith. We believe in serving God and loving one another with open hearts.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-white text-green-600 hover:bg-green-50">
                    Join Us
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground">1,250+</h3>
                <p className="text-muted-foreground">Active Members</p>
              </Card>
              <Card className="p-6 text-center">
                <Calendar className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground">25+</h3>
                <p className="text-muted-foreground">Events Monthly</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground">100%</h3>
                <p className="text-muted-foreground">Community Focused</p>
              </Card>
            </div>

            {/* Prayer Requests */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Prayer Requests</h2>
              <Card className="p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Heart className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Share Your Prayer Needs</h3>
                      <p className="text-foreground/80 mb-4">
                        Our prayer coordinator and prayer chain are ready to intercede for you. Share your requests via WhatsApp or contact us.
                      </p>
                      <Button className="bg-red-500 hover:bg-red-600 text-white">Submit Prayer Request</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Announcements */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Latest News</h2>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{announcement.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{announcement.date}</p>
                        <p className="text-foreground/80">{announcement.preview}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-4" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                      <Button variant="outline" className="mt-4 w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">About Rooted in Christ Ministry</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Our Vision</h3>
                  <p className="text-foreground/80">
                    A ministry rooted in Christ, reaching across Kenya with the Gospel, and connecting the global body of believers through digital fellowship for shared growth and impact.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Our Mission</h3>
                  <p className="text-foreground/80">
                    We glorify God by building a virtual house of fellowship and biblical teaching to root believers in faith, and by launching physical outreach missions across Kenya to share the love and Gospel of Jesus Christ.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Founded</h3>
                  <p className="text-foreground/80">
                    9th July 2024 — Kenya
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Statement of Faith</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">•</span>
                      <span>One God, eternally existing in three persons: Father, Son, and Holy Spirit</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Salvation by grace through faith in Jesus Christ alone</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">•</span>
                      <span>The present ministry of the Holy Spirit, by whose indwelling the believer is enabled to live a godly life</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">•</span>
                      <span>The unity of all true believers in the Body of Christ</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-600 font-bold">•</span>
                      <span>Sound doctrine rooted in what Jesus taught, confirmed by the early apostles and Paul</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Leadership Tab */}
        {activeTab === 'leadership' && (
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-foreground/80 mb-8">
                Our leadership consists of five offices working together under the headship of Christ to guide RCM.
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Chairperson</h3>
                    <p className="text-sm text-muted-foreground">Spiritual Leadership</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm">
                  Provides spiritual vision and direction, presides over meetings, ensures alignment with the Statement of Faith, and serves as the primary spiritual guide for the leadership team.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Missions Coordinator</h3>
                    <p className="text-sm text-muted-foreground">Outreach & Partnerships</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm">
                  Identifies mission opportunities, builds partnerships with other organizations, organizes logistics for projects, and leads prayer initiatives for global outreach.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Secretary</h3>
                    <p className="text-sm text-muted-foreground">Records & Communication</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm">
                  Maintains meeting minutes, distributes announcements, manages the ministry calendar, maintains membership directory, and organizes meeting logistics.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Treasurer</h3>
                    <p className="text-sm text-muted-foreground">Financial Management</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm">
                  Manages bank accounts, tracks income and expenses, prepares budgets, oversees donation platforms, and provides regular financial reports.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow md:col-span-2">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Prayer Coordinator</h3>
                    <p className="text-sm text-muted-foreground">Intercession & Spiritual Covering</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm">
                  Organizes prayer meetings, manages prayer chains, creates prayer guides, mobilizes intercessors, records answered prayers, and coordinates fasting initiatives.
                </p>
              </Card>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp Community</h3>
                    <p className="text-muted-foreground">Join our WhatsApp group for updates and prayer requests</p>
                    <Button variant="outline" className="mt-2 text-green-600 border-green-300">Join WhatsApp</Button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+254 799 464 599</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@rootedinchrist.com</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 w-full">Send Us a Message</Button>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">© 2024 Rooted in Christ Ministry (RCM). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
