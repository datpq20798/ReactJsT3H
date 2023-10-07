import '../Styles/Login.css';

const Login = () => {
  return (
    <div className="container">
      <form className="form-section">
        <h1>Đăng nhập</h1>
        <div className="input-box boxEmail">
          <input type="text" required id="inputEmail" />
          <label>Email</label>
        </div>
        <div className="input-box boxPass">
          <input type="password" className="password" required id="inputPass" />
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
        <div className="remember-forgot">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="button" onclick="login()" className="btn-login">login</button>
        <div className="register">
          <p>Bạn chưa có tài khoản?<a href="/register.html">Đăng ký</a></p>
        </div>
      </form>
    </div>

  );
}

export default Login;
