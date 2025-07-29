import React, { useState } from 'react';
import {
  BookOpen, Download, Search, Star, Clock, Eye, Share2,
  FileText, Video, Headphones, Image, Archive, ExternalLink,
  Bookmark, Heart, Tag, Calendar, User, ChevronRight,
  TrendingUp, Award, Play, X, Database
} from 'lucide-react';

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedResource, setSelectedResource] = useState(null);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());

const resources = [
    {
      id: 1,
      title: "Strategic Management Fundamentals",
      description: "Comprehensive guide covering strategic planning, competitive analysis, and implementation frameworks",
      fullDescription: "This comprehensive resource covers the fundamental concepts of strategic management including environmental analysis, strategy formulation, implementation, and evaluation. Perfect for MBA students and business professionals looking to understand how organizations create and sustain competitive advantage. Includes case studies from Fortune 500 companies and practical frameworks you can apply immediately.",
      type: "PDF",
      category: "Management",
      author: "Dr. Sarah Kimani",
      dateUploaded: "2025-07-20",
      fileSize: "2.5 MB",
      downloads: 1250,
      views: 3420,
      likes: 89,
      rating: 4.8,
      featured: true,
      premium: false,
      tags: ["strategy", "management", "planning", "competitive analysis"],
      thumbnail: "/api/placeholder/300/200",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 2,
      title: "Financial Analysis Video Series",
      description: "12-part video series covering financial statement analysis, ratio analysis, and valuation techniques",
      fullDescription: "Master financial analysis with this comprehensive 12-part video series. Each episode builds upon the previous one, starting with basic financial statement reading and progressing to advanced valuation models. Includes Excel templates, practice exercises, and real-world examples from public companies. Total runtime: 8 hours.",
      type: "Video",
      category: "Finance",
      author: "Prof. Michael Ochieng",
      dateUploaded: "2025-07-18",
      fileSize: "1.2 GB",
      duration: "8h 30m",
      downloads: 890,
      views: 2150,
      likes: 156,
      rating: 4.9,
      featured: true,
      premium: true,
      tags: ["finance", "analysis", "valuation", "excel"],
      thumbnail: "/api/placeholder/300/200",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 3,
      title: "Digital Marketing Podcast Collection",
      description: "Expert interviews and case studies on modern digital marketing strategies",
      fullDescription: "Stay ahead of digital marketing trends with this curated collection of expert interviews and case studies. Features conversations with CMOs from leading tech companies, discussions on AI in marketing, social media strategy evolution, and emerging platforms. Each episode includes actionable insights and downloadable resources.",
      type: "Audio",
      category: "Marketing",
      author: "Marketing Weekly Team",
      dateUploaded: "2025-07-15",
      fileSize: "450 MB",
      duration: "15h 20m",
      downloads: 567,
      views: 1890,
      likes: 234,
      rating: 4.7,
      featured: false,
      premium: false,
      tags: ["digital marketing", "podcast", "strategy", "trends"],
      thumbnail: "/api/placeholder/300/200",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 4,
      title: "Business Plan Template & Guide",
      description: "Professional business plan template with step-by-step writing guide",
      fullDescription: "Create compelling business plans with this professional template used by successful startups and established companies. Includes sections for executive summary, market analysis, financial projections, and risk assessment. The accompanying guide provides detailed instructions, examples, and tips from venture capitalists on what investors look for.",
      type: "Template",
      category: "Entrepreneurship",
      author: "Startup Incubator",
      dateUploaded: "2025-07-12",
      fileSize: "5.8 MB",
      downloads: 2340,
      views: 4560,
      likes: 312,
      rating: 4.6,
      featured: true,
      premium: false,
      tags: ["business plan", "template", "entrepreneurship", "startup"],
      thumbnail: "/api/placeholder/300/200",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 5,
      title: "Data Analytics Dashboard Templates",
      description: "Ready-to-use dashboard templates for business intelligence and reporting",
      fullDescription: "Transform your data into actionable insights with these professional dashboard templates. Compatible with Excel, Power BI, and Tableau. Includes templates for sales performance, financial KPIs, marketing metrics, and operational dashboards. Each template comes with sample data and customization instructions.",
      type: "Template",
      category: "Analytics",
      author: "Data Science Dept",
      dateUploaded: "2025-07-10",
      fileSize: "15.2 MB",
      downloads: 1560,
      views: 2890,
      likes: 198,
      rating: 4.5,
      featured: false,
      premium: true,
      tags: ["analytics", "dashboard", "KPI", "reporting"],
      thumbnail: "/api/placeholder/300/200",
      downloadUrl: "#",
      previewUrl: "#"
    },
    {
      id: 6,
      title: "Leadership Development Workbook",
      description: "Interactive workbook with exercises for developing leadership skills",
      fullDescription: "Develop your leadership potential with this comprehensive workbook featuring self-assessment tools, reflection exercises, and practical activities. Based on the latest research in leadership psychology and organizational behavior. Includes 360-degree feedback templates, goal-setting frameworks, and action planning guides.",
      type: "PDF",
      category: "Leadership",
      author: "Dr. Grace Wanjiku",
      dateUploaded: "2025-07-08",
      fileSize: "8.4 MB",
      downloads: 987,
      views: 2340,
      likes: 145,
      rating: 4.7,
      featured: false,
      premium: false,
      tags: ["leadership", "development", "workbook", "skills"],
      thumbnail: "/api/placeholder/300/200",
      downloadUrl: "#",
      previewUrl: "#"
    }
  ];

  const categories = ['all', 'Management', 'Finance', 'Marketing', 'Entrepreneurship', 'Analytics', 'Leadership'];
  const types = ['all', 'PDF', 'Video', 'Audio', 'Template', 'Dataset'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.dateUploaded) - new Date(a.dateUploaded);
      case 'popular':
        return b.views - a.views;
      case 'downloads':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const featuredResources = resources.filter(resource => resource.featured);
  const popularResources = [...resources].sort((a, b) => b.views - a.views).slice(0, 5);

  const toggleBookmark = (resourceId) => {
    const newBookmarks = new Set(bookmarkedItems);
    if (newBookmarks.has(resourceId)) {
      newBookmarks.delete(resourceId);
    } else {
      newBookmarks.add(resourceId);
    }
    setBookmarkedItems(newBookmarks);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'PDF': return <FileText className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Audio': return <Headphones className="w-5 h-5" />;
      case 'Template': return <Archive className="w-5 h-5" />;
      case 'Dataset': return <Database className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const ResourceCard = ({ resource }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative">
        <img src={resource.thumbnail} alt={resource.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white ${
            resource.type === 'PDF' ? 'bg-red-500' :
            resource.type === 'Video' ? 'bg-blue-500' :
            resource.type === 'Audio' ? 'bg-purple-500' :
            resource.type === 'Template' ? 'bg-green-500' :
            'bg-gray-500'
          }`}>
            {getTypeIcon(resource.type)}
            {resource.type}
          </span>
          {resource.premium && (
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              PREMIUM
            </span>
          )}
        </div>
        <button
          onClick={() => toggleBookmark(resource.id)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Bookmark
            className={`w-4 h-4 ${bookmarkedItems.has(resource.id) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">{resource.category}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
          {resource.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1"><User className="w-4 h-4" />{resource.author}</div>
          <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(resource.dateUploaded)}</div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.slice(0, 3).map(tag => (
            <span key={tag} className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-green-100 hover:text-green-700 cursor-pointer transition-colors">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1"><Download className="w-4 h-4" />{resource.downloads}</div>
            <div className="flex items-center gap-1"><Eye className="w-4 h-4" />{resource.views}</div>
            <div className="flex items-center gap-1"><Heart className="w-4 h-4" />{resource.likes}</div>
          </div>
          <button
            onClick={() => setSelectedResource(resource)}
            className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-1 group"
          >
            View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  const ResourceModal = ({ resource, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img src={resource.thumbnail} alt={resource.title} className="w-full h-64 object-cover" />
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <X className="w-5 h-5" />
          </button>
          {resource.type === 'Video' && (
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-colors">
              <Play className="w-16 h-16 text-white" />
            </button>
          )}
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{resource.title}</h1>
          <p className="text-green-600 font-medium mb-4">By {resource.author}</p>
          <p className="text-gray-700 mb-6">{resource.fullDescription}</p>
          <div className="flex flex-wrap gap-4">
            <a href={resource.downloadUrl} className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-5 h-5" />
              Download
            </a>
            <a href={resource.previewUrl} className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Eye className="w-5 h-5" />
              Preview
            </a>
            <button onClick={() => toggleBookmark(resource.id)} className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Bookmark className={`w-5 h-5 ${bookmarkedItems.has(resource.id) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
              {bookmarkedItems.has(resource.id) ? 'Saved' : 'Save'}
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
            Learning Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access premium educational content, templates, and tools to accelerate your learning journey
          </p>
        </div>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredResources.slice(0, 3).map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
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
                  placeholder="Search resources..."
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="downloads">Most Downloaded</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                All Resources
              </h2>
              <span className="text-gray-600">
                {sortedResources.length} resource{sortedResources.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            {sortedResources.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedResources.map(resource => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Popular This Week</h3>
              </div>
              
              <div className="space-y-4">
                {popularResources.map((resource, index) => (
                  <div key={resource.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                       onClick={() => setSelectedResource(resource)}>
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{resource.title}</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{formatDate(resource.dateUploaded)}
</span>
                      </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{resource.rating}</span>
                        </div>
                    </div>
                    <button 
                      onClick={() => toggleBookmark(resource.id)}
                      className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedItems.includes(resource.id) ? 'text-green-500' : 'text-gray-400'}`} />
                    </button>
                    </div>
                ))}
              </div>
            </div>
            {/* Featured Resources */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-gray-900">Featured Resources</h3>
              </div>

              <div className="space-y-4">
                {featuredResources.map((resource, index) => (
                  <div key={resource.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                       onClick={() => setSelectedResource(resource)}>
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{resource.title}</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{formatDate(resource.dateUploaded)}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleBookmark(resource.id)}
                      className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarkedItems.includes(resource.id) ? 'text-green-500' : 'text-gray-400'}`} />
                    </button>
                  </div>
                ))}

                {selectedResource && (
        <ResourceModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
