import { motion } from "framer-motion";
import { LocalAssets } from "../assets";
import { skillSliderAnim } from "../utils";

type BadgeProps = {
  icon: string;
  name: string;
  url: string;
};

type StackProps = {
  x_start: string;
  x_end: string;
};

const TechBadge = (props: BadgeProps) => {
  return (
    <a
      type="button"
      href={props.url}
      className="btn btn-sm h-12 w-20 lg:btn-lg lg:w-52"
    >
      <img src={props.icon} className="m-0 h-10 w-10 p-1 lg:m-0" />
      <p className="hidden lg:block">{props.name}</p>
    </a>
  );
};

const TechStack = (props: StackProps) => {
  return (
    <motion.div
      className="absolute flex"
      {...skillSliderAnim(props.x_start, props.x_end)}
    >
      <TechBadge
        icon={LocalAssets.Icons.React}
        name="React.js"
        url="https://react.dev/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={LocalAssets.Icons.Angular}
        name="Angular"
        url="https://angular.io/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={LocalAssets.Icons.Java}
        name="Java"
        url="https://www.oracle.com/ca-en/java/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={LocalAssets.Icons.Python}
        name="Python"
        url="https://www.python.org/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={LocalAssets.Icons.MySQL}
        name="MySQL"
        url="https://www.mysql.com/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={LocalAssets.Icons.Cpp}
        name="C++"
        url="https://isocpp.org/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={LocalAssets.Icons.PHP}
        name="PHP"
        url="https://www.php.net/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={LocalAssets.Icons.TypeScript}
        name="Typescript"
        url="https://www.typescriptlang.org/"
      />
      <div className="divider divider-horizontal"></div>
    </motion.div>
  );
};

export const SkillSlider = () => {
  return (
    <section className="h-20 overflow-hidden rounded-full">
      <div className="relative flex h-full items-center ">
        <TechStack x_start="-100%" x_end="0%" />
        <TechStack x_start="0%" x_end="100%" />
      </div>
    </section>
  );
};
