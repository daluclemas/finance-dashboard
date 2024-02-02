/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const DashCard = ({ icon, title }) => {
  return (
    <div className="p-6 bg-white sticky-header max-w-[110px] w-full rounded-lg">
      <div className="flex justify-center">{icon}</div>

      <p className="capitalize text-xs mt-3 text-ghost text-center">{title}</p>
    </div>
  );
};

export default DashCard;
