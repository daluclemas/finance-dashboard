import { FiUser } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { PiBell } from "react-icons/pi";
import { Link } from "react-router-dom";
import { menuItems, profileAccordionData } from "../../utils/appdata";
import * as images from "../../assets";
import { useState } from "react";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="w-full">
      <aside className="hidden lg:block lg:fixed top-0 left-0 bottom-0 max-w-[370px] w-full bg-quartz">
        <section className="flex h-full">
          <NavbarContent
            images={images}
            menuItems={menuItems}
            setIsActive={setIsActive}
            profileAccordionData={profileAccordionData}
          />
        </section>
      </aside>

      <nav className="block lg:hidden ">
        <section className="sticky-header py-2 fixed top-0 left-0 right-0 bg-white">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="logo w-fit">
              <figure className="w-[50px] h-[50px]">
                <Link
                  to="/"
                  className="w-full h-full inline-block logo-img"
                ></Link>
              </figure>
            </div>

            <div className="hamburger-wrapper flex items-center justify-end text-black text-xl gap-3 cursor-pointer">
              <PiBell />
              <FiUser />
              <RiMenuLine onClick={() => setIsActive(true)} />
            </div>
          </div>
        </section>

        {isActive && (
          <section className="nav-menu  fixed top-0 left-0 w-full max-w-[400px] bottom-0 z-10 shadow-custom">
            <div className="w-full h-full bg-quartz flex">
              <NavbarContent
                images={images}
                menuItems={menuItems}
                setIsActive={setIsActive}
                profileAccordionData={profileAccordionData}
              />
            </div>
          </section>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
