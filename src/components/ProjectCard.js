import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <img src={imgUrl} alt="#" />

        <a className="project_link" href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>        
      </div>
    </Col>
  )
}
export default ProjectCard