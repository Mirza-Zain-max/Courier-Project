import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  window.alert("Dear Amjad sb, Thank you for your previous payment. This is a reminder that your last installment is still due. Kindly complete the payment within 5 days to avoid service disruption. If the payment is not received, your software access will be temporarily blocked. Please ensure timely payment. Let us know if you need any assistance.");
 
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