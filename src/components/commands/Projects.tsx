import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  Seperator,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { Link } from "../styles/About.styled";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects", [1, 2, 3, 4, 5])) {
      mine.concat(others).forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {mine.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>
            {id}.{" "}
            <Link href={url} target="_blank">
              {title}
            </Link>
          </ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Seperator>----</Seperator>

      <ProjectsIntro>
        Additionally, I'm part of the official teams maintaining these well
        known projects:
      </ProjectsIntro>
      {others.map(({ id, title, desc, url }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>
            {id}.{" "}
            <Link href={url} target="_blank">
              {title}
            </Link>
          </ProjectTitle>{" "}
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Seperator>----</Seperator>

      <Usage cmd="projects" marginY />
    </div>
  );
};

const mine = [
  {
    id: 1,
    title: "godump",
    desc: "An open-source Go package to pretty-print variables into a human readable format. (usually used for tests logs).",
    url: "https://github.com/yassinebenaid/godump",
  },
  {
    id: 2,
    title: "dotenv",
    desc: "An open-source Go package to read environment files.",
    url: "https://github.com/yassinebenaid/dotenv",
  },
  {
    id: 3,
    title: "nishimia",
    desc: "An open-source interpreted dynamically typed programming language.",
    url: "https://github.com/yassinebenaid/nishimia",
  },
];

const others = [
  {
    id: 4,
    title: "avelino/awesome-go",
    desc: "A curated list of awesome Go frameworks, libraries and software.",
    url: "https://github.com/avelino/awesome-go",
  },
  {
    id: 5,
    title: "urfave/cli",
    desc: "A simple, fast, and fun package for building command line apps in Go.",
    url: "https://github.com/urfave/cli",
  },
];
export default Projects;
