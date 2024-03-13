import React from "./svg/React.svg"
import Angular from "./svg/Angular.svg"
import Cpp from "./svg/Cpp.svg"
import Python from "./svg/Python.svg"
import Java from "./svg/Java.svg"
import MySQL from "./svg/MySQL.svg"
import PHP from "./svg/PHP.svg"
import TypeScript from "./svg/TypeScript.svg"
import Spring from "./svg/Spring.svg"
import Laravel from "./svg/Laravel.svg"
import Avatar from "./img/Avatar.jpg"
import ClusterJS from "./img/Cluster_JS.png"
import Next from "./svg/Next.svg"
import NSCA from "./img/NSCA.png"
import CourseHive from "./img/CourseHive.png"
import EMR from "./img/EMR.png"
import Efes from "./img/Efes.png"
import Bace from "./img/Bacecarpentry.jpg"
import Dashboard from "./img/Dashboard.jpeg"
import Flag_US from "./img/United_States.png"
import Flag_FR from "./img/France.png"
import Flag_TR from "./img/Turkey.png"
import AtaPainting from "./img/AtaPainting.webp"
import CleanLines from "./img/CleanLines.png"
import TSNS from "./img/tsns.png"
import { MdWork, MdSchool } from "react-icons/md"
import ResumeFile from "./Resume.pdf"

export const ICONS = {
    React,
    Angular,
    Python,
    Cpp,
    Java,
    MySQL,
    PHP,
    TypeScript,
    Spring,
    Next,
    Laravel,
}

export const IMAGES = {
    Avatar,
    ClusterJS,
    NSCA,
    EMR,
    Efes,
    Dashboard,
    CourseHive,
    Bace,
    AtaPainting,
    TSNS,
    CleanLines,
}

export const Resume = ResumeFile

export const SKILLS = [
    { img: Java, name: "Java 8+", level: "Beginner", years: 3 },
    { img: TypeScript, name: "TypeScript", level: "Intermediate", years: 3 },
    { img: Python, name: "Python", level: "Beginner", years: 2 },
    { img: Cpp, name: "C++", level: "Beginner", years: 2 },
    { img: PHP, name: "PHP", level: "Intermediate", years: 3 },
    { img: MySQL, name: "MySQL", level: "Intermediate", years: 3 },
]

export const TOOLS = [
    { img: Angular, name: "Angular", level: "Intermediate", years: 3 },
    { img: React, name: "React.js", level: "Intermediate", years: 3 },
    { img: Spring, name: "SpringBoot", level: "Beginner", years: 1 },
    { img: Laravel, name: "Laravel", level: "Intermediate", years: 2 },
    { img: Next, name: "Next.js", level: "Beginner", years: 1 },
]

export const LANGS = [
    { name: "English", flag: Flag_US, level: "Native" },
    { name: "French", flag: Flag_FR, level: "Intermediate" },
    { name: "Turkish", flag: Flag_TR, level: "Native" },
]

export const TIMELINE = [
    {
        date: "September 2019 - September 2023 ",
        title: "Bachelor's of Applied Computer Science",
        company: "Dalhousie University",
        location: "Halifax, CA",
        icon: MdSchool,
    },
    {
        date: "October 2023 - Present",
        title: "Full-Stack Developer",
        company: "Freelancer",
        location: "Halifax, CA",
        icon: MdWork,
        desc: [
            "Worked with 6+ business clients and engaged in 1-on-1 product meetings while providing efficient problem solving skills and ensuring a clear understanding of the clients vision and goals.",
            "Developed full-stack web applications using PHP and JavaScript, leveraging popular frameworks such as Laravel andNext.js. Implemented API routes for authentication to ensure secure user interactions and streamline data managementprocesses.",
            "Deployed the code base on PaaS such as Vercel and Google Cloud while adhering to prevalent SEO optimization practices and robust security measures, resulting in achieving online presence quicker",
            "Consistently reached success in effectively managing time and workloads for all MVPs ahead of deadlines with the help ofAtlassian tool kit, and documented technical specifications and tutorials for the final products.",
        ],
    },
    {
        date: "March 2021 - June 2021",
        title: "Software Engineer Co-op",
        company: "Sayisal Donusum Tech",
        location: "Remote",
        icon: MdWork,
        desc: [
            "Helped designing and implementing web applications in a team of 3 using JavaScript libraries such as React.js for front-end development and Redux for global application state management.",
            "Used Cloud Firestore and the Firebase Authentication APIs to manage client data, reducing the backend implementationtime for the entire project more than 50%.",
            "Performed sprint reviews and code analysis with the project director and developers.",
        ],
    },
    {
        date: "June 2019 - August 2019",
        title: "Software Engineer Co-op",
        company: "Planet Programming",
        location: "Izmir, TR",
        icon: MdWork,
        desc: [
            "Contributed developing custom ES6 JavaScript snippets for reuse by the developer team throughout the project,eliminating frequent code repetition and reducing time.",
            "Assisted the project team with the documentation process and engaged in pair programming.",
            "Collaborated with an agile team and used Kanban to prioritize requirements.",
        ],
    },
    {
        date: "September 2016 - September 2019",
        title: "High School Diploma",
        company: "Bishop's College School",
        location: "Sherbrooke, CA",
        icon: MdSchool,
    },
]
