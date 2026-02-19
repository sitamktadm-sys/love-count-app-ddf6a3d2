import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Camera, Heart, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Logo } from "@/components/Logo";
import { LoveCounter } from "@/components/LoveCounter";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { FunStats } from "@/components/FunStats";
import { Milestones } from "@/components/Milestones";
import { FloatingHearts } from "@/components/FloatingHearts";
import { GradientOverlay } from "@/components/GradientOverlay";

// Types
interface PageData {
  page_id: string;
  page_status: "Active" | "Expiring Soon" | "Expired";
  name_1: string;
  name_2: string;
  relationship_start_date: string;
  days_together?: number;
  message?: string;
  photos: string[];
  page_expiry_date: string;
}

type PageState = "loading" | "active" | "expired" | "error";

// Romantic loading phrases
const loadingPhrases = [
  "Gathering your memories...",
  "Counting the moments...",
  "Finding your love story...",
  "Collecting precious memories...",
  "Unwrapping your journey...",
];

// Fetch page data from API
const fetchPageData = async (pageId: string): Promise<PageData> => {
  const response = await fetch(
    `https://n8n.sitalabs.co.uk/webhook/page?id=${pageId}`
  );

  if (!response.ok) {
    throw new Error('Page not found');
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || 'Failed to load page');
  }

  const d = result.data;

  const expiryDate = new Date(d.expires_at);
  const today = new Date();
  const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  let page_status: "Active" | "Expiring Soon" | "Expired" = "Active";
  if (daysUntilExpiry < 0) page_status = "Expired";
  else if (daysUntilExpiry <= 30) page_status = "Expiring Soon";

  return {
    page_id: d.page_id,
    page_status: page_status,
    name_1: d.partner1_name,
    name_2: d.partner2_name,
    relationship_start_date: d.relationship_start,
    days_together: d.days_together,
    message: d.custom_message,
    photos: d.photo_urls || [],
    page_expiry_date: d.expires_at
  };
};

