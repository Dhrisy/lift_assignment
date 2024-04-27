// import styled from "styled-components";


// const StyledWindow = styled.div`
//   background: #fff;
//   height: 100%;
  
// `;

// const StyledElevatorShaft = styled.div``;

// export const StyledBuildingFloor = styled.div`
//   height: ${(props) => props.height}px;
//   padding: 10px;
//   display: flex;
//   gap: 10px;
//   box-sizing: border-box;

//   ${StyledWindow} {
//     flex: 1 1 auto;
//   }

//   ${StyledElevatorShaft} {
//     flex: 1 1 auto;
//   }
// `;
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export const BuildingFloor = ({ height, queueRequests }) => {
  return (
    // <StyledBuildingFloor height={height} {...rest}>
    <div className="building-container">
       {queueRequests.length > 0 && (
            <div className="arrow-container">
              {queueRequests[0].direction === 'up' ? (
                // <div className="arrow-up">&#8593;</div>
                <FaArrowUp style={{
                  height: 40
                }}/>
              ) : (
                <FaArrowDown/>
                // <div className="arrow-down">&#8595;</div>
              )}
            </div>
          )}
        <div className="building" >
        <div style={{  }} className="floor-window"></div>
        <div style={{  }} className="floor-window"></div>
        <div style={{  }} className="floor-window"></div>
        {/* {queueRequests.length} */}

        <div className="elevator-space"></div>
      {/* <StyledWindow />
      <StyledWindow />
      <StyledWindow /> */}
      {/* <StyledElevatorShaft /> */}
      <div style={{  }} className="floor-window"></div>
      <div style={{  }} className="floor-window"></div>
      <div style={{  }} className="floor-window"></div>
      {/* <StyledWindow />
      <StyledWindow />
      <StyledWindow /> */}
        </div>
        </div>
    // </StyledBuildingFloor>
  );
};
