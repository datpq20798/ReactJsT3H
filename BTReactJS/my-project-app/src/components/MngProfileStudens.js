import { db } from '../config/firebase'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { Button, Input, Table, Switch, Image } from 'antd';
import { DeleteTwoTone, UserAddOutlined, ImportOutlined, ExportOutlined } from '@ant-design/icons';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
} from 'mdb-react-ui-kit';

const MngProfileStudens = (props) => {



    //lấy dữ liệu firebase
    const [pointTable, setPointTable] = useState([])
    const pointColection = collection(db, "MngPointStudents")
    useEffect(() => {
        const getStudent = async () => {
            try {
                const data = await getDocs(pointColection)
                const renderData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setPointTable(renderData)

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

    //Tao comlum
    const columns = [
        {
            title: 'Mã môn học',
            dataIndex: 'SubjectCode',
            key: 'SubjectCode',
        },
        {
            title: 'Tên môn học',
            dataIndex: 'SubjectName',
            key: 'SubjectName',

        },
        {
            title: 'Số tín chỉ',
            dataIndex: 'CreditHour',
            key: 'CreditHour',
            // sorter: (a, b) => a.Rank - b.Rank
        },
        {
            title: 'Điểm quá trình',
            dataIndex: 'ProcessPoint',
            key: 'ProcessPoint',
        },
        {
            title: 'Điểm chuyên cần',
            dataIndex: 'AttendancePoints',
            key: 'AttendancePoints ',
        },
        {
            title: 'Điểm trung bình',
            dataIndex: 'AvgPoint',
            key: 'AvgPoint',
        },

        {
            title: '',
            dataIndex: 'SubjectCode',
            key: 'x',
            render: (subjectcode) => (
            
            <Button type="dashed" onClick={() => handleDelete(subjectcode)} icon={<DeleteTwoTone />} />)

        },

    ];
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    const { Search } = Input;

    //Delete
    const handleDelete = (subjectcode) => {
        const newData = pointTable.filter((item) => item.SubjectCode !== subjectcode);
        setPointTable(newData);

        console.log(subjectcode)
      };

  return (
    <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-4">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted mb-1">Full Stack Developer</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn>Follow</MDBBtn>
                                    <MDBBtn outline className="ms-1">Message</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">example@example.com</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Mobile</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="0">
                    <Table
                        columns={columns}
                        dataSource={pointTable}
                        pagination={tableParams.pagination}
                        onChange={handleTableChange}

                    />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
  )
}

export default MngProfileStudens