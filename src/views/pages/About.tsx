import { LANGS, SKILLS, TOOLS } from "@assets";
import { Reveal, Timeline } from "@components";

const About = () => {
  return (
    <div className="prose mx-auto my-8 w-full text-center md:prose-lg lg:prose-xl lg:min-w-[75%]">
      <h1>Skills</h1>
      <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:px-28">
        {SKILLS.map((skill, index) => (
          <Reveal
            key={`skill_${index}`}
            delay={0.25 * index}
            className="w-full"
          >
            <div className="flex h-16 w-full items-center rounded-xl bg-base-300 px-4 shadow-lg">
              <img
                src={skill.img}
                className="m-0 mr-4 h-6 w-6 lg:m-0 lg:mr-4 lg:h-8 lg:w-8"
              />
              <span className="grow text-left text-sm lg:text-lg">
                {skill.name}
              </span>
              <div className="lg:text-md badge badge-accent p-3 text-xs lg:p-4 lg:text-base">
                {skill.level}
              </div>
              <div className="divider divider-horizontal m-1"></div>
              <div className="badge badge-primary p-3 text-xs lg:p-4 lg:text-base">
                {skill.years} years
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <hr />
      <h1>Libraries and Frameworks</h1>
      <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:px-28">
        {TOOLS.map((tool, index) => (
          <Reveal key={`tool_${index}`} delay={0.25 * index} className="w-full">
            <div className="flex h-16 w-full items-center rounded-xl bg-base-300 px-4 shadow-lg">
              <img
                src={tool.img}
                className="m-0 mr-4 h-6 w-6 lg:m-0 lg:mr-4 lg:h-8 lg:w-8"
              />
              <span className="grow text-left text-sm lg:text-lg">
                {tool.name}
              </span>
              <div className="lg:text-md badge badge-accent p-3 text-xs lg:p-4 lg:text-base">
                {tool.level}
              </div>
              <div className="divider divider-horizontal m-1"></div>
              <div className="badge badge-primary p-3 text-xs lg:p-4 lg:text-base">
                {tool.years} years
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <hr />
      <h1>Languages</h1>
      <div className="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:px-28">
        {LANGS.map((lang, index) => (
          <Reveal key={`lang_${index}`} delay={0.25 * index} className="w-full">
            <div className="flex h-16 w-full items-center rounded-xl bg-base-300 px-4 shadow-lg">
              <img
                src={lang.flag}
                className="m-0 mr-4 h-6 w-6 lg:m-0 lg:mr-4 lg:h-8 lg:w-8"
              />
              <span className="grow text-left text-sm lg:text-lg">
                {lang.name}
              </span>
              <div className="lg:text-md badge badge-accent p-3 text-xs lg:p-4 lg:text-base">
                {lang.level}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <hr />
      <h1>Timeline</h1>
      <Timeline />
      <hr />
    </div>
  );
};

export default About;
