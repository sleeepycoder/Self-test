import React, { useState, useCallback, useEffect } from 'react';

const Debouncing = () => {
  const [input, setInputValue] = useState('');

  const debounce = (callback, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  };

  const logInput = (value) => {
    console.log('Debounced Input:', value);
  };

  const debouncedLogInput = useCallback(debounce(logInput, 300), []);

  useEffect(() => {
    if (input) {
      debouncedLogInput(input);
    }
  }, [input, debouncedLogInput]);

  return (
    <div>
      Debouncing
      <div>
        <input
          type='text'
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Please Enter The text'
        />
      </div>
    </div>
  );
};

export default Debouncing;
