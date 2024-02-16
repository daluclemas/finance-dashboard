import { useState } from "react";

const RecentActivity = () => {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);

  const handleShowTabOne = () => {
    setTabOne(true);
    setTabTwo(false);
  };

  const handleShowTabTwo = () => {
    setTabOne(false);
    setTabTwo(true);
  };

  return (
    <section className="mt-12 w-full">
      <h2 className="text-xl capitalize font-bold">recent activity</h2>

      <section className="mt-9 flex items-end justify-between">
        <div
          className={`flex sm:max-w-[287px] w-full border-b gap-8 pb-3 relative ${
            tabOne && "tab-one"
          } ${tabTwo && "tab-two"}`}
        >
          <div className="border-b border-transparent">
            <button
              className={`text-base capitalize font-semibold`}
              onClick={handleShowTabOne}
            >
              history
            </button>
          </div>

          <div className="border-b border-transparent">
            <button
              className={`text-base capitalize font-semibold`}
              onClick={handleShowTabTwo}
            >
              upcoming
            </button>
          </div>
        </div>
        <div className="flex"></div>
      </section>

      <section className=" flex flex-nowrap my-5 overflow-hidden">
        <div
          className={` w-full h-[40px] flex-shrink-0 transition-all ${
            tabOne ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          tab i
        </div>

        <div
          className={` h-[40px] w-full flex-shrink-0 transition-all ${
            tabTwo ? "translate-x-[-100%]" : "translate-x-0"
          }`}
        >
          tab ii
        </div>
      </section>
    </section>
  );
};

export default RecentActivity;
