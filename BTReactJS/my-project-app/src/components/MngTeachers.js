import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import '../styles/MngTeachers.css'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const onFinish = (values) => {
    console.log(values);
};
const App = () => (
    <div className='formInfoMngStudents'>
        <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
        
    >
        <Form.Item name={['user', 'name']} label="Name1">
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email">
            <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'age']}
            label="Age"
            rules={[
                {
                    type: 'number',
                    min: 0,
                    max: 99,
                },
            ]}
        >
            <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
        </Form.Item>
        <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    </div>
    
);
export default App;