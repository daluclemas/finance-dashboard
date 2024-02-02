/* eslint-disable react/prop-types */
const BillComponent = ({
  icon,
  bg = "bg-ceruleanBlue",
  billType,
  status,
  price,
  isIncoming,
}) => {
  return (
    <div className="mt-2 flex items-center justify-between text-sm border-b-[1px] border-b-whiteSmoke pb-3">
      <div className="flex items-center gap-1">
        <div
          className={`w-[35px] h-[35px] rounded-lg flex justify-center items-center ${bg}`}
        >
          {icon}
        </div>

        <div className="flex flex-col">
          <h4 className="font-medium capitalize text-black">{billType}</h4>
          <p className="text-xs capitalize">{status}</p>
        </div>
      </div>

      <h3
        className={`font-tomorrowFont ${
          isIncoming ? "text-ceruleanBlue" : "text-radicalRed"
        }`}
      >
        {isIncoming ? "+" : "-"}${price}
      </h3>
    </div>
  );
};

export default BillComponent;
