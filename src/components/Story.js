import { Container, Row, Col } from "react-bootstrap"
import imgAvatar from '../assets/img/avatar.png';

export const Story = () => {
    return (
        <section className="my-story" id="my-story">
            <Container>
                <Row>
                    <Col>
                        <div className="story-box">
                            <h2>Mon Histoire</h2>
                            <img src={imgAvatar} alt="avatar"></img>
                            <p>Tout a commencé lorsque j'avais environ 11 ans. J'ai eu la chance de récupérer un ordinateur portable d'un membre de ma famille. J'allume l'ordinateur et là, 
                                je découvre Internet, les forums, les jeux vidéo en ligne, etc.  Pendant cette période, le jeu à la mode était Habbo, une sorte de réseau social pour les ados. 
                                Je me suis rapidement familiarisé avec les alternatives et les personnes qui faisaient la promotion de serveurs privés. 
                                Je suis tombé sur un forum et c'est là que j'ai vécu ce que j'appelle le Commencement.
                            </p>
                            <p>J'ai commencé par le PixelArt. J'ai installé Photoshop et j'ai appris à me servir du logiciel, puis je me suis mis à modifier des personnages pour des sites de FanArt, par exemple. 
                                Je créais des logos, des bannières et des signatures pour les membres du forum. Puis un jour, quelqu'un m'a demandé de créer des éléments graphiques pour son site web. 
                                Le fait de voir une personne comme moi capable de créer son propre site web m'a donné envie de faire de même.
                            </p>
                            <p>Je me suis rendu sur YouTube et j'ai cherché un tutoriel pour créer un site web. Je suis tombé sur deux vidéos
                                (<a href="https://www.youtube.com/watch?v=geLHdbTGuS4" target="_blank" rel="noreferrer">celle-ci</a> et <a href="https://www.youtube.com/watch?v=Djmi1WUELNo" target="_blank" rel="noreferrer">celle-là</a>) de Grafikart.fr. 
                                Je démarre la vidéo, et je me suis lancé dans la création de mon site. 
                                Et là, j'ai découvert une passion et j'en suis tombé amoureux. J'adore le développement, c'est clair, c'est ce que je veux faire de ma vie.
                            </p>
                            <p>Pendant la même période, j'ai rencontré un futur ami, un certain Thomas, qui partageait la même passion que moi. Nous avions plus ou moins les mêmes ambitions, 
                                alors nous avons commencé à créer des projets ensemble. Je m'occupais de la partie Front-end et lui du Back-end. Parfois, 
                                j'utilisais WebAccapela pour les designs des sites web. Nous avons réalisé plusieurs projets, tels que des serveurs privés Habbo, un hébergeur web appelé 'OneH', 
                                une plateforme de micropaiement nommée Oxopass (vous pouvez trouver des traces de ce projet <a href="https://www.facebook.com/oXopass/" target="_blank" rel="noreferrer">ici</a>), 
                                une WebRadio nommée 'NiteRadio' et d'autres petits projets.
                            </p>
                            <p>Puis un jour, le drame est arrivé, mon PC a rendu l'âme et mes parents n'avaient pas les moyens de m'en acheter un nouveau. Dans mon malheur, j'ai encore eu de la chance. 
                                Un de mes oncles, qui habitait chez nous, avait une Xbox 360 et il s'était engagé dans l'armée, donc j'ai pu récupérer la console. Je me suis donc plongé dans une grande période de jeu, 
                                je jouais à Call of Duty. Étant un compétiteur dans l'âme, je me suis retrouvé dans le monde de l'eSport. En quelques années, j'ai atteint un niveau plutôt gratifiant appelé le 'subtop fr',
                                 qui correspond au niveau juste en dessous des professionnels. Je participais à des compétitions sur tous les nouveaux Call of Duty, 
                                 jusqu'au jour où l'eSport Call of Duty est passé sur les consoles next-gen Xbox One et PS4. Mes parents n'avaient toujours pas les moyens de m'acheter une nouvelle console. 
                                 Mais cette fois-ci, une chose avait changé, j'avais environ 14-15 ans, c'est-à-dire l'âge de travailler.
                            </p>
                            <p>Mon père a acheté une maison en travaux et m'a proposé de travailler avec lui tout l'été. Je pouvais récupérer toutes les chutes de cuivre pour gagner de l'argent. 
                                J'ai entrepris de travailler tout l'été dans le but de m'acheter une console de jeu. J'ai travaillé dans notre nouvelle maison avec mon père, 
                                mais j'ai aussi aidé des personnes sur d'autres chantiers en portant des parpaings ou en préparant du ciment, et en échange, j'avais le droit de récupérer le cuivre. Les vacances ont passé, 
                                je voyais mes amis sortir pendant que je travaillais, mais lorsque j'ai échangé le cuivre et que j'ai vu tout l'argent que j'avais, j'étais heureux d'avoir enduré cela. 
                                Avec l'argent du cuivre en poche, je me suis rendu à Auchan avec mes parents pour acheter une console, mais en passant devant le rayon des ordinateurs, 
                                je me suis rendu compte que ce que je voulais, c'était coder et pas seulement jouer. Mes parents ont accepté de rajouter la différence pour que je puisse avoir un bon ordinateur.
                            </p>
                            <p>J'étais comblé, j'ai redécouvert les technologies et à quel point tout avait changé en peu de temps. Mon avenir se trouvait derrière un ordinateur et non pas une console ou un cahier, 
                                je le savais. Cependant, tout ne s'est pas passé comme prévu, c'était à moi de faire le choix de mes études, mais cela ne m'a pas été permis. 
                                Je me suis donc retrouvé à étudier l'électrotechnique. Mes parents voulaient que je passe le bac et que je commence à travailler, mais moi, je voulais plus que ça. 
                                J'ai donc passé mon bac et, contre leur volonté, j'ai continué mes études. J'ai obtenu un BTS en électrotechnique et une licence professionnelle en domotique. 
                                Nous sommes en 2020, j'ai alors 21 ans et je lance mon entreprise en tant qu'installateur d'alarmes, de vidéosurveillance et de domotique. Mais malheureusement, 
                                c'est le début de la pandémie de Covid-19, les gens sont tous chez eux et n'ont pas besoin d'alarmes. Je me suis rapidement retrouvé en intérim et j'ai postulé à la SNCF.
                            </p>
                            <p>À la SNCF, mon profil convenait bien et j'ai signé un CDI un mois après le premier entretien. Avant de commencer, 
                                je devais valider un diplôme interne dans une école interne pendant 6 mois à Marseille. Me voilà donc dans cette école, tout se passe bien, j'obtiens mon diplôme interne 
                                (le taux de réussite est assez faible, donc c'est gratifiant de l'avoir réussi). J'ai donc commencé à travailler à la SNCF. Très vite, je me suis rendu compte que ce n'était pas ce que je voulais, 
                                je ne me sentais pas moi-même, ce n'était pas moi. J'ai quand même continué pendant près d'un an et demi pour voir si avec le temps, j'allais m'y habituer.
                            </p>
                            <p>Sans surprise, cela n'a pas été le cas, je n'aimais pas ça, je voulais coder, je voulais développer. 
                                Je me suis renseigné sur les possibilités d'évolution et on m'a fait comprendre que cela ne serait possible que dans quelques années. J'ai donc décidé de prendre les choses en main, 
                                j'ai cherché des écoles et je suis tombé sur une qui proposait une formation d'un an en alternance avec un diplôme reconnu par l'État au niveau bac+4, mais avec un test d'admission. 
                                Fort de mon expérience en autodidacte, je pensais pouvoir réussir. Quelques jours après avoir passé le test, j'ai reçu un appel de l'école pour m'annoncer que j'avais été admis.
                            </p>
                            <p>Me voilà donc ici, cette fois-ci, c'est vous qui représentez ma chance, vous pouvez croire en moi et en mon projet. 
                                Je suis déterminé à réussir, cela ne dépend plus de ma motivation, mais de ma discipline. Mon objectif est de devenir ce que j'ai toujours voulu être. 
                                Cela commence par trouver une entreprise qui me permettra de le faire. Je pense toujours que la première entreprise qui prendra le temps de croire en moi, qui me tendra la main, 
                                ne sait pas encore la chance qu'elle aura.
                            </p>
                            <p>
                                UPDATE: La suite de l'histoire est entrain de s'écrire chez <a href="https://piwigo.com" target="_blank" rel="noreferrer">Piwigo</a>
                            </p>
                            <p>
                                Willy "Linty" D.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}