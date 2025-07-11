import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/Navbar";
import  Banner from "./components/Banner";
import  Skills  from "./components/Skills";
import  Projects  from "./components/Projects";
import  About  from "./components/About";
import  Contact  from "./components/Contact";
import  Footer  from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <About/>
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;