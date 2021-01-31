import birdsData from '../../birds';
import './Answer.css';


export default function Answer(props) {
    
   
    // const countScope = (answer) => {
    //     let scope = 5;
    //     if(!answer)
    //         scope = scope - props.countAttemps;
    //         if(props.scope < 0){
    //             props.scope = 0;
    //         }
    //     props.setScope(scope);

    // }
    let x = document.getElementsByTagName('span');
    console.log(x)
    const comparisonAnswer = (e,bird) => {
        let answer = false;
        console.log('randomVoice = '+ props.randomBirdVoice);
        console.log('change voice = ' + bird.audio);
        if (props.randomBirdVoice === bird.audio) {
            answer = true;
            e.target.children[0].classList.add('success');
            props.setCountAttemps(props.countAttemps);
        } else {
            e.target.children[0].classList.add('error');
            props.setCountAttemps(props.countAttemps + 1);
        } 
        // props.setBirdVoice(randomBirdVoice);
        // countScope(answer);
        // changeColorItem(answer);
        props.setAnswer(answer);
    }

    const changeBird = (e) => {
        let bird;
        for (let i = 0; i < birdsData.length; i++) {
            for (let j = 0; j < birdsData.length; j++) {
                if (birdsData[i][j].name === e.target.innerText) {
                    bird = birdsData[i][j];
                }
            }
        }
        props.setBirdInfo(bird);
        comparisonAnswer(e,bird);
    };

    return (
        <div className="answer-container">
            <ul className="answers-list">
                {birdsData[0].map((item, i) =>
                    <li className="item" key={i} onClick={changeBird}>
                        <span className="radio-button"></span>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>
    )
}
