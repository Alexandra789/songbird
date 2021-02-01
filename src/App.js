import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import Description from './components/Description/Description';
import Button from './components/Button/Button';
import birdsData from './birds';
import { useState } from 'react';
import './App.css';

const voiceNumber = Math.floor(Math.random() * Math.floor(6));
function App() {
  const [birdInfo, setBirdInfo] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [scope, setScope] = useState(5);
  const [level, setLevel] = useState(0);
  const [countAttemps, setCountAttemps] = useState(0);
  let randomBirdVoice = birdsData[level][voiceNumber].audio;

  return (
    <div className="App">
      <Header scope={scope} countAttemps={countAttemps} />
      <div className="bird-card">
        <Question randomBirdVoice={randomBirdVoice} />
      </div>
      <div className="main-content">
        <Answer level={level} setBirdInfo={setBirdInfo} randomBirdVoice={randomBirdVoice} scope={scope} setScope={setScope} setAnswer={setAnswer} countAttemps={countAttemps} setCountAttemps={setCountAttemps} />
        <div className="bird-card">
          {
            birdInfo ?
              (<Description birdInfo={birdInfo} />)
              :
              (<div>
                  <span>Послушайте плеер.</span><br/>
                  <span>Выберите птицу из списка</span>
                </div>)
          }
        </div> <Button answer={answer} setLevel={setLevel} />
      </div>
    </div>
  );
}

export default App;
