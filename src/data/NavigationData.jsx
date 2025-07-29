import { 
  Users, 
  Bell, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  Award, 
  FileText, 
  Image, 
  HelpCircle, 
  Mail 
} from 'lucide-react';

export const navigationItems = [
  { id: 'home', label: 'Home', icon: null },
  { id: 'about', label: 'About SOBO', icon: Users },
  { id: 'news', label: 'News & Updates', icon: Bell },
  { id: 'calendar', label: 'Event Calendar', icon: Calendar },
  { id: 'resources', label: 'Resources', icon: BookOpen },
  { id: 'voice', label: 'Student Voice', icon: MessageSquare },
  { id: 'alumni', label: 'Alumni Spotlight', icon: Award },
  // { id: 'academics', label: 'Academic Resources', icon: BookOpen },
  { id: 'shop', label: 'Shop', icon: null }, // Shop doesn't have an icon
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
  { id: 'contact', label: 'Contact', icon: Mail },
  { id: 'affiliated', label: 'Affiliated Orgs', icon: Users }
];