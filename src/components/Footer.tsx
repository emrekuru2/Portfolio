import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer items-center rounded bg-base-100 p-2">
      <div className="grid-flow-col items-center">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://linkedin.com/in/kuru-emre">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/emrekuru2">
          <FaGithub size={20} />
        </a>
        <a href="lindke">
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};
