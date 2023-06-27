import ReactDOM from 'react-dom/client';
import { NavBarContact } from "../components/NavBarContact";
import { Footer } from "../components/Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import imgLinkedin from '../assets/icon/linkedin.svg';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const domNode = document.getElementById('mailForm');
    const root = ReactDOM.createRoot(domNode);
    const formData = new FormData(form.current);
    const emailData = Object.fromEntries(formData.entries());
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, emailData, process.env.REACT_APP_PUBLIC_API).then((result) => {
      console.log(result.text);
      root.render(
        <div>
          <img src='https://i.giphy.com/media/3oz8xDLuiN1GcDA3xC/giphy.webp' alt='Gif of Success'></img>
          <p>Votre message à bien été envoyé !</p>
        </div>
      );
    }, (error) => {
      console.log(error.text);
      alert('Not good, something wrong');
    });
  }
  return (
    <div className="App">
      <NavBarContact />
      <section className="contact" id="contact">
        <Container>
          <Row>
            <Col>
              <div className="contact-box">
                <Container>
                  <Row>
                    <Col>
                      <h2>Me contacter via Linkedin</h2>
                      <a href="https://www.linkedin.com/in/linty/" target="_blank" rel="noreferrer"><img src={imgLinkedin} alt="Linkedin Logo"></img></a>
                    </Col>
                    <Col>
                      <h2>Me contacter par mail</h2>
                      <Form ref={form} onSubmit={sendEmail} id='mailForm'>
                        <Form.Group className="mb-3" controlId="formEmail">
                          <Form.Label className="contact-form-text">Adresse e-mail *</Form.Label>
                          <Form.Control type="email" name="email_form" placeholder="Entrez votre adresse" required />
                          <Form.Text className="text-muted">
                            Je ne partagerais jamais votre e-mail avec quelqu'un d'autre.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formObject">
                          <Form.Label className="contact-form-text">Objet *</Form.Label>
                          <Form.Control type="text" name="subject_form" placeholder="Entrez l'objet du mail" required />
                          <Form.Control.Feedback type="invalid">
                            Please choose a username.
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                          <Form.Label className="contact-form-text">Message *</Form.Label>
                          <Form.Control as="textarea" name="message_form" rows={15} placeholder="Entrez votre message" required />
                          <Form.Text className="text-muted">
                            * Tous ces champs sont obligatoire.
                          </Form.Text>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                          Envoyer
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  )
}