export function CustomerPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const [pageState, setPageState] = useState<PageState>("loading");
  const [data, setData] = useState<PageData | null>(null);
  const [loadingPhrase, setLoadingPhrase] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Cycle through loading phrases
  useEffect(() => {
    if (pageState !== "loading") return;
    const interval = setInterval(() => {
      setLoadingPhrase((prev) => (prev + 1) % loadingPhrases.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [pageState]);

  useEffect(() => {
    document.title = "Loading... | LoveCount";
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  useEffect(() => {
    async function loadPage() {
      try {
        const fetchedData = await fetchPageData(pageId || "");
        setData(fetchedData);
        document.title = `${fetchedData.name_1} & ${fetchedData.name_2} | LoveCount`;

        if (fetchedData.page_status === "Expired") {
          setPageState("expired");
        } else {
          setPageState("active");
        }
      } catch (error) {
        console.error("Failed to fetch page data:", error);
        setPageState("error");
      }
    }
    loadPage();
  }, [pageId]);

  const handleDownloadStory = async () => {
    if (!data || isGenerating) return;

    setIsGenerating(true);

    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

      const response = await fetch(
        `https://n8n.sitalabs.co.uk/webhook/story?id=${data.page_id}`,
        { method: 'POST' }
      );

      if (!response.ok) throw new Error('Failed to generate story');

      const result = await response.json();
      const imageUrl = result.data?.story_image_url || result.url;

      if (!imageUrl) throw new Error('No image URL returned');

      const link = document.createElement('a');
      link.href = imageUrl;
      link.target = '_blank';
      link.download = `lovecount-story-${data.page_id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Story generation failed:', error);
      alert('Sorry, story generation failed. Please try again.');
    } finally {
      // Re-enable after 30 seconds
      setTimeout(() => setIsGenerating(false), 30000);
    }
  };

  if (pageState === "loading") {
    return (
      <div className="min-h-screen customer-page-bg flex flex-col items-center justify-center">
        <GradientOverlay />
        <FloatingHearts />
        <div className="text-center z-10 flex flex-col items-center justify-center">
          {/* Beating Heart Loader */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1, 1.15, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-6"
          >
            <Heart 
              className="w-16 h-16 text-coral" 
              fill="currentColor"
              style={{ filter: "drop-shadow(0 0 20px rgba(232, 74, 95, 0.5))" }}
            />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingPhrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-white/70 text-lg"
            >
              {loadingPhrases[loadingPhrase]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  if (pageState === "error") {
    return (
      <div className="min-h-screen customer-page-bg flex flex-col">
        <GradientOverlay />
        <div className="p-4 sm:p-6 flex justify-center z-10">
          <Logo linkToHome />
        </div>
        <div className="flex-1 flex items-center justify-center px-4 z-10">
          <div className="text-center glass-card p-8 sm:p-12 max-w-md">
            <span className="text-6xl mb-6 block">💔</span>
            <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
            <p className="text-white/70 mb-6">This love page doesn't exist or the link may be incorrect.</p>
            <Link to="/" className="btn-primary inline-block">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (pageState === "expired" && data) {
    return (
      <div className="min-h-screen customer-page-bg flex flex-col">
        <GradientOverlay />
        <div className="p-4 sm:p-6 flex justify-center z-10">
          <Logo linkToHome />
        </div>
        <div className="flex-1 flex items-center justify-center px-4 z-10">
          <div className="text-center glass-card p-8 sm:p-12 max-w-md">
            <span className="text-6xl mb-6 block">🎁</span>
            <h1 className="text-2xl font-bold text-white mb-4">This love page has expired</h1>
            <p className="text-white/70 mb-6">Your LoveCount page subscription has ended. Renew now to preserve your precious memories.</p>
            <motion.a 
              href="/" 
              className="btn-primary inline-block"
              animate={{
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 4px 20px rgba(232, 74, 95, 0.4)",
                  "0 6px 30px rgba(232, 74, 95, 0.6)",
                  "0 4px 20px rgba(232, 74, 95, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gift className="w-5 h-5 inline-block mr-2" />
              Renew for £9.99
            </motion.a>
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen customer-page-bg">
      <GradientOverlay />
      <FloatingHearts />
      <div className="p-4 sm:p-6 flex justify-center relative z-10">
        <Logo linkToHome />
      </div>

      <main className="max-w-lg mx-auto px-4 pb-12 space-y-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3">
            <span className="text-gradient-names">{data.name_1}</span>
            {/* Floating Heart between names */}
            <motion.span
              className="inline-block mx-3"
              animate={{
                y: [0, -4, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart
                className="inline-block w-6 h-6 sm:w-8 sm:h-8"
                style={{ color: "#E84A5F", fill: "#E84A5F" }}
              />
            </motion.span>
            <span className="text-gradient-names">{data.name_2}</span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base">
            📅 Since{" "}
            {new Date(data.relationship_start_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8">
          <LoveCounter startDate={data.relationship_start_date} />
        </div>

        <div className="text-center">
        <motion.button 
            onClick={handleDownloadStory} 
            disabled={isGenerating}
            className="btn-secondary inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={isGenerating ? {} : { scale: 1.05 }}
            whileTap={isGenerating ? {} : { scale: 0.98 }}
          >
            <Camera className="w-5 h-5" />
            {isGenerating ? "Generating..." : "Download Story"}
          </motion.button>
        </div>

        {data.photos.length > 0 && <PhotoCarousel photos={data.photos} />}

        {data.message && (
          <motion.div 
            className="message-card-glow p-6 sm:p-8 text-center animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed message-text">
              "{data.message}"
            </p>
          </motion.div>
        )}

        <FunStats startDate={data.relationship_start_date} />
        <Milestones startDate={data.relationship_start_date} />

        <div className="pt-8 text-center">
          <p className="text-white/60 text-sm">© 2026 Made with 💕 by LoveCount</p>
        </div>
      </main>
    </div>
  );
}

export default CustomerPage;
