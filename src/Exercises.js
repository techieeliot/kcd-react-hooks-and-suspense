// kcd playlist lesson one - intro to hooks

// Hooks is happening because of useState
import React, { useState } from 'react';

// began with a button begin returned with a static zero 
function Counter() {
    // add count and useState()
    const [count, setCount] = useState(0);
    // abstracted the arrow funciton last
    const increment = () => setCount(count + 1);
    return (
        // added onClick to the button and used arrow function to setCount
        <button onClick= {increment}>{count}</button>
    )
}

export default Counter;
