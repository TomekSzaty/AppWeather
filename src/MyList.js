import React from "react";

function MyList() {

    const data = [1,2,3,4,5,6];
    return(
        <>
            <ul>
                {               
                data.map((number, index) =>  
                    <li key={index}>Item nr.{ number }</li>)              
                }
            </ul>
        </>

    );
};
export default MyList;