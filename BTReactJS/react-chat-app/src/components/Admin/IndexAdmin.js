import React, { useState } from 'react';
import { Row, Col } from 'antd';
import SidebarAdmin from './SidebarAdmin';
import MngRoom from './MngRoom';
import MngUser from './MngUser'; // Import MngUser component

const IndexAdmin = () => {
  const [selectedComponent, setSelectedComponent] = useState('MngAdmin'); // Default to MngAdmin component

  const renderSelectedComponent = () => {
    if (selectedComponent === 'MngAdmin') {
      return <MngRoom />;
    } else if (selectedComponent === 'MngUser') {
      return <MngUser />;
    }
    return null;
  };

  return (
    <>
      <div>
        <Row>
          <Col span={6}>
            <SidebarAdmin setSelectedComponent={setSelectedComponent} />
          </Col>
          <Col span={18}>
            {renderSelectedComponent()}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default IndexAdmin;
