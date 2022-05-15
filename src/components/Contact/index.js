import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                     strArray={['C','O','N','T','A','C','T', '','M','E']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in Software Development opportunities, However
                    if you have any other request or question don't hesitate to contact
                    by using the form below
                </p>
                <div className='contact-form'>
                    <fornm>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li> 
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li> 
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </fornm>
                </div>
            </div>
        </div>

    )
}

export default Contact;