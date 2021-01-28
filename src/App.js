import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import Description from './components/Description/Description';
import { useState } from 'react';
import './App.css';

function App() {
  const [birdInfo, setBirdInfo] = useState(null);
  return (
    <div className="App">
      <Header />
      <div className="bird-card">
        <Question />
      </div>
      <div className="main-content">
        <Answer setBirdInfo={setBirdInfo} />
        <div className="bird-card">
          {
            birdInfo ?
              (<Description birdInfo={birdInfo} />)
              :
              'Послушайте плеер. Выберите птицу из списка'
          }
        </div>
      </div>
    </div>
  );
}

export default App;
