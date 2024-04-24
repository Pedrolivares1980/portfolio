import projectOne from "../../assets/project-1.png";
import projectTwo from "../../assets/project-2.png";
import projectThree from "../../assets/project-3.png";
import projectFour from "../../assets/project-4.png";

const projects = {
  1: {
    title: "Heroes del Silencio",
    image: projectOne,
    description: (
      <>
        <p>
          Web page dedicated to the Spanish rock band Heroes del Silencio as part of the HTML and CSS module of the Fullstack Software Developer diploma.
        </p>
      </>
    ),
    github: "https://github.com/Pedrolivares1980/heroes-del-silencio",
		demo: "https://hdsproject.netlify.app/",
  },
	2: {
    title: "Discover Spain",
    image: projectTwo,
    description: (
      <>
        <p>
          Website developed in HTML, CSS and JavaScript about Spain, places and information of interest. Developed as part of the JavaScript module for the Fullstack Software Developer Diploma.
        </p>
      </>
    ),
    github: "https://github.com/Pedrolivares1980/JavaScript-Assesmet",
		demo: "https://spanishturismpo.netlify.app/",
  },
	3: {
    title: "RecBook",
    image: projectThree,
    description: (
      <>
        <p>
          Blog to share recipes using HML, CSS, JavaScript and Flask as part of the Python module for the Fullstack Software Developer Diploma.
        </p>
      </>
    ),
    github: "https://github.com/Pedrolivares1980/recipe-blog",
		demo: "https://recbook.onrender.com/",
  },
  4: {
    title: "MovieTicket",
    image: projectFour,
    description: (
      <>
        <p>
          Cinema seat reservation project for the final module of the UCD Fullstact Developer Diploma, using Django, Postgresql, API externa, JavaScript, Bootstrap and HTML.
        </p>
      </>
    ),
    github: "https://github.com/Pedrolivares1980/cinebook",
		demo: "https://cinebook.onrender.com/",
  },
};

export default projects;