import React, { useState, useEffect } from "react";
import {
  SearchOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import logo from "../assets/logos/Group 1.png";
import add from "../assets/icons/Group 3.png";
import join from "../assets/icons/Vector.png";
import user from "../assets/icons/user.png";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const LandingNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);
  const [logoSpacing, setLogoSpacing] = useState("gap-x-20");
  const [menuSpacing, setMenuSpacing] = useState("gap-x-24");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSearchCollapsed(width < 1024);

      if (width >= 1280) {
        setLogoSpacing("gap-x-20");
        setMenuSpacing("gap-x-14");
      } else if (width >= 1024) {
        setLogoSpacing("gap-x-14");
        setMenuSpacing("gap-x-14");
      } else {
        setLogoSpacing("gap-x-8");
        setMenuSpacing("gap-x-8");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showSearchOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean up on unmount or when overlay is hidden
      document.body.style.overflow = "auto";
    };
  }, [showSearchOverlay]);

  const handleSearch = () => {
    console.log("searching:", searchValue);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchValue.trim()) {
        handleSearch();
      }
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
    setTimeout(() => setShowMobileMenu(true), 10); // allow transition class to apply
  };

  const closeMenu = () => {
    setShowMobileMenu(false);
    setTimeout(() => setMenuVisible(false), 300); // match transition duration
  };

  const menuLinks = [
    { title: "Add a Title", url: "/add-a-title" },
    { title: "Join a Title", url: "/" },
    { title: "About us", url: "/" },
    { title: "About Nollywood", url: "/" },
  ];

  return (
    <div className="bg-[#232323] relative z-50">
      {/* Navbar */}
      <div className="md:hidden">
        <div className="flex justify-between items-center gap-[20px] py-[20px] md:hidden px-[20px]">
          <div className="flex gap-[20px] items-center">
            <button
              className="text-[34px] text-white focus:outline-none"
              onClick={openMenu}
            >
              <MenuOutlined />
            </button>
            <Link to="/">
              <img src={logo} className="h-[30px] w-auto" alt="logo" />
            </Link>
          </div>

          {/* Search Button */}
          <div className="flex items-center gap-[20px]">
            {!showSearch ? (
              <button
                onClick={() => setShowSearchModal(true)}
                className="text-[#abb0ba]"
              >
                <SearchOutlined
                  style={{ fontSize: "25px", color: "#28D26E" }}
                />
              </button>
            ) : (
              <Form.Group className="relative w-full transition-all duration-300">
                <div className="absolute bottom-[5px] left-3 flex items-center text-[#abb0ba]">
                  <SearchOutlined
                    style={{ fontSize: "20px", color: "#28D26E" }}
                  />
                </div>

                {searchValue && (
                  <button
                    className="absolute bottom-[5px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={() => setSearchValue("")}
                  >
                    <CloseCircleOutlined />
                  </button>
                )}

                <Form.Control
                  onClick={() => setShowSearchModal(true)}
                  type="text"
                  name="searchValue"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for Nollywood title"
                  className="border-[#6633FF] p-1 custom-placeholder ps-5"
                />
              </Form.Group>
            )}

            <img
              src={user}
              alt="menu"
              className="h-[25px] w-auto object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto py-4 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex gap-[30px] items-center">
          <button
            className="text-[34px] text-white focus:outline-none"
            onClick={openMenu}
          >
            <MenuOutlined />
          </button>

          <Link to="/">
            <img
              src={logo}
              className="h-[35px] w-auto object-contain flex-shrink-0"
              alt="logo"
            />
          </Link>
        </div>
        <div className={`flex items-center ${menuSpacing} flex-nowrap`}>
          <div>
            {isSearchCollapsed ? (
              <button
                className="text-[#abb0ba] hover:text-[#28D26E] focus:outline-none"
                onClick={() => setShowSearchOverlay(true)}
              >
                <SearchOutlined style={{ fontSize: "24px" }} />
              </button>
            ) : (
              <Form.Group className="relative w-full w-[500px]">
                <div className="absolute bottom-[10px] left-3 flex items-center text-[#abb0ba] pr-[10px] border-r border-black">
                  <SearchOutlined
                    style={{ fontSize: "15px", color: "#28D26E" }}
                  />
                </div>
                {searchValue && (
                  <button
                    className="absolute bottom-[10px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                    onClick={() => setSearchValue("")}
                  >
                    <CloseCircleOutlined />
                  </button>
                )}
                <Form.Control
                  onClick={() => setShowSearchOverlay(true)}
                  type="text"
                  name="searchValue"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search for Nollywood title"
                  className="border-[#6633FF] p-1 custom-placeholder ps-5 w-full"
                />
              </Form.Group>
            )}
          </div>

          <div className="flex items-center gap-[20px]">
            <Link
              to="/add-new-title"
              className="bg-[#FAFAFA] font-bold text-[12px] cursor-pointer  text-black rounded-[12px] flex gap-[20px] justify-center items-center py-[10px] px-[25px]"
            >
              <span>Add new title</span>{" "}
              <img
                src={add}
                alt="add"
                className="h-[22px] w-auto object-cover object-center"
              />
            </Link>
            <div className="bg-[#FAFAFA] font-bold text-[12px] cursor-pointer  text-black rounded-[12px] flex gap-[20px] justify-center items-center py-[10px] px-[25px]">
              <span>Join a title</span>{" "}
              <img
                src={join}
                alt="join"
                className="h-[14px] w-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuVisible && (
        <div
          className={`fixed top-0 left-0 w-[431px] h-[100dvh] md:h-[715px] bg-[#000] text-[#b1b1b1] z-[9999] shadow-lg p-8 flex flex-col gap-6 transition-transform duration-300 transform ${
            showMobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end w-full px-4 pt-4 md:px-6 md:pt-6">
            <button
              onClick={closeMenu}
              className="text-white text-xl focus:outline-none border-[3px] border-white flex justify-center items-center h-[54px] w-[54px] rounded-[8px]"
            >
              <CloseOutlined />
            </button>
          </div>

          {menuLinks.map((link, i) => (
            <Link
              key={i}
              to={link.url}
              onClick={closeMenu}
              className="text-[#b1b1b1] hover:text-white font-bold text-[24px] font-[Inter]"
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}

      {/* Search Overlay */}
      {showSearchOverlay && (
        <div className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white z-40 overflow-y-auto">
          <div className="w-[80%] mx-auto">
            <div className="flex justify-between items-center pt-[30px]">
              <div className="text-[#28D26E] font-normal text-[40px]">
                SEARCH
              </div>

              <button
                onClick={() => setShowSearchOverlay(false)}
                className="text-black border-[3px] border-black p-2 rounded-[8px]"
              >
                <CloseOutlined style={{ fontSize: "25px" }} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Search Input for Small Screens */}
      {showSearchModal && (
        <div className="absolute top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white z-40 p-4 md:hidden overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-[#28D26E]">Search</h2>
            <button onClick={() => setShowSearchModal(false)}>
              <CloseOutlined style={{ fontSize: "24px", color: "#000" }} />
            </button>
          </div>
          <Form.Group className="relative w-full">
            <div className="absolute bottom-[10px] right-3 flex items-center text-[#28D26E]">
              <SearchOutlined style={{ fontSize: "20px" }} />
            </div>

            {searchValue && (
              <button
                className="absolute bottom-[5px] right-3 flex items-center cursor-pointer text-[#abb0ba]"
                onClick={() => setSearchValue("")}
              >
                <CloseCircleOutlined />
              </button>
            )}

            <Form.Control
              type="text"
              name="searchValue"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for Nollywood title"
              className="border-[#6633FF] p-2 ps-8"
              autoFocus
            />
          </Form.Group>
        </div>
      )}
    </div>
  );
};

export default LandingNav;
