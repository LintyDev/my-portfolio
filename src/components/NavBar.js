import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/lintydev.png';
import iconLinkedin from '../assets/icon/linkedin.svg';
import iconGithub from '../assets/icon/github.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toogler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="/#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="/#project"className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projets</Nav.Link>
                        <Nav.Link href="/#my-story"className={activeLink === 'my-story' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('my-story')}>Mon Histoire</Nav.Link>
                    </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://github.com/LintyDev/" target="_blank" rel="noreferrer"><img src={iconGithub} alt="" /></a>
                        <a href="https://www.linkedin.com/in/linty/" target="_blank" rel="noreferrer"><img src={iconLinkedin} alt="" /></a>
                    </div>
                    <button className="vvd"  onClick={() => window.location.href='contact'}><span>Let's talk</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}