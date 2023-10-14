import { Button, Input, Table, Switch, Image  } from 'antd';
import '../styles/MngStudents.css'
import { db } from '../config/firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {DeleteTwoTone,} from '@ant-design/icons';


const MngStudents = () => {

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

    

    //tạo tên cột
    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'Image',
            render: () =>
                <Image className='Img'
                    width={40}
                    src={studentList.map((i) => (i.Image))}
                />
            ,
            key: 'Image',
        },
        {
            title: 'Mã sinh viên',
            dataIndex: 'StudentCode',
            key: 'StudentCode',
            
        },
        {
            title: 'Họ và tên',
            dataIndex: 'NameStudents',
            key: 'NameStudents',
            // sorter: (a, b) => a.NameStudents - b.NameStudents
        },
        {
            title: 'Giới tính',
            dataIndex: 'Gender',
            key: 'Gender',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'DateOfBirth',
            key: 'DateOfBirth',
        },
        {
            title: 'Xếp loại',
            dataIndex: 'Classification',
            key: 'Classification',
            // sorter: (a, b) => a.Rank - b.Rank
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'Password',
            dataIndex: 'Password',
            key: 'Password',
        },

        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: () => <Button type="dashed" icon={<DeleteTwoTone />} />

        },

        {
            title: '',
            dataIndex: 'Active',
            key: 'x',
            render: () => <Switch checkedChildren="On" unCheckedChildren="Off" />


        },
    ];
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const { Search } = Input;

    

    return (
        <div className='bodyMngStudents'>
            <div className="containerMngStudents">
                <div className="headerMngStudents">
                    <Search className='searchMngStudents' placeholder="Tìm kiếm" onSearch={onSearch} enterButton />
                    <Button className='addMngStudents' type="primary">+ Add</Button>
                </div>
                <div className='titleMngStudents'>
                    <p>Số lượng: {studentList.length}</p>
                </div>
                <div>
                    <Table
                        columns={columns}
                        expandable={{
                            expandedRowRender: (Info) => (
                                Info.Address
                            ),
                        }}
                        dataSource={studentList}
                        pagination={tableParams.pagination}
                        onChange={handleTableChange}
                        
                    />
                    
                </div>

            </div>
        </div>

    )
}

export default MngStudents