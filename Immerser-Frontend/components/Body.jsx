import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import ProfanityChecker from './pages/ProfanityChecker';
import Conversational from './pages/ConversationalAI';
import Contact from './pages/Contact';

const Body = () => {
    return (
        <>
            <Routes>
                <Route element={<Home />} path='/'></Route>
                <Route element={<About />} path='/about'></Route>
                <Route element={<ProfanityChecker />} path='/profanity'></Route>
                <Route element={<Home />} path='/features'></Route>
                <Route element={<Conversational />} path='/conversational'></Route>
                <Route element={<Contact />} path='/contact'></Route>
            </Routes>
        </>
    )
};

export default Body;