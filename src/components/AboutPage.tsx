import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Award, Users, BookOpen, Palette, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const annualEvents = [
    {
      category: 'Academic',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      events: [
        { name: 'TechFest', time: 'July', description: 'Technology exhibition and student projects' },
        { name: 'Hackathon', time: 'September', description: '48-hour programming competition' },
        { name: 'AI Workshop', time: 'December', description: 'Artificial intelligence workshop' },
        { name: 'Career Fair', time: 'April', description: 'Connecting students with businesses' }
      ]
    },
    {
      category: 'Cultural',
      icon: Palette,
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      events: [
        { name: 'Cultural Week', time: 'August', description: 'Diverse multicultural festival' },
        { name: 'Acoustic Night', time: 'November', description: 'Student music program' },
        { name: 'Opening Ceremony', time: 'September', description: 'Welcome ceremony for new students' },
        { name: 'Volunteer Day', time: 'May', description: 'Community volunteer activities' }
      ]
    },
    {
      category: 'Sports',
      icon: Trophy,
      color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      events: [
        { name: 'Inter-Faculty Football', time: 'March', description: 'Largest sports tournament in university' },
        { name: 'Annual Marathon', time: 'October', description: 'Community running event' },
        { name: 'Sports Festival', time: 'June', description: 'Multi-sport competition' },
        { name: 'Volleyball Tournament', time: 'February', description: 'Student volleyball competition' }
      ]
    }
  ];

  const achievements = [
    { title: 'Top 10', description: 'Leading technology university in Vietnam' },
    { title: '50,000+', description: 'Graduated students' },
    { title: '200+', description: 'Events organized annually' },
    { title: '15', description: 'Years of event organization experience' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CampusConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our story, mission, and achievements in building a dynamic 
            learning community at ABC Technical University.
          </p>
        </div>

        {/* University Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">ABC Technical University</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Established in 2009, ABC Technical University is one of Vietnam's leading 
                  universities in technology and engineering. With a mission to train talented 
                  engineers, we are committed to providing a high-quality and modern learning 
                  environment.
                </p>
                <p>
                  The university currently has over 15,000 students with experienced and 
                  passionate faculty members. We pride ourselves on being a place that connects 
                  knowledge with practice, helping students develop comprehensively in both 
                  professional and soft skills.
                </p>
                <p>
                  CampusConnect was born as an important bridge, helping students easily 
                  access and participate in academic, cultural, and sports activities, 
                  thereby creating a dynamic and cohesive learning community.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706016899218-ebe36844f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3NDQwNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="University Campus"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Annual Events</h2>
            <p className="text-lg text-muted-foreground">
              Explore diverse activities organized throughout the year at the university
            </p>
          </div>

          <div className="space-y-8">
            {annualEvents.map((eventGroup, index) => {
              const Icon = eventGroup.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{eventGroup.category}</CardTitle>
                        <CardDescription>
                          Events and activities in the {eventGroup.category.toLowerCase()} category
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {eventGroup.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="flex items-start space-x-3 p-4 rounded-lg border">
                          <Badge className={eventGroup.color}>
                            {event.time}
                          </Badge>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1">{event.name}</h4>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Organizing Bodies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Organizing Bodies</h2>
            <p className="text-lg text-muted-foreground">
              Departments and organizations responsible for organizing events at the university
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Student Affairs Office',
                role: 'Overall management of student activities',
                icon: Users,
                responsibilities: ['Student activity management', 'Large event organization', 'Student organization support']
              },
              {
                name: 'Student Union',
                role: 'Student representation in activities',
                icon: Award,
                responsibilities: ['Cultural activity organization', 'Student networking', 'Policy feedback']
              },
              {
                name: 'Training Department',
                role: 'Academic event management',
                icon: BookOpen,
                responsibilities: ['Scientific seminars', 'Academic competitions', 'Business connections']
              },
              {
                name: 'Physical Education Department',
                role: 'Sports activity organization',
                icon: Trophy,
                responsibilities: ['Sports tournaments', 'Fitness activities', 'Inter-university competitions']
              },
              {
                name: 'Academic Faculties',
                role: 'Specialized field event organization',
                icon: Calendar,
                responsibilities: ['Field-specific events', 'Technical workshops', 'Business internships']
              },
              {
                name: 'Youth Union',
                role: 'Volunteer and social activities',
                icon: Users,
                responsibilities: ['Volunteer activities', 'Social programs', 'Moral education']
              }
            ].map((org, index) => {
              const Icon = org.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{org.name}</CardTitle>
                      </div>
                    </div>
                    <CardDescription>{org.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {org.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Create an effective connection platform that helps students easily access 
                  and participate in academic, research, cultural and sports activities, 
                  thereby developing comprehensively in knowledge and skills.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Become the leading digital platform in connecting educational communities, 
                  contributing to building a dynamic, creative learning environment and 
                  promoting sustainable student development.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}