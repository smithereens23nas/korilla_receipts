import React, { useState } from "react";


const Forms = (props) => {
const [formState, setFormState] = useState('');

   const handleChange = (event) => {
       setFormState({ 
           ...formState, [event.target.name]: event.target.value
        })
    }
    console.log(formState)

    const handleSubmit = (event) => {
        event.preventDefault();
    const sortedArr = props.receipt.filter((element)=>{
        return element.person === formState.search
    })
    props.setReceipt(sortedArr)
    }

    

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" value={ formState.search } name="search" onChange={ handleChange }/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Forms;
