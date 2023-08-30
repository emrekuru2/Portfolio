import React from "./svg/React.svg";
import Angular from "./svg/Angular.svg";
import Cpp from "./svg/Cpp.svg";
import Python from "./svg/Python.svg";
import Java from "./svg/Java.svg";
import MySQL from "./svg/MySQL.svg";
import PHP from "./svg/PHP.svg";
import TypeScript from "./svg/TypeScript.svg";
import Avatar from "./img/Avatar.jpg";
import ClusterJS from "./img/Cluster_JS.png";
import NSCA from "./img/NSCA.png";
import EMR from "./img/EMR.png";
import Efes from "./img/Efes.png";
import Dashboard from "./img/Dashboard.jpeg";
import { MdWork, MdSchool } from "react-icons/md";
import ResumeFile from "./Resume.pdf";

export const ICONS = {
  React,
  Angular,
  Python,
  Cpp,
  Java,
  MySQL,
  PHP,
  TypeScript,
};
export const IMAGES = { Avatar, ClusterJS, NSCA, EMR, Efes, Dashboard };
export const Resume = ResumeFile;

export const SKILLS = [
  { img: Java, name: "Java 8+", level: "Beginner", years: 2 },
  { img: React, name: "React.js", level: "Intermediate", years: 3 },
  { img: TypeScript, name: "TypeScript", level: "Intermediate", years: 3 },
  { img: Python, name: "Python", level: "Beginner", years: 2 },
  { img: Cpp, name: "C++", level: "Beginner", years: 1 },
  { img: PHP, name: "PHP", level: "Intermediate", years: 3 },
  { img: MySQL, name: "MySQL", level: "Intermediate", years: 3 },
  { img: Angular, name: "Angular", level: "Beginner", years: 1 },
];

export const TIMELINE = [
  {
    date: "September 2019 - August 2023 ",
    title: "Bachelor's of Computer Science",
    company: "Dalhousie University",
    location: "Halifax, CA",
    icon: MdSchool,
  },
  {
    date: "October 2022 - December 2022",
    title: "Full-Stack Web Developer",
    company: "Freelancer",
    location: "Halifax, CA",
    icon: MdWork,
    desc: [
      "Engaged in direct and effective client communication, ensuring a clear understanding of their requirements and objectives.",
      "Managed to create and deploy a website using Wordpress and custom PHP code as well as configured a fully functional online ordering system for a restauran.",
      "Developed and deployed a custom website for a yatch business using the Bootsrap framework and Laravel Framework which overally increased the business online presence.",
      "Kept a well organized product backlog and performed acceptance testing on behalf of the clients.",
    ],
  },
  {
    date: "June 2022 - September 2022",
    title: "Digital Inventory Manager",
    company: "Dexel Development",
    location: "Halifax, CA",
    icon: MdWork,
    desc: [
      "Utilized AutoCAD software to interpret and understand architectural plans while fostering seamless communication and collaboration with design and engineering teams.",
      "Skillfully managed and organized construction material data using Excel and VBA which helped enhancing data clarity and optimizing project processes.",
    ],
  },
  {
    date: "March 2021 - June 2021",
    title: "Software Developer Co-op",
    company: "Sayisal Donusum Tech",
    location: "Izmir, TR",
    icon: MdWork,
    desc: [
      "Designed, built, and maintained a student management web application by using JavaScript libraries such as React.JS for front-end development and Redux for global application state management.",
      "Used Google Firebase's Firestore database platform which helped to easily implement and organize application data.",
      "Performed a project closing presentation and code analysis for the project director and developers.",
    ],
  },
  {
    date: "June 2019 - August 2019",
    title: "Software Developer Co-op",
    company: "Planet Programming",
    location: "Izmir, TR",
    icon: MdWork,
    desc: [
      "Developed HTML and JavaScript code snippets for the developer team's reuse throughout the project.",
      "Helped documentation and performed pair programming",
    ],
  },
  {
    date: "September 2016 - September 2019",
    title: "High School Diploma",
    company: "Bishop's College School",
    location: "Sherbrooke, CA",
    icon: MdSchool,
  },
];
