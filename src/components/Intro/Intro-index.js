import React from 'react';
import './Intro.css';

const Intro = (props) => (
  <div className="Intro">
    <header className="Intro-header">
      Hello!
      <p className="Intro-title">
        This is a Search Engine for prose and poetries... <br />
        <span className="Intro-subtitle">{props.message}</span>
      </p>
    </header>
  </div>
)

export default Intro;
