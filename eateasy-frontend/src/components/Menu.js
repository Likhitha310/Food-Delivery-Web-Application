import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/menu')
            .then(response => {
                setMenuItems(response.data.items);
            })
            .catch(error => {
                console.error('Error fetching menu items:', error);
            });
    }, []);

    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
