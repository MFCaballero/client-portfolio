import React from 'react';
import './About.css';
import { MdCancel } from "react-icons/md";
import { SiJavascript, SiReact, SiRedux, SiPostgresql, SiPython, SiDocker, SiCss3, SiMaterialUi, SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import { ImAndroid } from "react-icons/im";
import './About.css';



export default function Skills(props) {

    return (props.display) ? (
        <div className= 'popUpAlert'>
            <div className = 'popup-inner'>
            <div className = 'btnX'>
            <MdCancel style={{color: 'black', cursor: 'pointer'}} size={25} onClick={() => props.setDisplay(false)} />
            </div>
            <div className= 'contExtSkills'>
                <div className='textSkills'>
                <div>
                <h1>
                My developer Stack includes:
                </h1>
                <div className='contExtCardSkills'>
                <div className='skillCard'>JavaScript</div>
                <div className='skillCard'>React</div>
                <div className='skillCard'>Redux</div>
                <div className='skillCard'>Node</div>
                <div className='skillCard'>Express</div>
                <div className='skillCard'>SQL</div>
                <div className='skillCard'>PostgreSQL</div>
                <div className='skillCard'>Sequelize</div>
                <div className='skillCard'>Python</div>
                <div className='skillCard'>Docker</div>
                <div className='skillCard'>NginX</div>
                <div className='skillCard'>CSS/HTML</div>
                <div className='skillCard'>Material UI</div>
                </div>
                </div>
                <div>
                <h1>
                And I am currently learning:
                </h1>
                <div className='contExtCardSkills'>
                <div className='skillCard'>Typescript</div>
                <div className='skillCard'>React Native</div>
                <div className='skillCard'>Android</div>
                </div>
                </div>
                </div>
                <div className='skillsIcons'>
                <SiJavascript style={{color: '#101f51', margin: 20}} size={50}/>
                <SiReact style={{color: '#101f51', margin: 20}} size={50}/>
                <SiRedux style={{color: '#101f51', margin: 20}} size={50}/>
                <FaNode style={{color: '#101f51', margin: 20}} size={50}/>
                <SiPostgresql style={{color: '#101f51', margin: 20}} size={50}/>
                <SiPython style={{color: '#101f51', margin: 20}} size={50}/>
                <SiDocker style={{color: '#101f51', margin: 20}} size={50}/>
                <DiNginx style={{color: '#101f51', margin: 20}} size={50}/>
                <SiCss3 style={{color: '#101f51', margin: 20}} size={50}/>
                <SiMaterialUi style={{color: '#101f51', margin: 20}} size={50}/>
                <SiTypescript style={{color: '#101f51', margin: 20}} size={50}/>
                <ImAndroid style={{color: '#101f51', margin: 20}} size={50}/>
                </div>
            </div>
            </div>
        </div>
    ): "";
}