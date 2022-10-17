import React, { useState } from "react"

const MAX_NUM = 10;
const MIN_NUM = 0;
export const Counter = () => {
    const [count, setCounter] = useState(0);

    const handlePlus = () => {
        setCounter((prev) => Math.min(MAX_NUM, prev + 1));
    }

    const handleMinus = () => {
        setCounter((prev) => Math.max(MIN_NUM, prev - 1));
    }

    return (
        <div id="counter">
            Counter number is { count }
            <br />
            <button disabled={ count >= MAX_NUM } onClick={ handlePlus }>+</button>
            <button disabled={ count <= MIN_NUM } onClick={ handleMinus }>-</button>
        </div>
    )
}