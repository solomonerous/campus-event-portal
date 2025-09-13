import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, Clock, User, Building2, Globe } from 'lucide-react';

interface Staff {
  id: number;
  name: string;
  title: string;
  department: string;
  phone: string;
  email: string;
}

interface University {
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

export function ContactPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [university, setUniversity] = useState<University | null>(null);

  useEffect(() => {
    // Use embedded data
    const mockData = {
      staff: [
        {
          id: 1,
          name: "Assoc. Prof. Dr. Nguyen Van An",
          title: "Director of Student Affairs",
          department: "Student Affairs Office",
          phone: "0123 456 789",
          email: "nguyen.van.an@university.edu.vn"
        },
        {
          id: 2,
          name: "M.A. Tran Thi Binh",
          title: "Cultural Activities Coordinator",
          department: "Faculty of Engineering",
          phone: "0123 456 790",
          email: "tran.thi.binh@university.edu.vn"
        },
        {
          id: 3,
          name: "Dr. Le Minh Cuong",
          title: "Academic Events Coordinator",
          department: "Faculty of Information Technology",
          phone: "0123 456 791",
          email: "le.minh.cuong@university.edu.vn"
        },
        {
          id: 4,
          name: "M.A. Pham Thi Dung",
          title: "Sports Activities Manager",
          department: "Physical Education Department",
          phone: "0123 456 792",
          email: "pham.thi.dung@university.edu.vn"
        },
        {
          id: 5,
          name: "Nguyen Thanh Hai",
          title: "Student Coordinator",
          department: "Student Union",
          phone: "0123 456 793",
          email: "nguyen.thanh.hai@university.edu.vn"
        }
      ],
      university: {
        name: "ABC Technical University",
        address: "123 University Street, Cau Giay District, Hanoi",
        phone: "024 1234 5678",
        email: "info@university.edu.vn",
        website: "www.university.edu.vn"
      }
    };
    
    setStaff(mockData.staff);
    setUniversity(mockData.university);
  }, []);

  const getDepartmentColor = (department: string) => {
    if (department.includes('Student Affairs')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    if (department.includes('Engineering')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (department.includes('Information Technology')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    if (department.includes('Physical Education')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    if (department.includes('Student Union')) return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact information for faculty, coordinators, and university location. 
            We are always ready to assist you.
          </p>
        </div>

        {/* University Information */}
        {university && (
          <section className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Building2 className="h-6 w-6" />
                  <span>{university.name}</span>
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  General university information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Address</div>
                      <div className="text-sm text-muted-foreground">{university.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <div className="text-sm text-muted-foreground">{university.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <div className="text-sm text-muted-foreground">{university.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Website</div>
                      <div className="text-sm text-muted-foreground">{university.website}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Staff Contacts */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Event Organization Team</h2>
            <p className="text-lg text-muted-foreground">
              Contact information for faculty and coordinators responsible for event organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-1">{member.name}</CardTitle>
                      <CardDescription className="line-clamp-1">{member.title}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getDepartmentColor(member.department)}>
                    {member.department}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm break-all">{member.email}</span>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Google Maps */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">University Location</h2>
            <p className="text-lg text-muted-foreground">
              Find directions to the university and event venues
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="relative h-96 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863855613928!2d105.78431807603223!3d21.03818498716779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zSOG7jWMgdmnhu4duIELDoWNoIGtob2EgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1647329234567!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="University Location"
                />
              </div>
              <div className="p-6 bg-muted/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Main Address</h3>
                    <p className="text-sm text-muted-foreground">
                      123 University Street<br />
                      Cau Giay District, Hanoi
                    </p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-8 w-8 mx-auto text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 8:00 - 17:00<br />
                      Saturday: 8:00 - 12:00
                    </p>
                  </div>
                  <div className="text-center">
                    <Building2 className="h-8 w-8 mx-auto text-primary mb-2" />
                    <h3 className="font-semibold mb-1">Departments</h3>
                    <p className="text-sm text-muted-foreground">
                      Student Affairs: 2nd Floor, Building A<br />
                      Main Hall: 1st Floor, Building B
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Contact */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Quick Contact</h2>
            <p className="text-lg text-muted-foreground">
              Contact information by event type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Academic Events',
                description: 'Workshops, competitions, seminars',
                contact: 'Dr. Le Minh Cuong',
                phone: '0123 456 791',
                email: 'le.minh.cuong@university.edu.vn',
                icon: '🎓',
                color: 'border-blue-200 bg-blue-50'
              },
              {
                title: 'Cultural Events',
                description: 'Arts, festivals, exhibitions',
                contact: 'M.A. Tran Thi Binh',
                phone: '0123 456 790',
                email: 'tran.thi.binh@university.edu.vn',
                icon: '🎭',
                color: 'border-purple-200 bg-purple-50'
              },
              {
                title: 'Sports Events',
                description: 'Tournaments, sports activities',
                contact: 'M.A. Pham Thi Dung',
                phone: '0123 456 792',
                email: 'pham.thi.dung@university.edu.vn',
                icon: '🏆',
                color: 'border-green-200 bg-green-50'
              }
            ].map((category, index) => (
              <Card key={index} className={`${category.color} border-2`}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="font-medium">{category.contact}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{category.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-xs break-all">{category.email}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="p-8 bg-muted/30 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Emergency Contact</h2>
            <p className="text-muted-foreground">
              In case of emergency or incidents during events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="text-center">
                <CardTitle className="text-red-800">24/7 Hotline</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-red-800 mb-2">0123 456 999</div>
                <p className="text-sm text-red-600">Emergency support during events</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader className="text-center">
                <CardTitle className="text-orange-800">Campus Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-orange-800 mb-2">0123 456 888</div>
                <p className="text-sm text-orange-600">Security and order on campus</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}