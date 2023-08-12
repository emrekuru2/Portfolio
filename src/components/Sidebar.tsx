import { useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaLightbulb,
  FaHouseChimney,
  FaHammer,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils";

export const Sidebar = () => {
  const html = document.documentElement;
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      html.setAttribute("data-theme", savedTheme);
    }
  }, [html]);

  const handleThemeChange = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-78 flex items-center justify-evenly rounded-full border-8 border-neutral bg-accent p-2 lg:h-96 lg:flex-col">
        <div className="tooltip-primary tooltip" data-tip="Change Theme">
          <label className="btn btn-circle swap swap-rotate btn-lg border-4 border-base-content hover:bg-primary ">
            <input onClick={() => handleThemeChange()} type="checkbox" />
            <span className="swap-on h-10 w-10">
              <FaMoon size={40} />
            </span>
            <span className="swap-off h-10 w-10">
              <FaSun size={40} />
            </span>
          </label>
        </div>
        <div className="tooltip-primary tooltip" data-tip="Landing page">
          <button
            onClick={() => navigate(ROUTES.landing)}
            className="btn btn-circle btn-lg border-4 border-base-content hover:bg-primary "
          >
            <FaHouseChimney size={40} />
          </button>
        </div>
        <div className="tooltip-primary tooltip" data-tip="About page">
          <button
            onClick={() => navigate(ROUTES.about)}
            className="btn btn-circle btn-lg border-4 border-base-content hover:bg-primary "
          >
            <FaLightbulb size={40} />
          </button>
        </div>
        <div className="tooltip-primary tooltip" data-tip="Projects page">
          <button
            onClick={() => navigate(ROUTES.projects)}
            className="btn btn-circle btn-lg border-4 border-base-content hover:bg-primary "
          >
            <FaHammer size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};
