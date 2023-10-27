import React, {useState} from 'react';
import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined, DeleteOutlined, CheckCircleTwoTone  } from '@ant-design/icons';
import { AppContext } from '../../Context/AppProvider';


const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const RoomItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
  font-weight: 500;
`;


export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId, currentUser  } = React.useContext(AppContext);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };
  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId === selectedRoom ? null : roomId);
    setSelectedRoomId(roomId);
  };

  const isCurrentUserRoomOwner = (roomId) => {
    // Assuming each room object has an owner field representing the owner's user ID
    const room = rooms.find((room) => room.id === roomId);
    return room && room.owner === currentUser.id;
  };
  const handleDeleteRoom = (roomId) => {
    if (isCurrentUserRoomOwner(roomId)) {
     
      console.log('Delete room with ID:', roomId);
    } else {
      
      console.log('You do not have permission to delete this room.');
    }
  };

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header='Danh sách các phòng' key='1'>
        {rooms.map((room) => (
          <RoomItemWrapper key={room.id}>

            <LinkStyled onClick={() => handleRoomClick(room.id)}>
            {selectedRoom === room.id && <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '5px' }} />}

              {room.name}
              
            </LinkStyled>
            <Button type='text' icon={<DeleteOutlined />} danger onClick={() => handleDeleteRoom(room.id)}>
              Xoá
            </Button>
          </RoomItemWrapper>
        ))}
        <Button type='text' icon={<PlusSquareOutlined />} className='add-room' onClick={handleAddRoom}>
          Thêm phòng
        </Button>
      </PanelStyled>
    </Collapse>
  );
}
