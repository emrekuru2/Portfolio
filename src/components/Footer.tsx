import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer flex p-2">
      <div className="grow">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4">
        <a href="https://linkedin.com/in/kuru-emre" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/emrekuru2" aria-label="Github">
          <FaGithub size={20} />
        </a>
        <a href="https://instagram" aria-label="Instagram">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};
