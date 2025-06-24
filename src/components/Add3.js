import React, { useState } from "react";
import vec from "../assets/icons/Vector (1).png";
import {
  CaretLeftFilled,
  CaretRightFilled,
  CaretDownOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Switch, Select } from "antd";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const { Option } = Select;

const Add3 = ({ prevStep, formData, handleInputChange }) => {
  const mockData = {
    productionDays: ["1-3 Days", "4-7 Days", "8+ Days"],
    crewSizes: ["Small (1-5)", "Medium (6-15)", "Large (16+)"],
    scriptPages: ["<10", "10-30", "31-60", "61+"],
    locations: ["1 Location", "2-3 Locations", "4+ Locations"],
    cameras: ["RED", "ARRI Alexa", "Canon C300", "Sony FX6"],
    pickupDays: ["None", "1-2 Days", "3+ Days"],
    highestFees: ["$500-$1k", "$1k-$5k", "$5k+"],
    lowestFees: ["$100-$500", "$500-$1k", "$1k+"],
    shootingHours: ["4 hrs", "8 hrs", "12 hrs"],
    mealsPerDay: ["1 Meal", "2 Meals", "3 Meals"],
  };

  const requiredFields = [
    "highestActorFees",
    "lowestActorFees",
    "shootingHours",
    "investmentSource",
    "noOfInvestors",
    "boxOfficeGross",
    "productionEarning",
    "roiRatio",
    "marketingBudget",
    "marketingChannels",
  ];

  const [formValues, setFormValues] = useState({
    productionDays: "",
    crewSize: "",
    scriptPages: "",
    locationsUsed: "",
    cameraUsed: "",
    pickUpDays: "",
    highestActorFees: "",
    lowestActorFees: "",
    shootingHours: "",
    mealsPerDay: "",
    productionBudget: "",
    investmentSource: "",
    noOfInvestors: "",
    boxOfficeGross: "",
    productionEarning: "",
    roiRatio: "",
    distributor: "",
    distributionDate: null,
    distributionRegion: "",
    marketingBudget: "",
    marketingChannels: [""],
  });

  const handleFormChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormValues((prev) => ({
      ...prev,
      distributionDate: date,
    }));
  };

  const handleChannelChange = (index, value) => {
    const updatedChannels = [...formValues.marketingChannels];
    updatedChannels[index] = value;
    setFormValues((prev) => ({
      ...prev,
      marketingChannels: updatedChannels,
    }));
  };

  const addChannel = () => {
    setFormValues((prev) => ({
      ...prev,
      marketingChannels: [...prev.marketingChannels, ""],
    }));
  };

  const removeChannel = (index) => {
    const updatedChannels = [...formValues.marketingChannels];
    updatedChannels.splice(index, 1);
    setFormValues((prev) => ({
      ...prev,
      marketingChannels: updatedChannels,
    }));
  };

  const renderSelectField = (label, name, options) => (
    <Form.Group className="mb-4 flex items-center gap-[10px] md:gap-[30px]">
      <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
        {label}
        {requiredFields.includes(name) && (
          <span className="pl-[10px] text-[#FF3E3E]">*</span>
        )}
      </Form.Label>
      <Select
        size="large"
        suffixIcon={<CaretDownOutlined />}
        placeholder={`Select ${label.toLowerCase()}`}
        value={formValues[name] || undefined}
        onChange={(value) => handleFormChange({ target: { name, value } })}
        className="w-full custom-placeholder rounded-[7px]"
        options={options.map((item) => ({ label: item, value: item }))}
      />
    </Form.Group>
  );

  const renderInputField = (label, name, type = "text") => (
    <Form.Group className="mb-4 flex items-center gap-[10px] md:gap-[30px]">
      <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
        {label}
        {requiredFields.includes(name) && (
          <span className="pl-[10px] text-[#FF3E3E]">*</span>
        )}
      </Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={formValues[name]}
        onChange={handleFormChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="w-full rounded-[7px]"
      />
    </Form.Group>
  );

  return (
    <div>
      <div className="w-[90%] md:w-[85%] mx-auto py-[50px]">
        <div className="text-[14px] text-[#7B7878] w-full md:w-[53%] pb-[50px]">
          Leaderboards are calculated based on ratings submitted, reviews
          published, and the amount of likes received on those published
          reviews. Reviews are prioritized above ratings in the calculation.
        </div>
        <div className="flex gap-[20px] items-center pb-[20px] pt-[20px] md:pt-0">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
            <img
              src={vec}
              alt="vec"
              className="h-[14px] w-auto object-center object-cover"
            />
            <div>Production Insights</div>
          </div>
          <hr className="w-[30%]  md:w-[80%] mr-auto h-[1px] bg-[#B1B1B1] border-none" />
        </div>

        <div className="grid grid-cols-3 gap-[20px] md:gap-[50px] items-start pb-[50px]">
          <div className="col-span-2 text-[14px] text-[#7B7878] font-normal">
            <span className="font-bold">
              By default, your data visibility is set to anonymous.
            </span>
            <div>
              {" "}
              This means it will not be publicly visible on your production page
              and will be encrypted — accessible only to you through your
              account.
            </div>
            <div className="pt-[10px]">
              Fields marked with (*) are fully private, encrypted, and will
              never be displayed publicly.
            </div>{" "}
            <Link to="/" className="underline">
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-[15px] pt-[20px]">
            <Switch checkedChildren="on" unCheckedChildren="off" />
            <div className="text-[#28D26E] text-[15px] font-bold">
              visibility
            </div>
          </div>
        </div>

        <div className="bg-[#D9D9D9] text-[#747474] px-[15px] py-[5px] font-bold text-[22px] rounded-[14px] mb-[50px] w-fit">
          Your Production
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          <div>
            {renderSelectField(
              "Production Days",
              "productionDays",
              mockData.productionDays
            )}
            {renderSelectField(
              "Script Pages",
              "scriptPages",
              mockData.scriptPages
            )}
            {renderSelectField("Camera Used", "cameraUsed", mockData.cameras)}
            {renderSelectField(
              "Highest Actor Fees",
              "highestActorFees",
              mockData.highestFees
            )}
            {renderSelectField(
              "Shooting Hours",
              "shootingHours",
              mockData.shootingHours
            )}
          </div>

          <div>
            {renderSelectField("Crew Size", "crewSize", mockData.crewSizes)}
            {renderSelectField(
              "Locations Used",
              "locationsUsed",
              mockData.locations
            )}
            {renderSelectField(
              "Pick Up Days",
              "pickUpDays",
              mockData.pickupDays
            )}
            {renderSelectField(
              "Lowest Actor Fees",
              "lowestActorFees",
              mockData.lowestFees
            )}
            {renderSelectField(
              "No. of Meals per Day",
              "mealsPerDay",
              mockData.mealsPerDay
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#E4E4E4]">
        <div className="w-[85%] mx-auto py-[50px]">
          <div className="bg-[#fff] text-[#747474] px-[15px] py-[5px] font-bold text-[22px] rounded-[14px] mb-[50px] w-fit">
            Production Business
          </div>

          <div className="text-[14px] text-[#7B7878] font-normal w-[80%] mb-[50px]">
            <span className="font-bold">
              Information in this section is best left blank if accurate details
              are not available.
            </span>
            <div>
              {" "}
              You can use the visibility toggle to keep these figures private.
              Please avoid entering exaggerated or false data, as it may
              negatively impact your future analytics.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div>
              {renderInputField("Production Budget", "productionBudget")}
              {renderInputField("Investment Source", "investmentSource")}
              {renderInputField("Box Office Gross", "boxOfficeGross")}
              {renderInputField("Distributor", "distributor")}
              {renderInputField("Marketing Budget", "marketingBudget")}
            </div>

            <div>
              {renderInputField("No. of Investors", "noOfInvestors")}
              {renderInputField("Production Earning", "productionEarning")}
              {renderInputField("ROI Ratio", "roiRatio")}

              {/* Distribution Date */}
              <Form.Group className="mb-4 flex items-center gap-[10px] md:gap-[30px]">
                <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                  Distribution Date
                </Form.Label>
                <DatePicker
                  selected={formValues.distributionDate}
                  onChange={handleDateChange}
                  className="w-full rounded-[7px] border border-[#CED4DA] px-3 py-2"
                  placeholderText="Select distribution date"
                />
              </Form.Group>
              {renderInputField("Distibution Region", "distributionRegion")}


              {/* Marketing Channels */}
              <Form.Group className="mb-4 flex flex-col gap-2">
                <div className="flex items-start gap-[10px] md:gap-[30px]">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Marketing Channels
                    {requiredFields.includes("marketingChannels") && (
                      <span className="pl-[10px] text-[#FF3E3E]">*</span>
                    )}
                  </Form.Label>
                  <div className="w-full flex flex-col gap-2">
                    {formValues.marketingChannels.map((channel, index) => (
                      <div key={index} className="flex gap-2">
                        <Form.Control
                          type="text"
                          value={channel}
                          onChange={(e) =>
                            handleChannelChange(index, e.target.value)
                          }
                          placeholder="Enter marketing channel"
                          className="rounded-[7px] flex-1"
                        />
                        {formValues.marketingChannels.length > 1 && (
                          <DeleteOutlined
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => removeChannel(index)}
                          />
                        )}
                      </div>
                    ))}
                    <div className="flex justify-end">
                      <button
                        onClick={addChannel}
                        className="bg-[#2A2A2A] rounded-[12px] text-[15px] text-white px-[25px] py-[5px] w-fit"
                      >
                        Add Channel
                      </button>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </div>

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
                <span className="pr-[10px] font-bold text-[20px] ">Skip</span>
              </button>
              <button className="bg-[#2A2A2A] rounded-[12px] text-white py-[8px] px-[20px] flex items-center justify-center w-[237px]">
                <span className="pr-[10px] font-bold text-[20px] ">
                  Continue
                </span>
                <CaretRightFilled style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add3;
