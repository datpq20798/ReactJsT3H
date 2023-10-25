import React from 'react';
import { Button, Input, Table, Modal, Form } from 'antd';
import '../styles/MngCourses.css'
import { db } from '../config/firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { DeleteTwoTone, UserAddOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';


const MngCourses = () => {
    //lấy dữ liệu firebase
    const [coursesList, setCoursesList] = useState([])
    const coursesColection = collection(db, "MngCourses")
    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await getDocs(coursesColection)
                const renderData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setCoursesList(renderData)

            } catch (err) {
                console.error(err)
            }
        }
        getCourses()
    }, [])

    //Phân trang
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 3,
        },
    });
    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setTableParams([]);
        }
    };


    //Model phần Tạo mới Khoá
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    //Click lấy thông tin khoá
    const coursestDetail = (Name) => {
        const detail = coursesList.find((a) => a.CoursesCode === Name)
        console.log("key: ", Name)
    }

    //tạo tên cột
    const columns = [
        {
            title: 'Số thứ tự',
            dataIndex: 'key',
            key: 'key',


        },

        {
            title: 'Mã khoá',
            dataIndex: 'CoursesCode',
            key: 'CoursesCode',


        },
        {
            title: 'Tên khoá',
            dataIndex: 'CoursesName',
            key: 'CoursesName',
            render: (Name) => <Button style={{ marginLeft: -15 }} onClick={() => coursestDetail(Name)} type="link"  >{Name}</Button>,
        },


        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: () => <Button type="dashed" icon={<DeleteTwoTone />} />

        },
    ];
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const { Search } = Input;


    //Detail
    
    return (
        <div className='bodyMngCourses'>
            <div className="containerMngCourses">
                <div className="headerMngCourses">
                    <div className='headerMngCourses-left'>
                        <Search className='searchMngCourses' placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
                    </div>
                    <div className='headerMngCourses-right'>

                        <Button className='addMngCourses' type="primary" onClick={showModal}><UserAddOutlined />Create</Button>
                        <Modal
                            title="TẠO KHOÁ MỚI"
                            open={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            {/* Đoạn tạo Khoá */}
                            <Form
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    
                    autoComplete="off"
                >
                    <Form.Item
                        label="Mã khoá"
                        name="coursescode"
                        rules={[
                            {
                                required: true,
                                message: 'Bạn chưa nhập mã khoá !!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Tên khoá"
                        name="coursesname"
                        rules={[
                            {
                                required: true,
                                message: 'Bạn chưa nhập tên khoá !! ',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
                        </Modal>
                        <Button className='importMngSdtudent' type="primary"><ImportOutlined />Import</Button>
                        <Button className='exportMngSdtudent' type="primary"><ExportOutlined />Export</Button>

                    </div>
                </div>
                <div className='titleMngCourses'>
                    <p>Số lượng: {coursesList.length}</p>
                </div>
                <div className='dataTableMngCourses'>
                    <Table
                        columns={columns}
                        dataSource={coursesList}
                        pagination={tableParams.pagination}
                        onChange={handleTableChange}

                    />

                </div>

            </div>
        </div>
    )

}
export default MngCourses;