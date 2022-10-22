import useTimer from "./hook/useTimer";
import { useState } from "react";

const ONE_SECOND = 1000;

function App() {
  const [timer, setTimer] = useState(1);
  const [randomNumber, setRandomNumber] = useState()
  const [bingo, setBingo] = useState(false);
  const [bingoTimer, setBingoTimer] = useState(1);

  const handleTimer = () => {
    setTimer(timer + 1)
    timer === 10 && setTimer(1);
    timer === 1 && handleRandomNumber();
  }

  useTimer(handleTimer, ONE_SECOND)


  const handleRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);

    (random % 3 === 0 || random % 5 === 0) && setBingo(true)
  }

  const timerBingo = () => {
    setBingoTimer(bingoTimer + 1)
    bingoTimer === 4 && setBingo(false)
  }

  useTimer(timerBingo, ONE_SECOND)

  return (
    <div>
      <p>
        {timer}
      </p>
      <p>
        {randomNumber}
      </p>
      { bingo && <h1>BINGO</h1> }
    </div>
  );
}

export default App;
