import React from "react";


function Box({
    width = 5, 
    height=5, 
    backgroundColor="purple",
    id,
    handleRemove
}) {
    
    const remove = () => handleRemove(id);
    return (

        <div>
            <div
            style={{
            height: `${height}em`,
            width: `${width}em`,
            backgroundColor
            }}
            />
        <button onClick={remove}>Remove the box </button>
        </div>
    )
}

export default Box;