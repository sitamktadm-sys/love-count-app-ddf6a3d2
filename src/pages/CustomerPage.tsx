import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Camera, Loader2, Heart } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { LoveCounter } from '@/components/LoveCounter';
import { PhotoCarousel } from '@/components/PhotoCarousel';
import { FunStats } from '@/components/FunStats';
import { Milestones } from '@/components/Milestones';
import { FloatingHearts } from '@/components/FloatingHearts';
import { GradientOverlay } from '@/components/GradientOverlay';

// Types
interface PageData {
  page_id: string;
  page_status: 'Active' | 'Expiring Soon' | 'Expired';
  name_1: string;
  name_2: string;
  relationship_start_date: string;
  message?: string;
  photos: string[];
  page_expiry_date: string;
}

type PageState = 'loading' | 'active' | 'expired' | 'error';

// Mock data for development
const mockData: PageData = {
  page_id: "LC-DEMO",
  page_status: "Active",
  name_1: "Sarah",
  name_2: "James",
  relationship_start_date: "2022-05-15",
  message: "Every day with you is a gift. Here's to a thousand more adventures together. I love you more than words can say. 💕",
  photos: [
    "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=500&h=625&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=500&h=625&fit=crop",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=625&fit=crop",
    "https://images.unsplash.com/photo-1529519195486-16945e80e093?w=500&h=625&fit=crop"
  ],
  page_expiry_date: "2027-01-15"
};

export function CustomerPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const [pageState, setPageState] = useState<PageState>('loading');
  const [data, setData] = useState<PageData | null>(null);
  const [isGeneratingStory, setIsGeneratingStory] = useState(false);

  useEffect(() => {
    // Set page title and meta
    document.title = 'Loading... | LoveCount';
    
    // Add noindex meta tag for privacy
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  useEffect(() => {
    async function fetchPageData() {
      try {
        // TODO: Replace with actual n8n API call
        // const response = await fetch(`https://[n8n-url]/webhook/page/${pageId}`);
        // const data = await response.json();
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Use mock data for development
        const fetchedData = { ...mockData, page_id: pageId || 'LC-DEMO' };
        
        setData(fetchedData);
        document.title = `${fetchedData.name_1} & ${fetchedData.name_2} | LoveCount`;
        
        if (fetchedData.page_status === 'Expired') {
          setPageState('expired');
        } else {
          setPageState('active');
        }
      } catch (error) {
        console.error('Failed to fetch page data:', error);
        setPageState('error');
      }
    }

    fetchPageData();
  }, [pageId]);

  const handleDownloadStory = async () => {
    if (!data) return;
    
    setIsGeneratingStory(true);
    
    try {
      // TODO: Replace with actual n8n API call
      // const response = await fetch(`https://[n8n-url]/webhook/story/${pageId}`, {
      //   method: 'POST'
      // });
      // const result = await response.json();
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo, just alert
      alert('Story generation would happen here! The image would be downloaded automatically.');
      
    } catch (error) {
      console.error('Failed to generate story:', error);
      alert('Failed to generate story. Please try again.');
    }
    
    setIsGeneratingStory(false);
  };

  // Loading State
  if (pageState === 'loading') {
    return (
      <div className="min-h-screen customer-page-bg flex items-center justify-center">
        <GradientOverlay />
        <FloatingHearts />
        <div className="text-center z-10">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-white/70">Loading your love story...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (pageState === 'error') {
    return (
      <div className="min-h-screen customer-page-bg flex flex-col">
        <GradientOverlay />
        {/* Top Bar */}
        <div className="p-4 sm:p-6 flex justify-center z-10">
          <Logo linkToHome />
        </div>
        
        <div className="flex-1 flex items-center justify-center px-4 z-10">
          <div className="text-center glass-card p-8 sm:p-12 max-w-md">
            <span className="text-6xl mb-6 block">💔</span>
            <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
            <p className="text-white/70 mb-6">
              This love page doesn't exist or the link may be incorrect.
            </p>
            <Link to="/" className="btn-primary inline-block">
              Go to Homepage
            </Link>
            <p className="text-white/50 text-sm mt-6">
              Need help?{' '}
              <a 
                href="mailto:support@lovecount.co.uk" 
                className="text-primary hover:underline"
              >
                support@lovecount.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Expired State
  if (pageState === 'expired' && data) {
    return (
      <div className="min-h-screen customer-page-bg flex flex-col">
        <GradientOverlay />
        {/* Top Bar */}
        <div className="p-4 sm:p-6 flex justify-center z-10">
          <Logo linkToHome />
        </div>
        
        <div className="flex-1 flex items-center justify-center px-4 z-10">
          <div className="text-center glass-card p-8 sm:p-12 max-w-md">
            <span className="text-6xl mb-6 block">⏰</span>
            <h1 className="text-2xl font-bold text-white mb-4">
              This love page has expired
            </h1>
            <p className="text-white/70 mb-6">
              Your LoveCount page subscription has ended. Renew now to keep celebrating your love story!
            </p>
            <a href="/" className="btn-primary inline-block">
              💕 Renew for £9.99
            </a>
            
            <p className="text-white/50 text-sm mt-6">
              Questions? Contact us at:{' '}
              <a 
                href="mailto:support@lovecount.co.uk" 
                className="text-primary hover:underline"
              >
                support@lovecount.co.uk
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-center z-10">
          <p className="text-white/40 text-sm">
            Made with 💕 by{' '}
            <Link to="/" className="text-primary hover:underline">
              LoveCount
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // Active State
  if (!data) return null;

  return (
    <div className="min-h-screen customer-page-bg">
      <GradientOverlay />
      <FloatingHearts />
      
      {/* Top Bar */}
      <div className="p-4 sm:p-6 flex justify-center relative z-10">
        <Logo linkToHome />
      </div>

      {/* Main Content */}
      <main className="max-w-lg mx-auto px-4 pb-12 space-y-8 relative z-10">
        {/* Couple Names */}
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-3">
            {data.name_1}
            <Heart className="inline-block w-6 h-6 sm:w-8 sm:h-8 mx-3 text-primary fill-primary animate-pulse" />
            {data.name_2}
          </h1>
          <p className="text-white/60 text-sm sm:text-base flex items-center justify-center gap-2">
            <span>📅</span>
            Since {new Date(data.relationship_start_date).toLocaleDateString('en-GB', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
        </div>

        {/* Day Counter */}
        <div className="glass-card p-6 sm:p-8">
          <LoveCounter startDate={data.relationship_start_date} />
        </div>

        {/* Download Story Button */}
        <div className="text-center">
          <button
            onClick={handleDownloadStory}
            disabled={isGeneratingStory}
            className="btn-secondary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingStory ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                Download Story
              </>
            )}
          </button>
        </div>

        {/* Photo Carousel */}
        {data.photos.length > 0 && (
          <PhotoCarousel photos={data.photos} />
        )}

        {/* Personal Message */}
        {data.message && (
          <div className="glass-card p-6 sm:p-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-white/90 text-lg sm:text-xl font-light italic leading-relaxed">
              "{data.message}"
            </p>
          </div>
        )}

        {/* Fun Stats */}
        <FunStats startDate={data.relationship_start_date} />

        {/* Milestones */}
        <Milestones startDate={data.relationship_start_date} />

        {/* Footer */}
        <div className="pt-8 text-center">
          <p className="text-white/40 text-sm">
            Made with 💕 by{' '}
            <Link to="/" className="text-primary hover:underline">
              LoveCount
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default CustomerPage;
