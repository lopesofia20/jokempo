import { useState } from 'react'
import './App.css'

const choices = ['Pedra', 'Papel', 'Tesoura'];

const App = () => {
  const [myChance, setMyChance] = useState(null);
  const [randomChoice, setRandomChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'Empate';
    if (
      (user === 'Pedra' && computer === 'Tesoura') ||
      (user === 'Papel' && computer === 'Pedra') ||
      (user === 'Tesoura' && computer === 'Papel')
    ) {
      return 'Venceu!';
    } else {
      return 'Perdeu';
    }
  };

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);

    setMyChance(choice);
    setRandomChoice(computerChoice);
    setResult(result);

    if (result === 'Venceu!') {
      setPlayerWins(playerWins + 1);
    } else if (result === 'Perdeu') {
      setComputerWins(computerWins + 1);
    }
  };

  return (
    <div className="App">
      <h1>Pedra, Papel, Tesoura</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {myChance && randomChoice && (
        <div className="result">
          <p>You chose: {myChance}</p>
          <p>Computer chose: {randomChoice}</p>
          <p>{result === 'Empate' ? 'It\'s a draw!' : `You ${result}!`}</p>
        </div>
      )}
      <div className="score">
        <p>Player Wins: {playerWins}</p>
        <p>Computer Wins: {computerWins}</p>
      </div>
    </div>
  );
};

export default App;
