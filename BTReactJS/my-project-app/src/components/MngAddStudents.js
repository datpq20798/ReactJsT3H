import '../styles/MngAddStudents.css'
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
    Modal
} from 'antd';

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


    const { RangeDate } = DatePicker;
    const { TextArea } = Input;
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


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
                        <h5>Thông tin</h5>
                        
                        <Form.Item label="Họ và tên">
                            <Input />
                        </Form.Item>
                    </div>
                    {/* <Form.Item label="Input">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Select">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="TreeSelect">
                            <TreeSelect
                                treeData={[
                                    {
                                        title: 'Light',
                                        value: 'light',
                                        children: [
                                            {
                                                title: 'Bamboo',
                                                value: 'bamboo',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Cascader">
                            <Cascader
                                options={[
                                    {
                                        value: 'zhejiang',
                                        label: 'Zhejiang',
                                        children: [
                                            {
                                                value: 'hangzhou',
                                                label: 'Hangzhou',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="RangePicker">

                        </Form.Item>
                        <Form.Item label="InputNumber">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="TextArea">
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="Switch" valuePropName="checked">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div
                                        style={{
                                            marginTop: 8,
                                        }}
                                    >
                                        Upload
                                    </div>
                                </div>
                            </Upload>
                        </Form.Item>
                        <Form.Item label="Button">
                            <Button>Button</Button>
                        </Form.Item>
                        <Form.Item label="Slider">
                            <Slider />
                        </Form.Item> */}

                </div>
            </div>


        </>
    )
}

export default MngAddStudents