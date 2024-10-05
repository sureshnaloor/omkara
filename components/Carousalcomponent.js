import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const variants = {
  enter: {
    opacity: 0,
    scale: 0.8,
  },
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    scale: 1.2,
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Carousel({ images }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => paginate(1), 2000);
      return () => clearTimeout(timer);
    }
  }, [page, autoPlay]);

  return (
    <div className="relative w-full bg-white/70 backdrop-blur-2xl backdrop-filter h-64 md:h-96 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.9 },
            scale: { duration: 0.7 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 "></div>
          <img
            src={images[imageIndex]}
            alt={`Carousel image ${imageIndex + 1}`}
            className="relative z-10 max-w-full max-h-full bg-white/30 backdrop-blur-2xl backdrop-filter object-contain mix-blend-overlay"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={30} />
        </button>
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <button
        className="absolute bottom-4 right-4 px-2 py-1 rounded bg-white/80 text-sm text-gray-800 hover:bg-white"
        onClick={() => setAutoPlay(!autoPlay)}
      >
        {autoPlay ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}
