import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppLayout, Pages } from "./views";
import { ROUTES } from "./utils";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AppLayout />}>
          <Route index path={ROUTES.landing} element={<Pages.Landing />} />
          <Route path={ROUTES.about} element={<Pages.About />} />
          <Route path={ROUTES.projects} element={<Pages.Projects />} />
          <Route path={ROUTES.pageNotFound} element={<Pages.PageNotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
