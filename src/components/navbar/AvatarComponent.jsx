/* eslint-disable react/prop-types */
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AvatarComponent = ({ image }) => {
  return (
    <div className="flex items-center gap-3">
      <figure className="w-[70px] h-[70px] avatar">
        <CircularProgressbarWithChildren
          value={66}
          minValue={1}
          styles={{
            path: {
              stroke: "#FC6B21",
              strokeWidth: "5px",
            },
            trail: {
              strokeWidth: "5px",
              stroke: "transparent",
            },
          }}
        >
          <img
            src={image}
            alt="avatar"
            className="w-[80%] h-[80%] object-cover"
          />
        </CircularProgressbarWithChildren>
      </figure>

      <article className="text-base">
        <h5 className="text-base">AR Shakir</h5>
        <p className="text-sm text-[rgba(0,0,0,0.4)]">Joined 6 months ago</p>
      </article>
    </div>
  );
};

export default AvatarComponent;
