import Typed from "react-typed";

export const Hero = () => {
  return (
    <header className="flex h-1/3 flex-col items-center justify-center rounded bg-gradient-radial from-primary/25 from-20% to-base-300 to-75% shadow-xl">
      <h1 className="mb-4 text-6xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
        Emre Kuru
      </h1>
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
        <Typed
          strings={[
            "I'm a <i class='text-accent'>Front-end Developer</i>",
            "But I'm also fluent on <i class='text-accent'>Back-end Development</i>",
            "I just love <i class='text-accent'>Technology...</i>",
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
