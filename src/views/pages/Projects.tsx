import { IMAGES } from "../../assets";
import { Project, Reveal } from "../../components";

export const Projects = () => {
  return (
    <div className="prose mx-auto my-8 w-full text-center md:prose-lg lg:prose-xl lg:min-w-[75%]">
      <h1>Featured Projects</h1>
      <hr />
      <section className="flex flex-col items-center gap-20 overflow-x-hidden px-4 lg:px-28">
        <Reveal axis="x" delay={0.75}>
          <Project
            img={IMAGES.ClusterJS}
            links={[
              {
                url: "https://kuru-emre.github.io/Cluster_JS",
                name: "Website",
              },
              {
                url: "https://github.com/kuru-emre/Cluster_JS",
                name: "Github",
              },
            ]}
            tools={["Typescript", "React", "Material UI"]}
            title="Cluster_JS"
          >
            <p>
              This project is created for visualizing clusters within data. It
              is versatile, capable of visualizing clusters with color-coding in
              datasets and extracting common palettes from images.
            </p>
          </Project>
        </Reveal>
        <Reveal axis="x" delay={0.75} changeDirection>
          <Project
            img={IMAGES.NSCA}
            links={[
              {
                url: "https://test.cricketnovascotia.ca",
                name: "Website",
              },
              {
                url: "https://github.com/kuru-emre/NSCA",
                name: "Github",
              },
            ]}
            tools={["PHP", "CodeIgniter 4", "Bootstrap"]}
            title="Nova Scotia Cricket Association"
            opposite
          >
            <p>
              This project has been meticulously reimagined and migrated from
              vanilla PHP to CodeIgniter 4. It boasts a comprehensive admin
              panel with all the features necessary to manage and edit
              application data and user profiles.
            </p>
          </Project>
        </Reveal>
        <Reveal axis="x" delay={0.5}>
          <Project
            img={IMAGES.EMR}
            links={[
              { url: "https://emrlogistic.com/", name: "Website" },
              {
                url: "https://github.com/kuru-emre/EMR_Logistics",
                name: "Github",
              },
            ]}
            tools={["PHP", "Laravel", "Bootstrap"]}
            title="EMR Logistic"
          >
            <p>
              A website designed and implemented for EMR Logistic company. Its
              simple yet elegant design easily guides users to major points and
              features a full gallery with the ability to send direct messages
              to the company.
            </p>
          </Project>
        </Reveal>
        <Reveal axis="x" delay={0.5} changeDirection>
          <Project
            img={IMAGES.Efes}
            links={[
              { url: "https://efesturkish.com/", name: "Website" },
              {
                url: "https://github.com/kuru-emre/Efes_Turkish",
                name: "Github",
              },
            ]}
            tools={["PHP", "Wordpress"]}
            title="Efes Turkish Cuisine"
            opposite
          >
            <p>
              A WordPress website implemented to showcase all available menu
              items, as well as to provide the capability for customers to book
              and order food online.
            </p>
          </Project>
        </Reveal>
        <Reveal axis="x" delay={0.5}>
          <Project
            img={IMAGES.Dashboard}
            links={[
              {
                url: "https://react-a0b29.web.app/",
                name: "Website",
              },
              {
                url: "https://github.com/kuru-emre/Student_Dashboard",
                name: "Github",
              },
            ]}
            tools={["JavaScript", "React", "Firebase"]}
            title="Student Dashboard"
          >
            <p>
              This project was crafted with students in mind, offering a dynamic
              platform for them to track assignments and control their class
              enrollments. Firebase, and its secure authentication capabilities,
              were harnessed to enchantingly usher students into this portal.
            </p>
          </Project>
        </Reveal>
      </section>
      <hr />
    </div>
  );
};
