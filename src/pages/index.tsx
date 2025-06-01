import { useRef } from "react";
import IntroductionContainer from "../containers/IntroductionContainer";
import SocialsContainer from "../containers/SocialsContainer";
import EducationContainer from "../containers/EducationContainer";
import SkillsContainer from "../containers/SkillsContainer";
import JobsContainer from "../containers/JobsContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import AboutMeContainer from "../containers/AboutMeContainer";
import { Col, Row, Container } from "../components/ui";
import introduction from "../data/introduction.json";

const Home = () => {

  return (
    <Container>
      <Row style={rowMargin}>
        <Col style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: 300, lineHeight: 1.2 }}>{introduction.name}</h1>
        </Col>
      </Row>
      <Row style={rowMargin}>
        <Col style={{ textAlign: 'center' }}>
          <SocialsContainer />
        </Col>
      </Row>
      <a
        style={{}}
        href="javascript:window.print()"
      >
        Print
      </a>
      &nbsp;|&nbsp;
      <a
        style={{}}
        href="/files/amir-ahmady-cv.pdf"
      >
        Download pre-made PDF
      </a>
      <hr style={separatorStyle} />
      <Row style={rowMargin}>
        <Col>
          <IntroductionContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>Skills</h2>
        </Col>
      </Row>
      <Row style={rowMargin}>
        <Col>
          <SkillsContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>Professional Experiences</h2>
        </Col>
      </Row>
      <Row style={rowMargin}>
        <Col>
          <JobsContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>Side Projects</h2>
        </Col>
      </Row>
      <Row style={rowMargin}>
        <Col>
          <ProjectsContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>Education</h2>
        </Col>
      </Row>
      <Row style={rowMargin}>
        <Col>
          <EducationContainer />
        </Col>
      </Row>

      <Row style={rowMargin}>
        <Col>
          <h2>Personal</h2>
        </Col>
      </Row>
      <Row style={rowMargin}>
        <Col>
          <AboutMeContainer />
        </Col>
      </Row>

      <hr style={separatorStyle} />
      <Row style={rowMargin}>
        <Col style={{ textAlign: 'center' }}>
          <span style={{ display: "inline-block !important", marginRight: '1rem !important' }}>
            <a
              style={linkStyle}
              href="https://amii.ir/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              © Amyr (iAmir) Ahmady
            </a>
            &nbsp;|&nbsp;
            2025
            &nbsp;|&nbsp;
            <a
              style={linkStyle}
              href="https://github.com/AmyrAhmady/personal-website"
              rel="nofollow noreferrer"
              target="_blank"
            >
              View source code on Github
            </a>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

const separatorStyle: React.CSSProperties = {
  color: "black",
  backgroundColor: "black",
  height: "1px",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#3173bb",
  margin: "0px",
  padding: "0px",
};

const rowMargin: React.CSSProperties = {

}

export default Home;
