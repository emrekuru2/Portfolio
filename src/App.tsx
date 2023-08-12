import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { About, AppLayout, Landing, Projects } from "./views";
import { ROUTES } from "./utils";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AppLayout />}>
          <Route index path={ROUTES.landing} element={<Landing />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.projects} element={<Projects />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
