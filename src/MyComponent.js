import React from "react";

function MyComponent() {

    const buttonPressed = () => {
        alert("Button pressed!");
    }
    return(        
        <div className="App-header">
        <button onClick={buttonPressed}>Click Me</button>
        </div>
                
    )
};

export default MyComponent;