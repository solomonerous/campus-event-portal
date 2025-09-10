import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Award, Users, BookOpen, Palette, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const annualEvents = [
    {
      category: 'Học thuật',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      events: [
        { name: 'TechFest', time: 'Tháng 7', description: 'Triển lãm công nghệ và dự án sinh viên' },
        { name: 'Hackathon', time: 'Tháng 9', description: 'Cuộc thi lập trình 48 giờ' },
        { name: 'Hội thảo AI', time: 'Tháng 12', description: 'Hội thảo về trí tuệ nhân tạo' },
        { name: 'Ngày hội việc làm', time: 'Tháng 4', description: 'Kết nối sinh viên với doanh nghiệp' }
      ]
    },
    {
      category: 'Văn hóa',
      icon: Palette,
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      events: [
        { name: 'Tuần lễ Văn hóa', time: 'Tháng 8', description: 'Lễ hội văn hóa đa dạng các dân tộc' },
        { name: 'Đêm nhạc Acoustic', time: 'Tháng 11', description: 'Chương trình âm nhạc sinh viên' },
        { name: 'Lễ khai giảng', time: 'Tháng 9', description: 'Lễ chào đón sinh viên mới' },
        { name: 'Ngày hội tình nguyện', time: 'Tháng 5', description: 'Các hoạt động tình nguyện cộng đồng' }
      ]
    },
    {
      category: 'Thể thao',
      icon: Trophy,
      color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      events: [
        { name: 'Giải bóng đá liên khoa', time: 'Tháng 3', description: 'Giải đấu thể thao lớn nhất trường' },
        { name: 'Marathon thường niên', time: 'Tháng 10', description: 'Giải chạy bộ cho cộng đồng' },
        { name: 'Đại hội thể thao', time: 'Tháng 6', description: 'Thi đấu đa môn thể thao' },
        { name: 'Giải bóng chuyền', time: 'Tháng 2', description: 'Giải đấu bóng chuyền sinh viên' }
      ]
    }
  ];

  const achievements = [
    { title: 'Top 10', description: 'Trường đại học công nghệ hàng đầu Việt Nam' },
    { title: '50,000+', description: 'Sinh viên đã tốt nghiệp' },
    { title: '200+', description: 'Sự kiện được tổ chức hàng năm' },
    { title: '15', description: 'Năm kinh nghiệm tổ chức sự kiện' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Về CampusConnect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Khám phá câu chuyện của chúng tôi, sứ mệnh và những thành tựu đã đạt được 
            trong việc xây dựng cộng đồng học tập năng động tại Trường Đại học Kỹ thuật ABC.
          </p>
        </div>

        {/* University Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Trường Đại học Kỹ thuật ABC</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Được thành lập vào năm 2009, Trường Đại học Kỹ thuật ABC là một trong những 
                  trường đại học hàng đầu Việt Nam trong lĩnh vực công nghệ và kỹ thuật. 
                  Với sứ mệnh đào tạo những kỹ sư tài năng, chúng tôi luôn cam kết mang đến 
                  môi trường học tập chất lượng cao và hiện đại.
                </p>
                <p>
                  Trường hiện có hơn 15,000 sinh viên đang theo học với đội ngũ giảng viên 
                  giàu kinh nghiệm và nhiệt huyết. Chúng tôi tự hào là nơi kết nối tri thức 
                  với thực tiễn, giúp sinh viên phát triển toàn diện cả về chuyên môn và kỹ năng mềm.
                </p>
                <p>
                  CampusConnect ra đời như một cầu nối quan trọng, giúp sinh viên dễ dàng 
                  tiếp cận và tham gia vào các hoạt động học thuật, văn hóa và thể thao, 
                  từ đó tạo nên một cộng đồng học tập sôi động và gắn kết.
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
            <h2 className="text-3xl font-bold mb-4">Sự kiện thường niên</h2>
            <p className="text-lg text-muted-foreground">
              Khám phá các hoạt động đa dạng được tổ chức quanh năm tại trường
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
                          Các sự kiện và hoạt động thuộc nhóm {eventGroup.category.toLowerCase()}
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
            <h2 className="text-3xl font-bold mb-4">Đơn vị tổ chức</h2>
            <p className="text-lg text-muted-foreground">
              Các phòng ban và tổ chức phụ trách tổ chức sự kiện tại trường
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Phòng Công tác sinh viên',
                role: 'Phụ trách tổng thể các hoạt động sinh viên',
                icon: Users,
                responsibilities: ['Quản lý hoạt động sinh viên', 'Tổ chức sự kiện lớn', 'Hỗ trợ đoàn thể']
              },
              {
                name: 'Hội sinh viên',
                role: 'Đại diện sinh viên trong các hoạt động',
                icon: Award,
                responsibilities: ['Tổ chức hoạt động văn hóa', 'Kết nối sinh viên', 'Phản biện chính sách']
              },
              {
                name: 'Phòng Đào tạo',
                role: 'Phụ trách các sự kiện học thuật',
                icon: BookOpen,
                responsibilities: ['Hội thảo khoa học', 'Cuộc thi học thuật', 'Kết nối doanh nghiệp']
              },
              {
                name: 'Phòng Thể dục thể thao',
                role: 'Tổ chức các hoạt động thể thao',
                icon: Trophy,
                responsibilities: ['Giải đấu thể thao', 'Hoạt động rèn luyện', 'Thi đấu liên trường']
              },
              {
                name: 'Các Khoa chuyên môn',
                role: 'Tổ chức sự kiện theo chuyên ngành',
                icon: Calendar,
                responsibilities: ['Sự kiện chuyên ngành', 'Workshop kỹ thuật', 'Thực tập doanh nghiệp']
              },
              {
                name: 'Đoàn thanh niên',
                role: 'Hoạt động tình nguyện và xã hội',
                icon: Users,
                responsibilities: ['Hoạt động tình nguyện', 'Chương trình xã hội', 'Giáo dục đạo đức']
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
            <h2 className="text-3xl font-bold mb-4">Sứ mệnh & Tầm nhìn</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Sứ mệnh</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Tạo ra một nền tảng kết nối hiệu quả, giúp sinh viên dễ dàng tiếp cận 
                  và tham gia vào các hoạt động học tập, nghiên cứu, văn hóa và thể thao, 
                  từ đó phát triển toàn diện về kiến thức và kỹ năng.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">Tầm nhìn</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Trở thành nền tảng số hàng đầu trong việc kết nối cộng đồng giáo dục, 
                  góp phần xây dựng một môi trường học tập năng động, sáng tạo và 
                  thúc đẩy sự phát triển bền vững của sinh viên.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}