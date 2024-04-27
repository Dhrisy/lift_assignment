import { useState, useEffect, useRef, useCallback } from 'react'
import './App.scss'
import Elevator from './components/Elevator'
import { Building } from './components/Building'
import { BuildingFloor } from './components/BuildingFloor'
import { Layout } from './components/Layout'
import ElevatorButtons from './components/ElevatorButtons'
import UserInput from './components/UserInput'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Building/>

//     {/* <Floors/> */}
//     </>
//   )
// }

// export default App



export default function App() {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [elevatorRequests, setElevatorRequests] = useState([]);
  const interval = useRef();
  const [count, setCount] = useState(4);
  const [queuedRequests, setQueuedRequests] = useState([]); // Queue for floor requests


  // Update elevator requests when an elevator button is pressed
  const onFloorRequest = useCallback(
    (floor) => {

      if (!elevatorRequests[floor] && floor !== currentFloor) {
        const newRequests = [...elevatorRequests];
        newRequests[floor] = true;
        console.log(newRequests);
        setElevatorRequests(newRequests);

        if (floor !== currentFloor) {
          console.log(`floor is ${floor}, current floor is ${currentFloor}`);
          const direction = floor > currentFloor ? 'up' : 'down'; // Determine direction
          console.log(`direction is ${direction}`);
          setQueuedRequests((prev) => [...prev, { floor, direction }]); // Queue the request
          console.log(queuedRequests[0]);
        }

      }
    },
    [elevatorRequests, currentFloor]
  );

  const moveToFloor = useCallback(
    (floor) => {
      setCurrentFloor(floor);
      const newRequests = [...elevatorRequests];
      newRequests[floor] = false;setElevatorRequests(newRequests);
    },
    [elevatorRequests]
  );

  // Check for requests, process requests
  useEffect(() => {

    if (count === 0) {
      setCurrentFloor(0);// set the cuurent floor to 0 when the count is zero
      moveToFloor(0)// when count is zero then, move the lift to 0 th position
    }
    clearTimeout(interval.current);
    interval.current = setInterval(() => {
      for (let i = currentFloor; i < count; i += 1) {
        if (elevatorRequests[i]) {
          if (queuedRequests.length > 0) {
            const nextRequest = queuedRequests[0];
            const { floor, direction } = nextRequest;

            setQueuedRequests((prev) => prev.slice(1));
            if (direction === "up") {
              console.log(`else part ${direction}`);
              moveToFloor(i);
              return;
            } 
          }
        }
      }
      for (let i = currentFloor; i >= 0; i -= 1) {
        if (elevatorRequests[i]) {
          // moveToFloor(i);
          // return;
          const nextRequest = queuedRequests[0];
          const { floor, direction } = nextRequest;

          setQueuedRequests((prev) => prev.slice(1));
          if (direction === "down") {
            console.log(`down part ${direction}`);
            moveToFloor(i);
            return;
          }
        }
      }
    }, 2000);// after 2000ms the elevator move to selected floor
  }, [currentFloor, elevatorRequests, moveToFloor, count, queuedRequests]);

  return (
    <div className="App">
      <UserInput
        count={count}
        setCount={setCount}
      />
      {count !== 0 &&
        (<div className='lift-content'>
          <Building
          arrow= {queuedRequests}
            floors={count} currentFloor={currentFloor} />
          <ElevatorButtons
            floors={count}// no of
            onFloorRequest={onFloorRequest} // function whichget the index from the elevator button
            pressed={elevatorRequests}
          />
           {/* {queuedRequests.length > 0 && (
            <div className="arrow-container">
              {queuedRequests[0].direction === 'up' ? (
                <div className="arrow-up">&#8593;</div>
              ) : (
                <div className="arrow-down">&#8595;</div>
              )}
            </div>
          )} */}

        </div>)

      }
    </div>
  );
}

