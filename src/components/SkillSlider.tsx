import { motion } from "framer-motion";
import { ICONS } from "@assets";

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
      <img
        src={props.icon}
        className="m-0 h-10 w-10 p-1 lg:m-0"
        alt="Tech Icon"
      />
      <p className="hidden lg:block">{props.name}</p>
    </a>
  );
};

const TechStack = (props: StackProps) => {
  return (
    <motion.div
      className="absolute flex"
      animate={{
        x: [props.x_start, props.x_end],
      }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <TechBadge icon={ICONS.React} name="React.js" url="https://react.dev/" />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={ICONS.Angular}
        name="Angular"
        url="https://angular.io/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={ICONS.Java}
        name="Java"
        url="https://www.oracle.com/ca-en/java/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={ICONS.Python}
        name="Python"
        url="https://www.python.org/"
      />
      <div className="divider divider-horizontal"></div>
      <TechBadge icon={ICONS.MySQL} name="MySQL" url="https://www.mysql.com/" />
      <div className="divider divider-horizontal"></div>
      <TechBadge icon={ICONS.Cpp} name="C++" url="https://isocpp.org/" />
      <div className="divider divider-horizontal"></div>
      <TechBadge icon={ICONS.PHP} name="PHP" url="https://www.php.net/" />
      <div className="divider divider-horizontal"></div>
      <TechBadge
        icon={ICONS.TypeScript}
        name="Typescript"
        url="https://www.typescriptlang.org/"
      />
      <div className="divider divider-horizontal"></div>
    </motion.div>
  );
};

const SkillSlider = () => {
  return (
    <section className="h-20 overflow-hidden rounded-full">
      <div className="relative flex h-full items-center ">
        <TechStack x_start="-100%" x_end="0%" />
        <TechStack x_start="0%" x_end="100%" />
      </div>
    </section>
  );
};

export default SkillSlider;
