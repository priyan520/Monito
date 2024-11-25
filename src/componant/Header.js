import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="header py-[33px]">
      <div className="container_custom px-[20px] xl:pl-[82px] xl:pr-[200px] !w-full">
        <div className="con flex items-center justify-between !w-full">
          {/* Logo */}
          <div className="p_1">
            <div className="logo">
              <img src={require('../asset/logo.png')} alt="Logo" />
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-[#0f3659] focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`p_2 flex flex-col lg:flex-row items-center justify-between absolute lg:static top-[80px] left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none transition-all duration-300 z-10 ${
              isMenuOpen ? 'block' : 'hidden lg:flex'
            }`}
          >
            <nav className="lg:mr-[105px] lg:w-auto w-full">
              <ul className="flex flex-col lg:flex-row lg:justify-normal justify-start lg:px-0 lg:py-0 px-7 pt-5 pb-10">
                <li>
                  <a
                    href=""
                    className="mr-0 lg:mr-[28px] lg:py-0 py-3 lg:text-[16px] text-[18px] block text-start leading-[24px] text-[#808080] lg:!border-0 lg:!border-0 
            border-b border-black lg:border-none hover:text-black hover:underline transition-all duration-300" style={{borderBottom: "1px solid black"}}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="mr-0 lg:mr-[28px] lg:py-0 py-3 lg:text-[16px] text-[18px] block text-start leading-[24px] text-[#808080] lg:!border-0 lg:!border-0 
            border-b border-black lg:border-none hover:text-black hover:underline transition-all duration-300" style={{borderBottom: "1px solid black"}}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="mr-0 lg:mr-[28px] lg:py-0 py-3 lg:text-[16px] text-[18px] block text-start leading-[24px] text-[#808080] lg:!border-0 lg:!border-0 
            border-b border-black lg:border-none hover:text-black hover:underline transition-all duration-300" style={{borderBottom: "1px solid black"}}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="mr-0 lg:mr-[28px] lg:py-0 py-3 lg:text-[16px] text-[18px] block text-start leading-[24px] text-[#808080] lg:!border-0 lg:!border-0 
            border-b border-black lg:border-none hover:text-black hover:underline transition-all duration-300" style={{borderBottom: "1px solid black"}}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="mr-0 lg:mr-[28px] lg:py-0 py-3 lg:text-[16px] text-[18px] block text-start leading-[24px] text-[#808080] lg:!border-0 lg:!border-0 
            border-b border-black lg:border-none hover:text-black hover:underline transition-all duration-300" style={{borderBottom: "1px solid black"}}
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="lg:py-0 py-3 lg:text-[16px] text-[18px] block text-start leading-[24px] text-[#808080] lg:!border-0 lg:!border-0 
            border-b border-black lg:border-none hover:text-black hover:underline transition-all duration-300" style={{borderBottom: "1px solid black"}}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="btn mt-4 lg:mt-0 hidden lg:block">
  <button>
    <a
      href=""
      className="py-[17px] px-[24px] bg-[#0f3659] text-white rounded-full block tracking-wider text-[14px] text-center 
        hover:bg-[#FE704B] hover:text-black transition-all duration-300"
    >
      Register Now
    </a>
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
