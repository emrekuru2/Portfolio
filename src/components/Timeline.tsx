import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { MdLocationPin } from "react-icons/md"
import { TIMELINE } from "../assets"

const Timeline = () => {
    return (
        <VerticalTimeline lineColor="hsl(var(--a))">
            {TIMELINE.map((event, index) => (
                <VerticalTimelineElement
                    key={`timeline_${index}`}
                    dateClassName="text-accent"
                    date={event.date}
                    iconClassName="bg-primary border-4 border-accent shadow-none"
                    textClassName="bg-base-300 shadow-xl text-left"
                    contentArrowStyle={{
                        borderRight: "15px solid hsl(var(--b3))",
                    }}
                    icon={<event.icon color={"hsl(var(--b3))"} />}
                >
                    <h5 className="flex items-center font-bold text-primary">
                        <MdLocationPin /> {event.location}
                    </h5>
                    <h3 className="!m-0 text-accent">{event.title}</h3>
                    <h5 className="text-primary">@ {event.company}</h5>
                    <hr className="!my-1" />
                    <ul>
                        {event.desc?.map((desc, index) => (
                            <li key={`desc_${index}`}>
                                <p>{desc}</p>
                            </li>
                        ))}
                    </ul>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline
