import React, { useState } from 'react'

const SatePractice = () => {

    const [count, setCount] = useState(4);  //first value in the array is current state and other is the function to change it
    const increment = () => {
        setCount(previousCount => previousCount + 1);
        setCount(previousCount => previousCount + 1);

    }

    const decrement = () => {
        setCount(previousCount => previousCount - 1);
        setCount(previousCount => previousCount - 1);
    }

    return (
        <div>
            <h1>SatePractice</h1>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default SatePractice