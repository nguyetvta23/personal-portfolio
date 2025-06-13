import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/contact-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const About = () => {
    return (
        <section className="banner" id="about">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>About me</h1>
                                    <p className="about-me">
                                        Hi! I'm Vo Thi Anh Nguyet, a passionate and creative web designer who graduated from FPT Polytechnic HCM, majoring in Web Design.                                       
                                        <br/>
                                        During my studies, I gained hands-on experience in building user-friendly and responsive websites using HTML, CSS, JavaScript, and modern frameworks.
                                        <br/>
                                        I'm now looking for opportunities to join a dynamic team where I can contribute my skills, continue learning, and grow into a full-stack web developer in the future.
                                        <br/>
                                        If you're looking for a dedicated and fast-learning web designer — <br/>
                                        <strong>I'm ready to be hired!</strong>
                                    </p>
                                    <a className="hire-me" href= "mailto:nguyetvta23@gmail.com">
                                    <button >Hire me</button></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;