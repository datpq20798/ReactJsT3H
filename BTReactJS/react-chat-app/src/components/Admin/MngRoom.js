import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Table, Avatar, Spin, Pagination, Modal, Button } from 'antd';
import { db } from '../../firebase/config';
import moment from 'moment';
import 'moment/locale/vi';
import './MngRoom.css'
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

  const expandedRowRender = (record) => {
    const memberColumns = [
      {
        
        dataIndex: 'member',
        key: 'member',
        
      },
      {
      
        key: 'action',
        render: (text, member) => (
          <Button onClick={() => handleDeleteMember(record.key, member.member)}>Xóa</Button>
        ),
        
      },
    ];
    const defaultTitle = () => 'Danh sách thành viên';
    return (
      <Table
        title={defaultTitle}
        columns={memberColumns}
        dataSource={record.members.map((member) => ({ member }))}
        pagination={false}
      />
    );
  };
  const handleDeleteMember = (roomId, memberUid) => {
    // Implement your logic to delete the member here using roomId and memberUid
    // You can use Firebase or any other backend API to perform the deletion
  };
  



  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomsCollection = db.collection('rooms');
        const roomsSnapshot = await roomsCollection.get();
        const usersData = [];
        roomsSnapshot.forEach((doc) => {
          const createdAt = moment(doc.data().createdAt, 'MMMM D, YYYY [at] h:mm:ss A UTCZ').locale('vi').format('MMMM D, YYYY [at] h:mm:ss A');
          usersData.push({ key: doc.id, ...doc.data(), createdAt });
        });
        const usersCollection = db.collection('users');
        const usersSnapshot = await usersCollection.get();
        const usersMap = {};
        usersSnapshot.forEach((userDoc) => {
          const userData = userDoc.data();
          usersMap[userData.uid] = userData.displayName // Lưu trữ tên người dùng dựa trên UID
         
        });
        usersData.forEach(item => {
          item.members = item.members.map(memberID => usersMap[memberID] || memberID);
        });


        console.log(usersData)
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
          expandedRowRender: expandedRowRender,
           
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={dataSource}
      />
    </div>



  )
}






export default MngRoom;