import React, { useState } from 'react';

function UserInput({ count, setCount }) {
    const handleInputChange = (e) => {
        // const { value } = e.target;
        // setCount(parseInt(value));

        const { value } = e.target;
        if (value === "" || isNaN(parseInt(value))) {
            // If input is empty or not a number, set count to default value
            setCount(0); // Or set to some default value
        } else {

            setCount(parseInt(value));
        }
    }
  return (
    <div className='input-part'>
        <p>You can enter how many floors you want</p>
     <input 
     value={count}
     placeholder='Enter how many floor ypu want'
     onChange={(e) => {
      handleInputChange(e);
     }}
    
     />

    </div>
  );
}

export default UserInput;