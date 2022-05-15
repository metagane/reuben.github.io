//import Logo from '../../assets/images/logo-r.png';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';


//Adding components to the home page
const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['R','E','U','B','E','N']
    const jobArray = ['S','o','f','w','a','r','e','','d','e','v','e','l','o','p','e','r','.']

   
    
    return (
        <div className="container home-page">
           <div className="text-zone">
            <h1> 
            <span className={letterClass}>H</span>
            <span className={'${letterClass}_12'}>i,</span> 
            <br />
            <span className={'${letterClass} _13'}>I </span> 
            <span className={'${letterClass} _14'}>'m </span> 
             <AnimatedLetters letterClass={letterClass} strArray= {nameArray} idx={10} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray= {jobArray} idx={10} />
            </h1>
            <h2>frontend developer/ backend developer/React Developer </h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
        
    );
    
    
}

export default Home;