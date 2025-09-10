import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Alert, AlertDescription } from './ui/alert';
import { Star, MessageSquare, Users, Trophy, CheckCircle } from 'lucide-react';

export function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    event: '',
    rating: '',
    comments: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a UI-only form, no actual submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        userType: '',
        event: '',
        rating: '',
        comments: ''
      });
    }, 3000);
  };

  const recentEvents = [
    'TechFest 2024',
    'Tuần lễ Văn hóa 2024',
    'Hội thảo AI 2024',
    'Giải bóng đá liên khoa',
    'Đêm nhạc Acoustic',
    'Marathon thường niên',
    'Ngày hội việc làm',
    'Hackathon 2024'
  ];

  const ratingLabels = [
    'Rất không hài lòng',
    'Không hài lòng',
    'Bình thường',
    'Hài lòng',
    'Rất hài lòng'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Phản hồi sự kiện</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ý kiến của bạn rất quan trọng với chúng tôi. Hãy chia sẻ trải nghiệm của bạn 
            về các sự kiện để chúng tôi có thể cải thiện và tổ chức tốt hơn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Biểu mẫu phản hồi</span>
                </CardTitle>
                <CardDescription>
                  Vui lòng điền thông tin và chia sẻ ý kiến của bạn về sự kiện đã tham gia
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <Alert className="mb-6">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Cảm ơn bạn đã gửi phản hồi! Ý kiến của bạn đã được ghi nhận.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Nhập họ tên đầy đủ của bạn"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="email@example.com"
                        required
                      />
                    </div>

                    {/* User Type */}
                    <div className="space-y-2">
                      <Label>Loại người dùng *</Label>
                      <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại người dùng" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Sinh viên</SelectItem>
                          <SelectItem value="faculty">Giảng viên</SelectItem>
                          <SelectItem value="staff">Nhân viên</SelectItem>
                          <SelectItem value="guest">Khách mời</SelectItem>
                          <SelectItem value="alumni">Cựu sinh viên</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Event */}
                    <div className="space-y-2">
                      <Label>Sự kiện đã tham dự *</Label>
                      <Select value={formData.event} onValueChange={(value) => handleInputChange('event', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn sự kiện bạn đã tham gia" />
                        </SelectTrigger>
                        <SelectContent>
                          {recentEvents.map((event, index) => (
                            <SelectItem key={index} value={event}>{event}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Rating */}
                    <div className="space-y-4">
                      <Label>Đánh giá chung *</Label>
                      <RadioGroup 
                        value={formData.rating} 
                        onValueChange={(value) => handleInputChange('rating', value)}
                        className="space-y-3"
                      >
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <div key={rating} className="flex items-center space-x-3">
                            <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < rating 
                                        ? 'fill-yellow-400 text-yellow-400' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <Label htmlFor={`rating-${rating}`} className="text-sm">
                                {ratingLabels[rating - 1]}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Comments */}
                    <div className="space-y-2">
                      <Label htmlFor="comments">Nhận xét và đề xuất</Label>
                      <Textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => handleInputChange('comments', e.target.value)}
                        placeholder="Chia sẻ cảm nhận của bạn về sự kiện, những điểm tốt, điểm cần cải thiện và đề xuất cho các sự kiện tương lai..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Gửi phản hồi
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Feedback Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Thống kê phản hồi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Đánh giá trung bình</div>
                  <div className="flex justify-center mt-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center space-x-2">
                      <span className="text-sm w-6">{stars}</span>
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-yellow-400"
                          style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '7%' : stars === 2 ? '2%' : '1%'}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Phản hồi gần đây</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: 'Nguyễn Văn A',
                    event: 'TechFest 2024',
                    rating: 5,
                    comment: 'Sự kiện rất thú vị và bổ ích. Tổ chức chuyên nghiệp!'
                  },
                  {
                    name: 'Trần Thị B',
                    event: 'Đêm nhạc Acoustic',
                    rating: 4,
                    comment: 'Không gian ấm cúng, chất lượng âm thanh tốt.'
                  },
                  {
                    name: 'Lê Minh C',
                    event: 'Hackathon 2024',
                    rating: 5,
                    comment: 'Thử thách thú vị, học được nhiều điều mới.'
                  }
                ].map((feedback, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{feedback.name}</span>
                      <div className="flex space-x-1">
                        {Array.from({ length: feedback.rating }, (_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">{feedback.event}</div>
                    <p className="text-sm text-muted-foreground">{feedback.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Cần hỗ trợ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Nếu bạn cần hỗ trợ thêm hoặc có thắc mắc về sự kiện, vui lòng liên hệ:
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 events@university.edu.vn</div>
                  <div>📞 024 1234 5678</div>
                  <div>🏢 Phòng Công tác sinh viên</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Câu hỏi thường gặp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'Phản hồi của tôi có được bảo mật không?',
                answer: 'Có, mọi phản hồi đều được bảo mật và chỉ được sử dụng để cải thiện chất lượng sự kiện.'
              },
              {
                question: 'Tôi có thể phản hồi nhiều sự kiện không?',
                answer: 'Có, bạn có thể gửi phản hồi cho bất kỳ sự kiện nào bạn đã tham gia trong vòng 1 tháng qua.'
              },
              {
                question: 'Phản hồi có thời hạn không?',
                answer: 'Để đảm bảo tính chính xác, chúng tôi chỉ nhận phản hồi trong vòng 1 tháng sau sự kiện.'
              },
              {
                question: 'Tôi có nhận được phản hồi lại không?',
                answer: 'Nếu bạn để lại email, chúng tôi sẽ gửi thông báo cảm ơn và cập nhật về các cải thiện.'
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}