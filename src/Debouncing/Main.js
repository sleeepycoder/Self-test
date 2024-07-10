import { useEffect, useState, useCallback } from "react";


 function Main() {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(null);

  const debounce = (callback, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, arguments);
      }, delay);
    };
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchUser = useCallback(async () => {
    if (inputValue) {
      try {
        const response = await fetch(`https://reqres.in/api/unknown/${inputValue}`);
        const json = await response.json();
        console.log(json);
        setUser(json);
      } catch (error) {
        console.log(error);
      }
    }
  }, [inputValue]);

  const handleDebounce = useCallback(debounce(fetchUser, 300), [fetchUser]);

  useEffect(() => {
    handleDebounce();
  }, [inputValue, handleDebounce]);

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Text"
      />
      <p>inputValue: {inputValue}</p>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}

export default Main;