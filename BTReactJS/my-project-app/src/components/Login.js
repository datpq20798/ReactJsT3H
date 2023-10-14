import '../styles/Login.css'
 
import { db } from '../config/firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
    //Click thao tác qua lại giữa Login và Register
    
    
    const [isActive, setIsActive] = useState(false);
    const handleRegisterClick = () => {
        setIsActive(true);
    };
    const handleLoginClick = () => {
        setIsActive(false);
    };

    //Lấy dữ liệu fisebase
    const [studentList, setStudentList] = useState([])
    const studentsColection = collection(db, "MngStudents")
    useEffect(() => {
        const getStudent = async () => {
            try {
                const data = await getDocs(studentsColection)
                const renderData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setStudentList(renderData)
            } catch (err) {
                console.error(err)
            }
        }
        getStudent()
    }, [])


    //check định dạng email
    const validateEmail = (email) => {
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regexEmail.test(email);
    }

    //lấy giá trị ô input email và password
    const [emailValue, setEmailValue] = useState('')
    const [passValue, setPassValue] = useState('')
    const inputEmailValue = (event) => {
        setEmailValue(event.target.value);
    };
    const inputPassValue = (event) => {
        setPassValue(event.target.value);
    };

    const settingToast = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }
    //Đoạn này check login nè
    const btnLogin = () => {
        if (validateEmail(emailValue) === false) {
            toast.warn('Email chưa đúng định dạng', settingToast);
        }
        else if (passValue === '') {
            toast.warn('Bạn chưa nhập Password', settingToast);
        }
        else {
            const icheck = studentList.find((i) => i.Email === emailValue && i.Password === passValue)
            if (icheck) {
                toast.success('Đăng nhập thành công', settingToast);
            }
            else {
                toast.warn('Sai Email hoặc mật khẩu', settingToast);
            }
        }
        // console.log(studentList);
        // console.log(studentName2);
    }
    //Đoạn này check đăng ký nè
    const [nameValue, setNameValue] = useState('')
    const inputNameValue = (event) => {
        setNameValue(event.target.value);
    };
    const btnRegister = () => {
        if (validateEmail(emailValue) === false) {
            toast.warn('Email chưa đúng định dạng', settingToast);
        }
        else if (passValue === '') {
            toast.warn('Bạn chưa nhập Password', settingToast);
        }
        else if (nameValue === '') {
            toast.warn('Bạn chưa nhập Name', settingToast);
        } else {
            const icheck = studentList.find((i) => i.Email === emailValue)
            if (icheck) {
                toast.warn(`Email ${emailValue} này đã được đăng ký`, settingToast);
            }
            else {
                toast.success(`Bạn đã đăng ký thành công`, settingToast);
            }
        }

    }
    //Phần JSX 
    return (
        <>  
            <div className='bodyLogin'>
            <ToastContainer />
            <div className={`containerLogin ${isActive ? 'active' : ''}`} id="container" >
                <div className="form-containerLogin sign-up">
                    <div className='form'>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
                        </div>
                        <span>or use your email for registeration</span>
                        <input type="text" placeholder="Name"  onChange={inputNameValue} />
                        <input type="email" placeholder="Email" onChange={inputEmailValue} />
                        <input type="password" placeholder="Password"  onChange={inputPassValue} />
                        <button onClick={btnRegister}>Sign Up</button>
                    </div>
                </div>
                <div className="form-containerLogin sign-in">
                    <div className='form'>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
                        </div>
                        <span>or use your email password</span>

                        <input type="email" placeholder="Email" onChange={inputEmailValue} />
                        <input type="password" placeholder="Password" onChange={inputPassValue} />
                        <a href="#">Forget Your Password?</a>
                        <button onClick={btnLogin}>Sign In</button>
                    </div>
                </div>
                <div className="toggle-containerLogin">
                    <div className="toggle">
                        <div className={`toggle-panel toggle-left ${isActive ? 'active' : ''}`}>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
                        </div>
                        <div className={`toggle-panel toggle-right ${isActive ? 'active' : ''}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            
            
        </>

    )
}

export default Login