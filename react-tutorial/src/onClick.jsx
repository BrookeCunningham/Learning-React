import React, {useState} from 'react'


function OnClick(){


    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [employed, setEmployed] = useState(false)

    const updateName = () => {
        setName("Spongebob")
    }

    const updateAge = () => {

        setAge(age+1);

    }

    const updateEmployee = () => {
        setEmployed(employed ? (false):(true))
    }

    return(<div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age : {age}</p>
            <button onClick={updateAge}>Set Age</button>  
            <p>Employeed : {employed ? "Yes" : "No"}</p>
            <button onClick={updateEmployee}>Set Employeed</button> 
        </div>)

}

export default OnClick