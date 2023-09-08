import { Hero, SkillSlider } from "@components";
import { IMAGES } from "@assets";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Hero />
      <article className="prose mx-auto my-8 w-full grow text-center lg:prose-xl lg:min-w-[75%]">
        <hr />
        <SkillSlider />
        <hr />
        <div className="flex flex-col items-center gap-8 px-4 lg:flex-row lg:gap-12 lg:px-36">
          <div className="not-prose avatar">
            <div className="h-32 w-32 rounded-full ring ring-primary ring-offset-8 ring-offset-base-100 lg:h-72 lg:w-72">
              <img src={IMAGES.Avatar} alt="Profile Image" />
            </div>
          </div>
          <div>
            <h1>About Me</h1>
            <p className="text-justify">
              Hey fellow tech enthusiasts! I'm here, with a burning passion that
              has been nurtured in the evolving world of technology. For me
              coding is like an art form where every line of code represents my
              strokes and each challenge presents an opportunity to grow.
              Recently graduated with a degree in computer science I thrive at
              the intersection of imagination and execution. Whether its
              crafting algorithms or creating user interfaces I find joy in the
              craftsmanship of coding. My journey far is a testament to my
              curiosity and my ultimate goal is to shape the future by
              wholeheartedly embracing everything tech related. So welcome, to
              my portfolio, a space where ideas come alive through the magic of
              programming!
            </p>
            <Link to="/about" className="btn btn-primary btn-outline w-36">
              More Details
            </Link>
          </div>
        </div>
        <hr />
      </article>
    </>
  );
};

export default Landing;
