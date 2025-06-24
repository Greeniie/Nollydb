import React, { useState } from "react";
import vec from "../assets/icons/Vector (1).png";
import Form from "react-bootstrap/Form";
import { Select, Input } from "antd";
import {
  CaretDownOutlined,
  CaretRightFilled,
  PlusCircleFilled,
  SaveFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { notification } from "antd";
import { Spinner } from "react-bootstrap";
import imagedef from "../assets/testimgs/Image.png";

const Add1 = ({ nextStep, formData, handleInputChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);

  const productionTypes = [
    "Feature Film",
    "TV Series",
    "Short Film",
    "Documentary",
    "Commercial",
  ];

  const rating = ["0", "1", "2", "3", "4", "5"];

  const { TextArea } = Input;
  const handleSynChange = (e) => {
    const { value } = e.target;
    handleInputChange({ target: { name: "synopsis", value } });
  };

  const onChangeImage = async (e) => {
    const image = e.target.files[0];
    setImageLoading(true);

    const imageformData = new FormData();
    imageformData.append("file", image);
    imageformData.append("upload_preset", "resuss_dev");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dcn2e7gon/image/upload",
        imageformData
      );

      const imageUrl = response.data.secure_url;
      setImage(imageUrl);
      handleInputChange("profile_photo_name", imageUrl); // Store the URL, not the file
    } catch (error) {
      console.error("Error uploading image: ", error);
      notification.error({
        message: "Upload Failed",
        description:
          "There was an error uploading your image. Please try again.",
        placement: "topRight",
      });
    } finally {
      setImageLoading(false);
    }
  };

  const [keyCreatives, setKeyCreatives] = useState({
    studio: [{ name: "", contact: "" }],
    executive: [{ name: "", contact: "" }],
    producer: [{ name: "", contact: "" }],
    director: [{ name: "", contact: "" }],
    cinematographer: [{ name: "", contact: "" }],
  });

  const handleChange = (role, index, field, value) => {
    const updated = [...keyCreatives[role]];
    updated[index][field] = value;
    setKeyCreatives({ ...keyCreatives, [role]: updated });
  };

  const handleAdd = (role) => {
    const updated = [...keyCreatives[role], { name: "", contact: "" }];
    setKeyCreatives({ ...keyCreatives, [role]: updated });
  };

  const handleRemove = (role, index) => {
    const updated = keyCreatives[role].filter((_, i) => i !== index);
    setKeyCreatives({ ...keyCreatives, [role]: updated });
  };

  const fields = [
    {
      label: "Production Studio",
      role: "studio",
      placeholder1: "Studio Name",
      placeholder2: "Key Contact Email / Phone no.",
    },
    {
      label: "Executive Producer",
      role: "executive",
      placeholder1: "Name",
      placeholder2: "Email or Phone no.",
    },
    {
      label: "Producer",
      role: "producer",
      placeholder1: "Name",
      placeholder2: "Email or Phone no.",
    },
    {
      label: "Director",
      role: "director",
      placeholder1: "Name",
      placeholder2: "Email or Phone no.",
    },
    {
      label: "Cinematographer",
      role: "cinematographer",
      placeholder1: "Name",
      placeholder2: "Email or Phone no.",
    },
  ];

  return (
    <>
      <div className="bg-[#E4E4E4] min-h-[400px]">
        <div className="w-[90%] md:w-[85%] mx-auto py-[50px]">
          <div className="flex gap-[20px] items-center pb-[20px] pt-[20px] md:pt-0">
            <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
              <img
                src={vec}
                alt="vec"
                className="h-[14px] w-auto object-center object-cover"
              />
              <div>Production Details</div>
            </div>
            <hr className="w-[30%] md:w-[80%] mr-auto h-[1px] bg-[#B1B1B1] border-none" />
          </div>
          <Form>
            <div className="block md:md:grid grid-cols-2 gap-[50px]">
              <div>
                <Form.Group className="mb-4 flex items-center gap-[30px]">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Production title{" "}
                    <span className="pl-[10px] text-[#FF3E3E]">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title || ""}
                    onChange={handleInputChange}
                    className="p-2 custom-placeholder"
                  />
                  {/* {renderError("first_name")} */}
                </Form.Group>
                <Form.Group className="mb-4 flex items-center gap-[30px]">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Production Type{" "}
                    <span className="pl-[10px] text-[#FF3E3E]">*</span>
                  </Form.Label>

                  <Select
                    size="large"
                    suffixIcon={<CaretDownOutlined />}
                    placeholder="Select a type"
                    value={formData.productionType || undefined}
                    onChange={(value) =>
                      handleInputChange({
                        target: { name: "productionType", value },
                      })
                    }
                    className="w-full custom-placeholder rounded-[7px]"
                    options={productionTypes.map((type) => ({
                      label: type,
                      value: type,
                    }))}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-4 flex items-center gap-[20px]"
                  controlId="formBasicText"
                  style={{ marginBottom: "10px" }}
                >
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Production Release Date
                  </Form.Label>
                  <div className="w-full">
                    <DatePicker
                      className="p-2 custom-placeholder w-full rounded-[7px]"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd MMM yyyy"
                    />
                  </div>
                </Form.Group>

                <div className="mb-4 flex items-start gap-[30px]">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Synopsis
                  </Form.Label>

                  <TextArea
                    className="rounded-[7px]"
                    value={formData.bio || ""}
                    onChange={handleSynChange}
                    rows={10}
                  />
                </div>
              </div>
              <div>
                <div className="mb-4 flex items-start gap-[30px]">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Production Art{" "}
                    <span className="pl-[10px] text-[#FF3E3E]">*</span>
                  </Form.Label>
                  <div>
                    <div className="relative bg-[#D4D4D4] h-[237px] w-[174px] flex justify-center items-center">
                      {imageLoading ? (
                        <Spinner
                          animation="border"
                          variant="primary"
                          className="absolute"
                        />
                      ) : (
                        <label className="cursor-pointer">
                          <img
                            src={image || imagedef}
                            className="object-cover object-center h-[120px] w-auto"
                            alt="profile"
                          />
                          <input
                            type="file"
                            className="hidden"
                            onChange={onChangeImage}
                          />
                        </label>
                      )}
                    </div>
                    <div className="text-sm text-[#B1B1B1] text-wrap py-[10px] w-[60%]">
                      Production Art should be 1400 pixels x 2100 pixels.
                    </div>
                  </div>
                </div>
                <Form.Group className="mb-4 flex items-center gap-[30px]">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Rating <span className="pl-[10px] text-[#FF3E3E]">*</span>
                  </Form.Label>

                  <Select
                    size="large"
                    suffixIcon={<CaretDownOutlined />}
                    placeholder="Select rating"
                    value={formData.rating || undefined}
                    onChange={(value) =>
                      handleInputChange({
                        target: { name: "rating", value },
                      })
                    }
                    className="w-full custom-placeholder rounded-[7px]"
                    options={rating.map((r) => ({
                      label: r,
                      value: r,
                    }))}
                  />
                </Form.Group>

                <Form.Group className="mb-4 flex items-center gap-[30px]">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[250px]">
                    Duration <span className="pl-[10px] text-[#FF3E3E]">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    value={formData.title || ""}
                    onChange={handleInputChange}
                    placeholder="In minutes"
                    className="p-2 custom-placeholder"
                  />
                  {/* {renderError("first_name")} */}
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
      </div>

      <div className="w-[85%] mx-auto py-[50px]">
        <div className="flex gap-[20px] items-center pb-[20px] pt-[20px] md:pt-0">
          <div className="flex items-center gap-[10px] font-[Inter] font-bold text-[15px] text-[#b1b1b1]">
            <img
              src={vec}
              alt="vec"
              className="h-[14px] w-auto object-center object-cover"
            />
            <div>Key Creatives</div>
          </div>
          <hr className="w-[30%]  md:w-[80%] mr-auto h-[1px] bg-[#B1B1B1] border-none" />
        </div>

        <div className="text-center text-black text-[15px] pt-[10px] pb-[20px]">
          To create this project at least one of the fields in this category
          needs to be completed
        </div>

        <Form className="flex flex-col gap-[20px] w-full">
          {fields.map((field, i) => (
            <div key={i} className="flex flex-col gap-[10px] pb-[10px] w-full">
              {keyCreatives[field.role].map((item, index) => (
                <div key={index} className="grid grid-cols-6 gap-[20px] w-full">
                  <Form.Label className="text-[15px] font-bold text-[#747474] whitespace-nowrap mb-0 w-[200px] pt-2">
                    {index === 0 && field.label}
                  </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder={field.placeholder1}
                      value={item.name}
                      onChange={(e) =>
                        handleChange(field.role, index, "name", e.target.value)
                      }
                      className="p-2 w-full custom-placeholder col-span-2"
                    />

                    <Form.Control
                      type="text"
                      placeholder={field.placeholder2}
                      value={item.contact}
                      onChange={(e) =>
                        handleChange(
                          field.role,
                          index,
                          "contact",
                          e.target.value
                        )
                      }
                      className="p-2 w-full custom-placeholder col-span-2"
                    />

                  {keyCreatives[field.role].length > 1 && (
                    <div
                      className="flex items-center justify-end gap-[5px] text-red-500 cursor-pointer pt-2"
                      onClick={() => handleRemove(field.role, index)}
                    >
                      <MinusCircleFilled />
                      <span className="font-bold text-[14px]">Remove</span>
                    </div>
                  )}
                </div>
              ))}

              {(field.role === "studio" ||
                field.role === "executive" ||
                field.role === "producer") && (
                <div
                  className="flex items-center justify-end gap-[10px] cursor-pointer mt-[10px]"
                  onClick={() => handleAdd(field.role)}
                >
                  <PlusCircleFilled />
                  <span className="font-bold text-[15px] text-[#2A2A2A]">
                    Add {field.role}
                  </span>
                </div>
              )}
            </div>
          ))}
        </Form>

        <div className="flex justify-end gap-[30px] pt-[60px] py-[20px]">
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
    </>
  );
};

export default Add1;
