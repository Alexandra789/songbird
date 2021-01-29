import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import Description from './components/Description/Description';
import Button from './components/Button/Button';
import birdsData from './birds';
import { useEffect, useState } from 'react';
import './App.css';

const voiceNumber = Math.floor(Math.random() * Math.floor(6));
function App() {
  const [birdInfo, setBirdInfo] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [voice, setVoice] = useState('');
  const [scope, setScope] = useState(0);
  const [level, setLevel] = useState(0);
  const [countAttemps, setCountAttemps] = useState(0); 
  let randomBirdVoice = birdsData[level][voiceNumber].audio;
  useEffect(()=>{
   console.log('уровень='+level);
  console.log('попытки' + countAttemps);
  console.log('очки-' + scope)
  console.log('voice = ' + voice)
  // console.log(randomBirdVoice)
  setVoice(randomBirdVoice);
  
  },[level,countAttemps, scope, voice, randomBirdVoice])
  
  // console.log('voice = ' + voice)
  

  
  return (
    <div className="App">
      <Header scope={scope} countAttemps={countAttemps}/>
      <div className="bird-card">
        <Question voice={voice}/>
      </div>
      <div className="main-content">
        <Answer level={level} setBirdInfo={setBirdInfo}   setScope={setScope} setAnswer={setAnswer} countAttemps={countAttemps} setCountAttemps={setCountAttemps}/>
        <div className="bird-card">
          {
            birdInfo ?
              (<Description birdInfo={birdInfo}/>)
              :
              'Послушайте плеер. Выберите птицу из списка'
          }
        </div> <Button answer={answer} setLevel = {setLevel}/>
      </div>
    </div>
  );
}

export default App;
