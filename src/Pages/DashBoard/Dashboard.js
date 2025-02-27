import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  window.alert("Dear Amjad sb :  This is a reminder that the payment for your software license is now overdue. As per the terms of service, if the outstanding payment is not received within 7 days, your access to the software will be restricted, and the software will be temporarily disabled.Please ensure that the payment is made promptly to avoid any disruption in service. We value your business and are here to assist you if you have any questions or need support regarding the payment process.Thank you for your attention to this matter.")
 
  return (
    <>
      <main className='d-flex justify-content-center align-items-center auth' >
        <Container>
          <Row className='d-flex justify-content-center align-items-center'>
            <Col span={24}>
              <h1 className='display-2 fw-bolder text-light'>
                Welcome To Sonic Express
              </h1>
              <Col span={24} className=' d-flex justify-content-center align-items-center'>
                <Button className='fw-bolder mt-2 d-flex justify-content-center align-items-center border-0' onClick={() => { navigate("/add") }} style={{ backgroundColor: "cyan", color: "black" }}>
                  Get Started
                  <ArrowRightOutlined />
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default Dashboard;