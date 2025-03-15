import React, { useState, useEffect } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography, Modal } from 'antd';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaymentReminder = () => {
  const deadline = new Date('2025-03-20T23:59:59').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [modalVisible, setModalVisible] = useState(false); // Track if modal is shown

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference <= 0) {
      return "00d 00h 00m 00s"; // When time is up
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!modalVisible) {
      setModalVisible(true);

      const modal = Modal.info({
        title: 'Payment Reminder',
        content: (
          <p>
            Dear Amjad sb, Thank you for your previous payment. This is a final reminder that your last installment is still due. 
            Kindly complete the payment by <strong>20-03-2025</strong> to avoid service disruption. If the payment is not received 
            by this date, your website access will be temporarily suspended. Access will be restored once the payment is completed. 
            <br />
            <br />
            ⏳ <strong>Time Left: {timeLeft}</strong>
          </p>
        ),
        okText: 'OK',
        onOk() {}, // Closes when "OK" is clicked
      });

      // Keep updating the countdown in the modal
      const interval = setInterval(() => {
        modal.update({
          content: (
            <p>
              Dear Amjad sb, Thank you for your previous payment. This is a final reminder that your last installment is still due. 
              Kindly complete the payment by <strong>20-03-2025</strong> to avoid service disruption. If the payment is not received 
              by this date, your website access will be temporarily suspended. Access will be restored once the payment is completed. 
              <br />
              <br />
              ⏳ <strong>Time Left: {calculateTimeLeft()}</strong>
            </p>
          ),
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  return null;
};

const Dashboard = () => {
  const { Title } = Typography;
  const navigate = useNavigate();

  return (
    <>
      <PaymentReminder /> {/* Call PaymentReminder to trigger the modal once */}
      <main className='d-flex justify-content-center align-items-center auth'>
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
  );
};

export default Dashboard;
