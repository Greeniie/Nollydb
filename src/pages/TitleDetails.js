import React from "react";
import LandingNav from "../components/LandingNav";
import vec from "../assets/icons/Vector (1).png";
import { PlusCircleFilled } from "@ant-design/icons";
import img1 from "../assets/testimgs/image002 1.png";
import CastList from "../components/CastList";
import Footer from "../components/Footer";

const TitleDetails = () => {
  const castList = [
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Mike Johnson",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Emily Brown",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Chris Lee",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const producersList = [
    {
      name: "Ava Martinez",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      name: "Liam Anderson",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Sophia Turner",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];

  const writingTeam = [
    { position: "Head Writer", name: "Richard Mofe Damijo" },
    { position: "TV Writer", name: "Bimbo Ademoye" },
    { position: "Feature Film Writer", name: "Stephen Crowder Shaw" },
    { position: "Skit Writer", name: "Bolanle Issi Williams" },
    { position: "Series Writer", name: "Victoria Beacham Salt" },
    { position: "Youtube Film Writer", name: "Olumide Fadoju smith" },
    { position: "Creative Writer", name: "Ayodele Akinsanya" },
    { position: "Editorial Writer", name: "Chuwkuma Yvonne Ugwu" },
    { position: "Content Writer", name: "Larnre Isidian Asiwaju" },
    { position: "Youtube Film Writer", name: "Hammed Hassan Janwu" },
  ];

  const producers = [
    { position: "Executive Producer", name: "Richard Mofe Damijo" },
    { position: "Producer", name: "Bimbo Ademoye" },
    { position: "Co-producer", name: "Stephen Crowder Shaw" },
    { position: "Line Producer", name: "Bolanle Issi Williams" },
    { position: "Associate Producer", name: "Victoria Beacham Salt" },
  ];

  const music = [
    { position: "Composer", name: "Richard Mofe Damijo" },
    { position: "TV Writer", name: "Bimbo Ademoye" },
  ];

  return (
    <div>
      <LandingNav />
      <div className="bg-[#E4E4E4]">
        <div className="block md:grid md:grid-cols-3 gap-[30px] w-[85%] mx-auto py-[20px]">
          <div className="md:col-span-2">
            <div className="block md:flex gap-[30px] items-center">
              <div className="font-bold text-[#3a3a3a] text-[32px] leading-[32px]">
                Andor and the fighting Saber
              </div>
              <div className="flex items-center gap-[15px] pt-[20px] md:pt-0">
                <div className="border-1 border-[#4E4D4D] py-[5px] px-[14px] rounded-[13px] font-normal text-[11px] text-[#343434]">
                  Romance
                </div>
                <div className="border-1 border-[#4E4D4D] py-[5px] px-[14px] rounded-[13px] font-normal text-[11px] text-[#343434]">
                  Drama
                </div>
              </div>
            </div>
            <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[20px] md:pt-0">
              <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
                <img
                  src={vec}
                  alt="vec"
                  className="h-[14px] w-auto object-center object-cover"
                />
                <div>23 MAY 2025</div>
              </div>
              <hr className="w-[30%]  md:w-[35%] mr-auto h-[1px] bg-[#B1B1B1] border-none" />
            </div>
          </div>
          <div className="flex justify-start md:justify-end items-center h-[50px] w-full">
            <button className="h-[40px] bg-[#FAFAFA] font-bold text-[12px] text-black rounded-[12px] flex gap-[10px] justify-center items-center px-[20px]">
              <span>Join a title</span>
              <PlusCircleFilled style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto block md:grid md:grid-cols-2 pt-[50px] pb-[80px]">
        <div className="flex gap-[20px]">
          <div className="w-full">
            <img
              src={img1}
              alt="image"
              className="w-full h-[150px] md:h-[345px] object-cover"
            />
          </div>
          <div>
            <div className="text-[#B1B1B1] font-bold text-[15px] pb-[20px]">
               PG-13 | Movie | 164 minutes
            </div>
            <div className="text-[#747474] font-bold text-[15px] pb-[10px]">
              SYNOPSIS
            </div>
            <div className="text-[#7B7878] text-[12px] font-normal pb-[25px]">
              Leaderboards are calculated based on ratings submitted, reviews
              published, and the amount of likes received on those published
              reviews. Reviews are prioritized above ratings in the calculation.
            </div>
            <div className="text-[15px] font-medium pb-[10px] text-[#b1b1b1]">
              <span className="text-[#747474] font-bold">DIRECTOR: </span>
              Christopher McQuarrie
            </div>
            <div className="text-[15px] font-medium pb-[10px] text-[#b1b1b1]">
              <span className="text-[#747474] font-bold">PRODUCER: </span>
              Tom Cruise
            </div>
            <div className="text-[15px] font-medium text-[#b1b1b1]">
              <span className="text-[#747474] font-bold">STUDIOS: </span>
              Skydance | TC Productions
            </div>
          </div>
        </div>
        <div className="rounded-[15px] bg-[#F1EEEE] min-h-[345px] py-3 w-full md:w-[75%] mx-auto mt-[20px] md:mt-0">
          <div className="font-bold text-[20px] text-[#B0B0B0] w-[85%] mx-auto">
            PRODUCTION DATA
          </div>
          <hr className="bg-[#CCCACA] h-[1px]" />
          <div className="w-[85%] mx-auto pt-10px] flex gap-[50px]">
            <div>
              <div className="pb-[20px]">
                <div className="underline text-[#4E4E4E] text-[15px] font-bold pb-[5px]">
                  Production Days
                </div>
                <div className="text-[#4E4E4E] font-normal text-[15px]">
                  4 Days
                </div>
              </div>
              <div className="pb-[20px]">
                <div className="underline text-[#4E4E4E] text-[15px] font-bold pb-[5px]">
                  Crew size
                </div>
                <div className="text-[#4E4E4E] font-normal text-[15px]">
                  17 Crew members
                </div>
              </div>{" "}
              <div className="pb-[20px]">
                <div className="underline text-[#4E4E4E] text-[15px] font-bold pb-[5px]">
                  Production Budget
                </div>
                <div className="text-[#4E4E4E] font-normal text-[15px]">
                  Unavailable
                </div>
              </div>{" "}
            </div>
            <div>
              <div className="pb-[20px]">
                <div className="underline text-[#4E4E4E] text-[15px] font-bold pb-[5px]">
                  Script Pages
                </div>
                <div className="text-[#4E4E4E] font-normal text-[15px]">
                  122 Pages
                </div>
              </div>
              <div className="pb-[20px]">
                <div className="underline text-[#4E4E4E] text-[15px] font-bold pb-[5px]">
                  Locations Used
                </div>
                <div className="text-[#4E4E4E] font-normal text-[15px]">
                  2 Locations
                </div>
              </div>{" "}
              <div className="pb-[20px]">
                <div className="underline text-[#4E4E4E] text-[15px] font-bold pb-[5px]">
                  Box Office / Earnings
                </div>
                <div className="text-[#4E4E4E] font-normal text-[15px]">
                  Unavailable
                </div>
              </div>
              <button className="rounded-[13px] py-[5px] px-[14px] border-1 border- [#26B260] bg-[#2ADE75] text-white">
                Access More Data
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto pb-[20px]">
        <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[20px] md:pt-0">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
            <img
              src={vec}
              alt="vec"
              className="h-[14px] w-auto object-center object-cover"
            />
            <div>Main Cast</div>
          </div>
          <hr className="w-[30%]  md:w-[80%] mr-auto h-[1px] bg-[#B1B1B1] border-none" />
        </div>
        <CastList castList={castList} />
      </div>
      <div className="bg-[#E4E4E4] pb-[50px]">
        <div className="w-[85%] mx-auto pb-[20px]">
          <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[20px]">
            <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
              <img
                src={vec}
                alt="vec"
                className="h-[14px] w-auto object-center object-cover"
              />
              <div>Producers / Creators</div>
            </div>
            <hr className="w-[30%]  md:w-[80%] mr-auto h-[1px] bg-[#CFCACA] border-none" />
          </div>
          <CastList castList={producersList} />
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#CFCACA] pt-[20px]">
            <img
              src={vec}
              alt="vec"
              className="h-[14px] w-auto object-center object-cover"
            />
            <div>CREW</div>
          </div>
          <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[10px]">
            <div className="font-[Inter] font-bold text-[20px] text-[#2A2A2A]">
              WRITING TEAM
            </div>
            <hr className="w-[30%]  md:w-[80%] mr-auto h-[2px] bg-[#CFCACA] border-none" />
          </div>
          <div className="space-y-4 pt-[20px] pl-0 md:pl-[30px]">
            {writingTeam.map((writer, index) => (
              <div key={index} className="flex items-center">
                <div className="font-[Inter] font-bold text-[15px] w-[300px]">
                  {writer.position}
                </div>
                <div className="font-[Inter] font-normal text-[15px]">
                  {writer.name}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[50px]">
            <div className="font-[Inter] font-bold text-[20px] text-[#2A2A2A]">
              PRODUCERS
            </div>
            <hr className="w-[30%]  md:w-[80%] mr-auto h-[2px] bg-[#CFCACA] border-none" />
          </div>
          <div className="space-y-4 pt-[20px] pl-0 md:pl-[30px]">
            {producers.map((prod, index) => (
              <div key={index} className="flex items-center">
                <div className="font-[Inter] font-bold text-[15px] w-[300px]">
                  {prod.position}
                </div>
                <div className="font-[Inter] font-normal text-[15px]">
                  {prod.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[50px]">
            <div className="font-[Inter] font-bold text-[20px] text-[#2A2A2A]">
              MUSIC
            </div>
            <hr className="w-[30%]  md:w-[80%] mr-auto h-[2px] bg-[#CFCACA] border-none" />
          </div>
          <div className="space-y-4 pt-[20px] pl-0 md:pl-[30px]">
            {music.map((prod, index) => (
              <div key={index} className="flex items-center">
                <div className="font-[Inter] font-bold text-[15px] w-[300px]">
                  {prod.position}
                </div>
                <div className="font-[Inter] font-normal text-[15px]">
                  {prod.name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[50px]">
            <div className="font-[Inter] font-bold text-[20px] text-[#2A2A2A]">
              PRODUCERS
            </div>
            <hr className="w-[30%]  md:w-[80%] mr-auto h-[2px] bg-[#CFCACA] border-none" />
          </div>
          <div className="space-y-4 pt-[20px] pl-0 md:pl-[30px]">
            {producers.map((prod, index) => (
              <div key={index} className="flex items-center">
                <div className="font-[Inter] font-bold text-[15px] w-[300px]">
                  {prod.position}
                </div>
                <div className="font-[Inter] font-normal text-[15px]">
                  {prod.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TitleDetails;
