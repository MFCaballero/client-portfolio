import React from 'react';
import './About.css';
import img from '../../images/avatar.jpg';
import { MdCancel } from "react-icons/md";


export default function About(props) {

    return (props.display) ? (
        <div className= 'popUpAlert'>
            <div className = 'popup-inner'>
            <div className = 'btnX'>
            <MdCancel style={{color: 'black', cursor: 'pointer'}} size={25} onClick={() => props.setDisplay(false)} />
            </div>
            <div className= 'contExtAbout'>
                <img className='imgAbout' src={img} alt="" />
                <div style={{marginLeft:50}}>
                <h1>
                    Hi There!
                </h1>
                <p className='paragraphAbout'>
                My name is Florencia and I am a Full-Stack Developer. I also have a MS in Engineering and some knowledge of DataScience and Machine Learning Foundations. I am passionate about cutting edge technology as well as constant challenges and continuous improvement. I have a strong background in math, logic, and analytical thinking which synergistically complement my developer skills as well as my flexibility to change, excellent creativity and teamwork skills with strong verbal and written communication skills.
                </p>
                </div>
            </div>
            </div>
        </div>
    ): "";
}