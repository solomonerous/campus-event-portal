import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Clock, ArrowRight, Image as ImageIcon, UserPlus, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EventCountdown } from './EventCountdown';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  shortDescription: string;
  image: string;
}

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const bannerImages = [
    {
      url: "https://images.unsplash.com/photo-1706016899218-ebe36844f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3NDQwNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "ABC Technical University",
      subtitle: "Where knowledge and innovation begin"
    },
    {
      url: "https://images.unsplash.com/photo-1591655630844-28e59efe0c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3NDQwNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Dynamic student community",
      subtitle: "Building a bright future together"
    }
  ];

  useEffect(() => {
    // Use embedded data instead of fetch
    const mockData = {
      upcomingEvents: [
        {
          id: 1,
          title: "TechFest 2025",
          date: "2025-07-20",
          time: "10:00 - 16:00",
          location: "Main Conference Hall",
          category: "academic",
          shortDescription: "Annual technology exhibition featuring innovative student projects and workshops by industry experts.",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
        },
        {
          id: 2,
          title: "Cultural Week",
          date: "2025-08-05",
          time: "09:00 - 18:00",
          location: "University Stadium",
          category: "cultural",
          shortDescription: "Diverse cultural festival with performances, traditional food, and cultural exhibitions.",
          image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
        },
        {
          id: 3,
          title: "Hackathon 2025",
          date: "2025-07-15",
          time: "08:00 - 20:00",
          location: "Lab Room 302",
          category: "academic",
          shortDescription: "48-hour programming competition with attractive prizes and internship opportunities at tech companies.",
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800"
        }
      ]
    };
    setUpcomingEvents(mockData.upcomingEvents.slice(0, 3));

    // Banner slideshow
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'cultural': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'sports': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic': return 'Academic';
      case 'cultural': return 'Cultural';
      case 'sports': return 'Sports';
      default: return category;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <ImageWithFallback
            src={bannerImages[currentBannerIndex].url}
            alt="University Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to CampusConnect
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              {bannerImages[currentBannerIndex].subtitle}
            </p>
            <p className="text-lg mb-8 opacity-80">
              Stay updated on events, connect with the community, and participate in campus activities!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => onNavigate('events')} className="bg-white text-black hover:bg-white/90">
                View Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('about')} className="border-white text-black hover:bg-white/90">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Banner indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBannerIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ABC Technical University Event Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CampusConnect is the central platform that helps students, faculty, and the university community 
            connect with each other through cultural, academic, and sports events and activities. 
            Let's create memorable experiences together and build a vibrant learning community.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Don't miss these exciting upcoming activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-3 left-3 ${getCategoryColor(event.category)}`}
                  >
                    {getCategoryLabel(event.category)}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  {/* Countdown Timer */}
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <EventCountdown eventDate={event.date} eventTime={event.time} />
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {event.shortDescription}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => onNavigate('events')}>
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore CampusConnect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Events Calendar",
                description: "View all upcoming and past events",
                icon: Calendar,
                page: "events"
              },
              {
                title: "Photo Gallery",
                description: "Explore images from organized events",
                icon: ImageIcon,
                page: "gallery"
              },
              {
                title: "Event Registration",
                description: "Register for upcoming events and activities",
                icon: UserPlus,
                page: "register"
              },
              {
                title: "Contact",
                description: "Contact information and university location",
                icon: Phone,
                page: "contact"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate(item.page)}>
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}