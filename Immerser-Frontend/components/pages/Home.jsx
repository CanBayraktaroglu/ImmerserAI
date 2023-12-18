import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import BotCard from '../BotCard';
import { Features } from '../Features';

const Home = () => {


    return (
        <>
            <Row>
                <Col>
                    <BotCard />
                </Col>
            </Row>

            {/* Feature Cards */}
            <Container>
                <Row className="g-4">
                    {Features.map((feature, idx) => (
                        <Col key={idx}>
                            <Card className="feature-card">
                                <Card.Body>
                                    <Card.Title>{feature.name}</Card.Title>
                                    <Card.Text>
                                        {feature.description}
                                    </Card.Text>
                                    <Button href={feature.to} className='featureCardButton'>
                                        Inspect {feature.name}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Home;