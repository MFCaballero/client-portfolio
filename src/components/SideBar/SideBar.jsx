import React , { useState } from 'react';
import './SideBar.css';
/* import { CgMenuGridR } from 'react-icons/cg'; */
import { IoPersonSharp } from "react-icons/io5";
import { FaTools, FaStar } from "react-icons/fa";
import About from '../About/About';
import Skills from '../About/Skills';
import Login from '../Auth/Login';
import Register from '../Auth/Register';


export default function SideBar() {
    const [displayAbout, setDisplayAbout] = useState(false);
    const [displaySkills, setDisplaySkills] = useState(false);
    const [displayLogin, setDisplayLogin] = useState(false);
    const [displayRegister, setDisplayRegister] = useState(false);

    return(
        <div>
            <About display={displayAbout} setDisplay={setDisplayAbout}/>
            <Skills display={displaySkills} setDisplay={setDisplaySkills}/>
            <Login display={displayLogin} setDisplay={setDisplayLogin} displayRegister={setDisplayRegister}/>
            <Register display={displayRegister} setDisplay={setDisplayRegister} displayLogin={setDisplayLogin}/>
            <div className='sidebar'>
            <div className='iconsSidebar'>
            <IoPersonSharp onClick={() => setDisplayAbout(true)} style={{color: 'white', cursor: 'pointer'}} size={30} />
            <FaTools onClick={() => setDisplaySkills(true)} style={{color: 'white', cursor: 'pointer'}} size={30} />
            <FaStar onClick={() => setDisplayLogin(true)} style={{color: 'white', cursor: 'pointer'}} size={35} />
            </div>
            {/* <CgMenuGridR style={{position: 'absolute' , bottom: 20, cursor: 'pointer'}} color='white' size={50}/> */}
            </div>
        </div>
    )
}