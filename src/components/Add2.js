import React, { useState } from "react";
import {
  CaretLeftFilled,
  CaretRightFilled,
  SaveFilled,
  AppstoreOutlined,
  MenuOutlined,
  CheckOutlined,
  PlusCircleFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import { Modal, Input } from "antd";
import vec from "../assets/icons/Vector (1).png";

const Add2 = ({ prevStep, nextStep, formData, handleInputChange }) => {
  const [activeView, setActiveView] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [currentInput, setCurrentInput] = useState({
    firstName: "",
    lastName: "",
    contact: "",
  });
  const [entries, setEntries] = useState({});

  const handleAddClick = (title) => {
    setModalTitle(title);
    setCurrentInput({ firstName: "", lastName: "", contact: "" });
    setIsModalOpen(true);
  };

  const handleModalAdd = () => {
    setEntries((prev) => {
      const updated = { ...prev };
      if (!updated[modalTitle]) {
        updated[modalTitle] = [];
      }
      updated[modalTitle].push({ ...currentInput });
      return updated;
    });
    setIsModalOpen(false);
  };

  const handleRemoveEntry = (title, index) => {
    setEntries((prev) => {
      const updated = { ...prev };
      updated[title].splice(index, 1);
      return { ...updated };
    });
  };

  return (
    <div className="bg-[#E4E4E4]">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="flex justify-between items-center py-[30px]">
          <div className="text-[14px] text-[#7B7878] w-[53%]">
            Leaderboards are calculated based on ratings submitted, reviews
            published, and the amount of likes received on those published
            reviews. Reviews are prioritized above ratings in the calculation.
          </div>
          <div className="flex items-center transition-all duration-300">
            <button
              onClick={() => setActiveView("grid")}
              className={`relative rounded-tl-[30px] rounded-bl-[30px] border border-[#B0B0B0] py-[10px] pl-[20px] pr-[10px] transition-all duration-300 w-[70px]  ${
                activeView === "grid" ? "bg-[#28D26E63]" : "bg-white"
              }`}
            >
              {activeView === "grid" && (
                <CheckOutlined
                  style={{ fontSize: 10 }}
                  className="text-black pr-[5px]"
                />
              )}
              <AppstoreOutlined style={{ fontSize: 15 }} />
            </button>
            <button
              onClick={() => setActiveView("list")}
              className={`relative rounded-tr-[30px] rounded-br-[30px] py-[10px] pr-[20px] pl-[10px] transition-all duration-300 w-[70px] ${
                activeView === "list" ? "bg-[#28D26E63]" : "bg-white"
              }`}
            >
              {activeView === "list" && (
                <CheckOutlined
                  style={{ fontSize: 10 }}
                  className="text-black pr-[5px]"
                />
              )}
              <MenuOutlined style={{ fontSize: 15 }} />
            </button>
          </div>
        </div>

        {activeView === "grid" ? (
          <GridView
            vec={vec}
            onAddClick={handleAddClick}
            entries={entries}
            onRemoveEntry={handleRemoveEntry}
          />
        ) : (
          <ListView
            vec={vec}
            onAddClick={handleAddClick}
            entries={entries}
            onRemoveEntry={handleRemoveEntry}
          />
        )}

        <div className="block md:flex justify-between pt-[60px] py-[20px]">
          <div>
            <button
              onClick={prevStep}
              className="bg-[#2A2A2A] mb-[10px] md:mb-0 rounded-[12px] text-white py-[8px] px-[20px] flex items-center justify-center w-[237px]"
            >
              <CaretLeftFilled style={{ fontSize: "20px" }} />
              <span className="pl-[10px] font-bold text-[20px] ">Back</span>
            </button>
          </div>
          <div className="flex gap-[30px]">
            <button className="bg-[#2A2A2A] rounded-[12px] text-white py-[8px] px-[20px] flex items-center justify-center w-[237px]">
              <span className="pr-[10px] font-bold text-[20px] ">
                Save and Exit
              </span>
              <SaveFilled style={{ fontSize: "20px" }} />
            </button>
            <button
              onClick={nextStep}
              className="bg-[#2A2A2A] rounded-[12px] text-white py-[8px] px-[20px] flex items-center justify-center w-[237px]"
            >
              <span className="pr-[10px] font-bold text-[20px] ">Continue</span>
              <CaretRightFilled style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>

      <Modal
        centered
        title={modalTitle}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className="flex flex-col gap-4">
          <Input
            placeholder="First Name"
            value={currentInput.firstName}
            onChange={(e) =>
              setCurrentInput((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
          />
          <Input
            placeholder="Last Name"
            value={currentInput.lastName}
            onChange={(e) =>
              setCurrentInput((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
          <Input
            placeholder="Key Contact Email / Phone no."
            value={currentInput.contact}
            onChange={(e) =>
              setCurrentInput((prev) => ({ ...prev, contact: e.target.value }))
            }
          />
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="bg-[#2A2A2A] rounded-[12px] text-[15px] text-white px-[25px] py-[5px]"
            onClick={handleModalAdd}
          >
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

const GridView = ({ vec, onAddClick, entries, onRemoveEntry }) => {
  const groups = [
    {
      title: "Creative Leadership & Development",
      sections: [
        "Producers",
        "Production Design",
        "Script Continuity",
        "Writers",
        "Casting",
        "Creative Management",
      ],
    },
    {
      title: "Production Execution & Logistics",
      sections: [
        "Production Management",
        "Location",
        "Units",
        "Transportation Department",
      ],
    },
    {
      title: "Technical & On-Set Departments",
      sections: [
        "Camera and Electrical Department",
        "Art Department",
        "Set Decoration",
        "Makeup",
        "Special Effects Department",
        "Sound Department",
        "Set Design",
        "Costume and Wardrobe Department",
        "Stunts Department",
      ],
    },
    {
      title: "Post-Production & Visual Enhancement",
      sections: [
        "Editorial Department (Editors)",
        "Music Department",
        "Visual Effects Department",
        "Animation Department",
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-[30px] pb-[50px]">
          <div className="flex gap-[20px] items-center pb-0 md:pb-[20px] w-[90%] md:w-full mx-auto pt-[20px] md:pt-0">
            <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[20px] text-[#838282]">
              <img
                src={vec}
                alt="vec"
                className="h-[14px] w-auto object-center object-cover"
              />
              <div>{group.title}</div>
            </div>
            <hr className="w-[30%] md:w-[65%] mr-auto h-[1px] bg-[#B1B1B1] border-none" />
          </div>

          <div className="grid grid-cols-2 gap-[30px]">
            {group.sections.map((section) => (
              <div key={section} className="flex flex-col gap-2">
                <div className="flex justify-between items-center px-[20px] py-[15px] bg-white rounded-[20px]">
                  <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
                    <img
                      src={vec}
                      alt="vec"
                      className="h-[14px] w-auto object-center object-cover"
                    />
                    <div>{section}</div>
                  </div>
                  <PlusCircleFilled
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    onClick={() => onAddClick(section)}
                  />
                </div>

                {entries[section] &&
                  entries[section].map((entry, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center px-[15px] py-[5px] border-b border-[#D4D4D4]"
                    >
                      <div className="text-[14px] text-[#333]">
                        {entry.firstName} {entry.lastName} ({entry.contact})
                      </div>
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => onRemoveEntry(section, index)}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const ListView = ({ vec, onAddClick, entries, onRemoveEntry }) => {
  const groups = [
    {
      title: "Creative Leadership & Development",
      sections: [
        "Producers",
        "Production Design",
        "Script Continuity",
        "Writers",
        "Casting",
        "Creative Management",
      ],
    },
    {
      title: "Production Execution & Logistics",
      sections: [
        "Production Management",
        "Location",
        "Units",
        "Transportation Department",
      ],
    },
    {
      title: "Technical & On-Set Departments",
      sections: [
        "Camera and Electrical Department",
        "Art Department",
        "Set Decoration",
        "Makeup",
        "Special Effects Department",
        "Sound Department",
        "Set Design",
        "Costume and Wardrobe Department",
        "Stunts Department",
      ],
    },
    {
      title: "Post-Production & Visual Enhancement",
      sections: [
        "Editorial Department (Editors)",
        "Music Department",
        "Visual Effects Department",
        "Animation Department",
      ],
    },
  ];

  // Combine all sections and sort alphabetically
  const allSections = groups
    .flatMap((group) => group.sections)
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className="flex flex-col gap-[15px] py-[50px]">
      {allSections.map((section, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex justify-between items-center px-[20px] py-[15px] bg-white rounded-[20px]">
            <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
              <img
                src={vec}
                alt="vec"
                className="h-[14px] w-auto object-center object-cover"
              />
              <div>{section}</div>
            </div>
            <PlusCircleFilled
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={() => onAddClick(section)}
            />
          </div>

          {entries?.[section]?.map((entry, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-[15px] py-[5px] border-b border-[#D4D4D4]"
            >
              <div className="text-[14px] text-[#333]">
                {entry.firstName} {entry.lastName} ({entry.contact})
              </div>
              <DeleteOutlined
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onRemoveEntry(section, i)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Add2;
