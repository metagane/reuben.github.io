import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngular,faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <> 
    
          <div className="container about-page">
            <div className="text-zone">
              
              <h1>
                <AnimatedLetters
                letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
            I'm very ambitious software developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my skills.
          </p>
          <p>
            If I need to define myself in one sentence that would be a friendly
            person, a sports fanatic, gamer, music composer
             and tech-obsessed!!!
          </p>
          <h2>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['S','K','I','L','L','S']}
            idx={15} />
          </h2>
          <p>
            JAVASCRIPT, SCSS, CSS, HTML, JAVA, C#, POSTGRESQL, SQL, REACT FRAMEWORK,
            REACT NATIVE, NODE JS, JSON, APPLICATION PROGRAMMING INTERFACE(API), PYTHON 
          </p>
          </div>
          <div className='stage-cube-cont'>
              <div className='cubespinner'>
              <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
              </div>

          </div>
        
        </div>
        <loader type="pacman" />
        </>
   
    )

}

export default About;