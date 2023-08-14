import { useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaLightbulb,
  FaHouseChimney,
  FaHammer,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../utils";

const defaultLinkStyle =
  "btn btn-circle lg:btn-lg border-4 border-base-content hover:bg-primary";

export const Sidebar = () => {
  const html = document.documentElement;

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
    <div className="flex h-full items-center justify-evenly gap-2 rounded-full border-8 border-neutral bg-accent px-2 lg:h-96 lg:flex-col lg:gap-0">
      <div className="tooltip-primary tooltip" data-tip="Change Theme">
        <label
          className="btn btn-circle swap swap-rotate border-4 border-base-content lg:btn-lg hover:bg-primary"
          aria-label="theme-switch"
        >
          <input onClick={() => handleThemeChange()} type="checkbox" />
          <span className="swap-on h-10 w-10 p-2">
            <FaMoon size={"100%"} />
          </span>
          <span className="swap-off h-10 w-10 p-2">
            <FaSun size={"100%"} />
          </span>
        </label>
      </div>
      <div className="tooltip-primary tooltip" data-tip="Landing page">
        <NavLink
          to={ROUTES.landing}
          aria-label="Landing"
          className={({ isActive }) =>
            isActive ? defaultLinkStyle + " bg-secondary/75" : defaultLinkStyle
          }
        >
          <span className="swap-off h-10 w-10 p-2">
            <FaHouseChimney size={"100%"} />
          </span>
        </NavLink>
      </div>
      <div className="tooltip-primary tooltip" data-tip="About page">
        <NavLink
          to={ROUTES.about}
          aria-label="About"
          className={({ isActive }) =>
            isActive ? defaultLinkStyle + " bg-secondary/75" : defaultLinkStyle
          }
        >
          <span className="swap-off h-10 w-10 p-2">
            <FaLightbulb size={"100%"} />
          </span>
        </NavLink>
      </div>
      <div className="tooltip-primary tooltip" data-tip="Projects page">
        <NavLink
          to={ROUTES.projects}
          aria-label="Projects"
          className={({ isActive }) =>
            isActive ? defaultLinkStyle + " bg-secondary/75" : defaultLinkStyle
          }
        >
          <span className="swap-off h-10 w-10 p-2">
            <FaHammer size={"100%"} />
          </span>
        </NavLink>
      </div>
    </div>
  );
};
