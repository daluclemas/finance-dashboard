/* eslint-disable react/prop-types */
import AvatarComponent from "./AvatarComponent";
import ProfileAccordions from "./ProfileAccordions";
import Bills from "./Bills";
import { FaTimes } from "react-icons/fa";

const ProfileComponent = ({ images, profileAccordionData, setIsActive }) => {
  return (
    <div className="user-profile w-full pr-4 pl-3 py-4 overflow-y-auto max-w-[330px]">
      <div className="flex lg:hidden justify-end py-4 pr-4 text-2xl text-[rgba(0,0,0,0.5)] cursor-pointer">
        <FaTimes onClick={() => setIsActive(false)} />
      </div>
      <AvatarComponent image={images.avatar} />

      <div className="mt-[40px] w-full">
        {profileAccordionData.map((data, index) => (
          <ProfileAccordions
            key={index}
            title={data.title}
            paragraph={data.paragraph}
            icon={data.icons()}
            bg={data.bg}
          />
        ))}
      </div>

      <div className="mt-[30px]">
        <figure className="m-0 p-0 chart"></figure>
      </div>

      <Bills />
    </div>
  );
};

export default ProfileComponent;
