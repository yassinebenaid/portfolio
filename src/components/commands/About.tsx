import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
  Link,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Yassine Benaid</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a software developer</HighlightAlt> based in Morocco.
        I have been in the software industry for at least 3 years.
        <br />
        I spend most of my time developing web servers, whether professionally
        or for fun, despite having experience in web design (front-end).
        <br />
        The back-end side takes most of my interest.
      </p>
      <p>
        Throughout my career, I have been dealing with a lot of tools,
        programming languages, and frameworks in various positions.
        <br />
        This includes working as a full-stack developer at a startup, where I
        was responsible for the maintenance of our web applications.
        <br />
        I worked as a DevOps engineer and system administrator at the same
        company for a while, then switched to another SaaS company,
        <br />
        where I was a backend engineer, which is still my current position.
      </p>
      <p>
        Besides my professional job, I'm part of many teams maintaining some of
        the most used and well-known <HighlightAlt>open-source</HighlightAlt>{" "}
        projects.
        <br />
        Including but not limited to:
      </p>

      <ul>
        <li>
          <Link target="_blank" href="https://github.com/urfave/cli">
            urfave/cli
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/avelino/awesome-go">
            avelino/awesome-go
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/yassinebenaid/godump">
            yassinebenaid/godump
          </Link>
        </li>
      </ul>
    </AboutWrapper>
  );
};

export default About;
