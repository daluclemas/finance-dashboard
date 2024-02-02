/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleRight, FaAngleUp } from "react-icons/fa6";

const ProfileAccordions = ({ title, icon, paragraph, bg }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={`flex flex-col px-2 py-3 ${isActive && "bg-white"}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className={`py-3 px-3 rounded-[50%] ${bg}`}>{icon}</div>

            <h3 className="capitalize text-base font-bold text-[rgba(0,0,0,0.5)]">
              {title}
            </h3>
          </div>

          <div className=" bg-white rounded-[18px] w-[53px] h-[53px] overflow-hidden custom-btn-shadow">
            <button
              onClick={() => setIsActive(!isActive)}
              className="w-full h-full justify-center items-center flex transition-all outline-none"
            >
              {isActive ? <FaAngleUp /> : <FaAngleRight />}
            </button>
          </div>
        </div>

        {isActive && (
          <div className="py-4 px-3">
            <p className="capitalize text-sm leading-2 text-[rgba(0,0,0,0.)8]">
              {paragraph}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileAccordions;
