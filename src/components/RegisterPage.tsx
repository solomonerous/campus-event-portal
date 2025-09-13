import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, MapPin, Clock, Users, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EventCountdown } from './EventCountdown';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  capacity: number;
  registered: number;
  registrationDeadline: string;
}

interface RegistrationForm {
  eventId: number;
  fullName: string;
  email: string;
  phone: string;
  studentId: string;
  faculty: string;
  year: string;
  notes: string;
}

export function RegisterPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registrationForm, setRegistrationForm] = useState<RegistrationForm>({
    eventId: 0,
    fullName: '',
    email: '',
    phone: '',
    studentId: '',
    faculty: '',
    year: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "TechFest 2025",
      date: "2025-07-20",
      time: "10:00 - 16:00",
      location: "Main Conference Hall",
      category: "academic",
      description: "Annual technology exhibition featuring innovative student projects and workshops by industry experts.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      capacity: 500,
      registered: 287,
      registrationDeadline: "2025-07-15"
    },
    {
      id: 2,
      title: "Cultural Week",
      date: "2025-08-05",
      time: "09:00 - 18:00",
      location: "University Stadium",
      category: "cultural",
      description: "Diverse cultural festival with performances, traditional food, and cultural exhibitions.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      capacity: 1000,
      registered: 642,
      registrationDeadline: "2025-08-01"
    },
    {
      id: 3,
      title: "Hackathon 2025",
      date: "2025-07-15",
      time: "08:00 - 20:00",
      location: "Lab Room 302",
      category: "academic",
      description: "48-hour programming competition with attractive prizes and internship opportunities at tech companies.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800",
      capacity: 200,
      registered: 156,
      registrationDeadline: "2025-07-10"
    },
    {
      id: 4,
      title: "Rector's Cup Football Tournament",
      date: "2025-09-10",
      time: "14:00 - 18:00",
      location: "University Football Field",
      category: "sports",
      description: "Annual football tournament for students from all faculties.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
      capacity: 320,
      registered: 128,
      registrationDeadline: "2025-09-05"
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      date: "2025-11-15",
      time: "09:00 - 17:00",
      location: "Innovation Hub",
      category: "academic",
      description: "Present your innovative business ideas to investors and industry experts. Win funding and mentorship opportunities.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      capacity: 150,
      registered: 89,
      registrationDeadline: "2025-11-10"
    }
  ];

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

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
    setRegistrationForm(prev => ({ ...prev, eventId: event.id }));
    setIsSubmitted(false);
  };

  const handleInputChange = (field: keyof RegistrationForm, value: string) => {
    setRegistrationForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would be sent to a server
    console.log('Registration submitted:', registrationForm);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSelectedEvent(null);
      setRegistrationForm({
        eventId: 0,
        fullName: '',
        email: '',
        phone: '',
        studentId: '',
        faculty: '',
        year: '',
        notes: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const getAvailableSpots = (event: Event) => {
    return event.capacity - event.registered;
  };

  const isRegistrationOpen = (event: Event) => {
    const deadline = new Date(event.registrationDeadline);
    const now = new Date();
    return now <= deadline && getAvailableSpots(event) > 0;
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Event Registration</h1>
          <p className="text-xl text-muted-foreground">
            Register for upcoming events and secure your spot
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedEvent?.id === event.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleEventSelect(event)}
                >
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <Badge 
                      className={`absolute top-3 left-3 ${getCategoryColor(event.category)}`}
                    >
                      {getCategoryLabel(event.category)}
                    </Badge>
                    {!isRegistrationOpen(event) && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-lg">
                        <Badge variant="destructive">
                          {getAvailableSpots(event) === 0 ? 'Fully Booked' : 'Registration Closed'}
                        </Badge>
                      </div>
                    )}
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
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {event.registered}/{event.capacity} registered ({getAvailableSpots(event)} spots left)
                      </div>
                    </div>
                    
                    {/* Countdown Timer */}
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <EventCountdown eventDate={event.date} eventTime={event.time} />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {event.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Registration deadline: {formatDate(event.registrationDeadline)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div>
            <div className="sticky top-20">
              {selectedEvent ? (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Register for {selectedEvent.title}</CardTitle>
                    <CardDescription>
                      Please fill in your information to register for this event
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Registration Successful!</h3>
                        <p className="text-muted-foreground">
                          You have successfully registered for {selectedEvent.title}. 
                          Check your email for confirmation details.
                        </p>
                      </div>
                    ) : !isRegistrationOpen(selectedEvent) ? (
                      <div className="text-center py-8">
                        <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Calendar className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Registration Unavailable</h3>
                        <p className="text-muted-foreground">
                          {getAvailableSpots(selectedEvent) === 0 
                            ? 'This event is fully booked.' 
                            : 'Registration for this event has closed.'}
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              value={registrationForm.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={registrationForm.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              value={registrationForm.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="studentId">Student ID *</Label>
                            <Input
                              id="studentId"
                              value={registrationForm.studentId}
                              onChange={(e) => handleInputChange('studentId', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="faculty">Faculty *</Label>
                            <Select value={registrationForm.faculty} onValueChange={(value) => handleInputChange('faculty', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your faculty" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="computer-science">Computer Science</SelectItem>
                                <SelectItem value="electrical-engineering">Electrical Engineering</SelectItem>
                                <SelectItem value="mechanical-engineering">Mechanical Engineering</SelectItem>
                                <SelectItem value="civil-engineering">Civil Engineering</SelectItem>
                                <SelectItem value="business">Business Administration</SelectItem>
                                <SelectItem value="mathematics">Mathematics</SelectItem>
                                <SelectItem value="physics">Physics</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="year">Year of Study *</Label>
                            <Select value={registrationForm.year} onValueChange={(value) => handleInputChange('year', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your year" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1st Year</SelectItem>
                                <SelectItem value="2">2nd Year</SelectItem>
                                <SelectItem value="3">3rd Year</SelectItem>
                                <SelectItem value="4">4th Year</SelectItem>
                                <SelectItem value="graduate">Graduate</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="notes">Additional Notes (Optional)</Label>
                          <Textarea
                            id="notes"
                            placeholder="Any special requirements or questions..."
                            value={registrationForm.notes}
                            onChange={(e) => handleInputChange('notes', e.target.value)}
                            rows={3}
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          Register for Event
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Select an Event</CardTitle>
                    <CardDescription>
                      Choose an event from the left to register
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Please select an event to view registration details and fill out the form.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}