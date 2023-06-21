import { Col, Container, Row } from "react-bootstrap";
import backIcon from '../assets/icon/angle-left.svg';
import { Projects } from "./Projects";

export const ProjectView = ({title, description, mediaProject, imgLanguage, root, link}) => {
    const handleRefresh = () => {
        root.render(<Projects />);
    };
    return (
        <section className="project" id="project2">
            <Container id="projectChange">
            <Col className="projectview">
            <div className="goback" onClick={handleRefresh}><img className="projectview-back" src={backIcon} alt={"Back to Projects" + title}></img> Retour</div>
            <h2>{title}</h2>
            <p>{description}</p>
            {
                link !== '#' ? 
                <div className="link">
                <p><i>(Cliquez sur l'image pour voir le site)</i></p> 
                <a href={link} target="_blank" rel="noreferrer"><img className="mediaProject" src={mediaProject} alt={"Img project" + title}></img></a>
                </div>
                : 
                <img className="mediaProject" src={mediaProject} alt={"Img project" + title}></img>
            }
            <p>Ressource(s) utilisée(s) :</p> 
            <Row className="item">
                {
                    imgLanguage.map((language, index) => {
                        return (
                            <img className="item-language" src={language} key={index} alt={index}></img>
                        )
                    })
                }
            </Row>
        </Col>
            </Container>
        </section>
    )
}