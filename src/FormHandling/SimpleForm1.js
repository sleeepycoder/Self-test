import React, { useState } from 'react';

function SimpleForm1() {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data
    console.log(`Name: ${name}\nEmail: ${email}`);
    // alert(`Name: ${name}\nEmail: ${email}`);
  };






  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
               className='border rounded-lg border-red-700 m-3 p-2 '
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
               className='border rounded-lg border-red-700 m-3 p-2 '
          />
        </div>
        <button type="submit"              className='border rounded-lg border-red-700 m-3 p-2 '
        >Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm1;
