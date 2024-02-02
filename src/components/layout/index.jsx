/* eslint-disable react/prop-types */
import * as components from "../index";
const Layout = ({ children }) => {
  return (
    <main className=" font-googleSans">
      <components.Navbar />
      <section className="z-[1] lg:relative mt-[90px] lg:mt-0 lg:w-[calc(100%-370px)] lg:left-[370px] min-h-screen">
        {children}
      </section>
    </main>
  );
};

export default Layout;
