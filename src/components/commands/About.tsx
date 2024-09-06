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
        I'm <HighlightAlt>a software developer</HighlightAlt> based in Morocco. I have been in the software industrie for at least 3 years. 
        I spend most of my time developing web servers whether professionally or for fun. Desipite having experience in web design (front-end). 
        The back-end side takes most of my interest.
      </p>
      <p>
        Beside working as a <HighlightAlt>Full-Stack web developer</HighlightAlt> on a Saas company based in morocco. 
        I'm part of many teams maintaining some of the most used and well-known <HighlightAlt>Open-source</HighlightAlt> projects.
        Including but not limited to <Link href="https://github.com/urfave/cli">urfave/cli</Link>,
        <Link href="https://github.com/avelino/awesome-go">avelino/awesome-go</Link> and <Link href="https://github.com/yassinebenaid/godump">yassinebenaid/godump</Link>
      </p>
    </AboutWrapper>
  );
};

export default About;
