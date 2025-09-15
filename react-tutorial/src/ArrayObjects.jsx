import React, {useState} from 'react';

function ArrayObject(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar(){

        const newCar = {year:carYear, make:carMake, model:carModel}

        setCars(cars => [...cars, newCar])

    }

    function handleRemoveCar(index){

        setCars(c => c.filter((_, i) => i != index))
        
    }

    function handleMakeChange(event){

        setCarMake(event.target.value)
        
    }

    function handleModelChange(event){

        setCarModel(event.target.value)
        
    }

    function handleYearChange(event){

        setCarYear(event.target.value)
        
    }

    return(<div>

        <h2>List Of Car Objects</h2>
        <ul>{cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}</ul>
        <input type='number' value={carYear} onChange={handleYearChange}></input><br></br>
        <input type='text' placeholder='enter car make' value={carMake} onChange={handleMakeChange}></input><br></br>
        <input type='text' value={carModel} onChange={handleModelChange}></input><br></br>
        <button onClick={handleAddCar}>Add Car</button>




    </div>);
}

export default ArrayObject;