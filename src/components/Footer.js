import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/lintydev.png';
import logoLinkedin from '../assets/icon/linkedin.svg';
import logoGithub from '../assets/icon/github.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo linty.dev" />
                    </Col>
                    <Col sm={6}>
                        <div className=" social-icon text-center text-sm-end">
                            <a href="https://github.com/LintyDev/" target="_blank" rel="noreferrer"><img src={logoGithub} alt="Github Logo" /></a>
                            <a href="https://www.linkedin.com/in/linty/" target="_blank" rel="noreferrer"><img src={logoLinkedin} alt="Linkedin Logo" /></a>
                        </div>
                        <p>© Copyright 2023. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}