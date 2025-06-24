import React, { useState } from "react";
import LandingNav from "../components/LandingNav";
import Add1 from "../components/Add1";
import Footer from "../components/Footer";
import Add2 from "../components/Add2";
import Add3 from "../components/Add3";

const AddTitle = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [formData, setFormData] = useState({});
  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "string") {
      // Direct key-value update (like profile photo)
      setFormData((prevData) => ({
        ...prevData,
        [eOrName]: value,
      }));
    } else {
      // Standard input change event
      const { name, value } = eOrName.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <LandingNav />
      <div>
        {step === 1 && (
          <Add1
            nextStep={nextStep}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <Add2
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
          {step === 3 && (
          <Add3
            prevStep={prevStep}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AddTitle;
