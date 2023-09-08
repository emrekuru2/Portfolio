import Typed from "react-typed";
import { Reveal } from "@components";

const Hero = () => {
  return (
    <header className="flex h-60 flex-col items-center justify-center rounded bg-gradient-radial from-primary/25 from-20% to-base-300 to-75% shadow-xl lg:h-96">
      <Reveal delay={0.25}>
        <h1 className="mb-4 text-6xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
          Emre Kuru
        </h1>
      </Reveal>
      <h2 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        <Typed
          strings={[
            "I'm a <b class='text-accent'>Software Developer</b>",
            "I'm a <b class='text-accent'>Web Developer</b>",
            "Passionate about <b class='text-accent'>Technology...</b>",
          ]}
          typeSpeed={25}
          backSpeed={10}
          loop
          loopCount={3}
        />
      </h2>
    </header>
  );
};

export default Hero;
