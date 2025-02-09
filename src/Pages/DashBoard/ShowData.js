// import React, { useEffect, useRef, useState } from "react";
// import { Table, Select, DatePicker, Button, Modal, Input, message, Form, Row, Col, Card, Typography, Popconfirm } from "antd";
// import { collection, getDocs, deleteDoc, doc, updateDoc, writeBatch, query, orderBy, where } from "firebase/firestore";
// import { fireStore } from "../../Config/firebase";
// import { DeleteFilled, EditFilled } from "@ant-design/icons";
// import { Container } from "react-bootstrap";

// // const { Option } = Select;

// const ShowData = () => {
//     const { Title } = Typography;
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [riderList, setRiderList] = useState([]);
//     const [riders, setRiders] = useState([]);
//     const [newReceiver, setNewReceiver] = useState({});
//     const [selectedRider, setSelectedRider] = useState(null);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [page, setPage] = useState(1);
//     const [searchValue, setSearchValue] = useState('');
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [editRecord, setEditRecord] = useState(null);
//     const [editingRecord, setEditingRecord] = useState(null)
//     const [form] = Form.useForm();
//     const [editedValues, setEditedValues] = useState({});
//     const inputRefs = useRef([]);

//     useEffect(() => {
//         fetchDeliveries();
//     }, []);
//     useEffect(() => {
//         console.log("Updated Data in State:", data);
//     }, [data]);
//     // const fetchDeliveries = async () => {
//     //     setLoading(true);
//     //     try {
//     //         const queryData = query(collection(fireStore, "deliveries"), orderBy('createdAt'))
//     //         const querySnapshot = await getDocs(queryData);
//     //         const deliveryList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

//     //         setData(deliveryList);
//     //         setFilteredData(deliveryList);
//     //         const uniqueRiders = [];
//     //         const riderMap = new Map();
//     //         deliveryList.forEach(delivery => {
//     //             if (delivery.riderId && !riderMap.has(delivery.riderId)) {
//     //                 riderMap.set(delivery.riderId, { id: delivery.riderId, name: delivery.riderName || "Unknown" });
//     //             }
//     //         });
//     //         uniqueRiders.push(...riderMap.values());
//     //         setRiderList(uniqueRiders);
//     //     } catch (error) {
//     //         console.error("Error fetching deliveries:", error);
//     //     }
//     //     setLoading(false);
//     // };
//     const fetchDeliveries = async () => {
//         setLoading(true);
//         try {
//             const querySnapshot = await getDocs(collection(fireStore, "deliveries"));
//             const deliveryList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
//             // Fetch riders
//             const riderQuerySnapshot = await getDocs(collection(fireStore, "riders"));
//             const riders = riderQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
//             // Create a map for fast lookup
//             const riderMap = new Map(riders.map(rider => [rider.id, rider.name || "Unknown"]));
    
//             // Assign rider names to deliveries
//             const updatedDeliveries = deliveryList.map(delivery => ({
//                 ...delivery,
//                 riderName: riderMap.get(delivery.riderId) || "Unknown",
//             }));
    
//             setData(updatedDeliveries);
//             setFilteredData(updatedDeliveries);
//             setRiderList(riders);
//         } catch (error) {
//             console.error("Error fetching deliveries:", error);
//         }
//         setLoading(false);
//     };
    
  
    
    
//     const applyFilters = () => {
//         let filtered = [...data];
//         if (selectedRider) {
//             filtered = filtered.filter(delivery => delivery.riderId === selectedRider);
//         }
//         if (selectedDate) {
//             const selectedDateString = selectedDate.format("YYYY-MM-DD");
//             filtered = filtered.filter(delivery => delivery.date === selectedDateString);
//         }
//         setFilteredData(filtered);
//     };
//     const handleEdit = (record) => {
//         setEditingRecord(record);
//         form.setFieldsValue({
//             name: record.receiverName,
//             date: record.date,
//             consigneeName: record.consigneeName
//         });
//         setIsModalVisible(true);
//     };
//     const handleDelete = async (id) => {
//         try {
//             await deleteDoc(doc(fireStore, "deliveries", id));
//             setData(prevData => prevData.filter(item => item.id !== id));
//             setFilteredData(prevFiltered => prevFiltered.filter(item => item.id !== id));
//             message.success("Delivery deleted successfully!");
//         } catch (error) {
//             console.error("Error deleting delivery:", error);
//             message.error("Failed to delete delivery!");
//         }
//     };
//     const handleKeyPress = (e, index) => {
//         if (e.key === "Enter") {
//             e.preventDefault(); // Prevents default submit behavior
//             const nextInput = inputRefs.current[index + 1];
//             if (nextInput) {
//                 nextInput.focus(); // Moves focus to the next input field
//             }
//         }
//     };

