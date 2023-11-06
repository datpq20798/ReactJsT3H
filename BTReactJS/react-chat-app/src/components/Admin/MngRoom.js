import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Table, Avatar, Spin, Pagination, Modal, Button } from 'antd';
import { db } from '../../firebase/config';
import moment from 'moment';
import 'moment/locale/vi';

const MngRoom = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);


  const columns = [
    {
      title: 'Tên phòng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả phòng',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Người tạo',
      dataIndex: 'createBy',
      key: 'createBy',
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
  
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = db.collection('rooms');
        const usersSnapshot = await usersCollection.get();
        const usersData = [];
        usersSnapshot.forEach((doc) => {
          const createdAt = moment(doc.data().createdAt, 'MMMM D, YYYY [at] h:mm:ss A UTCZ').locale('vi').format('MMMM D, YYYY [at] h:mm:ss A');
          usersData.push({ key: doc.id, ...doc.data(), createdAt });
        });
        setDataSource(usersData);
        setLoading(false); // Ẩn loading khi dữ liệu đã được tải
      } catch (error) {
        console.error('Error fetching users: ', error);
        setLoading(false); // Ẩn loading nếu có lỗi khi tải dữ liệu
      }
    };
  
    fetchData();
  }, []);


  return (

    <div style={{ padding: '20px' }}>
      {loading && (
                <Spin tip="Loading..." size="large" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }} />
            )}
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.members}
            </p>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={dataSource}
      />
    </div>



  )
}






export default MngRoom;