import React from "react";
import vec2 from "../assets/icons/Vector (2).png";
import ProjectCarousel from "./ProjectCarousel";
import img1 from "../assets/testimgs/image002 1.png";
import img2 from "../assets/testimgs/landman-paramount-tv-show-update 1.png";
import img3 from "../assets/testimgs/peacemaker-season-2-poster-2 1.png";
import img4 from "../assets/testimgs/01566627_poster_w780 1.png";
import vec3 from "../assets/icons/Vector (3).png";
import vec from "../assets/icons/Vector (1).png";
import access from "../assets/icons/Access.png";

const RecentReleases = () => {
  const movies = [
    { image: img1, title: "Andor and the fighting Saber" },
    { image: img2, title: "The Land man is coming for you" },
    { image: img3, title: "Peacemaker" },
    { image: img4, title: "Mission Impossible" },
    { image: img1, title: "Alakada Reloaded" },
    { image: img2, title: "Anikulapo 2" },
    { image: img3, title: "Sinners" },
  ];

  const youtube = [
    { name: "Youtube Movies", number: "300" },
    { name: "Youtube Series", number: "120" },
    { name: "Feature Films", number: "30" },
  ];

  const boxoffice = [
    { name: "2025 Box office gross", amount: "300000" },
    { name: "2025 Box office gross", amount: "300000" },
  ];

  return (
    <div className="bg-[#2A2A2A]">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <div className="flex gap-[5px] items-center pb-[20px]">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
            <img
              src={vec2}
              alt="vec"
              className="h-[21px] w-auto object-center object-cover"
            />
            <div>Recent Releases</div>
          </div>
          <hr className="w-[55%] md:w-[85%] ml-auto h-[1px] bg-[#B1B1B1] border-none" />
        </div>
        <ProjectCarousel allProjects={movies} />

        <div className="block md:hidden">
          <div className="flex gap-[5px] items-center pb-[20px]">
            <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
              <img
                src={vec2}
                alt="vec"
                className="h-[21px] w-auto object-center object-cover"
              />
              <div>Understand your Industry</div>
            </div>
            <hr className="w-[58%] ml-auto h-[1px] bg-[#B1B1B1] border-none" />
          </div>
          <div className="text-[#B1B1B1] font-normal text-[12px] w-[68%] mr-auto pl-[33px]">
            Gain access to powerful insights and industry analytics that support
            smarter, data-driven decisions for your next production.
          </div>
          <div className="grid grid-cols-2 gap-[50px] pl-[33px] pt-[30px]">
            <div className="flex flex-col gap-[10px] ">
              {youtube.map((y, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[20px] font-[Inter] font-bold text-[12px] text-[#fff]"
                >
                  <img
                    src={vec3}
                    alt="vec"
                    className="h-[10px] w-auto object-center object-cover"
                  />
                  <div>
                    <span className="text-[#B1B1B1] pr-[5px]">{y.name}</span>
                    {y.number}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[10px] ">
              {boxoffice.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-[20px] font-[Inter] font-bold text-[12px] text-[#fff]"
                >
                  <img
                    src={vec}
                    alt="vec"
                    className="h-[10px] w-auto object-center object-cover"
                  />
                  <div>
                    <span className="text-[#B1B1B1] pr-[5px]">{b.name}</span>₦
                    {Number(b.amount).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-[50px] pb-[30px]">
            <button className="w-[80%] md:w-[30%] mx-auto bg-[#FF3E3E] text-white text-[12px] font-bold flex justify-center items-center gap-[15px] rounded-[23px] py-[10px]">
              <img
                src={access}
                alt="access button"
                className="h-[25px] w-auto object-center object-cover"
              />
              <div>Access Nollywood data</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentReleases;
