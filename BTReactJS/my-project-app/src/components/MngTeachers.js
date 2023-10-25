import React from 'react';
import { Button, Form, Input } from 'antd';
import '../styles/MngCourses.css'


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const MngCourses = () => {
    return (
        <div className='bodyMngCourses'>
            <div className='containerMngCourses'>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
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
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
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
            </div>

        </div>

    )

}
export default MngCourses;