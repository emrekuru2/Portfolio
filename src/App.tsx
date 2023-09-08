import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppLayout, Pages } from "@views";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<AppLayout />}>
          <Route index path="/" element={<Pages.Landing />} />
          <Route path="about" element={<Pages.About />} />
          <Route path="/projects" element={<Pages.Projects />} />
          <Route path="/*" element={<Pages.NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
