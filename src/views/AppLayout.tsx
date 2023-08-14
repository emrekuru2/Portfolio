import { Sidebar, Footer } from "../components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { pageChangeAnim } from "../utils";

export const AppLayout = () => {
  return (
    <div className="flex h-screen flex-col items-center bg-neutral p-4 lg:flex-row">
      <div className="fixed z-10 flex h-20 items-center justify-center lg:h-full">
        <Sidebar />
      </div>
      <motion.div
        className="h-full w-full rounded bg-base-100 p-2 max-lg:mt-8 max-lg:pt-8 lg:ml-8 "
        variants={pageChangeAnim()}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="h-full overflow-auto">
          <Outlet />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};
