import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/tomiris-rakhymzhan/'><BsLinkedin /></a>
    </div>
    <div>
    <a href='https://github.com/tomirisrakhymzhan'><BsGithub /></a>
    </div>
  </div>
);

export default SocialMedia;