import React, { useState } from "react";

const MyComponent = () => {

    const[car,setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    function handleYearChange(e){
        setCar(previousState => {
            return {...previousState, year: e.target.value}
        });

    }

    function handleBrandChange(e){
        setCar(previousState => {
            return {...previousState, brand: e.target.value}
        }); 

    }

    function handleModelChange(e){
        setCar(previousState => {
            return {...previousState, model: e.target.value}
        }); 

    }   


    return(
        <div>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.year}.
        </p>

        <input type="number" value={car.year}  onChange={handleYearChange}/><br/><br/>
        <input type="text" value={car.brand} onChange={handleBrandChange} /><br/><br/>
        <input type="text" value={car.model} onChange={handleModelChange} />
        </div> 
    );
}
export default MyComponent;