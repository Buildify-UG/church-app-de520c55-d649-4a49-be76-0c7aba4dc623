import React, { useState } from 'react';
import { Calendar, MapPin, Users, Heart, Clock, Phone, Mail, ChevronRight, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
  const [activeTab, setActiveTab] = useState<'home' | 'events' | 'about' | 'contact'>('home');

  const events: Event[] = [
    {
      id: '1',
      title: 'Sunday Service',
      date: 'Every Sunday',
      time: '10:00 AM - 11:30 AM',
      location: 'Main Sanctuary',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: '2',
      title: 'Youth Group',
      date: 'Wednesdays',
      time: '6:00 PM - 7:30 PM',
      location: 'Fellowship Hall',
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: '3',
      title: 'Bible Study',
      date: 'Thursdays',
      time: '7:00 PM - 8:30 PM',
      location: 'Library',
      icon: <Calendar className="w-5 h-5" />
    },
    {
      id: '4',
      title: 'Prayer Meeting',
      date: 'Saturdays',
      time: '9:00 AM - 10:00 AM',
      location: 'Prayer Room',
      icon: <Heart className="w-5 h-5" />
    }
  ];

  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'New Community Outreach Program',
      date: 'March 15, 2024',
      preview: 'Join us as we launch our new community service initiative to help local families in need.'
    },
    {
      id: '2',
      title: 'Easter Celebration Planning',
      date: 'March 10, 2024',
      preview: 'We are organizing special events for Easter. Volunteers needed for setup and coordination.'
    },
    {
      id: '3',
      title: 'Welcome New Members!',
      date: 'March 5, 2024',
      preview: 'Please join us in welcoming our newest church members to our community.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Grace Church</h1>
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
            {(['home', 'events', 'about', 'contact'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium text-sm transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
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
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-white">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">Welcome to Grace Church</h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl">
                  Join our vibrant community of faith. We believe in serving God and loving one another with open hearts.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50">
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
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground">1,250+</h3>
                <p className="text-muted-foreground">Active Members</p>
              </Card>
              <Card className="p-6 text-center">
                <Calendar className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground">25+</h3>
                <p className="text-muted-foreground">Events Monthly</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-foreground">100%</h3>
                <p className="text-muted-foreground">Community Focused</p>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
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
              <h2 className="text-2xl font-bold text-foreground mb-4">About Grace Church</h2>
              <p className="text-foreground/80 mb-4">
                Grace Church has been serving our community for over 30 years. We are dedicated to spreading God's love, fostering spiritual growth, and making a positive impact in the lives of those around us.
              </p>
              <p className="text-foreground/80 mb-4">
                Our mission is to create a welcoming, inclusive community where everyone can grow in their faith and find support on their spiritual journey.
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Our Values</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Faith and Spirituality</li>
                <li>✓ Community Service</li>
                <li>✓ Love and Compassion</li>
                <li>✓ Inclusivity and Acceptance</li>
              </ul>
            </Card>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">123 Faith Street, Community City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@gracechurch.com</p>
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
          <p className="text-sm text-slate-400">© 2024 Grace Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
