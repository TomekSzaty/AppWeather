import React from "react";

function MyTable() {
    const data = [
        {brand: 'Ford', model: 'Mustang', year: 1975,},
        {brand: 'VW', model: 'Beetle', year: 1999,},
        {brand: 'Tesla', model: 'Model S', year: 2000,}];

    return (
         <div className="App">
            <table className="App-header">
                <tbody>
                {
                data.map((item, index) =>
                <tr key={index}>
                <td>{item.brand} -</td><td>{item.model} -</td><td>{item.year}</td>
                </tr>)
                }
                </tbody>
            </table>
        </div>
        );
    };

export default MyTable;    