//     const handleReciverChange = (e, cnNumber) => { const { value } = e.target; setNewReceiver((prev) => ({ ...prev, [cnNumber]: value })) };

//     // const handleSaveReciver = async () => {
//     //     try {
//     //         const batch = writeBatch(fireStore);
//     //         filteredData.forEach((item) => {
//     //             if (newReceiver[item.cnNumber]) {
//     //                 const docRef = doc(fireStore, "deliveries", item.id);
//     //                 batch.update(docRef, { receiverName: newReceiver[item.cnNumber] });
//     //             }
//     //         });
//     //         await batch.commit();
//     //         message.success("Receiver names saved successfully!");
//     //     } catch (error) {
//     //         console.error("Error saving receiver names: ", error);
//     //         message.error("Failed to save receiver names!");
//     //     }
//     // };

//     const handleSaveReciver = async () => {
//         try {
//             const batch = writeBatch(fireStore);
//             for (const item of filteredData) {
//                 if (newReceiver[item.cnNumber]) {
//                     const deliveryRef = doc(fireStore, "deliveries", item.id);
//                     batch.update(deliveryRef, { receiverName: newReceiver[item.cnNumber] });
    
//                     console.log(`Updating delivery ${item.id} with receiverName: ${newReceiver[item.cnNumber]}`);
//                 }
//             }
//             await batch.commit();
//             message.success("Receiver names saved successfully!");
//             fetchDeliveries();  // Refresh data after saving
//         } catch (error) {
//             console.error("Error saving receiver names: ", error);
//             message.error("Failed to save receiver names!");
//         }
//     };
    
//     const handleSave = async () => {
//         if (editRecord) {
//             await updateDoc(doc(fireStore, "deliveries", editRecord.id), editedValues);
//             fetchDeliveries();
//             setIsModalVisible(false);
//         }
//     };
//     const handleModalOk = async () => {
//         try {
//             const values = await form.validateFields();
//             if (!editingRecord) return; // Ensure there's a record to update

//             const docRef = doc(fireStore, "deliveries", editingRecord.id);
//             await updateDoc(docRef, {
//                 receiverName: values.name,
//                 date: values.date,
//                 consigneeName: values.consigneeName,
//             });
//             await fetchDeliveries(); // Fresh data reload karein
//             setIsModalVisible(false);
//             message.success("Record updated successfully!");
//         } catch (error) {
//             console.error("Error updating record: ", error);
//             message.error("Failed to update record!");
//         }
//     };

//     const onSearch = (value) => {
//         let filtered = [...data];
//         if (value) {
//             filtered = filtered.filter((delivery) =>
//                 delivery.cnNumber?.toString().toLowerCase().includes(value.toLowerCase())
//             );
//         }
//         setFilteredData(filtered);
//     };

//     const handleSearchClick = () => {
//         let filtered = [...data];
//         if (searchValue) {
//             filtered = filtered.filter((delivery) =>
//                 delivery.cnNumber?.toString().toLowerCase().includes(searchValue.toLowerCase())
//             );
//             setFilteredData(filtered);
//         }
//         else {
//             setFilteredData(data);
//         }
//     };

//     const handleSearchChange = (e) => {
//         const value = e.target.value;
//         setSearchValue(value);
//         if (!value) {
//             setFilteredData(data);
//         }
//     };

//     const handleModalCancel = () => { setIsModalVisible(false) };
//     const columns = [
//         {
//             title: "#",
//             key: "index",
//             render: (_, __, index) => index + 1,
//         },
//         {
//             title: "Rider Name",
//             key: "riderName",
//             render: (record) => {
//                 const rider = riderList.find((r) => r.id === record.riderId);
//                 return rider ? rider.name : "Unknown";
//             },
//         },
//         {
//             title: "CN Number",
//             dataIndex: "cnNumber",
//             key: "cnNumber",
//         },
//         {
//             title: "Consignee Name",
//             dataIndex: "consigneeName",
//             key: "consigneeName",
//         },
//         {
//             title: "Receiver Name",
//             key: "receiverName",
//             render: (record, _, index) => (
//                 <Input
//                     className="border-0"
//                     defaultValue={record.receiverName}
//                     ref={(ref) => (inputRefs.current[index] = ref)}
//                     onChange={(e) => handleReciverChange(e, record.cnNumber)}
//                     onKeyDown={(e) => handleKeyPress(e, index)}
//                 />

