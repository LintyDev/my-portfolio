import { Col } from 'react-bootstrap';

export const ProjectsCard = ({ title, description, fullDescription, imgUrl, imgLanguage, color, link, onClickInfos }) => {
    return (
            <Col sm={6} md={4}>
                <div className="proj-imgbx" onClick={() => onClickInfos(title, fullDescription, imgUrl, imgLanguage, link)}>
                    <img src={imgUrl} alt='projects preview'/>
                    <div className="proj-txtx">
                        <h4 style={{color: color}}>{title}</h4>
                        <span style={{color: color}}>{description}</span>
                    </div>
                </div>
            </Col>
    )
}