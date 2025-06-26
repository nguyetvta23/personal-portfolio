import { Container, Row, Col } from "react-bootstrap";
import  MailchimpForm from "./MailchimpForm";
import logo from "../assets/images/logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/email-icon.svg";
import navIcon3 from "../assets/images/nav-git.svg";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon" /></a>
                            <a href= "mailto:nguyetvta23@gmail.com"><img src={navIcon2} alt="Icon" /></a>
                            <a href={'https://github.com/nguyetvta23'}><img alt='#' src={navIcon3}/></a>
                            </div>
                        <p>Copyright {currentYear}. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;