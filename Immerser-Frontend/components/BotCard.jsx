import { React, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import '../styles/Card.css';
import backgroundimg from '../src/assets/screentap23.jpg';


const BotCard = () => {
    return (
        <>
            <Card className='custom-card'>
                <Card.Img variant="top" src={backgroundimg} />
                <Card.Body>
                    <Card.Title>ImmerserAI</Card.Title>
                    <Card.Text>
                        An immersive and dynamic discord bot for detecting swear words, interacting with members of a channel and providing multiple utilities.
                    </Card.Text>
                    <Spinner variant='success' />
                </Card.Body>
            </Card>
        </>
    )
};

export default BotCard;