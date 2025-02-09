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
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { fireStore } from "../../Config/firebase"; // Import Firestore
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useAuthContext } from "../../Context/Auth";
import QuotationGenerator from "./pdf-generator";
const quotationData= {
  "_id": "67a490d5e38080315161438f",
  "quoteNo": "QUOT7941332470",
  "fname": "titanium",
  "lname": "Admin",
  "email": "titanium.admin123@gmail.com",
  "phone": "00000",
  "notes": "",
  "quote": [
      {
          "uniqueID": "Titanium/Concentric Reducer/Grade 2  CP/4/6.000\" x 3.000\" \r\nS40",
          "productForm": "Concentric Reducer",
          "grade": "Grade 2  CP",
          "primaryDimension": "6.000\" x 3.000\" \r\nS40",
          "primaryDimTol": "",
          "quantity": "20",
          "prices": {
              "priceLabel": "20",
              "price": "368",
              "_id": "67a481f9ae75cbfc3d12bca8"
          },
          "pricesId": "67a481f9ae75cbfc3d12bc94",
          "specifications": "Per ASTM, ANSI, and MSS SP-43 Specifications",
          "alloyFamily": "Titanium",
          "_id": "67a490d5e380803151614390"
      },
      {
          "uniqueID": "Alloy Steel/Round Bar/4130/663/Ø 0.6875\"",
          "productForm": "Round Bar",
          "grade": "4130",
          "primaryDimension": "Ø 0.6875\"",
          "primaryDimTol": "0.002\"",
          "lengthTolerance": "24.00\"",
          "length": "144.00\"",
          "quantity": "20",
          "prices": {
              "priceLabel": "$/lb. Sales Price for 10.01  to 20 lbs.",
              "price": "5",
              "_id": "67a48208ae75cbfc3d130979"
          },
          "pricesId": "67a48208ae75cbfc3d130972",
          "specifications": "Cold Finish Normalized, Per AMS 6370, AMS-S-6758, ASTM A331",
          "uom": "lb",
          "alloyFamily": "Alloy Steel",
          "_id": "67a490d5e380803151614391"
      }
  ],
  "totalAmount": "7460.00",
  "user": {
      "_id": "678a5e55a8a6322819c389e4",
      "fname": "titanium",
      "lname": "Admin",
      "email": "titanium.admin123@gmail.com",
      "phone": "00000"
  },
  "status": "pending",
  "createdAt": "2025-02-06T10:37:09.436Z",
  "updatedAt": "2025-02-06T10:37:09.436Z",
  "__v": 0
}
const Boking = () => {
  const { user } = useAuthContext()
  const [amount, setAmount] = useState();
  const [couriers, setCouriers] = useState([]);
  const [form, setForm] = useState({
    cnNumber: "", date: "", shipperName: "", trackingId: "", status: "", amount: "", consignee: "",
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
        cnNumber: "", date: "", shipperName: "", trackingId: "", status: "", amount: "", consignee: "",
        consigneeAddress: "", consigneeContact: "", origin: "", destination: "",
        pieces: "", weight: "", description: ""
      });

      fetchCouriers(); // Refresh the list
      document.querySelector(`[name="date"]`).focus(); // Reset focus to Date input
    } catch (error) {
      console.error("Firestore Error:", error);
      message.error("Error adding courier: " + error.message);
    }
};




  const handleKeyPress = (event, nextField) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const nextInput = document.querySelector(`[name="${nextField}"]`);
      if (nextInput) {
        nextInput.focus();
      } else if (nextField === "submit") {
        handleAddCourier();
      }
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col span={12}>
            <Card className="border-1 border-black rounded-5">
              <Row>
                <Col span={12} className="px-2 py-1">
                  <label className="fw-bolder mb-1">Date:</label>
                  <Input type="date" name="date" value={form.date} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "cnNumber")} />
                </Col>
                <Col span={12} className="px-2 py-1">
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
                <TextArea name="trackingId" placeholder="Enter Address" value={form.trackingId} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "status")} />
              </Col>
              <Col span={24} className="px-2 py-1">
                <label className="fw-bolder">Contact Number:</label>
                <Input type="text" name="status" placeholder="Enter Contact Number" value={form.status} onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "consignee")} />
              </Col>
            </Card>
          </Col>

          <Col span={12}>
            <Card className="border-1 border-black rounded-5">
              <Row>
                <Col span={24} className="px-2 py-1">
                  <label className="mb-1 fw-bolder">Consignee Name:</label>
                  <Input type="text" name="consignee" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "consigneeAddress")} />
                </Col>
              </Row>
              <Col span={24} className="px-2 py-1">
                <label className="mb-1 fw-bolder">Consignee Address:</label>
                <TextArea name="consigneeAddress" placeholder="Enter Address" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "consigneeContact")} />
              </Col>
              <Col span={24} className="px-2 py-1">
                <label className="fw-bolder">Consignee Contact:</label>
                <Input type="text" name="consigneeContact" placeholder="Enter Contact Number" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "origin")} />
              </Col>
              <Row className="p-2 wrapper" gutter={6}>
                <Col span={3}>
                  <label className="mb-1 fw-bolder">Origin:</label>
                  <Input type="text" name="origin" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "destination")} />
                </Col>
                <Col span={3}>
                  <label className="mb-1 fw-bolder">Dest:</label>
                  <Input type="text" name="destination" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "pieces")} />
                </Col>
                <Col span={4}>
                  <label className="mb-1 fw-bolder">Pcs:</label>
                  <Input type="number" name="pieces" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "weight")} />
                </Col>
                <Col span={4}>
                  <label className="mb-1 fw-bolder">Weight:</label>
                  <Input type="text" name="weight" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "description")} />
                </Col>
                <Col span={4}>
                  <label className="mb-1 fw-bolder">Description:</label>
                  <Input type="text" name="description" onChange={handleChange} onKeyDown={(e) => handleKeyPress(e, "amount")} />
                </Col>
                <Col span={6}>
                  <label className="mb-1 fw-bolder">Amount (RS):</label>
                  <InputNumber
                    formatter={(value) => `RS: ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"}
                    parser={(value) => value.replace(/RS:\s?|,|\/-/g, "")}
                    value={form.amount}
                    onChange={(value) => setForm({ ...form, amount: value })}
                    onKeyDown={(e) => handleKeyPress(e, "submit")}
                    className="w-100"
                  />
                </Col>
              </Row>
              <div className="text-center mt-3">
                <Button variant="primary" >Save as PDF</Button>
                <Button variant="primary" onClick={handleAddCourier}>Save Data</Button>
              </div>
              <QuotationGenerator quotationData={quotationData} />
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Boking;
