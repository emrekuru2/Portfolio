import { Fragment, ReactNode } from "react"

type ProjectProps = {
    img: string
    links: { url: string; name: string }[]
    tools: string[]
    title: string
    children: ReactNode
    opposite?: boolean
}

const Project = (props: ProjectProps) => {
    const textDirection = props.opposite ? "lg:text-left" : "lg:text-right"
    const flexDirection = props.opposite ? "lg:flex-row-reverse" : "lg:flex-row"
    const itemDirection = props.opposite ? "lg:items-start" : "lg:items-end"

    return (
        <div
            className={`flex w-full flex-col items-center gap-4 ${flexDirection}`}
        >
            <div className="card w-full bg-gradient-radial from-primary/25 from-20% to-base-300 to-75% shadow-xl lg:h-96">
                <div className="flex h-full items-center">
                    <img
                        src={props.img}
                        className="h-24 w-full object-contain lg:h-64"
                        alt="Project Image"
                    />
                </div>
            </div>
            <div className={`w-full grow ${textDirection}`}>
                <h2 className="text-accent">{props.title}</h2>
                <hr className="!mb-4" />
                <div
                    className={`flex flex-col items-center gap-5 ${itemDirection}`}
                >
                    <div className="flex">
                        {props.links.map((link, index) => (
                            <Fragment key={`link_${index}`}>
                                <a href={link.url}>{link.name}</a>
                                {index !== props.links.length - 1 && (
                                    <div className="divider divider-horizontal"></div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        {props.tools.map((tool, index) => (
                            <div
                                key={`badge_${index}`}
                                className="badge badge-primary badge-lg p-4 text-xs lg:text-base"
                            >
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Project
