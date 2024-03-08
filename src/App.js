import React, { useState, useEffect } from 'react';

const HooksExample = () => {
  // useState hook for managing count state
  const [count, setCount] = useState(0);

  // useState hook for managing list state
  const [numberList, setNumberList] = useState([]);

  // updating document title, by using useEffect hook
  useEffect(() => {
    document.title = `Count: ${count} | Number List: ${numberList.join(', ')}`;
  }, [count, numberList]);
  

  // Function to handle adding a new number to the list
  const handleAddNumber = () => {
    const inputNumber = parseInt(document.getElementById('newNumber').value, 10);
  
    // Check if inputNumber is a valid integer
    if (!isNaN(inputNumber) && Number.isInteger(inputNumber)) {
      setNumberList((prevList) => [...prevList, inputNumber]);
    } else {
      // Handle invalid input (non-integer or NaN)
      alert('Please enter a valid integer in the textbox.');
    }

    document.getElementById('newNumber').value = '';
  };
  

  // Function to handle removing the last number from the list
  const handleRemoveNumber = () => {
    if (numberList.length > 0) {
      const updatedList = [...numberList];
      updatedList.pop();
      setNumberList(updatedList);
    }
  };

  return (
    <div>
      <h1>React Hooks Example</h1>
      <h2>Advanced Counter :- </h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Decrement
      </button>
      
      <div style={{marginBottom: '40px'}}>
        <h2>Number List Manager :- </h2>
        <form>
          <label htmlFor="newNumber" style={{ marginRight: '10px' }}>Add a new number:</label>
          <input type="number" id="newNumber" style={{ marginRight: '10px' }}/>
          <button type="button" onClick={handleAddNumber} style={{ marginRight: '10px' }}>
            Add Number
          </button>
          <button type="button" onClick={handleRemoveNumber} disabled={numberList.length === 0}>
            Remove Number
          </button>
        </form>
        <p>Number List: {numberList.join(', ')}</p>
      </div>
    </div>
  );
};

export default HooksExample;