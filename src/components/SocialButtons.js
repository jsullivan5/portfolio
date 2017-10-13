import React from 'react';
import '../styles/SocialButtons.css';
import linkedin from './assets/linkedin.png';
import github from './assets/github-character.png';
import resume from './assets/resume.png';

const SocialButtons = () => (
  <div className="social-container">
    <a href="https://github.com/jsullivan5">
      <img
        className="github-link icon-pop"
        src={github}
        alt="Github link"
        title="github"
      />
    </a>
    <a href="https://www.linkedin.com/in/james-f-sullivan/">
      <img
        className="linkedin-link icon-pop"
        src={linkedin}
        alt="LinkedIn link"
      />
    </a>
    <a href="https://www.linkedin.com/in/james-f-sullivan/">
      <img
        className="resume-link icon-pop"
        src={resume}
        alt="Resume link"
      />
    </a>
  </div>
);

export default SocialButtons;
