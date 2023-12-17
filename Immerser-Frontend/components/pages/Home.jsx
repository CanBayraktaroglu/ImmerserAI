import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css';
import BotCard from '../BotCard';
import randomimg from '../../src/assets/react.svg';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <BotCard />
                    </Col>
                    <Col>
                        <h1>Welcoming Message</h1>
                    </Col>
                </Row>
                <Row>
                    <div>


                        {/* Carousel */}
                        <Carousel className="carousel-custom">
                            <Carousel.Item>
                                <img className="d-block w-100" src={randomimg} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>First Slide Label</h3>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            {/* ... other carousel items ... */}
                        </Carousel>

                        {/* Feature Cards */}
                        <Container className="my-5">
                            <Row className="g-4">
                                {[...Array(2)].map((_, idx) => (
                                    <Col key={idx} md={4}>
                                        <Card className="feature-card">
                                            <Card.Img variant="top" src={'Immerser-Frontend\src\assets\react.svg'} />
                                            <Card.Body>
                                                <Card.Title>Feature {idx + 1}</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Card.Text>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>

                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Home;