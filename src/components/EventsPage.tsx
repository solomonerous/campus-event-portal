import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, MapPin, Clock, Filter, SortAsc } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

export function EventsPage() {
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
          location: "Phòng hội thảo chính",
          category: "academic",
          shortDescription: "Triển lãm công nghệ thường niên với các dự án sáng tạo từ sinh viên và workshop từ các chuyên gia trong ngành.",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800"
        },
        {
          id: 2,
          title: "Tuần lễ Văn hóa",
          date: "2025-08-05",
          time: "09:00 - 18:00",
          location: "Sân vận động trường",
          category: "cultural",
          shortDescription: "Lễ hội văn hóa đa dạng với các hoạt động biểu diễn, ẩm thực và trưng bày truyền thống.",
          image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800"
        },
        {
          id: 3,
          title: "Hackathon 2025",
          date: "2025-07-15",
          time: "08:00 - 20:00",
          location: "Phòng lab 302",
          category: "academic",
          shortDescription: "Cuộc thi lập trình 48 giờ với giải thưởng hấp dẫn và cơ hội thực tập tại các công ty công nghệ.",
          image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800"
        },
        {
          id: 4,
          title: "Giải bóng đá liên khoa",
          date: "2025-09-10",
          time: "15:00 - 17:00",
          location: "Sân bóng đá trường",
          category: "sports",
          shortDescription: "Giải đấu thường niên giữa các khoa với tinh thần thể thao cao và nhiều hoạt động cổ vũ.",
          image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"
        }
      ],
      pastEvents: [
        {
          id: 5,
          title: "Hội thảo AI 2024",
          date: "2024-12-15",
          time: "14:00 - 17:00",
          location: "Hội trường A",
          category: "academic",
          shortDescription: "Hội thảo về trí tuệ nhân tạo với sự tham gia của các chuyên gia hàng đầu.",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
        },
        {
          id: 6,
          title: "Đêm nhạc acoustic",
          date: "2024-11-20",
          time: "19:00 - 22:00",
          location: "Café sinh viên",
          category: "cultural",
          shortDescription: "Đêm nhạc với sự biểu diễn của các ban nhạc sinh viên trong không gian ấm cúng.",
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
    return date.toLocaleDateString('vi-VN', {
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
      case 'academic': return 'Học thuật';
      case 'cultural': return 'Văn hóa';
      case 'sports': return 'Thể thao';
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
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {event.shortDescription}
        </p>
        <Button variant="outline" size="sm" className="w-full">
          Xem chi tiết
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lịch sự kiện</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Khám phá và tham gia các sự kiện thú vị tại trường. 
            Từ các hoạt động học thuật đến văn hóa và thể thao.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Lọc theo:</span>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Danh mục" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="academic">Học thuật</SelectItem>
                <SelectItem value="cultural">Văn hóa</SelectItem>
                <SelectItem value="sports">Thể thao</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <SortAsc className="h-4 w-4" />
            <span className="text-sm font-medium">Sắp xếp:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Ngày (gần nhất)</SelectItem>
                <SelectItem value="date-desc">Ngày (xa nhất)</SelectItem>
                <SelectItem value="name">Tên A-Z</SelectItem>
                <SelectItem value="category">Danh mục</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1" />

          <div className="text-sm text-muted-foreground flex items-center">
            Tổng: {filteredUpcoming.length + filteredPast.length} sự kiện
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-400 mx-auto">
            <TabsTrigger value="upcoming" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Sắp tới ({filteredUpcoming.length})</span>
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Đã diễn ra ({filteredPast.length})</span>
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
                <h3 className="text-lg font-semibold mb-2">Không có sự kiện nào</h3>
                <p className="text-muted-foreground">
                  {categoryFilter === 'all' 
                    ? 'Hiện tại chưa có sự kiện sắp tới nào.' 
                    : `Không có sự kiện ${getCategoryLabel(categoryFilter).toLowerCase()} nào sắp tới.`}
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
                <h3 className="text-lg font-semibold mb-2">Không có sự kiện nào</h3>
                <p className="text-muted-foreground">
                  {categoryFilter === 'all' 
                    ? 'Chưa có sự kiện nào đã diễn ra.' 
                    : `Không có sự kiện ${getCategoryLabel(categoryFilter).toLowerCase()} nào đã diễn ra.`}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Category Overview */}
        <section className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Danh mục sự kiện</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                category: 'academic',
                title: 'Sự kiện học thuật',
                description: 'Hội thảo, cuộc thi, triển lãm công nghệ và các hoạt động nghiên cứu khoa học.',
                icon: '🎓'
              },
              {
                category: 'cultural',
                title: 'Sự kiện văn hóa',
                description: 'Chương trình văn nghệ, lễ hội, triển lãm nghệ thuật và các hoạt động văn hóa.',
                icon: '🎭'
              },
              {
                category: 'sports',
                title: 'Sự kiện thể thao',
                description: 'Giải đấu thể thao, hoạt động rèn luyện sức khỏe và thi đấu liên trường.',
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
                    Xem sự kiện
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