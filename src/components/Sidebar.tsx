import { useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaLightbulb,
  FaHouseChimney,
  FaHammer,
  FaRegFileLines,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Resume } from "../assets";

const defaultLinkStyle =
  "btn btn-circle lg:btn-lg border-4 border-primary/50 hover:bg-primary-focus/75";

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
    <div className="flex h-full items-center justify-evenly gap-2 rounded-full border-8 border-neutral bg-base-200 px-2 lg:h-[450px] lg:flex-col lg:gap-0">
      <div
        className="tooltip-primary tooltip tooltip-bottom lg:tooltip-right"
        data-tip="Change Theme"
      >
        <label
          className={`swap swap-rotate ${defaultLinkStyle}`}
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
      <div
        className="tooltip-primary tooltip tooltip-bottom lg:tooltip-right"
        data-tip="Landing page"
      >
        <NavLink
          to="/"
          aria-label="Landing"
          className={({ isActive }) =>
            isActive ? defaultLinkStyle + " bg-primary/50" : defaultLinkStyle
          }
        >
          <span className="swap-off h-10 w-10 p-2">
            <FaHouseChimney size={"100%"} />
          </span>
        </NavLink>
      </div>
      <div
        className="tooltip-primary tooltip tooltip-bottom lg:tooltip-right"
        data-tip="About page"
      >
        <NavLink
          to="/about"
          aria-label="About"
          className={({ isActive }) =>
            isActive ? defaultLinkStyle + " bg-primary/50" : defaultLinkStyle
          }
        >
          <span className="swap-off h-10 w-10 p-2">
            <FaLightbulb size={"100%"} />
          </span>
        </NavLink>
      </div>
      <div
        className="tooltip-primary tooltip tooltip-bottom lg:tooltip-right"
        data-tip="Projects page"
      >
        <NavLink
          to="/projects"
          aria-label="Projects"
          className={({ isActive }) =>
            isActive ? defaultLinkStyle + " bg-primary/50" : defaultLinkStyle
          }
        >
          <span className="swap-off h-10 w-10 p-2">
            <FaHammer size={"100%"} />
          </span>
        </NavLink>
      </div>
      <div
        className="tooltip-primary tooltip tooltip-bottom lg:tooltip-right"
        data-tip="Download Resume"
      >
        <a
          href={Resume}
          download="Emre_Kuru_Resume"
          aria-label="Projects"
          className={defaultLinkStyle}
          rel="noopener noreferrer"
        >
          <span className="swap-off h-10 w-10 p-2">
            <FaRegFileLines size={"100%"} />
          </span>
        </a>
      </div>
    </div>
  );
};
