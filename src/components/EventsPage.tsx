import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, MapPin, Clock, Filter, SortAsc, UserPlus } from 'lucide-react';
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
  registrationOpen?: boolean;
}

interface EventsPageProps {
  onNavigate?: (page: string) => void;
}

export function EventsPage({ onNavigate }: EventsPageProps = {}) {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [filteredUpcoming, setFilteredUpcoming] = useState<Event[]>([]);
  const [filteredPast, setFilteredPast] = useState<Event[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');

  useEffect(() => {
    // Use embedded data
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
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
          registrationOpen: true
        },
        {
          id: 2,
          title: "Cultural Week",
          date: "2025-08-05",
          time: "09:00 - 18:00",
          location: "University Stadium",
          category: "cultural",
          shortDescription: "Diverse cultural festival with performances, traditional food, and cultural exhibitions.",
          image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
          registrationOpen: true
        },
        {
          id: 3,
          title: "Hackathon 2025",
          date: "2025-07-15",
          time: "08:00 - 20:00",
          location: "Lab Room 302",
          category: "academic",
          shortDescription: "48-hour programming competition with attractive prizes and internship opportunities at tech companies.",
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800",
          registrationOpen: true
        },
        {
          id: 4,
          title: "Rector's Cup Football Tournament",
          date: "2025-09-10",
          time: "15:00 - 17:00",
          location: "University Football Field",
          category: "sports",
          shortDescription: "Annual football tournament between faculties with high sportsmanship and many cheering activities.",
          image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
          registrationOpen: true
        }
      ],
      pastEvents: [
        {
          id: 5,
          title: "AI Workshop 2024",
          date: "2024-12-15",
          time: "14:00 - 17:00",
          location: "Conference Hall A",
          category: "academic",
          shortDescription: "Artificial intelligence workshop with participation from leading experts.",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
        },
        {
          id: 6,
          title: "Acoustic Music Night",
          date: "2024-11-20",
          time: "19:00 - 22:00",
          location: "Student Café",
          category: "cultural",
          shortDescription: "Music night featuring performances by student bands in a cozy atmosphere.",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
        }
      ]
    };
    
    setUpcomingEvents(mockData.upcomingEvents);
    setPastEvents(mockData.pastEvents);
    setFilteredUpcoming(mockData.upcomingEvents);
    setFilteredPast(mockData.pastEvents);
  }, []);

  useEffect(() => {
    // Apply filters and sorting
    let filteredUp = [...upcomingEvents];
    let filteredPt = [...pastEvents];

    // Category filter
    if (categoryFilter !== 'all') {
      filteredUp = filteredUp.filter(event => event.category === categoryFilter);
      filteredPt = filteredPt.filter(event => event.category === categoryFilter);
    }

    // Sorting
    const sortFunction = (a: Event, b: Event) => {
      switch (sortBy) {
        case 'date':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'name':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    };

    filteredUp.sort(sortFunction);
    filteredPt.sort(sortFunction);

    setFilteredUpcoming(filteredUp);
    setFilteredPast(filteredPt);
  }, [upcomingEvents, pastEvents, categoryFilter, sortBy]);

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

  const EventCard = ({ event }: { event: Event }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <Badge className={`absolute top-3 left-3 ${getCategoryColor(event.category)}`}>
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
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          {event.registrationOpen && onNavigate && (
            <Button size="sm" onClick={() => onNavigate('register')} className="flex-1">
              <UserPlus className="h-4 w-4 mr-1" />
              Register
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events Calendar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover and participate in exciting events at the university. 
            From academic activities to cultural and sports events.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by:</span>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <SortAsc className="h-4 w-4" />
            <span className="text-sm font-medium">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date (Nearest)</SelectItem>
                <SelectItem value="date-desc">Date (Farthest)</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1" />

          <div className="text-sm text-muted-foreground flex items-center">
            Total: {filteredUpcoming.length + filteredPast.length} events
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-400 mx-auto">
            <TabsTrigger value="upcoming" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Upcoming ({filteredUpcoming.length})</span>
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Past Events ({filteredPast.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {filteredUpcoming.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcoming.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Events Found</h3>
                <p className="text-muted-foreground">
                  {categoryFilter === 'all' 
                    ? 'No upcoming events at the moment.' 
                    : `No upcoming ${getCategoryLabel(categoryFilter).toLowerCase()} events.`}
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {filteredPast.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPast.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Clock className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Events Found</h3>
                <p className="text-muted-foreground">
                  {categoryFilter === 'all' 
                    ? 'No past events to display.' 
                    : `No past ${getCategoryLabel(categoryFilter).toLowerCase()} events.`}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Category Overview */}
        <section className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'academic',
                title: 'Academic Events',
                description: 'Workshops, competitions, technology exhibitions and scientific research activities.',
                icon: '🎓'
              },
              {
                category: 'cultural',
                title: 'Cultural Events',
                description: 'Arts programs, festivals, art exhibitions and cultural activities.',
                icon: '🎭'
              },
              {
                category: 'sports',
                title: 'Sports Events',
                description: 'Sports tournaments, fitness activities and inter-university competitions.',
                icon: '🏆'
              }
            ].map((cat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setCategoryFilter(cat.category)}>
                <CardHeader>
                  <div className="text-4xl mb-2">{cat.icon}</div>
                  <CardTitle>{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    View Events
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}