import { ReactNode } from "react";

type ProjectProps = {
  img: string;
  links: { url: string; name: string }[];
  tools: string[];
  title: string;
  children: ReactNode;
  opposite?: boolean;
};

export const Project = (props: ProjectProps) => {
  const textDirection = props.opposite ? "lg:text-left" : "lg:text-right";
  const flexDirection = props.opposite ? "lg:flex-row-reverse" : "lg:flex-row";
  const itemDirection = props.opposite ? "items-left" : "items-right";

  return (
    <div className={`flex w-full flex-col ${flexDirection}`}>
      <div className="card bg-gradient-radial from-primary/25 from-20% to-base-300 to-75% shadow-xl lg:h-96">
        <div className="m-8 flex h-full items-center rounded">
          <img src={props.img} alt="Project Image" />
        </div>
      </div>
      <div className={`w-full grow text-center ${textDirection}`}>
        <h2 className="text-accent">{props.title}</h2>
        <hr />
        <div className={`flex flex-col items-center gap-5 lg:${itemDirection}`}>
          <div className="flex gap-4">
            {props.links.map((link) => (
              <a href={link.url} className="link-hover link">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {props.tools.map((tool) => (
              <div className="badge badge-primary badge-lg p-4">{tool}</div>
            ))}
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Project;
