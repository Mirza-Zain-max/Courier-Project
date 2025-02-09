// import { ArrowRightOutlined } from '@ant-design/icons';
// import { Button, Col, Row, Typography } from 'antd'
// import React from 'react'
// import { Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const { Title } = Typography;
//     const navigate =useNavigate()
//     return (
//         <>
//           <main className='d-flex justify-content-center align-items-center auth' >
//           <Container>
//                 <Row className='d-flex justify-content-center align-items-center'>
//                     <Col span={24}>
//                         <h1 className='display-2 fw-bolder text-light'>
//                             Welcome To Naveed Courier & Cargo Services
//                         </h1>
//                      <Col span={24} className=' d-flex justify-content-center align-items-center'>
//                      <Button className='fw-bolder mt-2 d-flex justify-content-center align-items-center border-0' onClick={()=>{navigate("/add")}} style={{backgroundColor:"cyan" , color:"black"}}>
//                        Get Started
//                         <ArrowRightOutlined />
//                        </Button>
//                      </Col>
//                     </Col>
//                 </Row>
//             </Container>
//           </main>
//         </>
//     )
// }

// export default Dashboard


import React, { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    shipperName: "",
    shipperContact: "",
    shipperEmail: "",
    shipperAddress: "",
    consigneeName: "",
    consigneeContact: "",
    consigneeAddress: "",
    pieces: "",
    weight: "",
    cashCollect: "",
    insurance: "",
    remarks: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Consignment Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Shipper Details */}
        <div className="col-span-2 bg-gray-100 p-2 font-semibold">Shipper Details</div>
        <input name="shipperName" type="text" placeholder="Shipper Name" className="border p-2 rounded" onChange={handleChange} />
        <input name="shipperContact" type="text" placeholder="Shipper Contact" className="border p-2 rounded" onChange={handleChange} />
        <input name="shipperEmail" type="email" placeholder="Shipper Email" className="border p-2 rounded" onChange={handleChange} />
        <input name="shipperAddress" type="text" placeholder="Shipper Address" className="border p-2 rounded" onChange={handleChange} />
        
        {/* Consignee Details */}
        <div className="col-span-2 bg-gray-100 p-2 font-semibold">Consignee Details</div>
        <input name="consigneeName" type="text" placeholder="Consignee Name" className="border p-2 rounded" onChange={handleChange} />
        <input name="consigneeContact" type="text" placeholder="Consignee Contact" className="border p-2 rounded" onChange={handleChange} />
        <input name="consigneeAddress" type="text" placeholder="Consignee Address" className="border p-2 rounded" onChange={handleChange} />
        
        {/* Package Details */}
        <div className="col-span-2 bg-gray-100 p-2 font-semibold">Package Details</div>
        <input name="pieces" type="number" placeholder="No. of Pieces" className="border p-2 rounded" onChange={handleChange} />
        <input name="weight" type="text" placeholder="Weight (kg)" className="border p-2 rounded" onChange={handleChange} />
        <input name="cashCollect" type="text" placeholder="Cash Collect (Rs.)" className="border p-2 rounded" onChange={handleChange} />
        <input name="insurance" type="text" placeholder="Insurance" className="border p-2 rounded" onChange={handleChange} />
        <textarea name="remarks" placeholder="Remarks" className="col-span-2 border p-2 rounded" onChange={handleChange}></textarea>
        
        {/* Submit Button */}
        <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
