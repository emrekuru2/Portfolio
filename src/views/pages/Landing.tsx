import { Hero } from "../../components";

export const Landing = () => {
  return (
    <div className="flex h-full flex-col">
      <Hero />
      <article className="prose mx-auto my-8 min-w-[75%] grow text-center lg:prose-xl">
        <hr />
        <h1>Main Skills</h1>
        <hr />
      </article>
    </div>
  );
};
