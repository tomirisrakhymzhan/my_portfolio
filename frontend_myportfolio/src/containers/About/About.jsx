import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
const abouts = [
  {title: 'Frontend Development', description: 'I love mastering my frontend skills with HTML, CSS (Sass), Javscript (with React framework) in order to make the smoothest and responsive user experience.', imgUrl: images.about05},
  {title: 'Backend Development', description: 'I have strong foundation in C# and a good grasp of the highly efficient server-side framework ASP.NET using MVC paradigm. I care a lot about making readable, maintainable and efficient code, and I love expanding my knowledge.', imgUrl: images.about04},
];
const About = () => {
  return (
    <>
      <h2 className="head-text">I am a <span>Quick learner</span> <br />and a <span>Problem Solver</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;