//             ),
//         },
//         {
//             title: "Date",
//             dataIndex: "date",
//             key: "date",
//         },
//         {
//             title: "Actions",
//             key: "actions",
//             render: (_, record) => (
//                 <>
//                     <Button className="bg-success text-light" onClick={() => handleEdit(record)}>
//                         <EditFilled />
//                     </Button>
//                     <Popconfirm
//                         title="Are you sure you want to delete this rider?"
//                         onConfirm={() => handleDelete(record.id)}
//                         okText="Yes"
//                         cancelText="No"
//                     >
//                         <Button className="bg-danger  text-light" danger>
//                             <DeleteFilled />
//                         </Button>
//                     </Popconfirm>
//                 </>
//             ),
//         },
//     ];

//     return (
//         <main className="auth">
//             <Container className="my-3" >
//                 <Row>
//                     <Col span={24} className="mt-5">
//                         <Title level={1} className="text-light"> Show Data</Title>
//                         <Card className="border-1 mt-5 border-black">
//                             <Card className="border-0">
//                                 <Row>
//                                     <Col span={12}>
//                                         <Select
//                                             placeholder="Select Rider"
//                                             onChange={(value) => setSelectedRider(value)}
//                                             showSearch
//                                             optionFilterProp="label"
//                                             filterOption={(input, option) =>
//                                                 option?.label?.toLowerCase().includes(input.toLowerCase())
//                                             }
//                                             allowClear
//                                             className="w-75"
//                                             options={[
//                                                 { value: null, label: "All Riders" },
//                                                 ...riderList.map(rider => ({ value: rider.id, label: rider.name }))
//                                             ]}
//                                         />

//                                     </Col>
//                                     <Col span={12}>
//                                         <DatePicker className="border-1 w-75 border-black" placeholder="Select Date" onChange={setSelectedDate} />
//                                         <Button className="ms-2 bg-black text-light" onClick={applyFilters}>Apply Filters</Button>
//                                     </Col>
//                                     <Col span={12} className="mt-3">
//                                         <Input className="border-1 w-75 border-black" placeholder="Enter CN Number" value={searchValue} onChange={handleSearchChange} allowClear />
//                                         <Button type="primary" className="ms-2" onClick={handleSearchClick}>
//                                             Search
//                                         </Button>
//                                     </Col>
//                                     <Col span={12} className="mt-3">
//                                         <Button className=" bg-success text-light ms-2" onClick={handleSaveReciver}>
//                                             Save Receiver Names
//                                         </Button>
//                                     </Col>
//                                 </Row>
//                             </Card>
//                             <Table bordered className="border-black border-1  "
//                                 dataSource={filteredData.map((item, index) => ({ ...item, key: item.id || index }))}
//                                 columns={columns}
//                                 loading={loading}
//                                 pagination={{
//                                     current: page,
//                                     pageSize: 20,
//                                     showSizeChanger: false,
//                                     onChange: (newPage) => setPage(newPage),
//                                 }}
//                             />

//                             <Modal title="Edit Record" visible={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
//                                 <Form form={form} layout="vertical">
//                                     <Form.Item name="name" label="Receiver Name" rules={[{ required: true, message: 'Please input the receiver name!' }]}>
//                                         <Input />
//                                     </Form.Item>
//                                     <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please input the date!' }]}>
//                                         <Input />
//                                     </Form.Item>
//                                     <Form.Item name="consigneeName" label="Consignee Name" rules={[{ required: true, message: 'Please input the consignee name!' }]}>
//                                         <Input />
//                                     </Form.Item>
//                                 </Form>
//                             </Modal>

//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>

//         </main>
//     );
// };

// export default ShowData;

import React, { useEffect, useRef, useState } from "react";
import { Table, Select, DatePicker, Button, Modal, Input, message, Form, Row, Col, Card, Typography, Popconfirm } from "antd";
import { collection, deleteDoc, doc, updateDoc, writeBatch, query, orderBy, onSnapshot, getDoc } from "firebase/firestore";
import { fireStore } from "../../Config/firebase";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Container } from "react-bootstrap";

