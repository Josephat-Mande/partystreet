import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Filter,
  Search,
  Clock,
  MapPin,
  Users,
  AlertCircle,
  Star,
  Tag,
  Download,
  Share2,
  Bell,
  X,
  Eye,
  Edit3
} from 'lucide-react';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAddEvent, setShowAddEvent] = useState(false);

  const events = [
    {
      id: 1,
      title: "Orientation week",
      description: "Onboarding of first years across all the departments and programs in the School of Business",
      fullDescription: "The 2025/26 academic year registration period begins today. Students can access the online portal to register for courses, pay fees, and update their academic information. Priority registration is given to final year students and those with academic excellence awards. Technical support will be available from 8 AM to 8 PM during the registration period.",
      date: "2025-08-18",
      startTime: "08:00",
      endTime: "17:00",
      location: "Lower Kabete, Kisumu , Mombasa and Nairobi Evening Campuses",
      category: "Academic",
      priority: "high",
      attendees: 1250,
      organizer: "Academic Office",
      tags: ["registration", "semester", "important"],
      isRecurring: false,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Business Plan Competition Pitch Day",
      description: "Final presentations for the annual business plan competition",
      fullDescription: "The culmination of the 2025 Business Plan Competition featuring 12 finalist teams presenting their innovative business solutions. Each team will have 10 minutes to present followed by a 5-minute Q&A session with our panel of industry experts and venture capitalists. Winners will be announced at the evening gala dinner.",
      date: "2025-09-30",
      startTime: "09:00",
      endTime: "16:00",
      location: "Business School Auditorium",
      category: "Competition",
      priority: "medium",
      attendees: 300,
      organizer: "Entrepreneurship Club",
      tags: ["competition", "business", "pitching"],
      isRecurring: false,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Alumni Networking Breakfast",
      description: "Monthly networking session with distinguished alumni",
      fullDescription: "Join us for our monthly alumni networking breakfast featuring guest speaker Jane Wanjiku, CEO of TechAfrika Solutions. This intimate gathering provides an opportunity for current students to connect with successful alumni across various industries. Continental breakfast will be served, and business cards are encouraged.",
      date: "2025-08-05",
      startTime: "07:30",
      endTime: "09:30",
      location: "Executive Conference Room",
      category: "Networking",
      priority: "medium",
      attendees: 45,
      organizer: "Alumni Relations",
      tags: ["alumni", "networking", "breakfast"],
      isRecurring: true,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Guest Lecture: Digital Marketing Trends",
      description: "Industry expert discusses latest digital marketing strategies",
      fullDescription: "Digital marketing guru Sarah Kimani will present the latest trends in digital marketing, including AI-powered advertising, social commerce, and influencer marketing strategies. This lecture is part of our Distinguished Speaker Series and is open to all business students. CME credits available for marketing professionals.",
      date: "2025-08-12",
      startTime: "14:00",
      endTime: "16:00",
      location: "Lecture Hall B",
      category: "Academic",
      priority: "low",
      attendees: 120,
      organizer: "Marketing Department",
      tags: ["lecture", "marketing", "digital"],
      isRecurring: false,
      status: "upcoming"
    },
    {
      id: 5,
      title: "Career Fair 2025",
      description: "Annual career fair with top employers",
      fullDescription: "The biggest career event of the year featuring over 80 companies from finance, consulting, technology, and manufacturing sectors. Students can attend company presentations, participate in on-spot interviews, and network with HR representatives. Professional attire required. Resume review services available from 9 AM to 12 PM.",
      date: "2025-09-15",
      startTime: "09:00",
      endTime: "17:00",
      location: "Sports Complex",
      category: "Career",
      priority: "high",
      attendees: 2000,
      organizer: "Career Services",
      tags: ["career", "jobs", "networking"],
      isRecurring: true,
      status: "upcoming"
    },
    {
      id: 6,
      title: "Mid-Semester Examinations",
      description: "Mid-semester examination period for all courses",
      fullDescription: "The mid-semester examination period for all undergraduate and graduate programs. Students should check their individual timetables for specific exam dates and venues. All examinations will be conducted in person with strict COVID-19 protocols. No makeup exams will be scheduled except for medical emergencies with proper documentation.",
      date: "2025-10-20",
      startTime: "08:00",
      endTime: "17:00",
      location: "Various Venues",
      category: "Academic",
      priority: "high",
      attendees: 1500,
      organizer: "Examinations Office",
      tags: ["exams", "academic", "important"],
      isRecurring: false,
      status: "upcoming"
    }
  ];

  const categories = ['all', 'Academic', 'Competition', 'Networking', 'Career', 'Social'];
  const viewModes = ['month', 'week', 'day', 'agenda'];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const EventCard = ({ event, isCompact = false }) => (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer ${isCompact ? 'p-3' : 'p-6'}`}
         onClick={() => setSelectedEvent(event)}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-full ${
            event.priority === 'high' ? 'bg-red-500' :
            event.priority === 'medium' ? 'bg-yellow-500' :
            'bg-green-500'
          }`}></span>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            event.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
            event.category === 'Competition' ? 'bg-purple-100 text-purple-700' :
            event.category === 'Networking' ? 'bg-green-100 text-green-700' :
            event.category === 'Career' ? 'bg-orange-100 text-orange-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {event.category}
          </span>
        </div>
        {event.isRecurring && (
          <div className="text-gray-400">
            <Calendar className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors ${isCompact ? 'text-sm' : 'text-lg'}`}>
        {event.title}
      </h3>
      
      <p className={`text-gray-600 mb-3 ${isCompact ? 'text-xs line-clamp-2' : 'text-sm line-clamp-3'}`}>
        {event.description}
      </p>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          {formatDate(event.date)}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          {formatTime(event.startTime)} - {formatTime(event.endTime)}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          {event.location}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users className="w-4 h-4" />
          {event.attendees} attendees
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 mt-3">
        {event.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const EventModal = ({ event, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-4 h-4 rounded-full ${
                  event.priority === 'high' ? 'bg-red-500' :
                  event.priority === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}></span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  event.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                  event.category === 'Competition' ? 'bg-purple-100 text-purple-700' :
                  event.category === 'Networking' ? 'bg-green-100 text-green-700' :
                  event.category === 'Career' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {event.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h2>
              <p className="text-green-600 font-medium">Organized by {event.organizer}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900">{formatDate(event.date)}</p>
                  <p className="text-sm text-gray-500">
                    {formatTime(event.startTime)} - {formatTime(event.endTime)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900">{event.location}</p>
                  <p className="text-sm text-gray-500">Venue</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900">{event.attendees} People</p>
                  <p className="text-sm text-gray-500">Expected Attendees</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900 capitalize">{event.priority} Priority</p>
                  <p className="text-sm text-gray-500">Event Importance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">{event.fullDescription}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {event.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Bell className="w-4 h-4" />
              Set Reminder
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Add to Calendar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20 border border-gray-100"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();
      
      days.push(
        <div
          key={day}
          className={`h-20 border border-gray-100 p-1 cursor-pointer hover:bg-green-50 transition-colors ${
            isToday ? 'bg-green-100' : ''
          } ${isSelected ? 'ring-2 ring-green-500' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className={`text-sm font-semibold mb-1 ${
            isToday ? 'text-green-600' : 'text-gray-900'
          }`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map(event => (
              <div
                key={event.id}
                className={`text-xs px-1 py-0.5 rounded truncate cursor-pointer ${
                  event.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                  event.category === 'Competition' ? 'bg-purple-100 text-purple-700' :
                  event.category === 'Networking' ? 'bg-green-100 text-green-700' :
                  event.category === 'Career' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-700'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedEvent(event);
                }}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500 px-1">
                +{dayEvents.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-7 gap-0 border border-gray-200 rounded-lg overflow-hidden">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="bg-gray-50 p-3 text-center font-semibold text-gray-700 border-b border-gray-200">
            {day}
          </div>
        ))}
        {days}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Activity Calendar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay on Track with upcoming events, deadlines, and important dates in the Campus and the Organizers
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              {viewModes.map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                    viewMode === mode
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
          
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <h2 className="text-xl font-bold text-gray-900">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <CalendarGrid />
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {filteredEvents.slice(0, 3).map(event => (
                  <EventCard key={event.id} event={event} isCompact={true} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Add Event</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Export Calendar</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-900">Notification Settings</span>
                </button>
              </div>
            </div>

            {/* Event Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map(category => (
                  <div key={category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        category === 'Academic' ? 'bg-blue-500' :
                        category === 'Competition' ? 'bg-purple-500' :
                        category === 'Networking' ? 'bg-green-500' :
                        category === 'Career' ? 'bg-orange-500' :
                        'bg-gray-500'
                      }`}></div>
                      <span className="text-gray-700">{category}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {events.filter(e => e.category === category).length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Event List View */}
        {viewMode === 'agenda' && (
          <div className="mt-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Event Agenda</h3>
              <div className="space-y-4">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
};

export default CalendarPage;