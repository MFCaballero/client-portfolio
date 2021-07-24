import React, {useState} from 'react';
import { MdCancel } from "react-icons/md";
import './Login.css';
import login from '../../images/login.jpg';
import Alert from './Alert';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";


export default function Login(props){
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const [displayAlert, setDisplayAlert] = useState(false);
    const [alert, setAlert] = useState({
        type: "",
        title: "",
        text: ""
    })
    const handleGoogleLogin = () => {
        let timer= null;
        const googleLoginURL = "https://portfolio-mfcaballero.herokuapp.com/login/google";
        const newWindow = window.open(
          googleLoginURL,
          "_blank",
          "width=500,height=600"
        );
    
        if (newWindow) {
          timer = setInterval(() => {
            if (newWindow.closed) {
              console.log("Yay we're authenticated");
              axios.get("https://portfolio-mfcaballero.herokuapp.com/auth/user", { withCredentials: true })
              .then((res) => {
                console.log(res.data)
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('fullName', res.data.fullName);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('picture', res.data.picture);
                return window.location.href = "/profile";
                })
              if (timer) clearInterval(timer);
            }
          }, 500);
        }
      };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("https://portfolio-mfcaballero.herokuapp.com/login", input, {
        withCredentials: true
        }).then((res) => {
        if (res.data === "Successfully Authenticated") {
            axios.get("https://portfolio-mfcaballero.herokuapp.com/auth/user", { withCredentials: true }).then((res) => {
                console.log(res.data)
                localStorage.setItem('id', res.data.id);
                localStorage.setItem('fullName', res.data.fullName);
                localStorage.setItem('email', res.data.email);
                return window.location.href = "/profile";
            })
        }
        if(res.data === "No User Exists") {
            setAlert({
                type: 'warning',
                title: 'Email or password wrong!',
                text: 'Try again',
            })
            setDisplayAlert(true);
            return
        }
        if(res.status === 401 || res.status === 400) {
            setAlert({
                type: 'warning',
                title: 'Error loging in!',
                text: 'Try again',
            })
            setDisplayAlert(true);
            return
        }
        })
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
                    <h1>Log in</h1>
                    <div onClick ={handleGoogleLogin} className='googleLogin'>
                        <FcGoogle size={40}/>
                    </div>
                    <div className='useAccount'>or use your account</div>
                    <input type="email" placeholder="Email"  onChange={e => {
                        setInput({
                        ...input,
                        email: e.target.value
                        });
                    }} />
                    <input type="password" placeholder="Password" onChange={e => {
                        setInput({
                        ...input,
                        password: e.target.value
                        });
                    }}/>
                    {/* <a  href="#">Forgot your password?</a> */}
                    <div className='contExtBtnLogin'>
                    <button onClick={event => handleLogin(event)}>Log In</button>
                    </div>
                    <div onClick={() => {
                        props.setDisplay(false)
                        props.displayRegister(true)
                    }} className='linkRegister'>Don't have gmail or an account yet? Register here!</div>
                </form>
            </div>
            <div className='overlay-container'>              
                <h1>Hi, Again!</h1>
                <p className='paragraphLogin'>If you have any ideas of what I can add or improve in my Portfolio App, please log in and leave me a comment with a score! Thanks!</p>
                <div className='contExtImgLogin'>
                <img className='imgLogin' src={login} alt="" />
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    ) : ""
}