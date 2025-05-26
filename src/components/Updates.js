import React from "react";
import prod from "../assets/icons/prod.png";
import l1 from "../assets/testimgs/Rectangle 13.png";
import l2 from "../assets/testimgs/Rectangle 14.png";
import l3 from "../assets/testimgs/Rectangle 15.png";

const Updates = () => {
  const updatelist = [
    {
      img: l1,
      info: "Federal Govement TAX for creatives in film update",
    },
    {
      img: l2,
      info: "Nigerian censors board changing rating from 2027 and updates to streaming platfroms",
    },
    {
      img: l3,
      info: "Understand CRM for the Nigerian region",
    },
  ];
  return (
    <div className="bg-[#000] pt-[30px]">
      <div className="w-[95%] md:w-[80%] mx-auto">
        <div className="flex gap-[5px] items-center pb-[20px]">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
            <img
              src={prod}
              alt="vec"
              className="h-[21px] w-auto object-center object-cover"
            />
            <div>Important updates</div>
          </div>
          <hr className="w-[55%] md:w-[83%] ml-auto h-[1px] bg-[#B1B1B1] border-none" />
        </div>
        <div className="block md:grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  pb-[60px]">
          {updatelist.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between pt-[20px]"
            >
              <div className="flex mb-2">
                <img
                  src={item.img}
                  alt={`about-img-${index}`}
                  className="h-[200px] w-auto object-contain object-center"
                />
              </div>

              <div className=" flex-grow text-[#fff] font-bold text-[14px] pt-[10px]">
                {item.info}
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default Updates;
