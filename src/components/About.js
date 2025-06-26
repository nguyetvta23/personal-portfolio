import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/avatar.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>About me</h1>
                                    <p className="about-me">
                                        Hi! I'm Vo Thi Anh Nguyet, a passionate and creative web designer who graduated from FPT Polytechnic HCM, majoring in Web Design.

                                        During my studies, I gained hands-on experience in building user-friendly and responsive websites using HTML, CSS, JavaScript, and modern frameworks.

                                        Currently, I'm pursuing a degree in Information Technology at UIT, where I am expanding my knowledge not only in web development but also in Artificial Intelligence — a field I'm eager to explore further.

                                        I'm now looking for opportunities to join a dynamic team where I can contribute my skills, continue learning, and grow into a full-stack web developer with a strong foundation in AI in the future.

                                        If you're looking for a dedicated, fast-learning web designer with a growth mindset — <strong>I'm ready!</strong>
                                    </p>
                                    <a className="hire-me" href="mailto:nguyetvta23@gmail.com">
                                        <button >Hire me</button></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;