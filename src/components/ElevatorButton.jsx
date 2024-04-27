import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledElevatorButton = styled.button`
  &[aria-pressed="true"] {
    background: yellow;
  }
  border-radius: 50%;
  border: 5px solid green;
  height: 100px;
  width: 100px;
  font-weight: bold;
  font-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function ElevatorButton({ pressed, index, ...rest }) {
  
  return(
    <div className={`${pressed ? "Active" : "inActive"}`} onClick={pressed} {...rest}>{index + 1}</div>
  );
    // return <StyledElevatorButton aria-pressed={!!pressed} {...rest} />;

}

ElevatorButton.propTypes = {
    pressed: PropTypes.bool
  };

  
export default ElevatorButton;