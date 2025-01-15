import { SkillsIcon as skills } from "./skillsIcons";

export const links = {
  github: "https://github.com/Priyanshu879",
  linkedin: "https://www.linkedin.com/in/priyanshu-9a6566291/",
  hackerrank: "https://www.hackerrank.com/profile/rs405384",
  leetcode: "https://leetcode.com/u/comder_23/",
  gmail: "mailto:priyanshu141002@hotmail.com",
};

export const projects = [
  {
    name: "Time Table Generator",
    description:
      "A web application developed using HTML, CSS, JavaScript (front end), and PHP (back end) to automate timetable generation. Designed to efficiently allocate resources for up to 50 entities, resolving scheduling conflicts and optimizing management. Integrated dynamic updates, reducing manual adjustments by 90% while maintaining real-time accuracy for schedules.",
    skills: [
      skills.html,
      skills.bootstrap,
      skills.css,
      skills.javascript,
      skills.php,
    ],
    link: "https://github.com/Priyanshu879/Time-Table-Generator",
    livelink: "",
  },
  {
    name: "Spotify Clone",
    description:
      "This project is a clone of the popular music streaming service, Spotify. It is built using only HTML and CSS to demonstrate the frontend design and layout. This clone aims to mimic the look and feel of the Spotify web application.",
    skills: [skills.html, skills.css, skills.javascript],
    link: "https://github.com/Priyanshu879/Spotify-Clone",
    livelink: "",
  },
  {
    name: "Wanderlust",
    description:
      "A full-stack web application built with Express.js and EJS, enabling seamless browsing of travel accommodations. Integrated MongoDB for database management. Features include: full CRUD functionality for property listings, dynamic UI updates, and RESTful APIs for smooth frontend-backend communication.",
    skills: [
      skills.html,
      skills.css,
      skills.javascript,
      skills.bootstrap,
      skills.nodejs,
      skills.expressjs,
      skills.restapi,
    ],
    link: "https://github.com/Priyanshu879/Wanderlust",
    livelink: "",
  },
];
