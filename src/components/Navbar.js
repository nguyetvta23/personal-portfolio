import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from 'react';
import logo from '../assets/images/logo.png';
// import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/email-icon.svg";
import navIcon3 from "../assets/images/nav-git.svg";

// import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(()=>{
        const onScroll  = () => {
            (window.screenY>50) ? seScrolled(true) : seScrolled(false);
        }
        window.addEventListener("scroll", onscroll);
    
        return ()=>window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 
     return (
        <Navbar expand="lg" className={scrolled ? "scrolled bg-primary" : "" }>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="#" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
            href="#home" onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  
            href="#skills" onClick={()=>onUpdateActiveLink('projects')}>Skills</Nav.Link>
            <Nav.Link className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  
            href="#about" onClick={()=>onUpdateActiveLink('about')}>About me</Nav.Link>
            <Nav.Link className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  
            href="#projects" onClick={()=>onUpdateActiveLink('skills')}>Projects</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <span className='navbar-text'>
            <div className="social-icon">
                {/* <a href='/'><img alt='#' src={navIcon1}/></a> */}
                <a href= "mailto:nguyetvta23@gmail.com"><img src={navIcon2} alt="Icon" /></a>
                <a href={'https://github.com/nguyetvta23'}><img alt='#' src={navIcon3}/></a>
            </div>
        </span>
      </Container>
    </Navbar>
    )
}
export default NavBar;