import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ['Bonjour', 'Hello', 'Buen día', 'Idib\'ă boâm ē' , 'Bom dia', '안녕하세요'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">En alternance "Concepteur Développeur d'Applications" chez Piwigo</span>
                        <h1><span className="wrap">{text + ','}</span></h1>
                        <h1>{`I'm a web developer`}</h1>
                        <p>
                        Plongez dans un monde où la technologie rencontre la créativité, où chaque ligne de code raconte une histoire, 
                        et chaque projet reflète ma passion pour l'innovation et la résolution de problèmes. Découvrez mon histoire, explorez mes réalisations, 
                        et voyez comment je transforme les défis en opportunités. Bienvenue dans mon univers – là où le développement web prend vie.
                        </p>
                        <button onClick={() => window.location.href='/contact'}>Let's talk <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}