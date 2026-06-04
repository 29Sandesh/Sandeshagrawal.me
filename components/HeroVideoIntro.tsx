import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';

interface HeroVideoIntroProps {
  onDismiss: () => void;
}

const HeroVideoIntro: React.FC<HeroVideoIntroProps> = ({ onDismiss }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStartY = useRef<number | null>(null);

  // Trigger dismissal
  const handleDismiss = () => {
    onDismiss();
  };

  // Keyboard, Wheel and Touch Gestures handling
  useEffect(() => {
    // 1. Wheel scroll detection
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 10) {
        handleDismiss();
      }
    };

    // 2. Keyboard press detection (Space, Enter, Down, PageDown, Escape)
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ['Space', ' ', 'Enter', 'ArrowDown', 'PageDown', 'Escape'];
      if (keys.includes(e.key)) {
        e.preventDefault();
        handleDismiss();
      }
    };

    // 3. Touch gesture swipe-up detection
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null || e.touches.length !== 1) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY; // positive delta means swiped up
      if (deltaY > 40) {
        touchStartY.current = null;
        handleDismiss();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Try to play immediately on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play().then(() => {
        setHasStarted(true);
      }).catch((err) => {
        console.log("Autoplay unmuted blocked by browser. Falling back to muted autoplay.", err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => {
            setHasStarted(true);
          }).catch((playErr) => {
            console.error("Muted play failed too", playErr);
          });
        }
      });
    }
  }, []);

  // Unmute automatically on first user interaction if browser blocked it
  useEffect(() => {
    const unmuteOnInteraction = () => {
      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
      // Clean up event listeners after first interaction
      window.removeEventListener('click', unmuteOnInteraction);
      window.removeEventListener('keydown', unmuteOnInteraction);
      window.removeEventListener('touchstart', unmuteOnInteraction);
      window.removeEventListener('mousedown', unmuteOnInteraction);
    };

    window.addEventListener('click', unmuteOnInteraction);
    window.addEventListener('keydown', unmuteOnInteraction);
    window.addEventListener('touchstart', unmuteOnInteraction);
    window.addEventListener('mousedown', unmuteOnInteraction);

    return () => {
      window.removeEventListener('click', unmuteOnInteraction);
      window.removeEventListener('keydown', unmuteOnInteraction);
      window.removeEventListener('touchstart', unmuteOnInteraction);
      window.removeEventListener('mousedown', unmuteOnInteraction);
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent triggering click dismiss on background
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 w-full h-full bg-black z-[9999] overflow-hidden flex flex-col justify-between cursor-pointer"
      onClick={handleDismiss}
    >
      {/* Immersive Scanlines Overlay for Cyberpunk/Brutalist feel */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none z-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 4px, 6px 100%'
        }}
      />

      {/* Grid line overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Video Stream Element */}
      <video
        ref={videoRef}
        src="/HeroVideo.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        onEnded={handleDismiss}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Subtle vignette/shading */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-[1] pointer-events-none" />

      {/* Header controls: Logo & Sound Toggle */}
      <header className="relative z-20 flex justify-between items-center w-full px-6 py-6 md:px-12 md:py-8 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[var(--vintage-accent-1)]" />
          <span className="text-[10px] md:text-xs font-body font-bold text-white/50 tracking-[0.4em] uppercase">
            SANDESH AGRAWAL // PORTFOLIO INTRO
          </span>
        </div>

        {/* Audio control button */}
        <button
          onClick={toggleMute}
          className="pointer-events-auto p-3 border border-white/10 bg-black/60 hover:bg-white hover:text-black hover:border-white transition-all text-white rounded-none flex items-center justify-center gap-2 group backdrop-blur-md"
          title={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? (
            <>
              <VolumeX className="h-4 w-4 text-[var(--vintage-accent-1)] group-hover:text-black transition-colors" />
              <span className="text-[8px] font-body font-bold uppercase tracking-wider hidden sm:inline">UNMUTE AUDIO</span>
            </>
          ) : (
            <>
              <Volume2 className="h-4 w-4 text-emerald-400 group-hover:text-black transition-colors" />
              <span className="text-[8px] font-body font-bold uppercase tracking-wider hidden sm:inline">MUTED: OFF</span>
            </>
          )}
        </button>
      </header>

      {/* Spacing element to center bottom controls layout */}
      <div className="flex-1" />

      {/* Footer navigation cues and scroll triggers */}
      <footer className="relative z-20 w-full px-6 pb-8 md:pb-12 text-center flex flex-col items-center gap-4 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, 5, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
          onClick={handleDismiss}
        >
          <span className="text-[9px] md:text-[10px] font-body font-bold text-white tracking-[0.4em] uppercase">
            SCROLL, SWIPE UP OR CLICK TO ENTER
          </span>
          <ChevronDown className="h-5 w-5 text-[var(--vintage-accent-1)]" />
        </motion.div>

        {/* Small progress line just to anchor visual weight */}
        <div className="w-24 h-[1px] bg-white/10" />
      </footer>
    </motion.div>
  );
};

export default HeroVideoIntro;
