
export interface EventDay {
  date: string;
  dayLabel: string;
  theme: string;
  activities: Activity[];
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  location: string;
  speaker?: string;
  moderator?: string;
  type: 'Keynote' | 'Workshop' | 'Networking' | 'Break' | 'Panel';
}

export interface ScheduleItem {
  label: string;
  time: string;
  details?: string;
}

export interface FAQItem {
  category: 'Logística' | 'Gastronomia' | 'Saúde' | 'Serviços';
  question: string;
  answer: string;
  icon: string;
  subItems?: ScheduleItem[];
}
