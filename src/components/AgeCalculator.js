import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdate = new Date(dob);
    const today = new Date();
    const ageDiff = today - birthdate;
    const calculatedAge = new Date(ageDiff);
    setAge(calculatedAge.getFullYear() - 1970);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Age Calculator</h1>
      <div>
        <label><strong>Enter your date of birth</strong></label> <br />  
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <br />
      <button onClick={calculateAge}>Calculate age</button> <br/>
      {age && <div><h1><strong>You are {age} years old</strong></h1></div>}
    </div>
  );
}

export default AgeCalculator;
