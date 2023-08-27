import { Sidebar, Footer } from "../components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  const axis = window.innerWidth <= 640 ? "x" : "y";
  return (
    <div className="no-scrollbar flex h-screen flex-col items-center overflow-auto bg-neutral px-4 pb-4 pt-2 lg:flex-row lg:py-4 lg:pl-2 lg:pr-4">
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
