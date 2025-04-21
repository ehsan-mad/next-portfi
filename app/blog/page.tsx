"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Types for our API responses
interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  content: string;
}

interface TravelDestination {
  name: string;
  description: string;
  image: string;
  country: string;
  rating: number;
}

const BlogPage = () => {
  // State for our data
  const [programmingNews, setProgrammingNews] = useState<NewsArticle[]>([]);
  const [travelDestinations, setTravelDestinations] = useState<TravelDestination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'programming' | 'travel'>('programming');

  // Fetch programming news from NewsAPI
  const fetchProgrammingNews = async () => {
    try {
      // Note: In production, you should use environment variables for API keys
      // This is a placeholder - you'll need to sign up for a free API key at newsapi.org
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=programming+development&language=en&sortBy=publishedAt&pageSize=6&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY || 'YOUR_API_KEY_HERE'}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch programming news');
      }
      
      const data = await response.json();
      setProgrammingNews(data.articles || []);
    } catch (err) {
      console.error('Error fetching programming news:', err);
      setError('Failed to load programming news. Using fallback data.');
      // Fallback data in case API fails
      setProgrammingNews(fallbackProgrammingNews);
    }
  };

  // Fetch travel destinations (using a mock API for this example)
  const fetchTravelDestinations = async () => {
    try {
      // For demo purposes, we'll use a placeholder API
      // In a real app, you would use a real travel API like TripAdvisor, Amadeus, etc.
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=6');
      
      if (!response.ok) {
        throw new Error('Failed to fetch travel destinations');
      }
      
      const data = await response.json();
      
      // Transform the placeholder data into our desired format
      const transformedData: TravelDestination[] = data.map((item: any, index: number) => ({
        name: `Amazing Destination ${index + 1}`,
        description: 'Discover the beauty of this incredible location with breathtaking views and unforgettable experiences.',
        image: item.url,
        country: ['Japan', 'Italy', 'New Zealand', 'Norway', 'Brazil', 'Morocco'][index % 6],
        rating: 4 + (Math.random() * 1),
      }));
      
      setTravelDestinations(transformedData);
    } catch (err) {
      console.error('Error fetching travel destinations:', err);
      setError('Failed to load travel destinations. Using fallback data.');
      // Fallback data in case API fails
      setTravelDestinations(fallbackTravelDestinations);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchProgrammingNews(), fetchTravelDestinations()]);
      setLoading(false);
    };
    
    fetchData();
    
    // Set up daily refresh
    const refreshInterval = setInterval(fetchData, 24 * 60 * 60 * 1000); // 24 hours
    
    return () => clearInterval(refreshInterval);
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Loading Latest Content...
            </h1>
            <div className="mt-12 flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render error state
  if (error && programmingNews.length === 0 && travelDestinations.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Something went wrong
            </h1>
            <p className="mt-4 text-xl text-gray-500">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            My Blog
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Exploring the latest in programming technologies and the beauty of world travel.
            Updated daily with fresh content.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('programming')}
              className={`${
                activeTab === 'programming'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              Programming News
            </button>
            <button
              onClick={() => setActiveTab('travel')}
              className={`${
                activeTab === 'travel'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
            >
              World Travel
            </button>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'programming' ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest in Programming</h2>
            
            {error && (
              <div className="rounded-md bg-yellow-50 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Note
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programmingNews.map((article, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48">
                    {article.urlToImage ? (
                      <Image 
                        src={article.urlToImage} 
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{article.source.name}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description || 'Read the full article for more details.'}
                    </p>
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore the World</h2>
            
            {error && (
              <div className="rounded-md bg-yellow-50 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      Note
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {travelDestinations.map((destination, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48">
                    <Image 
                      src={destination.image} 
                      alt={destination.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {destination.country}
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {destination.description}
                    </p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      
    </div>
  );
};

// Fallback data in case API calls fail
const fallbackProgrammingNews: NewsArticle[] = [
  {
    title: "The Future of Web Development: What's Coming in 2024",
    description: "Explore the upcoming trends in web development including AI integration, WebAssembly advancements, and new JavaScript features.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    publishedAt: new Date().toISOString(),
    source: { name: "TechCrunch" },
    content: "Web development continues to evolve at a rapid pace..."
  },
  {
    title: "React 19 Announced with Revolutionary New Features",
    description: "The React team has announced version 19 with game-changing improvements to the popular JavaScript library.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    publishedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    source: { name: "React Blog" },
    content: "React 19 introduces several new features that will change how developers build applications..."
  },
  {
    title: "TypeScript 5.3: The Most Important Features You Need to Know",
    description: "A deep dive into the latest TypeScript release and how it improves developer productivity and type safety.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    source: { name: "Microsoft Dev Blog" },
    content: "TypeScript continues to improve with each release..."
  },
  {
    title: "The Rise of AI-Powered Development Tools",
    description: "How artificial intelligence is transforming the way developers write, test, and deploy code.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    publishedAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    source: { name: "Wired" },
    content: "AI-powered development tools are revolutionizing software engineering..."
  },
  {
    title: "Next.js vs. Remix: Which React Framework Should You Choose?",
    description: "A comprehensive comparison of two popular React frameworks to help you decide which is best for your next project.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    publishedAt: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
    source: { name: "Dev.to" },
    content: "Choosing the right framework can significantly impact your development experience..."
  },
  {
    title: "The Complete Guide to Web Accessibility in 2024",
    description: "Learn how to make your web applications accessible to everyone with this comprehensive guide.",
    url: "#",
    urlToImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    publishedAt: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
    source: { name: "A11Y Project" },
    content: "Web accessibility is more important than ever..."
  }
];

const fallbackTravelDestinations: TravelDestination[] = [
  {
    name: "Kyoto, Japan",
    description: "Experience the perfect blend of ancient traditions and modern culture in Japan's former capital.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    country: "Japan",
    rating: 4.8
  },
  {
    name: "Amalfi Coast, Italy",
    description: "Discover dramatic cliffs, picturesque towns, and crystal-clear waters along Italy's stunning coastline.",
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    country: "Italy",
    rating: 4.9
  },
  {
    name: "Queenstown, New Zealand",
    description: "The adventure capital of the world offers breathtaking landscapes and adrenaline-pumping activities.",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    country: "New Zealand",
    rating: 4.7
  },
  {
    name: "Norwegian Fjords",
    description: "Explore dramatic waterfalls, steep mountains, and deep blue waters in this natural wonder.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    country: "Norway",
    rating: 4.9
  },
  {
    name: "Rio de Janeiro, Brazil",
    description: "Experience the vibrant culture, stunning beaches, and iconic landmarks of this South American gem.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    country: "Brazil",
    rating: 4.6
  },
  {
    name: "Marrakech, Morocco",
    description: "Get lost in the colorful markets, stunning architecture, and rich cultural heritage of this ancient city.",
    image: "https://images.unsplash.com/photo-1597212720158-e21ad39d2e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    country: "Morocco",
    rating: 4.5
  }
];

export default BlogPage;