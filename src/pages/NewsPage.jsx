import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Eye, 
  Share2, 
  Heart, 
  MessageCircle, 
  Tag,
  TrendingUp,
  AlertCircle,
  Bookmark,
  ChevronRight,
  X
} from 'lucide-react';

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedNews, setSelectedNews] = useState(null);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());

  const newsItems = [
    {
      id: 1,
      title: "New Academic Calendar Released Year 2025/26",
      content: "The university has announced the updated academic calendar with important dates for registration, examinations, and holidays. Students are advised to note the key deadlines to avoid any academic disruptions.",
      fullContent: "The University of Nairobi has released the comprehensive academic calendar for the Fall 2025 semester. Key highlights include early registration starting August 18th, Resumption from September 1st, and mid-semester examinations scheduled for October 20-25. The calendar also incorporates public holidays and cultural celebrations to ensure students can balance academic and personal commitments. Department heads emphasize the importance of adhering to these dates for smooth academic progression.",
      category: "Academic",
      date: "2025-07-15",
      time: "09:30 AM",
      urgent: true,
      author: "Academic Office",
      image: "/calendar.png",
      tags: ["calendar", "registration", "important"],
      views: 245,
      likes: 32,
      comments: 8,
      featured: true
    },
    {
      id: 2,
      title: "Hackathon - Registration Now Open",
      content: "The annual business plan competition is accepting submissions. This year's theme focuses on sustainable business solutions with a total prize pool of KES 500,000.",
      fullContent: "The highly anticipated Business Plan Competition 2025 is now accepting applications from undergraduate and graduate students. This year's theme, 'Sustainable Solutions for Tomorrow's Challenges,' encourages innovative approaches to environmental and social issues. The competition features three categories: Tech Innovation, Social Impact, and Green Business. Registration deadline is August 15th, with preliminary judging in September and finals in October. Winning teams will receive mentorship opportunities and potential funding for their ventures.",
      category: "Competition",
      date: "2025-07-14",
      time: "02:15 PM",
      urgent: false,
      author: "Entrepreneurship Club",
      image: "/Business.png",
      tags: ["competition", "entrepreneurship", "prizes"],
      views: 189,
      likes: 45,
      comments: 12,
      featured: true
    },
    {
      id: 3,
      title: "Alumni Networking Event - Connect with Industry Leaders",
      content: "Join us for an exclusive networking session with successful alumni from various industries. Register early as spaces are limited to 150 participants.",
      fullContent: "The School of Business is hosting its quarterly Alumni Networking Event on July 30th at the Nairobi Serena Hotel. This exclusive gathering will feature over 50 distinguished alumni from finance, technology, healthcare, and consulting sectors. The event includes keynote presentations, panel discussions, and structured networking sessions. Students can register through the alumni portal, and professional attire is required. Light refreshments will be provided, and attendees will receive a digital networking directory.",
      category: "Event",
      date: "2025-07-13",
      time: "11:45 AM",
      urgent: false,
      author: "Alumni Relations",
      image: "/alumni.png",
      tags: ["networking", "alumni", "career"],
      views: 167,
      likes: 28,
      comments: 6,
      featured: false
    },
    {
      id: 4,
      title: "New Library Digital Resources Available",
      content: "The library has expanded its digital collection with access to premium business databases and e-books. All students can now access these resources remotely.",
      fullContent: "The University Library has significantly expanded its digital resources with the addition of Bloomberg Terminal access, Harvard Business Review database, and over 5,000 new e-books covering business, economics, and management. Students can access these resources 24/7 through the library portal using their student credentials. The library is also offering training sessions every Thursday at 3 PM to help students maximize the use of these new resources. Online tutorials and user guides are available on the library website.",
      category: "Academic",
      date: "2025-07-12",
      time: "08:20 AM",
      urgent: false,
      author: "University Library",
      image: "/library.png",
      tags: ["library", "resources", "digital"],
      views: 134,
      likes: 21,
      comments: 3,
      featured: false
    },
    {
      id: 5,
      title: "URGENT: Campus Security Advisory",
      content: "Important security notice regarding recent incidents. All students are advised to follow safety protocols and report any suspicious activities immediately.",
      fullContent: "The Campus Security Office has issued an important advisory following recent security incidents near the business school. Students are reminded to travel in groups after dark, use well-lit pathways, and avoid displaying valuable items openly. Additional security patrols have been deployed, and emergency call boxes have been installed at key locations. The security hotline (0700-SECURITY) is available 24/7. Students should also register for the emergency alert system to receive real-time safety updates.",
      category: "Security",
      date: "2025-07-11",
      time: "04:30 PM",
      urgent: true,
      author: "Campus Security",
      image: "/security.png",
      tags: ["security", "safety", "urgent"],
      views: 456,
      likes: 89,
      comments: 24,
      featured: true
    },
    {
      id: 6,
      title: "Student Exchange Program Applications Open",
      content: "Apply now for the international student exchange program for Spring 2026. Partner universities include institutions in Europe, Asia, and the Americas.",
      fullContent: "The International Programs Office is accepting applications for the Spring 2026 student exchange program. Students can choose from 25 partner universities across 15 countries, including London School of Economics, National University of Singapore, and Universidad de São Paulo. Eligible students must have a GPA of 3.5 or higher and complete language proficiency requirements where applicable. The application deadline is September 30th, and selected students will receive partial funding for travel and accommodation.",
      category: "International",
      date: "2025-07-10",
      time: "01:10 PM",
      urgent: false,
      author: "International Programs",
      image: "/exchange.png",
      tags: ["exchange", "international", "scholarships"],
      views: 203,
      likes: 67,
      comments: 15,
      featured: false
    }
  ];

  const categories = ['all', 'Academic', 'Competition', 'Event', 'Security', 'International'];
  const allTags = [...new Set(newsItems.flatMap(item => item.tags))];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    switch(sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'views':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const featuredNews = newsItems.filter(item => item.featured);
  const urgentNews = newsItems.filter(item => item.urgent);

  const toggleBookmark = (newsId) => {
    const newBookmarks = new Set(bookmarkedItems);
    if (newBookmarks.has(newsId)) {
      newBookmarks.delete(newsId);
    } else {
      newBookmarks.add(newsId);
    }
    setBookmarkedItems(newBookmarks);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const NewsCard = ({ news, isCompact = false }) => (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group ${isCompact ? 'h-full' : ''}`}>
      <div className="relative">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {news.urgent && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              URGENT
            </span>
          )}
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            news.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
            news.category === 'Competition' ? 'bg-purple-100 text-purple-700' :
            news.category === 'Event' ? 'bg-green-100 text-green-700' :
            news.category === 'Security' ? 'bg-red-100 text-red-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {news.category}
          </span>
        </div>
        <button
          onClick={() => toggleBookmark(news.id)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Bookmark 
            className={`w-4 h-4 ${bookmarkedItems.has(news.id) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
          />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(news.date)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {news.time}
          </div>
          <span className="text-green-600 font-medium">{news.author}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
          {news.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {news.content}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map(tag => (
            <span 
              key={tag}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-green-100 hover:text-green-700 cursor-pointer transition-colors"
              onClick={() => setSelectedTag(tag)}
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {news.views}
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {news.likes}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              {news.comments}
            </div>
          </div>
          
          <button 
            onClick={() => setSelectedNews(news)}
            className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-1 group"
          >
            Read More
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const NewsModal = ({ news, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              news.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
              news.category === 'Competition' ? 'bg-purple-100 text-purple-700' :
              news.category === 'Event' ? 'bg-green-100 text-green-700' :
              news.category === 'Security' ? 'bg-red-100 text-red-700' :
              'bg-yellow-100 text-yellow-700'
            }`}>
              {news.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(news.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {news.time}
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{news.title}</h1>
          <p className="text-green-600 font-medium mb-6">By {news.author}</p>
          
          <div className="prose max-w-none text-gray-700 mb-6">
            <p>{news.fullContent}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {news.tags.map(tag => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                {news.likes} Likes
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                {news.comments} Comments
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
            
            <button
              onClick={() => toggleBookmark(news.id)}
              className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition-colors"
            >
              <Bookmark 
                className={`w-5 h-5 ${bookmarkedItems.has(news.id) ? 'fill-yellow-400 text-yellow-400' : ''}`}
              />
              {bookmarkedItems.has(news.id) ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest announcements, events, and important information from the School of Business
          </p>
        </div>

        {/* Urgent News Banner */}
        {urgentNews.length > 0 && (
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-black rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6" />
              <h2 className="text-xl font-bold">Urgent Announcements</h2>
            </div>
            <div className="space-y-3">
              {urgentNews.map(news => (
                <div key={news.id} className="flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3">
                  <span className="font-medium">{news.title}</span>
                  <button 
                    onClick={() => setSelectedNews(news)}
                    className="text-green-400 hover:text-red-200 underline"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
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
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="views">Sort by Views</option>
                <option value="likes">Sort by Likes</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-current rounded-sm"></div>
                  ))}
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <div className="w-4 h-4 flex flex-col gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-current h-0.5 rounded"></div>
                  ))}
                </div>
              </button>
            </div>
          </div>
          
          {/* Active Tags */}
          {selectedTag && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Active filter:</span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                <Tag className="w-3 h-3 mr-1" />
                {selectedTag}
                <button
                  onClick={() => setSelectedTag('')}
                  className="ml-2 hover:text-green-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && selectedCategory === 'all' && !searchQuery && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Stories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        )}

        {/* Main News Grid/List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All News' : `${selectedCategory} News`}
            </h2>
            <span className="text-gray-600">
              {sortedNews.length} article{sortedNews.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          {sortedNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No news found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedNews.map(news => (
                <NewsCard key={news.id} news={news} isCompact={viewMode === 'list'} />
              ))}
            </div>
          )}
        </div>

        {/* Popular Tags */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <NewsModal 
          news={selectedNews} 
          onClose={() => setSelectedNews(null)} 
        />
      )}
    </div>
  );
};

export default NewsPage;