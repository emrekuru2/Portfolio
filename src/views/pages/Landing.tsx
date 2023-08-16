import { Hero, SkillSlider } from "../../components";

export const Landing = () => {
  return (
    <div className="flex h-full flex-col">
      <Hero />
      <article className="prose mx-auto my-8 w-full grow text-center lg:prose-xl lg:min-w-[75%]">
        <h1>Main Skills</h1>
        <hr />
        <SkillSlider />
      </article>
    </div>
  );
};
