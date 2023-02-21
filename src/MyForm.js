import React, { useState } from "react";

function MyForm() {

    const [user, setUser] = useState({
                                        firstname: '',
                                        lastname: '',
                                        email: '',        
                                        });

    const inputChanged = (event) => {
        setUser({...user, [event.target.name]:
        event.target.value});
    }

    // const inputChanged = (event) => {
    //     setText(event.target.value);
    // }

     // This is called when the form is submitted
 const handleSubmit = (event) => {
    alert(`Your name is:: ${user.firstname},
        \nyour lastname is:: ${user.lastname},
        \nand your email:: ${user.email}`);

    event.preventDefault(); // Prevents default behavior
    }
    return (
        <div className="App-header">
            <form className="App-header" onSubmit={handleSubmit}>
            <label for="name">Name :</label>
            <input type="text" name="firstname" 
            onChange={inputChanged} 
            value={user.firstname}/>

            <label for="name">LastName :</label>
            <input type="text" name="lastname" 
            onChange={inputChanged} 
            value={user.lastname}/>

            <label for="name">Email :</label>
            <input type="text" name="email" 
            onChange={inputChanged} 
            value={user.email}/>

            <input className="button" type="submit" value="Press me" />
            </form>
        </div>
    );

};

export default MyForm;