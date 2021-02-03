import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import Description from './components/Description/Description';
import Button from './components/Button/Button';
import GameOver from './components/GameOver/GameOver';
import birdsData from './birds';
import { useState } from 'react';
import './App.css';

function App() {
  const [birdInfo, setBirdInfo] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [rightAnswer, setRightAnswer] = useState(null);
  const [scope, setScope] = useState(0);
  const [countAttemps, setCountAttemps] = useState(1);
  const [level, setLevel] = useState(0);
  const [voiceNumber, setVoiceNumber] = useState(Math.floor(Math.random() * Math.floor(6)));

  let randomBirdVoice = birdsData[level][voiceNumber].audio;
  return (
    <div className="App">
      <Header scope={scope} />
      <GameOver scope={scope} setScope={setScope} setLevel={setLevel}/>
      <div className="bird-card">
        <Question randomBirdVoice={randomBirdVoice} rightAnswer={rightAnswer} />
      </div>
      <div className="main-content">
        <Answer level={level} countAttemps={countAttemps} setCountAttemps={setCountAttemps} setBirdInfo={setBirdInfo} randomBirdVoice={randomBirdVoice} scope={scope} setScope={setScope} setAnswer={setAnswer} setRightAnswer={setRightAnswer} />
        <div className="bird-card">
          {
            birdInfo ?
              (<Description birdInfo={birdInfo} />)
              :
              (<div>
                <span>Послушайте плеер.</span><br />
                <span>Выберите птицу из списка</span>
              </div>)
          }
        </div> <Button setCountAttemps={setCountAttemps} answer={answer} setVoiceNumber={setVoiceNumber} setAnswer={setAnswer} setBirdInfo={setBirdInfo} setRightAnswer={setRightAnswer} level={level} setLevel={setLevel} />
      </div>
    </div>
  );
}

export default App;
