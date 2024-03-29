import "./App.css";
import * as components from "./components";
import { FiUser } from "react-icons/fi";
import { PiBell } from "react-icons/pi";
import { Link } from "react-router-dom";
import * as customIcons from "./lib/custom-icons";
import { dashCardData, earningsData } from "./utils/appdata";

function App() {
  return (
    <>
      <components.Layout>
        <div className="w-full">
          <section className="w-[90%] lg:w-full lg:p-5 mx-auto">
            <header className="w-full hidden lg:flex justify-between items-center">
              <h2 className="text-2xl capitalize font-bold">
                welcome back shakir!
              </h2>
              <ul className="flex gap-8 items-center">
                <li className="text-lg cursor-pointer">
                  <PiBell />
                </li>
                <li className="flex bg-lightBlueViolet p-[13px] items-center gap-2 text-xs rounded-lg cursor-pointer">
                  <span className="inline-block">
                    <customIcons.Gift />
                  </span>
                  <span className="inline-block text-blueViolet">
                    2 new updates
                  </span>
                </li>
                <li className="">
                  <Link to="#" className="text-lg">
                    <FiUser />
                  </Link>
                </li>
              </ul>
            </header>

            <header className="lg:hidden">
              <h2 className="text-2xl capitalize font-bold">
                welcome back shakir!
              </h2>
            </header>

            <section className="flex flex-col xl:flex-row mt-12 w-full xl:gap-10">
              <div className=" w-full xl:max-w-[530px] ">
                <div className="flex items-center gap-5 justify-between xl:justify-normal xl:gap-6 flex-wrap">
                  {dashCardData.map((data, index) => {
                    return (
                      <components.DashCard
                        key={index}
                        icon={data.icons()}
                        title={data.title}
                      />
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 gap-10">
                  {earningsData.map((data, index) => {
                    return (
                      <div className="flex items-center gap-5 py-1" key={index}>
                        <div
                          className={`w-[57.64px] h-[57px] rounded-lg flex items-center justify-center ${data.bg}`}
                        >
                          {data.icons()}
                        </div>

                        <article className="">
                          <h5 className="capitalize text-sm text-raven">
                            {data.title}
                          </h5>
                          <p className="font-tomorrowFont font-medium text-2xl mt-1">
                            ${data.price}
                          </p>
                        </article>
                      </div>
                    );
                  })}
                </div>

                <components.RecentActivity />
              </div>
              <div className=" w-full xl:max-w-[350px] "></div>
            </section>
          </section>
        </div>
      </components.Layout>
    </>
  );
}

export default App;
