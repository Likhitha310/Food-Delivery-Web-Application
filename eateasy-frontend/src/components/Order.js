import React, { useState } from 'react';
import axios from 'axios';

function Order() {
  const [orderStatus, setOrderStatus] = useState('');

  const placeOrder = () => {
    axios.post('/order')
      .then(response => {
        setOrderStatus(response.data.message);
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <button onClick={placeOrder}>Place Order</button>
      <p>{orderStatus}</p>
    </div>
  );
}

export default Order;
