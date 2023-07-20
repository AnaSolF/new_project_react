import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [count, setCount] = useState(0);
  let title=""
  useEffect(() => {
   title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h2>{title}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Cart





