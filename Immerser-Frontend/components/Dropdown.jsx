import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css';
import { MenuItems } from './MenuItems';
import { Dropdown as dd, DropdownButton } from 'react-bootstrap';



const Dropdown = () => {

    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    return (
        <>

            <DropdownButton id='dropdown-basic-button' title='Features' onClick={handleclick} >

                {MenuItems.map((item, index) => {

                    return (
                        <dd.Item href={item.path} key={index} onClick={() => setClick(false)}>
                            {item.title}
                        </dd.Item>

                    )
                })}

            </DropdownButton>


        </>
    );
};

export default Dropdown;