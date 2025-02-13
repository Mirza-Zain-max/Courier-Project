// import { Card, Col, Input, InputNumber, message, Row } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import React, { useEffect, useState } from "react";
// import { Button, Container } from "react-bootstrap";
// // import RiderList from "./RiderList";

// const Boking = () => {
//   const [amount, setAmount] = useState()
//   const [courirs, setCourirs] = useState(() => {
//     const savedCouriers = localStorage.getItem("courirs");
//     return savedCouriers ? JSON.parse(savedCouriers) : [];
//   });
//   const [form, setForm] = useState({ name: "", trackingId: "", status: "", amount: "" });

//   useEffect(() => {
//     const savedCouriers = localStorage.getItem('courirs');
//     if (savedCouriers) {
//       setCourirs(JSON.parse(savedCouriers));
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleAddCourier = () => {
//     if (form.name && form.trackingId && form.status && form.amount) {
//       const timestamp = new Date().toISOString(); // Current date and time
//       const updatedCouriers = [...courirs, { ...form, createdAt: timestamp }];
//       setCourirs(updatedCouriers);
//       localStorage.setItem("courirs", JSON.stringify(updatedCouriers));
//       setForm({ name: "", trackingId: "", status: "", amount: "" });
//       message.success("Courier added successfully!");
//     } else {
//       message.error("Please fill all fields!");
//     }
//   };

//   const handleKeyPress = (event, nextField) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevent form submission
//       const nextInput = document.querySelector(`[name="${nextField}"]`);
//       if (nextInput) {
//         nextInput.focus(); // Move focus to the next input field
//       } else if (nextField === "submit") {
//         handleAddCourier(); // Submit form if last input
//       }
//     }
//   };

//   return (
//     <main className="d-flex justify-content-center align-items-center" >
//       <Container>
//         <Row className="">
//           <Col span={12}>
//             <Card className="border-1 border-black rounded-5">
//               <Row>
//                 <Col span={12} className="px-2 py-1">
//                   <label className="fw-bolder mb-1">Date:</label>
//                   <Input type="date" className="mb-1" name="date" />
//                 </Col>
//                 <Col span={12} className="px-2 py-1">
//                   <label className="mb-1 fw-bolder">CN Number:</label>
//                   <Input type="number" className="mb-1" name="cnNumber" />
//                 </Col>
//               </Row>
//               <Col span={24} className="px-2 py-1">
//                 <label className="mb-1 fw-bolder">Shipper:</label>
//                 <Input className="border-2 rounded-2" type="text" name="name" placeholder="Add Shipment Name" value={form.name} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "trackingId")} />
//               </Col>
//               <Col span={24} className="px-2 py-1">
//                 <label className="mb-1 fw-bolder">Address:</label>
//                 <TextArea className=" border-2 rounded-2" type="number" name="trackingId" placeholder="Enter Your Address" value={form.trackingId} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "status")} />
//               </Col>
//               <Col span={24} className="px-2 py-1">
//                 <label className=" fw-bolder">Contact Number:</label>
//                 <Input className="my-2 border-2 rounded-2" type="text" name="status" placeholder="Courier Status" value={form.status} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "amount")} />
//               </Col>
//             </Card>
//           </Col>
//           <Col span={12}>
//             <Card className="border-1 border-black rounded-5">
//               <Row>
//                 <Col span={24} className="px-2 py-1">
//                   <label className="mb-1 fw-bolder">Consignee Name:</label>
//                   <Input type="number" className="mb-1" name="" />
//                 </Col>
//               </Row>
//               <Col span={24} className="px-2 py-1">
//                 <label className="mb-1 fw-bolder">Address:</label>
//                 <TextArea className=" border-2 rounded-2" type="number" name="trackingId" placeholder="Enter Your Address" value={form.trackingId} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "status")} />
//               </Col>
//               <Col span={24} className="px-2 py-1">
//                 <label className=" fw-bolder">Contact Number:</label>
//                 <Input className="my-2 border-2 rounded-2" type="text" name="status" placeholder="Courier Status" value={form.status} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "amount")} />
//               </Col>
//               <Row className="p-2 wrapper" gutter={6}>
//                 <Col span={3}>
//                   <label className="mb-1 fw-bolder">Origin:</label>
//                   <Input className=" border-2 rounded-2" type="text" name="weight" />
//                 </Col>
//                 <Col span={3}>
//                   <label className="mb-1 fw-bolder">Dest:</label>
//                   <Input className=" border-2 rounded-2" type="text" name="weight" />
//                 </Col>
//                 <Col span={4}>
//                   <label className="mb-1 fw-bolder">Pcs:</label>
//                   <Input className=" border-2 rounded-2" type="number" name="weight" />
//                 </Col>
//                 <Col span={4}>
//                   <label className="mb-1 fw-bolder">Weight:</label>
//                   <Input className=" border-2 rounded-2" type="text" name="weight" />
//                 </Col>
//                 <Col span={4}>
//                   <label className="mb-1 fw-bolder">Description:</label>
//                   <Input className=" border-2 rounded-2" type="text" name="weight" />
//                 </Col>
//                 <Col span={6}>
//                   <label className="mb-1 fw-bolder">Rueeps:</label>
//                   <InputNumber
//                     formatter={(value) => `RS: ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"}
//                     parser={(value) => value.replace(/RS:\s?|,|\/-/g, "")}
//                     value={amount}
//                     onChange={(value) => setAmount(value)}
//                     className="w-100"
//                   />
//                 </Col>
//               </Row>
//             </Card>
//           </Col>

//         </Row>
//       </Container>
//     </main>
//   );
// };

// export default Boking;



import { Card, Col, Input, InputNumber, message, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { fireStore } from "../../Config/firebase"; // Import Firestore
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useAuthContext } from "../../Context/Auth";
import QuotationGenerator from "./pdf-generator";
const Boking = () => {
  const { user } = useAuthContext()
  const [amount, setAmount] = useState();
  const descriptionRef = useRef(null);
  const amountRef = useRef(null);
  const [couriers, setCouriers] = useState([]);
  const [form, setForm] = useState({
    cnNumber: "", date: "", shipperName: "", trackingId: "", contact: "", amount: "", consignee: "",
    consigneeAddress: "", consigneeContact: "", origin: "", destination: "",
    pieces: "", weight: "", description: ""
  });

  useEffect(() => {
    fetchCouriers();
  }, []);

  const fetchCouriers = async () => {
    const querySnapshot = await getDocs(collection(fireStore, "shipper"));
    const couriersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCouriers(couriersList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleAddCourier = async () => {
    const timestamp = new Date().toISOString();

    const newCourier = {
      ...form,
      createdAt: timestamp,
      status: "Booked", // 🔥 Change this to a string
      userId: user.uid,
    };

    console.log("Saving courier:", newCourier);

    try {
      await addDoc(collection(fireStore, "shipper"), newCourier);
      message.success("Courier added successfully!");

      // Reset form
      setForm({
        date: "", cnNumber: "", shipperName: "", trackingId: "", contact: "", consignee: "",
        consigneeAddress: "", consigneeContact: "", origin: "", destination: "",
        pieces: "", weight: "", description: "", amount: ""
      });

      fetchCouriers(); // Refresh the list
      document.querySelector(`[name="date"]`).focus(); // Reset focus to Date input
    } catch (error) {
      console.error("Firestore Error:", error);
      message.error("Error adding courier: " + error.message);
    }
  };

  const handleKeyPress = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
  
      if (nextRef === "submit") {
        handleAddCourier(); // ✅ Form ko submit karein
      } else if (typeof nextRef === "string") {
        const nextInput = document.querySelector(`[name="${nextRef}"]`);
        if (nextInput) {
          nextInput.focus();
        }
      } else if (nextRef && nextRef.current) {
        nextRef.current.focus();
      }
    }
  };
  
  


  return (
    <main className="auth d-flex justify-content-center align-items-center">
      <Container>
        <Row className="my-3">
          <Col md={24} lg={12}>
            <Card className="border-1 border-black rounded-5">
              <Row>
                <Col xs={24} md={24} lg={12} className="px-2 py-1">
                  <label className="fw-bolder w-100 mb-1">Date:</label>
                  <Input type="date" className="" name="date" value={form.date} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "cnNumber")} />
                </Col>
                <Col xs={24} md={24} lg={12} className="px-2 py-1">
                  <label className="mb-1 fw-bolder">CN Number:</label>
                  <Input
                    type="number"
                    name="cnNumber"
                    value={form.cnNumber}
                    onChange={handleChange}
                    onKeyDown={(e) => handleKeyPress(e, "shipperName")}
                  />                </Col>
              </Row>
              <Col span={24} className="px-2 py-1">
                <label className="mb-1 fw-bolder">Shipper:</label>
                <Input type="text" name="shipperName" placeholder="Add Shipment Name" value={form.shipperName} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "trackingId")} />
              </Col>
              <Col span={24} className="px-2 py-1">
                <label className="mb-1 fw-bolder">Address:</label>
                <TextArea name="trackingId" placeholder="Enter Address" value={form.trackingId} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "contact")} />
              </Col>
              <Col span={24} className="px-2 py-1">
                <label className="fw-bolder">Contact Number:</label>
                <Input type="number" name="contact" placeholder="Enter Contact Number" value={form.contact} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "consignee")} />
              </Col>
            </Card>
          </Col>

          <Col lg={12}>
            <Card className="border-1 overflow-auto flex-wrap border-black rounded-5">
              <Row>
                <Col span={24} className="px-2 py-1">
                  <label className="mb-1 fw-bolder">Consignee Name:</label>
                  <Input type="text" name="consignee" value={form.consignee} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "consigneeAddress")} />
                </Col>
              </Row>
              <Col span={24} className="px-2 py-1">
                <label className="mb-1 fw-bolder">Consignee Address:</label>
                <TextArea name="consigneeAddress" value={form.consigneeAddress} placeholder="Enter Address" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "consigneeContact")} />
              </Col>
              <Col span={24} className="px-2 py-1">
                <label className="fw-bolder">Consignee Contact:</label>
                <Input type="number" name="consigneeContact" value={form.consigneeContact} placeholder="Enter Contact Number" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "origin")} />
              </Col>
              <Row className="p-2 wrapper" gutter={6}>
                <Col xs={24} md={6} lg={3}>
                  <label className="mb-1 fw-bolder">Origin:</label>
                  <Input type="text" name="origin" value={form.origin} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "destination")} />
                </Col>
                <Col xs={24} md={6} lg={3}>
                  <label className="mb-1 fw-bolder">Dest:</label>
                  <Input type="text" name="destination" value={form.destination} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "pieces")} />
                </Col>
                <Col xs={24} md={6} lg={4}>
                  <label className="mb-1 fw-bolder">Pcs:</label>
                  <Input type="number" name="pieces" value={form.pieces} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "weight")} />
                </Col>
                <Col xs={24} md={6} lg={4}>
                  <label className="mb-1 fw-bolder">Weight:</label>
                  <Input
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    onKeyDown={(e) => handleKeyPress(e, descriptionRef)}
                  />
                </Col>
                <Col xs={24} md={12} lg={5}>
                  <label className="mb-1 fw-bolder">Description:</label>
                  <Input
                    type="text"
                    name="description"
                    ref={descriptionRef}
                    value={form.description}
                    onChange={handleChange}
                    onKeyDown={(e) => handleKeyPress(e, amountRef)}
                  />
                </Col>



                {/* <Col xs={24} md={12} lg={5}>
                  <label className="mb-1 fw-bolder">Amount (RS):</label>
                  <InputNumber
                    name="amount"
                    formatter={(value) => `RS: ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"}
                    parser={(value) => value.replace(/RS:\s?|,|\/-/g, "")}
                    value={form.amount}
                    onChange={(value) => setForm({ ...form, amount: value })}
                    onKeyDown={(e) => handleKeyPress(e, "submit")} // Move to submit on Enter
                    className="w-100"
                  />
                </Col> */}
                <Col xs={24} md={12} lg={5}>
                  <label className="mb-1 fw-bolder">Amount (RS):</label>
                  <div tabIndex={0} onKeyDown={(e) => handleKeyPress(e, "submit")}>
                    <InputNumber
                      name="amount"
                      ref={amountRef}
                      formatter={(value) => `RS: ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"}
                      parser={(value) => value.replace(/RS:\s?|,|\/-/g, "")}
                      value={form.amount}
                      onKeyDown={(e) => handleKeyPress(e, "submit")}
                      onChange={(value) => setForm({ ...form, amount: value })}
                      className="w-100"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center align-items-center">
                <Col span={10}>
                  <Button variant="primary" className="w-75 mt-2 p-1 fs-6" onClick={handleAddCourier}>Save Data</Button>
                </Col>
                <Col span={10}>
                  <QuotationGenerator form={form} onClick={handleAddCourier} />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </main >
  );
};

export default Boking;
