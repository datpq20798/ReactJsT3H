import '../styles/MngAddStudents.css'
import { PlusOutlined, UserAddOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase'

import { collection, getDocs } from 'firebase/firestore';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    Modal,
} from 'antd';
import Password from 'antd/es/input/Password';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


const MngAddStudents = () => {


    //upload images
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div className='uploadImg'>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );



    const { TextArea } = Input;

    //lấy dữ liệu firebase
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

    //Gen mã sinh viên
    let countStudentCode = studentList.length
    const genStudentCode = () => {
        let prefix = "SV";
        let paddedNumber = String(countStudentCode).padStart(3, "0"); // Chuyển số thành chuỗi và thêm số 0 vào trước nếu cần
        let studentID = prefix + paddedNumber;
        countStudentCode++
        return studentID;
    }
    let studentID = genStudentCode();

    return (
        <>
            <div className='bodyMngAddStudents'>
                <div className='containerMngAddStudents'>
                    <div className='MngAddStudents-left'>
                        <Form className='uploadImgStudent'>
                            <Upload
                                action="/upload.do"
                                listType="picture-circle"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>
                            <h5>Ảnh đại diện</h5>
                        </Form>

                    </div>
                    <div className='MngAddStudents-right'>
                        <p>Tạo mới</p>
                        <div className='formInfoStudents'>
                            <div className='formInfoStudents-left'>
                                <Form
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 14 }}
                                    layout="horizontal"
                                    style={{ maxWidth: 600 }}
                                >

                                    <Form.Item label="Họ và tên">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Email">
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="Ngày sinh">
                                        <DatePicker />
                                    </Form.Item>

                                    <Form.Item label="Số tín">
                                        <InputNumber disabled value='null' />
                                    </Form.Item>
                                    <Form.Item label="Chức vụ">
                                        <Select>
                                            <Select.Option value=""></Select.Option>
                                            <Select.Option value="Admin">Admin</Select.Option>
                                            <Select.Option value="Giáo viên">Giáo viên</Select.Option>
                                            <Select.Option value="Sinh viên">Sinh viên</Select.Option>
                                        </Select>
                                    </Form.Item>

                                </Form>

                            </div>
                            <div className='formInfoStudents-center'>
                                <Form
                                    labelCol={{ span: 10 }}
                                    wrapperCol={{ span: 14 }}
                                    layout="horizontal"

                                    style={{ maxWidth: 600 }}
                                >
                                    <Form.Item label="Giới tính">
                                        <Select>
                                            <Select.Option value="Nam">Nam</Select.Option>
                                            <Select.Option value="Nữ">Nữ</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Password">
                                        <Password />
                                    </Form.Item>
                                    <Form.Item label="Xếp loại">
                                        <Input disabled />

                                    </Form.Item>
                                    <Form.Item label="Điểm trung bình">
                                        <InputNumber disabled value='0' />
                                    </Form.Item>


                                </Form>

                            </div>
                            <div className='formInfoStudents-right'>
                                <Form
                                    labelCol={{ span: 12 }}
                                    wrapperCol={{ span: 14 }}
                                    layout="horizontal"

                                    style={{ maxWidth: 600 }}
                                >

                                    <Form.Item label="Mã sinh viên">
                                        <Input disabled value={studentID} />
                                    </Form.Item>
                                    <Form.Item label="Số điện thoại">
                                        <Input />
                                    </Form.Item>
                                    <Form.Item label="Xếp hạng">
                                        <InputNumber disabled value='null' />
                                    </Form.Item>

                                    <Form.Item label="Khóa học">
                                        <Input disabled value='null' />
                                    </Form.Item>
                                </Form>

                            </div>


                        </div>
                        <div>
                            <Form
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 20 }}
                                style={{ maxWidth: 600 }}

                            > <Form.Item label="Địa chỉ">
                                    <TextArea rows={4} />
                                </Form.Item>


                            </Form>

                        </div>
                        <div className='createStudent'>
                            <Button type='primary'><UserAddOutlined />Create</Button>
                            <Button type='primary'><CloseOutlined />Reset</Button>
                        </div>


                    </div>


                </div>
            </div>


        </>
    )
}

export default MngAddStudents