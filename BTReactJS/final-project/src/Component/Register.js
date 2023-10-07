import '../Styles/Register.css';

const Register = () => {
    return (
        <div className="container">
            <form className="form-section">
                <h1>Đăng ký</h1>
                <div className="input-box">
                    <input type="text" required id="rgtEmail" className="Email" />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input type="text" required id="rgtUserName" className="UserName" />
                    <label>User name</label>
                </div>
                <div className="input-box">
                    <input type="password" className="password" required id="rgtPass" />
                    <label>Password</label>
                    <div className="eye-wrapper">
                        <span className="close">
                            <i className="fa-regular fa-eye-slash" />
                        </span>
                        <span className="open">
                            <i className="fa-regular fa-eye" />
                        </span>
                    </div>
                </div>
                <div className="input-box">
                    <input type="password" className="password" required id="rgtRePass" />
                    <label>Nhập lại Password</label>
                    <div className="eye-wrapper">
                        <span className="close">
                            <i className="fa-regular fa-eye-slash" />
                        </span>
                        <span className="open">
                            <i className="fa-regular fa-eye" />
                        </span>
                    </div>
                </div>
                <button type="button" className="btn-login" onclick="register()">Đăng ký</button>
                <div className="login">
                    <p>Bạn đã có tài khoản?<a href="/login.html">Đăng nhập ngay</a></p>
                </div>
            </form>
        </div>

    )
}

export default Register