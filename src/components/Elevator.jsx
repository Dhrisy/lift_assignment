import React from 'react';
import styled from 'styled-components';

export const StyledElevator = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 160px;
`;

const StyledElevatorCage = styled.div`
  height: 100%;
  width: 30px;
  background: blue;
  border-radius: 3px;
`;

function Elevator({ doorOpen }) {
  return (
    <StyledElevator>
        {/* <Lift doorPosition={true}/> */}
         <div className='elevator-container'>
        </div> 
    {/* <StyledElevatorCage /> */}
  </StyledElevator>
  );
}

export default Elevator;