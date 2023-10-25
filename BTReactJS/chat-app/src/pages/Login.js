import Add from "../images/addAvatar.png";
import '../styles/Login.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../config/firebase.js"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";



const Login = () => {
    //Click thao tác qua lại giữa Login và Register
    const [isActive, setIsActive] = useState(false);
    const handleRegisterClick = () => {
        setIsActive(true);
    };
    const handleLoginClick = () => {
        setIsActive(false);
    };


    //Xử lý input đăng ký
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    //Setting thông báo
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

    //check định dạng email
    const validateEmail = (email) => {
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regexEmail.test(email);
    }

    //Xử lý đăng ký tài khoản
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]
        console.log(file)

        //các điều kiện check ô input
        if (name === '') {
            toast.warn('Tên không được để trống', settingToast);
        }
        else if (validateEmail(email) === false) {
            toast.warn('Email chưa đúng định dạng', settingToast);
        }
        else if (password === '') {
            toast.warn('Bạn chưa nhập Password', settingToast);
        }
        else if (file === undefined) {
            toast.warn('Bạn chưa thêm ảnh', settingToast);
        }
        else {
            try {
                //Tạo user
                const res = await createUserWithEmailAndPassword(auth, email, password);

                //Tạo tên ảnh
                const date = new Date().getTime();
                const storageRef = ref(storage, `${name + date}`);

                await uploadBytesResumable(storageRef, file).then(() => {
                    getDownloadURL(storageRef).then(async (downloadURL) => {
                        try {
                            //Update profile
                            await updateProfile(res.user, {
                                name,
                                photoURL: downloadURL,
                            });
                            //Tạo user trong firestore
                            await setDoc(doc(db, "users", res.user.uid), {
                                uid: res.user.uid,
                                name,
                                email,
                                photoURL: downloadURL,

                            });
                            //tạo cuộc trò chuyện của user trên firestore
                            await setDoc(doc(db, "userChats", res.user.uid), {});


                            toast.success('Đăng ký thành công', settingToast);
                            // Clear các ô input
                            setName('');
                            setEmail('');
                            setPassword('');
                            setFile(null);

                        } catch (err) {
                            console.log(err);
                            toast.warn('Tài khoản đã tồn tại', settingToast);
                        }
                    });
                });
            } catch (err) {
                console.log(err);
                toast.warn('Tài khoản đã tồn tại', settingToast);
            }
        }
    }


    const handleAvaChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setFile(objectUrl);
        }
    };
    return (
        <>
            <ToastContainer></ToastContainer>
            <div className={`containerLogin ${isActive ? 'active' : ''}`} id="container">
                <div className="form-containerLogin sign-up">
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
                        </div>
                        <span>or use your email for registeration</span>
                        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        <input
                            
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            onChange={handleAvaChange}
                        />

                        <label className="addAva" htmlFor="file">
                            {file ? (
                                <img className="ava" src={file} alt="" />
                            ) : (
                                <img className="ava" src={Add} alt="" />
                            )}
                            <span>Ảnh đại diện của bạn</span>
                            
                        </label>
                        {/* <input required style={{ display: "none" }} type="file" id="file" onChange={handleFileChange} />
                        <label className="addAva" htmlFor="file">
                            <img className="ava" src={Add} alt="" />
                            <span>Add an avatar</span>
                        </label> */}
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-containerLogin sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
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
        </>
    )
}

export default Login