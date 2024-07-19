import React, { useState,useCallback,useEffect} from 'react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  console.log(formData);
//   const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);
  };

const debounce = (callback,delay)=>{
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer= setTimeout(() => {
            callback.apply(this,args)
        }, delay);
    }

}
const logInput = (data) => {
    console.log('Debounced Data:', data);
  };
const debouncedLogInput = useCallback(debounce(logInput, 1000), []);

useEffect(() => {
  if (formData) {
    debouncedLogInput(formData);
  }
}, [formData, debouncedLogInput]);

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className='border rounded-lg border-red-700 m-3 p-2 '
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
             className='border rounded-lg border-red-700 m-3 p-2 '
          />
        </div>
        <button type="submit" className='bg-gray-500 border rounded-lg  p-2'>Submit</button>
      </form>

      {/* {submitted && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )} */}
    </div>
  );
};

export default SimpleForm;
