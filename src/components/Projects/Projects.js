import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <p style={{color: "white", fontSize: 50}}>My core is Backend, so i don't have a demo. SAD</p>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
