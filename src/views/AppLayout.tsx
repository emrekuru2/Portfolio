import { Sidebar, Footer } from "../components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  const axis = window.innerWidth <= 640 ? "x" : "y";
  return (
    <div className="no-scrollbar flex h-screen flex-col items-center overflow-auto bg-neutral px-2 pb-2 pt-0 lg:flex-row lg:py-2 lg:pl-0 lg:pr-2">
      <div className="fixed z-10 flex h-20 items-center justify-center lg:h-full">
        <Sidebar />
      </div>
      <motion.div
        className="no-scrollbar h-full w-full overflow-auto rounded bg-base-100 p-2 max-lg:mt-8 max-lg:pt-8 lg:ml-8"
        initial={{ opacity: 0, [axis]: 500 }}
        animate={{ opacity: 1, [axis]: 0 }}
        exit={{ opacity: 0, [axis]: -1000 }}
      >
        <Outlet />
        <Footer />
      </motion.div>
    </div>
  );
};
