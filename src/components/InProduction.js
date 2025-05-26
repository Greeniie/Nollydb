import React from "react";
import prod from "../assets/icons/prod.png";
import ProjectCarousel from "./ProjectCarousel";
import img1 from "../assets/testimgs/image002 1.png";
import img2 from "../assets/testimgs/landman-paramount-tv-show-update 1.png";
import img3 from "../assets/testimgs/peacemaker-season-2-poster-2 1.png";
import img4 from "../assets/testimgs/01566627_poster_w780 1.png";

const InProduction = () => {
  const movies = [
    { image: img1, title: "Andor and the fighting Saber" },
    { image: img2, title: "The Land man is coming for you" },
    { image: img3, title: "Peacemaker" },
    { image: img4, title: "Mission Impossible" },
    { image: img1, title: "Alakada Reloaded" },
    { image: img2, title: "Anikulapo 2" },
    { image: img3, title: "Sinners" },
  ];
  return (
    <div className="bg-[#2A2A2A]">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <div className="flex gap-[5px] items-center pb-[20px]">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
            <img
              src={prod}
              alt="vec"
              className="h-[21px] w-auto object-center object-cover"
            />
            <div>In Production</div>
          </div>
          <hr className="w-[60%] md:w-[85%] ml-auto h-[1px] bg-[#B1B1B1] border-none" />
        </div>
        <ProjectCarousel allProjects={movies} />
      </div>
    </div>
  );
};

export default InProduction;
