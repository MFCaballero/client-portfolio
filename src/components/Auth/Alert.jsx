import React from 'react';
import './Login.css';
import { CgDanger } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";




export default function Alert(props) {
    return (props.display) ? (
        <div className='contExtAlert'>
            <div className='innerAlert'>
                {
                    props.type === 'warning' ? <CgDanger style={{color: '#FF2A00'}} size={100}/> : <FaCheckCircle style={{color: 'green'}} size={90}/>
                }
                <div>
                    <h2 className='titleAlert'>
                        {props.title}
                    </h2>
                    <h3 className='textAlert'>
                        {props.text}
                    </h3>
                </div>
                <button type="button" onClick={() => props.setDisplay(false)}>Ok</button>
            </div>
        </div>
    ) : ""
}