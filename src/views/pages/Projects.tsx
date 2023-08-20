import { LocalAssets } from "../../assets";
import { Project, Reveal } from "../../components";

export const Projects = () => {
  return (
    <div className="prose mx-auto my-8 w-full text-center md:prose-lg lg:prose-xl lg:min-w-[75%]">
      <h1>Featured Projects</h1>
      <hr />
      <section className="flex flex-col items-center gap-8 px-4 lg:px-36">
        <Reveal axis="x" delay={0.75}>
          <Project
            img={LocalAssets.Images.ClusterJS}
            links={[{ url: "https://example.com", name: "Website" }]}
            tools={["React", "Node.js"]}
            title="Cluster_JS"
          >
            <p>This is the project description.</p>
          </Project>
        </Reveal>
        <Reveal axis="x" delay={0.75} changeDirection>
          <Project
            img={LocalAssets.Images.ClusterJS}
            links={[{ url: "https://example.com", name: "Website" }]}
            tools={["React", "Node.js"]}
            title="Cluster_JS"
            opposite
          >
            <p>This is the project description.</p>
          </Project>
        </Reveal>
        <Reveal axis="x" delay={0.5}>
          <Project
            img={LocalAssets.Images.ClusterJS}
            links={[{ url: "https://example.com", name: "Website" }]}
            tools={["React", "Node.js"]}
            title="Cluster_JS"
          >
            <p>This is the project description.</p>
          </Project>
        </Reveal>
      </section>
      <hr />
    </div>
  );
};
