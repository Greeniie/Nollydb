import React from "react";
import vec from "../assets/icons/Vector (1).png";
import vec2 from "../assets/icons/Vector (2).png";
import vec3 from "../assets/icons/Vector (3).png";
import access from "../assets/icons/Access.png";
import img1 from "../assets/testimgs/image002 1.png";
import img2 from "../assets/testimgs/landman-paramount-tv-show-update 1.png";
import img3 from "../assets/testimgs/peacemaker-season-2-poster-2 1.png";
import img4 from "../assets/testimgs/01566627_poster_w780 1.png";
import ProjectCarousel from "./ProjectCarousel";
import add from "../assets/icons/Group 3.png";
import join from "../assets/icons/Vector.png";
import { Link } from "react-router-dom";

const RecentlyAdded = () => {
  const movies = [
    { id: 1, image: img1, title: "Andor and the fighting Saber" },
    { id: 2, image: img2, title: "The Land man is coming for you" },
    { id: 3, image: img3, title: "Peacemaker" },
    { id: 4, image: img4, title: "Mission Impossible" },
    { id: 5, image: img1, title: "Alakada Reloaded" },
    { id: 6, image: img2, title: "Anikulapo 2" },
    { id: 7, image: img3, title: "Sinners" },
  ];

  const genrelist = [
    { name: "Romantic drama", number: "(7)" },
    { name: "Drama", number: "(32)" },
    { name: "Comedy", number: "(35)" },
    { name: "Skit", number: "(15)" },
    { name: "Action", number: "(17)" },
    { name: "Documentary", number: "(8)" },
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
    <div className="border-t border-[#727272] bg-[#2A2A2A]">
      <div className="w-full md:w-[80%] mx-auto ">
        <div className="hidden md:flex items-center justify-between gap-[20px] mb-[40px] pt-[30px] ">
          <div className="bg-[#F70000] p-2 text-white text-[13px] font-[Kdam Thmor Pro] font-normal">
            The Nollywood’s film directory — curated by the professionals who
            made them.
          </div>
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#fff]">
            <img
              src={vec}
              alt="vec"
              className="h-[10px] w-auto object-center object-cover"
            />
            <div>
              <span className="text-[#B1B1B1] pr-[5px]">Listed titles</span>1001
            </div>
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[13px] text-[#fff] pl-[20px]">
            <img
              src={vec}
              alt="vec"
              className="h-[10px] w-auto object-center object-cover"
            />
            <div>
              <span className="text-[#B1B1B1] pr-[5px]">Listed titles</span>1001
            </div>
          </div>{" "}
          <div className="flex items-center">
            <Link
              to="/add-new-title"
              className="bg-[#FAFAFA] font-bold text-[12px]  text-black  flex gap-[10px] border-r-2 border-[#000] justify-center items-center py-[10px] px-[20px]"
            >
              <span>Add new title</span>{" "}
              <img
                src={add}
                alt="add"
                className="h-[22px] w-auto object-cover object-center"
              />
            </Link>
            <Link className="bg-[#FAFAFA] font-bold text-[12px] text-black  flex gap-[10px] justify-center items-center py-[10px] px-[20px]">
              <span>Join a title</span>{" "}
              <img
                src={join}
                alt="join"
                className="h-[14px] w-auto object-cover object-center"
              />
            </Link>
          </div>
        </div>
        <div className="md:hidden bg-[#F70000] p-2 text-white text-[13px] font-[Kdam Thmor Pro] font-normal">
          The Nollywood’s film directory — curated by the professionals who made
          them.
        </div>
        <div className="flex gap-[5px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[20px] md:pt-0">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
            <img
              src={vec}
              alt="vec"
              className="h-[14px] w-auto object-center object-cover"
            />
            <div>Recently Added</div>
          </div>
          <hr className="w-[60%]  md:w-[80%] ml-auto h-[1px] bg-[#B1B1B1] border-none" />
        </div>
        <ProjectCarousel allProjects={movies} />
        <div className="block md:grid md:grid-cols-2 gap-[30px] pt-0 md:pt-[20px]">
          <div>
            <div className="flex gap-[5px] items-center pb-[20px] w-[95%] md:w-full mx-auto">
              <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
                <img
                  src={vec2}
                  alt="vec"
                  className="h-[21px] w-auto object-center object-cover"
                />
                <div>Genre Listing</div>
              </div>
              <hr className="w-[60%] md:w-[75%] ml-auto h-[1px] bg-[#B1B1B1] border-none" />
            </div>
            <div className="text-[#B1B1B1] font-normal text-[12px] w-[68%] mr-auto pl-[33px]">
              Discover the most popular genres ranked by performance, based on
              analytics from our growing library of listed Nollywood titles
            </div>
            <div className="pb-[20px] pt-[30px] pl-[33px]">
              <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#fff]">
                <img
                  src={vec}
                  alt="vec"
                  className="h-[10px] w-auto object-center object-cover"
                />
                <div>
                  <span className="text-[#B1B1B1] pr-[5px]">Listed Genre</span>
                  10
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-[15px] items-center pl-[33px]">
              {genrelist.map((g, i) => (
                <div
                  key={i}
                  className="border-[1px] border-[#D4797A] rounded-[13px] text-white py-[5px] px-[14px] font-normal text-[11px]"
                >
                  {g.name} {g.number}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
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
              Gain access to powerful insights and industry analytics that
              support smarter, data-driven decisions for your next production.
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
  );
};

export default RecentlyAdded;
