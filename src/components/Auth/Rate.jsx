import React, { useState, useEffect } from 'react';
import './Login.css';
import moment from 'moment';
import { MdSignalWifi3Bar, MdBatteryStd, MdCancel, MdExitToApp } from 'react-icons/md';
import { IoVolumeMediumSharp } from 'react-icons/io5';
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import Alert from './Alert';



export default function Profile(props){
    let ctx = {}
    ctx.id = localStorage.getItem('id');
    ctx.email = localStorage.getItem('email');
    ctx.fullName = localStorage.getItem('fullName');
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [input, setInput] = useState({
        score: 0,
        comment: "",
        id: parseInt(ctx.id)
    })
    const [displayAlert, setDisplayAlert] = useState(false);
    const [alert, setAlert] = useState({
        type: "",
        title: "",
        text: ""
    })

    useEffect(() => {
        ctx.id && axios.get("https://portfolio-mfcaballero.herokuapp.com/ratings",{
        withCredentials: true
        }).then((res) => {
        const userRating = res.data.find(e => parseInt(e.userId) === parseInt(ctx.id))
        if (!userRating) {
            return;
        }
        setRating(userRating);
        setInput({
            ...input,
            score: userRating.score,
            comment: userRating.comment
        })
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

    const handleSubmit = () => {
        ctx.id && axios.post("https://portfolio-mfcaballero.herokuapp.com/rating",input, {
        withCredentials: true
        }).then((res) => {
        if (res.data === "success") {
            setAlert({
                type: 'success',
                title: 'Successfully Posted!',
                text: 'Thanks for leaving a post!',
            })
            setDisplayAlert(true);
            setTimeout(()=>{
                window.location.href = "/profile";
            },1000)
            setTimeout(() => {
                return setDisplayAlert(false);
            }, 1500)
        }
        })
    }

    const handleEdit = () => {
        axios.put("https://portfolio-mfcaballero.herokuapp.com/rating",input, {
        withCredentials: true
        }).then((res) => {
        if (res.data === "success") {
            setAlert({
                type: 'success',
                title: 'Successfully Edited!',
                text: 'Thanks for leaving a post!',
            })
            setDisplayAlert(true);
            setTimeout(()=>{
                window.location.href = "/profile";
            },1000)
            setTimeout(() => {
                return setDisplayAlert(false);
            }, 1500)
        }
        })
    }

    const handleDelete = () => {
        console.log(typeof rating.id)
        axios.delete(`https://portfolio-mfcaballero.herokuapp.com/rating/${rating.id}`, {
        withCredentials: true
        }).then((res) => {
        if (res.data === "success") {
            setAlert({
                type: 'success',
                title: 'Successfully Deleted!',
                text: '',
            })
            setDisplayAlert(true);
            setTimeout(()=>{
                window.location.href = "/profile";
            },1000)
            setTimeout(() => {
                return setDisplayAlert(false);
            }, 1500)
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
            <Alert display={displayAlert} setDisplay={setDisplayAlert} type={alert.type} title={alert.title} text={alert.text}/>
            <div className= 'profileCont'>
            <div className = 'popup-inner'>
            <div className = 'btnX'>
            <div onClick={() => window.location.href = "/profile"} className='contLogout'>
            <MdCancel style={{marginLeft:5}} size={20}/>
            </div>
            </div>
            <div className='contProfileCard'>
            <h1 style={{color: '#101f51'}}>{`Hello ${ctx.fullName ? ctx.fullName : ""} you can leave a post here!`}</h1>
            <div className='yourScoreandComment'>
            <div className='yourScore'>
                <h2 className='h3Profile'>Your Score:</h2>
                <div className='contFaStars'>
                {
                    [...Array(5)].map((star,i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={i}>
                                <input 
                                className = 'radioBtnPopUp'
                                type="radio"
                                name="rating"
                                value= {ratingValue}
                                onClick= {(e) => setInput({
                                    ...input,
                                    score: e.target.value
                                })}
                                    />
                                <FaStar size={40}
                                style={{color: ratingValue <= (hover || input.score) ? "#ffbf00" : "#e4e5e9", cursor: 'pointer'}}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                                />

                            </label>
                            )
                        })
                    }
                    </div>
            </div>
            <div className='yourScore'>
                <h2 className='h3Profile'>Your Comment:</h2>
                <div>
                <textarea className='textTareaRate' onChange= {(e) => setInput({
                                    ...input,
                                    comment: e.target.value
                                })} name="Text1" value ={input.comment} cols="60" rows="5"></textarea>
                </div>
            </div>
            </div>
            {
                rating ? <div className='contBtnRate'><button onClick={handleEdit}>Edit</button><button onClick={handleDelete}>Delete</button></div> : <button onClick={handleSubmit}>Submit</button>
            }
            </div>
            </div>
            </div>
        </div>
    )
}