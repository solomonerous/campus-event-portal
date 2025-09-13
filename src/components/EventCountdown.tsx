import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface EventCountdownProps {
  eventDate: string;
  eventTime?: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function EventCountdown({ eventDate, eventTime = "00:00", className = "" }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Parse the event date and time
      const eventDateTime = new Date(`${eventDate}T${eventTime.split(' - ')[0] || eventTime}`);
      const now = new Date();
      const difference = eventDateTime.getTime() - now.getTime();

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setIsExpired(false);
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate, eventTime]);

  if (isExpired) {
    return (
      <div className={`flex items-center text-red-600 ${className}`}>
        <Clock className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">Event has started</span>
      </div>
    );
  }

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Clock className="h-4 w-4 text-primary" />
      <div className="flex space-x-3">
        {timeLeft.days > 0 && (
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{formatNumber(timeLeft.days)}</div>
            <div className="text-xs text-muted-foreground">Days</div>
          </div>
        )}
        <div className="text-center">
          <div className="text-lg font-bold text-primary">{formatNumber(timeLeft.hours)}</div>
          <div className="text-xs text-muted-foreground">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-primary">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-xs text-muted-foreground">Min</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-primary">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-xs text-muted-foreground">Sec</div>
        </div>
      </div>
    </div>
  );
}