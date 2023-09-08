import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer mx-auto flex h-auto flex-col items-center p-2 lg:w-[75%] lg:flex-row">
      <div className="lg:grow">
        <p>© 2023 Emre Kuru - All rights reserved</p>
      </div>
      <div className="grid-flow-col gap-4">
        <IconContext.Provider
          value={{
            className:
              "fill-accent hover:fill-accent-focus hover:scale-150 transition ",
          }}
        >
          <a href="https://linkedin.com/in/kuru-emre" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/emrekuru2" aria-label="Github">
            <FaGithub size={20} />
          </a>
          <a href="https://instagram.com/_ekuru" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
