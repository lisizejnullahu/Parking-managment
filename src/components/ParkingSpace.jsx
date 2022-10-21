import React, { useState } from 'react'
import './styles/garage.css'

function Form() {
  const [count, setCount] = useState(false);
    function handleSubmit(e) {
      e.preventDefault();    console.log('You clicked submit.');
    }
  
    function changeState() {
      setCount(prevCount => prevCount !== true)
    }

    return (
      <form onSubmit={handleSubmit}>
        <button 
        onClick={changeState}
        type="submit" 
        className='btn'
        >{setCount['value'] = (count === false) ? 'Park' : 'Taken'}       
        </button>
      </form>
    );
  }



const ParkingSpace = () => {
  return (
    <>
        <Form/>
    </>
    )
}

export default ParkingSpace