import React from "react";
import Header from "./components/Header";
import Globe from "./components/Globe";
import Section from "./components/Section";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Globe />

      <Section
        title="Experiences"
        items={[
          {
            id: 1,
            name: "Software Developer (co-op) - CoLab Software",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
          {
            id: 2, 
            name: "Research Assistant - Memorial University",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
          {
            id: 3, 
            name: "Algorithms Team Lead - Paradigm Engineering",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
        ]}
      />

      <Section
        title="Projects"
        items={[
          {
            id: 1,
            name: "PinnDE",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
          {
            id: 2,
            name: "React Playground",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
          {
            id: 3,
            name: "Seam Carving",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
          {
            id: 4,
            name: "GoCPU",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
          {
            id: 5,
            name: "Barret Tech 7R WAM",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
          {
            id: 6,
            name: "Sudoku CSP Solver",
            description: (
              <p>
                placeholder
              </p>
            ),
          },
        ]}
      />

      <Section
        title="Publications"
        items={[
          {
            id: 1,
            name: "PinnDE: Physics-Informed Neural Networks for Solving Differential Equations",
            description: (
              <p>
                placeholder for now
              </p>
            ),
          },
        ]}
      />
    </div>
  );
};

export default App;

