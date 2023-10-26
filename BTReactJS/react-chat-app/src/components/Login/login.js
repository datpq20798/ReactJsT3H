import React, { useState, useContext } from 'react';
import { Row, Col, Button, Input, message } from 'antd';
import { auth } from '../../firebase/config';
import './login.css';
import { Link, navigate, useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


export default function Login() {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Đăng nhập thành công
      message.success('Đăng nhập thành công.');
    } catch (error) {
      // Xử lý lỗi khi đăng nhập thất bại
      console.error('Error logging in: ', error.message);
      message.error('Đăng nhập thất bại. Vui lòng kiểm tra email và mật khẩu.');
    }
  };
  const handleRegistrationClick = () => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!user.uid) {
      history.push('/register');
    } else {

    }
  };
  return (
    <>
      <div className="login-container">
        <Row justify='center' style={{ height: '100vh' }}>
          <Col span={8} className="login-form">
          <span className='title-header'>Login</span>
          <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
            </div>
            <span className='title-content'>Hoặc dùng tài khoản email để đăng nhập</span>
            <br/>
            <br/>
            <Input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
            <Input.Password
              placeholder='Mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <span style={{float: 'right'}}>Bạn chưa có tài khoản?<Button onClick={handleRegistrationClick } type='link'>Đăng ký</Button></span>
            <Button
              className="login-button"
              onClick={handleLogin}
            >
              Đăng nhập
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
