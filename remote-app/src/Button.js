import React, { useState } from "react";
 
export const Button = (props) => {
    const addCounts = () => {
        props.setCount(props.count+1)
    }
    return (
        <button onClick={addCounts}>Hello!</button>
    )
}
 
export default Button;