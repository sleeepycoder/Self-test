import React, { useState } from 'react'

const FormInput = () => {
  const [fName,setFirstName] =useState()
  const [lName,setLastName] =useState()


  
function handleSubmit(e){
    e.preventDefault();
  
}


    return (
    <form>
{fName}{lName}
<label> firstName:<input type='text' name='name' onChange={(e)=>setFirstName(e.target.value)}/></label>
<label> LastName:<input type='text' name='name' onChange={(e)=>setLastName(e.target.value)}/></label>
<button onClick={handleSubmit}>Submit</button>
</form>

  )
}

export default FormInput
