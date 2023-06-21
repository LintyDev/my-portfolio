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
                        <span className="tagline">Recherche alternance développeur web & mobile (Javascript / React.Js / Node.Js)</span>
                        <h1><span className="wrap">{text + ','}</span></h1>
                        <h1>{`I'm a future web developer`}</h1>
                        <p>Bienvenue dans mon univers. Je m'appelle <b>Willy</b> et en septembre j'intègre une école afin d'obtenir un diplôme niveau bac +4 dans le <b>developpement web & mobile (Js, React, Node), en alternance</b>.
                            C'est à ce moment précis que <b>j'ai besoin de vous</b>, besoin qu'on croit en mon projet. Que vous me donniez cette chance de pouvoir faire ce que j'ai toujours aimé dans ma vie.
                            Je parle d'apprendre sur de nouvelles technologies, écrire des lignes de codes, résoudres des problèmes, fouiller afin de trouver des solutions, essayer et rééssayer (try and retry). 
                            Je vous laisse découvrir mon Portfolio et surtout mon <b>histoire</b>.
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