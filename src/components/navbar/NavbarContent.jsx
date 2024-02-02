/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import ProfileComponent from "./ProfileComponent";
import { FaPlus } from "react-icons/fa6";

const NavbarContent = ({
  menuItems,
  images,
  profileAccordionData,
  setIsActive,
}) => {
  return (
    <>
      <div className="border-r-[1px] border-r-gray-300 px-4 py-5 relative">
        <figure className="w-[50px] h-[50px]">
          <Link to="/" className="w-full h-full inline-block logo-img"></Link>
        </figure>

        <ul className=" mt-[80px] flex flex-col items-center gap-9">
          {menuItems.map((navitem, index) => (
            <MenuItems key={index} path={navitem.url} icons={navitem.icon()} />
          ))}
        </ul>

        <div className="w-[60.892px] h-[57px] overflow-hidden bg-blueViolet rounded-btn absolute bottom-[20px] translate-x-[-50%] left-[50%]">
          <button className="w-full h-full flex items-center justify-center text-white">
            <FaPlus />
          </button>
        </div>
      </div>

      <ProfileComponent
        images={images}
        profileAccordionData={profileAccordionData}
        setIsActive={setIsActive}
      />
    </>
  );
};

export default NavbarContent;
