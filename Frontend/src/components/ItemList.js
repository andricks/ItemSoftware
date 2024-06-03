import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Table, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los ítems!', error);
            });
    }, []);

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
                            <h1>Lista de Ítems</h1>
                            <Button variant="light" onClick={() => navigate('/create')}>
                                Crear Ítem
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => (
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ItemList;
