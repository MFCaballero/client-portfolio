import React, { useState, useEffect } from 'react';
import './Login.css';
import moment from 'moment';
import { MdSignalWifi3Bar, MdBatteryStd, MdExitToApp } from 'react-icons/md';
import { IoVolumeMediumSharp } from 'react-icons/io5';
import { FaStar, FaCommentAlt } from "react-icons/fa";
import axios from 'axios';



export default function Profile(props){
    const [ctx] = useState({
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        fullName: localStorage.getItem('fullName'),
        picture: localStorage.getItem('picture')
    })
    const [rating, setRating] = useState(null);

    useEffect(() => {
        ctx.id && axios.get("https://portfolio-mfcaballero.herokuapp.com/ratings",{
        withCredentials: true
        }).then((res) => {
        const userRating = res.data.find(e => parseInt(e.userId) === parseInt(ctx.id))
        if (!userRating) {
            return;
        }
        setRating(userRating);
        })
        return () => setRating(null);
    }, [ctx.id])

    const handleLogout = () => {
        axios.get("https://portfolio-mfcaballero.herokuapp.com/logout", {
        withCredentials: true
        }).then((res) => {
        if (res.data === "success") {
            localStorage.clear();
            return window.location.href = "/";
        }
        })
    }
    return(
        <div className='contExtProfile'>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <div className='star'>
            <span></span>
            </div>
            <header className="navbar">
            <div onClick={handleLogout} className='contLogout'>
            <h5 style={{marginLeft:10}}>Logout</h5>
            <MdExitToApp style={{marginLeft:5}} size={20}/>
            </div>
            <div className='navbarLine'>
            <h5 style={{marginRight:10}}>{moment(new Date()).format('MMM d')}</h5>
            <h5>{moment(new Date()).format('hh:mm')}</h5>
            </div>
            <div>
                <MdSignalWifi3Bar className='iconsRight'/>
                <IoVolumeMediumSharp className='iconsRight'/>
                <MdBatteryStd className='iconsRight'/>
            </div>
            </header>
            <div className= 'profileCont'>
            <div className = 'popup-inner'>
            <div className = 'btnX'>
            <div onClick={handleLogout} className='contLogout'>
            <h5 style={{marginLeft:10}}>Logout</h5>
            <MdExitToApp style={{marginLeft:5}} size={20}/>
            </div>
            </div>
            <div className='contProfileCard'>
            {
                ctx.picture ? <img className ="profilePic" src={ctx.picture} alt="" /> : ""
            }
            <h1 style={{color: '#101f51'}}>{`Welcome ${ctx.fullName ? ctx.fullName : ""} to your profile!`}</h1>
            <h3>{ctx.email}</h3>
            <div className='contScoreandComment'>
                <div className='contScore'>
                    <FaStar style={{color: '#ffbf00', marginRight:10}} size={40}/>
                    {rating && rating.score ? <h2>{rating.score}</h2> : <h2>0</h2> }
                </div>
                <div className='contScore'>
                    <FaCommentAlt style={{color: '#101f51', marginRight:10}} size={35}/>
                    {rating && rating.comment ? <h2>1</h2> : <h2>0</h2> }
                </div>
            </div>
            {
                rating ? <>{rating.comment ? <h3 className='h3Profile'>You have already scored and commented</h3> : <h3 className='h3Profile'>You have already scored</h3>} <button onClick={() => window.location.href = "/score"}>Edit Post</button></> : <><h3 className='h3Profile'>You haven't scored or commented anything yet</h3><button onClick={() => window.location.href = "/score"}>Create Post</button></>
            }
            </div>
            </div>
            </div>
        </div>
    )
}