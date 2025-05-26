import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/Group 4.png";

const Footer = () => {
  const footerLinks1 = [
    { label: "Join Our Team", to: "/" },
    { label: "Our Audience", to: "/" },
    { label: "About Us", to: "/" },
    { label: "Press & Events", to: "/" },
    { label: "Review Policy", to: "/" },
    { label: "Media Coverage", to: "/" },
    { label: "Contact Us", to: "/" },
  ];

  const footerLinks2 = [
    { label: "Advertising", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Terms", to: "/" },
    { label: "Privacy", to: "/" },
    { label: "Policies", to: "/" },
  ];

  const renderLinks = (links) =>
    links.map((link, index) => (
      <span key={index}>
        <Link to={link.to} className="hover:underline text-[12px] text-white font-normal font-Inter">
          {link.label}
        </Link>
        {index !== links.length - 1 && <span className="mx-1">|</span>}
      </span>
    ));

  return (
    <div className="min-h-[250px] bg-[#144026] text-white">
      <div className="w-[80%] mx-auto py-[80px]">
        <img
          src={logo}
          alt="Logo"
          className="h-[27px] w-auto object-contain object-center mb-6"
        />
        <div className="space-y-2 block md:flex justify-between items-center">
          <div>{renderLinks(footerLinks1)}</div>
          <div>{renderLinks(footerLinks2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