const ShowData = () => {
    const { Title } = Typography;
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [riderList, setRiderList] = useState([]);
    const [selectedRider, setSelectedRider] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [form] = Form.useForm();
    const [newReceiver, setNewReceiver] = useState({});
    const inputRefs = useRef([]);

    // useEffect(() => {
    //     const fetchData = () => {
    //         const deliveriesRef = collection(fireStore, "deliveries");
    //         const q = query(deliveriesRef, orderBy("createdAt"));
    //         const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //             const deliveryList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //             setData(deliveryList);
    //             setFilteredData(deliveryList);
    //         });
    //         return unsubscribe;
    //     };
    useEffect(() => {
        const fetchData = () => {
            const deliveriesRef = collection(fireStore, "deliveries");
            const shipperRef = collection(fireStore, "shipper");
    
            const deliveriesQuery = query(deliveriesRef, orderBy("createdAt"));
            const shipperQuery = query(shipperRef, orderBy("createdAt"));
    
            // Listen to "deliveries" collection
            const unsubscribeDeliveries = onSnapshot(deliveriesQuery, (querySnapshot) => {
                const deliveryList = querySnapshot.docs.map(doc => ({ id: doc.id, source: "deliveries", ...doc.data() }));
    
                // Listen to "shipper" collection
                const unsubscribeShipper = onSnapshot(shipperQuery, (shipperSnapshot) => {
                    const shipperList = shipperSnapshot.docs.map(doc => ({ id: doc.id, source: "shipper", ...doc.data() }));
    
                    // Combine both data sources
                    const combinedData = [...deliveryList, ...shipperList];
    
                    setData(combinedData);
                    setFilteredData(combinedData);
                });
    
                return unsubscribeShipper;
            });
    
            return () => {
                unsubscribeDeliveries();
            };
        };
    
        const unsubscribe = fetchData();
        return () => unsubscribe();
    }, []);
    
    

    //     const unsubscribe = fetchData();
    //     return () => unsubscribe();
    // }, []);

    const applyFilters = () => {
        let filtered = [...data];
        if (selectedRider) {
            filtered = filtered.filter(delivery => delivery.riderId === selectedRider);
        }
        if (selectedDate) {
            const selectedDateString = selectedDate.format("YYYY-MM-DD");
            filtered = filtered.filter(delivery => delivery.date === selectedDateString);
        }
        setFilteredData(filtered);
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(fireStore, "deliveries", id));
            message.success("Delivery deleted successfully!");
        } catch (error) {
            console.error("Error deleting delivery:", error);
            message.error("Failed to delete delivery!");
        }
    };

    // const handleSaveReciver = async () => {
    //     try {
    //         const batch = writeBatch(fireStore);
    //         for (const item of filteredData) {
    //             if (newReceiver[item.cnNumber]) {
    //                 const deliveryRef = doc(fireStore, "deliveries", item.id);
    //                 batch.update(deliveryRef, { receiverName: newReceiver[item.cnNumber] });
    //             }
    //         }
    //         await batch.commit();
    //         message.success("Receiver names saved successfully!");
    //     } catch (error) {
    //         console.error("Error saving receiver names: ", error);
    //         message.error("Failed to save receiver names!");
    //     }
    // };

    // const handleSaveReciver = async () => {
    //     try {
    //         console.log("Filtered Data:", filteredData);
    //         console.log("New Receiver Data:", newReceiver);
    
    //         const batch = writeBatch(fireStore);
    //         let hasUpdates = false; // Track if there are updates
    
    //         // for (const item of filteredData) {
    //         //     console.log("Processing item:", item); // Debugging
    //         //     if (newReceiver[item.cnNumber]) {
    //         //         console.log(`Updating receiver for CN: ${item.cnNumber}, ID: ${item.id}`);
    
    //         //         if (!item.id) {
    //         //             console.error(`Skipping update: Missing ID for CN: ${item.cnNumber}`);
    //         //             continue; // Skip this iteration if item.id is missing
    //         //         }
    
    //         //         const deliveryRef = doc(fireStore, "deliveries", item.id);
    //         //         batch.update(deliveryRef, { receiverName: newReceiver[item.cnNumber] });
    //         //         hasUpdates = true;
    //         //     }
    //         // }
    //         for (const item of filteredData) {
    //             if (!item.id) continue;
            
    //             const deliveryRef = doc(fireStore, "deliveries", item.id);
    //             const shipperRef = doc(fireStore, "shipper", item.id); // Also update shipper
            
    //             const deliverySnap = await getDoc(deliveryRef);
    //             const shipperSnap = await getDoc(shipperRef);
            
    //             if (deliverySnap.exists()) {
    //                 batch.update(deliveryRef, { receiverName: newReceiver[item.cnNumber] });
    //                 hasUpdates = true;
    //             }
            
    //             if (shipperSnap.exists()) {
    //                 batch.update(shipperRef, { receiverName: newReceiver[item.cnNumber] });
    //                 hasUpdates = true;
    //             }
    //         }
            
    
    //         if (!hasUpdates) {
    //             message.warning("No receiver names to update.");
    //             return;
    //         }
    
    //         await batch.commit();
    //         message.success("Receiver names saved successfully!");
    //     } catch (error) {
    //         console.error("Error saving receiver names: ", error);
    //         message.error("Failed to save receiver names!");
    //     }
    // };
    
    // const handleSaveReciver = async () => {
    //     try {
    //         console.log("🔍 Checking filteredData:", filteredData);
    //         console.log("🔍 Checking newReceiver:", newReceiver);
    
    //         const batch = writeBatch(fireStore);
    //         let hasUpdates = false; // Track if updates exist
    
    //         for (const item of filteredData) {
    //             if (!item.id) {
    //                 console.error(`🚨 Skipping update: Missing ID for CN: ${item.cnNumber}`);
    //                 continue;
    //             }
    
    //             // Check if receiver name exists for this CN number
    //             if (!newReceiver[item.cnNumber]) {
    //                 console.warn(`⚠️ No receiver name found for CN: ${item.cnNumber}, skipping.`);
    //                 continue;
    //             }
    
    //             // Check if the document exists before updating
    //             const deliveryRef = doc(fireStore, "deliveries", item.id);
    //             const shipperRef = doc(fireStore, "shipper", item.id); // Also check shipper collection
    
    //             const deliverySnap = await getDoc(deliveryRef);
    //             const shipperSnap = await getDoc(shipperRef);
    
    //             if (deliverySnap.exists()) {
    //                 console.log(`✅ Updating delivery for CN: ${item.cnNumber}`);
    //                 batch.update(deliveryRef, { receiverName: newReceiver[item.cnNumber] });
    //                 hasUpdates = true;
    //             } else {
    //                 console.warn(`⚠️ Delivery document not found: ${item.id}, skipping update.`);
    //             }
    
    //             if (shipperSnap.exists()) {
    //                 console.log(`✅ Updating shipper for CN: ${item.cnNumber}`);
    //                 batch.update(shipperRef, { receiverName: newReceiver[item.cnNumber] });
    //                 hasUpdates = true;
    //             } else {
    //                 console.warn(`⚠️ Shipper document not found: ${item.id}, skipping update.`);
    //             }
    //         }
    
    //         if (!hasUpdates) {
    //             message.warning("⚠️ No receiver names to update.");
    //             return;
    //         }
    
    //         await batch.commit();
    //         message.success("✅ Receiver names saved successfully!");
    //     } catch (error) {
    //         console.error("❌ Error saving receiver names: ", error);
    //         message.error("Failed to save receiver names!");
    //     }
    // };
    
    // const handleSaveReciver = async () => {
    //     try {
    //         console.log("🔍 Checking filteredData:", filteredData);
    //         console.log("🔍 Checking newReceiver:", newReceiver);
    
    //         const batch = writeBatch(fireStore);
    //         let hasUpdates = false; // Track if updates exist
    
    //         for (const item of filteredData) {
    //             if (!item.id) {
    //                 console.error(`🚨 Skipping update: Missing ID for CN: ${item.cnNumber}`);
    //                 continue;
    //             }
    
    //             // Check if receiver name exists for this CN number
    //             if (!newReceiver[item.cnNumber]) {
    //                 console.warn(`⚠️ No receiver name found for CN: ${item.cnNumber}, skipping.`);
    //                 continue;
    //             }
    
    //             // Check if the document exists before updating
    //             const deliveryRef = doc(fireStore, "deliveries", item.id);
    //             const shipperRef = doc(fireStore, "shipper", item.id); // Also check shipper collection
    
    //             const deliverySnap = await getDoc(deliveryRef);
    //             const shipperSnap = await getDoc(shipperRef);
    
    //             const updateData = { 
    //                 receiverName: newReceiver[item.cnNumber], 
    //                 status: <span className="text-success">Delivered</span>,                    
    //             };
    
    //             if (deliverySnap.exists()) {
    //                 console.log(`✅ Updating delivery for CN: ${item.cnNumber}`);
    //                 batch.update(deliveryRef, updateData);
    //                 hasUpdates = true;
    //             } else {
    //                 console.warn(`⚠️ Delivery document not found: ${item.id}, skipping update.`);
    //             }
    
    //             if (shipperSnap.exists()) {
    //                 console.log(`✅ Updating shipper for CN: ${item.cnNumber}`);
    //                 batch.update(shipperRef, updateData);
    //                 hasUpdates = true;
    //             } else {
    //                 console.warn(`⚠️ Shipper document not found: ${item.id}, skipping update.`);
    //             }
    //         }
    
    //         if (!hasUpdates) {
    //             message.warning("⚠️ No receiver names to update.");
    //             return;
    //         }
    
    //         await batch.commit();
    //         message.success("✅ Receiver names saved and status updated to Delivered!");
    //     } catch (error) {
    //         console.error("❌ Error saving receiver names: ", error);
    //         message.error("Failed to save receiver names!");
    //     }
    // };
    const handleSaveReciver = async () => {
        try {
            console.log("🔍 Checking filteredData:", filteredData);
            console.log("🔍 Checking newReceiver:", newReceiver);
    
            const batch = writeBatch(fireStore);
            let hasUpdates = false;
    
            for (const item of filteredData) {
                if (!item.id) continue;
    
                const deliveryRef = doc(fireStore, "deliveries", item.id);
                const docSnap = await getDoc(deliveryRef);
    
                if (docSnap.exists()) {
                    batch.update(deliveryRef, { 
                        receiverName: newReceiver[item.cnNumber], 
                        status: "Delivered" // Also updating status
                    });
                    hasUpdates = true;
                } else {
                    console.warn(`⚠️ Document not found: ${item.id}, skipping.`);
                }
            }
    
            if (!hasUpdates) {
                message.warning("⚠️ No receiver names to update.");
                return;
            }
    
            await batch.commit();
            message.success("✅ Receiver names saved successfully!");
        } catch (error) {
            console.error("❌ Error saving receiver names: ", error);
            message.error("Failed to save receiver names!");
        }
    };
    
    

    const handleModalOk = async () => {
        try {
            const values = await form.validateFields();
            if (!editingRecord) return;
            const docRef = doc(fireStore, "deliveries", editingRecord.id);
            await updateDoc(docRef, {
                receiverName: values.name,
                date: values.date,
                consigneeName: values.consigneeName,
            });
            setIsModalVisible(false);
            message.success("Record updated successfully!");
        } catch (error) {
            console.error("Error updating record: ", error);
            message.error("Failed to update record!");
        }
    };

    const columns = [
        { title: "#", key: "index", render: (_, __, index) => index + 1 },
        { title: "CN Number", dataIndex: "cnNumber", key: "cnNumber" },
        { title: "Shipper Name", dataIndex: "shipperName", key: "shipperName" },
        { title: "Rider Name", dataIndex: "riderName", key: "riderName" },
        { 
            title: "Consignee Name", 
            key: "consignee",
            render: (record) => record.consignee || record.consigneeName 
        },        
        {
            title: "Receiver Name",
            key: "receiverName",
            render: (record, _, index) => (
                <Input
                    defaultValue={record.receiverName}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    onChange={(e) => setNewReceiver(prev => ({ ...prev, [record.cnNumber]: e.target.value }))}
                />
            ),
        },
        { title: "Date", dataIndex: "date", key: "date" },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <>
                    <Button 
                        key={`edit-${record.id}`} 
                        className="bg-success text-light me-2" 
                        onClick={() => setEditingRecord(record)}
                    >
                        <EditFilled />
                    </Button>
                    
                    <Popconfirm 
                        title="Are you sure?" 
                        onConfirm={() => handleDelete(record.id)} 
                        okText="Yes" 
                        cancelText="No"
                        className="mx-2"
                    >
                        <Button key={`delete-${record.id}`} className="bg-danger text-light" danger>
                            <DeleteFilled />
                        </Button>
                    </Popconfirm>
                </>
            )
            
        },
    ];

    return (
        <Container>
            <Row>
                <Col span={24}>
                    <Title level={1}>Show Data</Title>
                    <Card>
                        <Row>
                            <Col span={12}>
                                <Select placeholder="Select Rider" onChange={setSelectedRider} allowClear className="w-75" />
                            </Col>
                            <Col span={12}>
                                <DatePicker onChange={setSelectedDate} className="w-75" />
                                <Button onClick={applyFilters}>Apply Filters</Button>
                            </Col>
                        </Row>
                        <Button onClick={handleSaveReciver} className="bg-success text-light mt-3">Save Receiver Names</Button>
                        <Table dataSource={filteredData} columns={columns} pagination={{ pageSize: 20 }} />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ShowData;
