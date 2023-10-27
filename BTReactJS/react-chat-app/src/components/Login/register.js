import React, { useState, useContext } from 'react';
import { Row, Col, Button, Input, Upload, message } from 'antd';
import { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import { UploadOutlined } from '@ant-design/icons';
import './register.css';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


export default function Register() {


  

  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const handleRegister = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      if (user) {
        let photoURL = image;
        if (image) {
          // Logic xử lý ảnh
        }

        addDocument('users', {
          displayName: displayName,
          email: email,
          photoURL: photoURL,
          uid: user.uid,
          providerId: 'email.com',
          keywords: generateKeywords(displayName?.toLowerCase()),
        });

        // Hiển thị thông báo đăng ký thành công
        message.success('Đăng ký thành công.');
        
      }
    } catch (error) {
      // Xử lý lỗi khi đăng ký thất bại
      console.error('Error registering user: ', error.message);
      message.error('Đăng ký thất bại. Vui lòng thử lại.');
    }
  };

  const handleUploadChange = (info) => {
    if (info.file.status === 'done') {
      setImage(info.file.name)
      console.log(info.file)
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const handleLoginClick = () => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!user.uid) {
      history.push('/login');
    } else {

    }
  };

  return (
    <>
      <div className="register-container">
        <Row justify='center' style={{ height: '100vh' }}>
          <Col span={8} className="register-form">
          <span className='title-header'>Register</span>
            <Input
              placeholder='Họ và tên'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="register-input"
            />
            <Input
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
            />
            <Input.Password
              placeholder='Mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
            />
            <Upload
              name='avatar'
              customRequest={dummyRequest}
              onChange={handleUploadChange}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>

            {image && <img src={image} alt='Ảnh đại diện' className="uploaded-image" />}
            <div style={{ marginTop: 10 }}>
              <span style={{ float: 'right' }}>Bạn đã có tài khoản?<Button onClick={handleLoginClick} type='link'>Đăng nhập</Button></span>

            </div>


            <Button
              className="register-button"
              onClick={handleRegister}
            >
              Đăng ký
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

function dummyRequest({ image, onSuccess }) {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
}
