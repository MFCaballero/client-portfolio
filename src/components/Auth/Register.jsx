import React, {useState} from 'react';
import { MdCancel } from "react-icons/md";
import './Login.css';
import thanks from '../../images/thanks.jpg';
import axios from 'axios';
import Alert from './Alert';

export default function Login(props){
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState({
        email: false,
        password: false
    });

    const [displayAlert, setDisplayAlert] = useState(false);
    const [alert, setAlert] = useState({
        type: "",
        title: "",
        text: ""
    })

    function isEmail(n) {  // 1 - 2 - 3,1 - 4 --> gastos/expensas
        if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(n)){
            return true
        }
        return false
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (input.fullName !== "" && input.email !== "" && input.password !== "" && isEmail(input.email) && input.password.length >= 6) {
            axios.post("https://portfolio-mfcaballero.herokuapp.com/register", input, {
            withCredentials: true
            }).then((res) => {
            if (res.data === "success") {
                setAlert({
                    type: 'success',
                    title: 'Successfully Registered!',
                    text: 'Now Login to access to your profile. Thanks!',
                })
                setDisplayAlert(true);
                setTimeout(()=>{
                    props.setDisplay(false);
                    props.displayLogin(true);
                    setDisplayAlert(false);
                },1500)
                return
            }
            if(res.data === 'User Already Exists') {
                setAlert({
                    type: 'warning',
                    title: 'Email already registered!',
                    text: 'Try with another email or Login directly. Thanks!',
                })
                setDisplayAlert(true);
            }
            })
        } else {
            if (input.fullName === "" || input.email === "" || input.password === "") {
                setAlert({
                    type: 'warning',
                    title: 'Please fill out all the inputs!',
                    text: 'Try again',
                })
                return setDisplayAlert(true);
            }
            if (!isEmail(input.email)) {
                setError({...error, email: true});
                setAlert({
                    type: 'warning',
                    title: 'Incorrect Email!',
                    text: 'Try again',
                })
                return setDisplayAlert(true);
            }
            if(input.password !== "" && input.password.length < 6){
                setError({...error, password: true});
                setAlert({
                    type: 'warning',
                    title: 'Password needs 6 characters!',
                    text: 'Try again',
                })
                return setDisplayAlert(true);
            }
        }
    }

    return (props.display) ? (
        <>
        <Alert display={displayAlert} setDisplay={setDisplayAlert} type={alert.type} title={alert.title} text={alert.text}/>
        <div className= 'popUpAlert'>
        <div className = 'popup-inner'>
            <div className = 'btnX'>
            <MdCancel style={{color: 'black', cursor: 'pointer'}} size={25} onClick={() => props.setDisplay(false)} />
            </div>
            <div className="contLogin">
            <div className="form-container">
                <form className='formLogin' action="#">
                    <h1>Register</h1>
                    <input className ={error.fullName ? "danger" : null} type="fullName" placeholder="Full Name" onChange={e => {
                        setInput({
                        ...input,
                        fullName: e.target.value
                        });
                        setError({
                            ...error,
                            fullName: false
                        })
                    }}/>
                    <input className ={error.email ? "danger" : null} type="email" placeholder="Email" onChange={e => {
                        setInput({
                        ...input,
                        email: e.target.value
                        });
                        setError({
                            ...error,
                            email: false
                        })
                    }}/>
                    <input className ={error.password ? "danger" : null} type="password" placeholder="Password" onChange={e => {
                        setInput({
                        ...input,
                        password: e.target.value
                        });
                        setError({
                            ...error,
                            password: false
                        })
                    }}/>
                    <div className='contExtBtnLogin'>
                    <button onClick={event => handleRegister(event)}>Sign up</button>
                    </div>
                </form>
            </div>
            <div className='overlay-container'>              
                <h1>Thanks for registering!</h1>
                <div className='contExtImgLogin'>
                <img className='imgLogin' src={thanks} alt="" />
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    ) : ""
}