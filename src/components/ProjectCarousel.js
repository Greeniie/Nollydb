import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import arrowf from '../assets/icons/arrowf.png';

const ProjectCarousel = ({ allProjects }) => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 3.5;
    if (window.innerWidth < 768) return 5;
    if (window.innerWidth < 1024) return 5.5;
    if (window.innerWidth < 1280) return 5;
    return 7;
  };

  const visibleCount = getVisibleCount();
  const stepSize = 100 / visibleCount;

  const extendedImages = [
    ...allProjects.slice(-visibleCount), // prepend
    ...allProjects,
    ...allProjects.slice(0, visibleCount), // append
  ];

  const realIndexOffset = visibleCount;

  const [currentIndex, setCurrentIndex] = useState(realIndexOffset);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload(); // Simplest way to re-trigger layout logic
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideTo = async (newIndex) => {
    setCurrentIndex(newIndex);
    await controls.start({
      x: `-${newIndex * stepSize}%`,
      transition: { ease: "easeInOut", duration: 0.5 },
    });

    // Looping logic: jump without animation
    if (newIndex >= extendedImages.length - visibleCount) {
      const resetIndex = realIndexOffset;
      setCurrentIndex(resetIndex);
      controls.set({ x: `-${resetIndex * stepSize}%` });
    } else if (newIndex < realIndexOffset) {
      const resetIndex = extendedImages.length - visibleCount * 2;
      setCurrentIndex(resetIndex);
      controls.set({ x: `-${resetIndex * stepSize}%` });
    }
  };

  const nextSlide = () => slideTo(currentIndex + 1);
  const prevSlide = () => slideTo(currentIndex - 1);

  return (
    <div className="relative flex flex-col items-center mt-3 w-full pb-[10px] md:pb-[30px]">
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex"
          ref={carouselRef}
          animate={controls}
          drag="x"
          onDragEnd={(event, info) => {
            const swipePower = Math.abs(info.offset.x) * info.velocity.x;
            if (swipePower < -100) nextSlide();
            else if (swipePower > 100) prevSlide();
          }}
          style={{ cursor: "grab" }}
        >
          {extendedImages.map((image, i) => (
           <Link
           to={image.link}
           key={i}
           className="flex-shrink-0 w-[120px] md:w-[180px]"
         >
              <img
                src={image.image}
                alt={`slide-${i}`}
                className="w-full h-[150px] md:h-[232px] object-contain"
              />
              <div className="text-white py-1 text-[14px] w-[80%] mx-auto font-bold">
                {image.title}
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Right Arrow Only */}
      <button
        onClick={nextSlide}
        className="absolute right-[10px] md:right-[-20px] top-[25%] md:top-[40%] transform -translate-y-1/2 h-8 md:h-10 w-8 md:w-10 bg-[#97AA9F] opacity-75 p-2 rounded-[9px] flex items-center justify-center"
      >
        <img
          src={arrowf}
          alt=""
          className="h-[18px] w-auto object-cover object-center"
        />
      </button>
    </div>
  );
};

export default ProjectCarousel;
