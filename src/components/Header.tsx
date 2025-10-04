import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
        <br />
      <h1 className="header-title">Jason Matthews</h1>
      <p className="header-text">
        I’m a software developer with a (genuine) love
         of backend architecture and scalable systems
      </p>
      <br/>
      <p className="header-text">
        I currently work as a Software Developer (co-op) at 
        <a href="https://www.colabsoftware.com"> CoLab Software</a>, where
        I am a backend developer dedicated to developing the supporting
        systems and architecture for our AI features and functionality
      </p>
      <br/>
      <p className="header-text">
        I am a Joint Honours student in Pure Mathematics and Computer Science 
        at Memorial University of Newfoundland. Here, I received the 
        <a href="https://schulichleaders.com/"> Schulich Leader Scholarship</a>, 
        the most prestigious STEM scholarship in the country. I have been funded
        as a Research Assistant for 16 months, where I have researched and developed
        a field-leading library for physics-informed neural networks
      </p>
      <br />
      <p className="header-text">
        I also am currently the Algorithms team lead at 
        <a href="https://munparadigm.com/"> Paradigm Engineering</a>,
        a student engineering team at MUN. Here, I lead the development of ROS2
        waypoint-finding algorithms, machine learning for vision integration, and the connecting
        architecture to develop an autonomous go-kart
      </p>
    </header>
  );
};

export default Header;