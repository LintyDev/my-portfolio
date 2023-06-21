import ReactDOM from 'react-dom/client';
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import imgSof from "../assets/img/sof.png";
import img123 from "../assets/img/123potentiel.png";
import imgPort from "../assets/img/portfolio.png";
import imgSofMobile from "../assets/img/sofapp.png";
import imgOthersPhotoshop from "../assets/img/photoshopcrea.png";
import { ProjectView } from "./ProjectView";
import phpImg from '../assets/img/php.png';
import htmlCssImg from '../assets/img/htmlcss.png';
import jsImg from '../assets/img/js.png';
import reactJsImg from '../assets/img/react.png';
import flutterImg from '../assets/img/flutter.png';
import photoshopImg from '../assets/img/photoshop.png';

export const Projects = () => {
    const handleInfos = (title, fullDescription, imgUrl, imgLanguage, link) => {
        const domNode = document.getElementById('project');
        const root = ReactDOM.createRoot(domNode);
        root.render(<ProjectView title={title} description={fullDescription} mediaProject={imgUrl} imgLanguage={imgLanguage} root={root} link={link}/>);
    };
    
    const projectsWeb = [
        {
            title: "SneakersOnField",
            description: "Design & Développement",
            fullDescription: "SneakersOnField est un site d'e-commerce pour la revente de Sneakers en édition limité. C'est mon premier projet, je voulais aider un ami parce qu'il avait besoin de voir ses stocks depuis n'importe quels endroits. J'ai commencé par afficher son fichier excel sur une page web puis petit à petit SneakersOnfield est né. En cherchant des idées de design pour le site, j'ai fait la découverte de bootstrap. J'ai donc commencé à dev' le front-end du site en Html/Css. L'idée d'avoir un site dynamique avec des utilisateurs, une vraie base de donnée, des stocks, des réservations me plaisait, j'ai pris la décision d'apprendre PHP, gérer des requêtes sécurisées, les fonctions etc... Ensuite pour rendre le site plus agréable, des librairies Javascript ce sont ajoutées. Quelques animations, manipuler le DOM..",
            imgUrl: imgSof,
            color: 'black',
            link: 'https://snkrsonfield.com/',
            imgLanguage: [
                phpImg,
                htmlCssImg,
                jsImg,
            ],
        },
        {
            title: "123 potentiel",
            description: "Design & Développement",
            fullDescription: "Suite à mon premier projet, une personne est venue à ma rencontre pour faire un site vitrine. Coach de vie qui souhaitait se moderniser grâce à un site web. J'ai suivi la même démarche que mon premier projet. J'ai d'abord cherché des idées de design correspondant au métier de Coach. Pour ensuite dev' ma base en Html/Css et je suis vite passé par des éléments Javascript pour dynamiser le site, le rendre plus fluide. Rien de compliqué sur un site vitrine mais une très bonne expérience pour moi.",
            imgUrl: img123,
            color: 'black',
            link: 'https://123potentiel.fr/',
            imgLanguage: [
                htmlCssImg,
                jsImg,
            ],
        },
        {
            title: "Mon Portfolio",
            description: "Design & Développement",
            fullDescription: "Il y a peu, j'ai été admis dans une école pour effectuer un an de formation en alternance: “Développeur Web & Mobile (Js, ReactJs, NodeJs..) niveau bac+4”. Pour m'avancer un peu mais aussi montrer un minimum ma détermination j'ai décidé de créer un portfolio en apprenant React en même temps. Ce site à donc vu le jour, j'ai utilisé react et react-bootstap. ",
            imgUrl: imgPort,
            color: 'white',
            link: '/',
            imgLanguage: [
                reactJsImg,
                htmlCssImg,
            ],
        },
    ];
    const projectsMobile = [
        {
            title: "Mobile application SoF Dashboard",
            description: "Design & Développement",
            fullDescription: "MON COUP DE COEUR: Après avoir développé des sites web, je voulais voir autre chose. Sur SneakersOnField le site est déjà responsive mais je voulais pouvoir avoir une App de gestions. J'ai commencé par chercher comment créer une application et avec toutes les contraintes je suis vite tombé sur Flutter qui me permettait de développer sur les deux plateformes IOS & Android. J'ai jamais autant aimé découvrir un nouveau framework. J'ai tout de suite adoré le concept de flutter et j'y suis passé des heures et des heures à apprendre.",
            imgUrl: imgSofMobile,
            color: 'white',
            link: '#',
            imgLanguage: [
                flutterImg,
            ],
        },
    ];
    const projectsOthers = [
        {
            title: "Assets",
            description: "Assets pour le portfolio",
            fullDescription: "J'aime le principe d'être un couteau suisse et de pouvoir faire un peu tout ce que j'aime. Photoshop a été l'une des choses que j'ai aimé apprendre. Pour les assets de mes sites web, retoucher des images etc.. Les assets du portfolio sont fait maison.",
            imgUrl: imgOthersPhotoshop,
            color: 'white',
            link: '#',
            imgLanguage: [
                photoshopImg,
            ],
        },
    ];

    return (
        <div id="project">
            <section className="project">
                <Container>
                    <Col>
                        <h2>Projets</h2>
                        <p>C'est bien beau de parler mais pour appuyer mes propos, je vous propose de décrouvrir mes réels projets. Partir de rien, apprendre, chercher, apprendre encore et encore afin de réaliser un projet puis le voir grandir.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Développement Web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Développement mobile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Autres créations</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsWeb.map((project, index) => {
                                                return (
                                                    <ProjectsCard
                                                        key={index}
                                                        {...project}
                                                        onClickInfos={handleInfos}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {
                                        projectsMobile.map((project, index) => {
                                            return (
                                                <ProjectsCard
                                                    key={index}
                                                    {...project}
                                                    onClickInfos={handleInfos}
                                                />
                                            )
                                        })
                                    }
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    {
                                        projectsOthers.map((project, index) => {
                                            return (
                                                <ProjectsCard
                                                    key={index}
                                                    {...project}
                                                    onClickInfos={handleInfos}
                                                />
                                            )
                                        })
                                    }
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Container>
            </section>
        </div>
    )
}