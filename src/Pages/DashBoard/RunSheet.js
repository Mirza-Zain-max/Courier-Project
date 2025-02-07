import { Button, Card, Col, Input, message, Popconfirm, Row, Select, Typography } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { fireStore } from "../../Config/firebase";
import { collection, addDoc, getDocs, query, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../Context/Auth";
import { merge } from "lodash";

const { Option } = Select;

const RunSheet = () => {
    const { user } = useAuthContext()
    const { Title } = Typography;
    const [riders, setRiders] = useState([]);
    const [shipper, setShipper] = useState([]);
    const [deliveries, setDeliveries] = useState([]);
    const [delivery, setDelivery] = useState({ riderId: "", date: '', cnNumber: '', consigneeName: '' });
    const cnNumberRef = useRef(null);

    useEffect(() => {
        const fetchRiders = async () => {
            const q = query(collection(fireStore, "riders"));
            const querySnapshot = await getDocs(q);
            const ridersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setRiders(ridersList);
            const shipperQuery = query(collection(fireStore, "shipper"));
            const queryShipper = await getDocs(shipperQuery);
            const shipperList = queryShipper.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setRiders(shipperList)
        };
        fetchRiders();
    }, []);

    const handleDeliveryChange = (e, name = null) => {
        if (name) {
            setDelivery((prev) => ({ ...prev, [name]: e }));
        } else {
            const { name, value } = e.target;
            setDelivery((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleDelete = async (riderId) => {
        try {
            await deleteDoc(doc(fireStore, "riders", riderId));
            setRiders((prevRiders) => prevRiders.filter(rider => rider.id !== riderId));
            message.success("Rider deleted successfully!");
        } catch (error) {
            console.error("Error deleting rider: ", error);
            message.error("Failed to delete rider!");
        }
    };
    // const saveDelivery = async (e) => {
    //     e.preventDefault();
    //     if (!delivery.riderId || !delivery.date || !delivery.cnNumber || !delivery.consigneeName) {
    //         message.error('Please fill all fields!');
    //         return;
    //     }

    //     const selectedRider = riders.find(rider => rider.id === delivery.riderId);
    //     const newDelivery = {
    //         ...delivery,
    //         status: "On Route",
    //         userId: user.uid,
    //         riderName: selectedRider ? selectedRider.name : "Unknown",
    //         createdAt: Date.now()
    //     };

    //     try {
    //         const docRef = await addDoc(collection(fireStore, "deliveries"), newDelivery);
    //         setDeliveries((prevDeliveries) => [...prevDeliveries, { id: docRef.id, ...newDelivery }]);
    //         setDelivery((prev) => ({
    //             ...prev,
    //             cnNumber: '',
    //             consigneeName: '',
    //         }));
    //         message.success('Delivery saved successfully!');
    //     } catch (error) {
    //         console.error("Error adding document: ", error);
    //         message.error('Failed to save delivery!');
    //     } finally {
    //         if (cnNumberRef.current) {
    //             cnNumberRef.current.focus();
    //         }
    //     }
    // };
    const saveDelivery = async (e) => {
        e.preventDefault();
        if (!delivery.riderId || !delivery.date || !delivery.cnNumber || !delivery.consigneeName) {
            message.error('Please fill all fields!');
            return;
        }

        try {
            // Check if the CN Number already exists
            const deliveriesQuery = query(collection(fireStore, "deliveries"));
            const querySnapshot = await getDocs(deliveriesQuery);

            const existingDelivery = querySnapshot.docs.find(doc => doc.data().cnNumber === delivery.cnNumber);

            const selectedRider = riders.find(rider => rider.id === delivery.riderId);
            const deliveryData = {
                ...delivery,
                status: "On Route",
                userId: user.uid,
                merge: true,
                riderName: selectedRider ? selectedRider.name : "Unknown",
                updatedAt: Date.now()
            };

            if (existingDelivery) {
                // If CN Number exists, update the existing document
                await updateDoc(doc(fireStore, "deliveries", existingDelivery.id), deliveryData);
                message.success('Delivery updated successfully!');
            } else {
                // If CN Number does not exist, add a new document
                const docRef = await addDoc(collection(fireStore, "deliveries"), deliveryData);
                setDeliveries((prevDeliveries) => [...prevDeliveries, { id: docRef.id, ...deliveryData }]);
                message.success('Delivery saved successfully!');
            }

            // Reset input fields after saving
            setDelivery({ riderId: "", date: "", cnNumber: "", consigneeName: "" });

            // Set focus back to CN Number input
            if (cnNumberRef.current) {
                cnNumberRef.current.focus();
            }

        } catch (error) {
            console.error("Error saving/updating document: ", error);
            message.error('Failed to save delivery!');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (consigneeNameRef.current) {
                consigneeNameRef.current.focus();
            }
        }
    };
    const consigneeNameRef = useRef(null);
    return (
        <main className="d-flex justify-content-center align-items-center auth">
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                        <Card style={{ backgroundColor: "#d6d6d6" }} className="border-2 border-bottom border-black">
                            <Title level={1}>Make Delivery Sheet</Title>
                            <form onSubmit={saveDelivery}>
                                <label className="fw-bolder my-2 me-3">Select Rider:</label>
                                {riders.length === 0 ? (
                                    <p>No riders available</p>
                                ) : (
                                    <Select name="riderId" className="my-2 w-100" value={delivery.riderId} onChange={(value) => handleDeliveryChange(value, "riderId")} showSearch placeholder="Search Rider..."
                                        optionFilterProp="label" Use label instead of children
                                        filterOption={(input, option) =>
                                            option.label.toLowerCase().includes(input.toLowerCase())
                                        }>
                                        {riders.map((rider) => (
                                            <Option key={rider.id} value={rider.id} label={rider.name}>
                                                <span>{rider.name}</span>
                                                <Popconfirm title="Are you sure you want to delete this rider?" onConfirm={() => handleDelete(rider.id)} okText="Yes" cancelText="No" >
                                                    <Button type="link" className="align-self-center" danger>
                                                        Delete
                                                    </Button>
                                                </Popconfirm>
                                            </Option>
                                        ))}
                                    </Select>
                                )}
                                <label className="fw-bolder mb-2">Date:</label>
                                <Input type="date" className="mb-2" name="date" value={delivery.date} onChange={handleDeliveryChange} />
                                <label className="mb-2">CN Number:</label>
                                <Input type="number" className="mb-2" name="cnNumber" value={delivery.cnNumber} onChange={handleDeliveryChange} ref={cnNumberRef} onKeyDown={(e) => handleKeyDown(e, "cnNumber")} />
                                <label className="mb-2">Consignee Name:</label>
                                <Input type="text" className="mb-3" name="consigneeName" value={delivery.consigneeName} onChange={handleDeliveryChange} ref={consigneeNameRef} onKeyDown={(e) => handleKeyDown(e, "submit")} />
                                <Button type="primary" htmlType="submit">Save Delivery</Button>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default RunSheet;