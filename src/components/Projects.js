import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import proj1Img1 from "../assets/images/bukin.png";
import proj1Img2 from "../assets/images/bukin2.png";
import proj1Img3 from "../assets/images/bukin3.png";
import project2Img1 from "../assets/images/project2Img1.jpg"
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const project1 = [
        {
            title: "Rooms Booking App",
            description: " A mini booking application using NodeJS, NextJs, Appwrite and TailwindCSS",
            imgUrl: proj1Img1,
            link: 'https://bukin-app.vercel.app/',
        },
        {
            title: "",
            description: "You can view detail room and book room",
            imgUrl: proj1Img2,
            link: 'https://bukin-app.vercel.app/'
        },
        {
            title: "",
            description: "Register and manage your rooms, bookings",
            imgUrl: proj1Img3,
            link: 'https://bukin-app.vercel.app/'
        },
    ];
    const project2 = [
        {
            title: "E-commerce Website",
            description: "This is my graduation project, an online e-commerce platform for selling sneakers.",
            imgUrl: project2Img1,
            link: 'https://github.com/nguyetvta23/ECommerce_Laravel.git',
          },
          {
            title: "",
            description: "Users can browse products, view details, register an account, and place orders.",
            imgUrl: project2Img1,
            link: 'https://github.com/nguyetvta23/ECommerce_Laravel.git',
          },
          {
            title: "",
            description: "Built using PHP Laravel (back-end), JavaScript (front-end), and MySQL for database.",
            imgUrl: project2Img1,
            link: 'https://github.com/nguyetvta23/ECommerce_Laravel.git',
          }
          
    ];
    // const project3 = [
    //     {
    //         title: "Rooms Booking App",
    //         description: " A mini booking application using NodeJS, NextJs, Appwrite and TailwindCSS",
    //         imgUrl: proj1Img1,
    //         link: 'https://bukin-app.vercel.app/',
    //     },
    //     {
    //         title: "Sneaker Website",
    //         description: "My graduation project - E-commerce website using PHP Laravel framework in Back-end, Javasript in front-end and mySQL for database",
    //         imgUrl: proj1Img1,
    //         link: 'https://github.com/nguyetvta23/ECommerce_Laravel.git'
    //     },
    //     {
    //         title: "Business Startup",
    //         description: "Design & Development",
    //         imgUrl: proj1Img1,
    //     },
    // ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2 className="animate__animated animate__jello">Projects</h2>
                                    <p>
                                        Here are some of the projects I have worked on. Click on each image to view more.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Booking App</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Ecommerce Website</Nav.Link>
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                                <Nav.Link eventKey="third">My portfolio</Nav.Link>
                                            </Nav.Item> */}
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        project1.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        project2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            {/* <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        project3.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane> */}
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
export default Projects;