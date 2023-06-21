import { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import phpImg from '../assets/img/php.png';
import htmlCssImg from '../assets/img/htmlcss.png';
import jsImg from '../assets/img/js.png';
import reactJsImg from '../assets/img/react.png';
import flutterImg from '../assets/img/flutter.png';
import photoshopImg from '../assets/img/photoshop.png';

export const Skills = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const [modalInfos, setModalInfos] = useState([
        {
            id: "1",
            title: "PHP",
            description: "Assets for this portfolio",
            imgUrl: phpImg,
        }
    ]);

    function changeModal(id) {
        setShow(true);
        const newModal = skillsList.filter((skill) => skill.id === id);
        setModalInfos(newModal);
        
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const skillsList = [
        {
            id: "1",
            title: "PHP",
            description: "Le second langage que j'ai appris. J'avais besoin de faire un site e-commerce dynamique. Je me suis donc penché sur PHP pour notamment gérer des données, des utilisateurs, des produits, des réservations. En passant par des requêtes sécurisées etc..",
            imgUrl: phpImg,
        },
        {
            id: "2",
            title: "Html / Css",
            description: "La base, même si ce n'est pas mon language préféré, il est utilisé dans tous mes projets. Pour me facilité la tache, j'utilise généralement Bootstrap.",
            imgUrl: htmlCssImg,
        },
        {
            id: "3",
            title: "Vanilla Javascript",
            description: "Un des mes préférés. Javascript. J'ai beaucoup aimé la puissance du langage côté client. J'ai d'abord gouté à Js parce que j'avais besoin d'une librairie Js me permetant de crop des images à l'upload. J'ai très vite compris que c'était indispensable d'en apprendre plus. J'en ai ensuite eu besoin pour un 'live search' et manipuler plus facilement le DOM.",
            imgUrl: jsImg,
        },
        {
            id: "4",
            title: "React.js",
            description: "INCROYABLE. Suite à mon admission à l'école, je me devais d'avoir les bases sur ReactJs. Je suis aussi à la recherche d'une alternance. Bingo, nouveau projet: 'Developper mon portfolio avec ReactJS'. Et là c'est incroyable, je redécouvre un univers incroyable que j'affectionne particulièrement. Le projet complêt est disponible sur GitHub.",
            imgUrl: reactJsImg,
        },
        {
            id: "5",
            title: "Flutter (Dart)",
            description: "MON COUP DE COEUR, j'avais besoin de créer une application mobile pour que je puisse gérer depuis mon téléphone mon site e-commerce. J'ai commencé par chercher, chercher et chercher puis je suis tombé sur Flutter. Un framework me permettant de développer une application mobile sur les deux OS: android et ios. Le top, j'aime vraiment le développement mobile et j'ai commencé à apprendre et développer. Je vous invite à voir à quoi ressemble cette application dans mes projets.",
            imgUrl: flutterImg,
        },
        {
            id: "6",
            title: "Photoshop",
            description: "Une âme d'artiste? J'utilisais déjà photoshop de base, j'aime toujours apprendre dessus. J'aime créer, modifier mes assets. Par exemple, le fond de la bannière + le footer sont fait maison.",
            imgUrl: photoshopImg,
        },
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>J'ai pu acquérir quelques compétences tout en autodidacte, grâce à internet. Nous en avons pas tout le temps conscience mais nous avons accès à tellement de ressources. Que ça soit sur,
                                Youtube, Stack OverFlow, Github ou encore Open AI.. Des idées pleines la tête, un ordinateur, une connexion internet et j'ai appris..
                                Pour réaliser mes projets j'ai utilisé plusieurs langages que vous pouvez voir ci-dessous:
                                <br /><i>(Cliquez dessus pour découvrir comment et pourquoi ai-je utilisé ces langages/framework)</i>
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    skillsList.map((skill, index) => {
                                        return (
                                            <div className="item" key={skill.id} onClick={() => { changeModal(skill.id) }}>
                                                <img src={skill.imgUrl} alt={skill.title + 'Logo'} />
                                                <h5>{skill.title}</h5>
                                            </div>
                                            
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title><img src={modalInfos.map(e => e.imgUrl)} alt={modalInfos.map(e => e.title) + 'Logo'}></img> {modalInfos.map(e => e.title)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalInfos.map(e => e.description)}</Modal.Body>
            </Modal>
        </section>
    )
}