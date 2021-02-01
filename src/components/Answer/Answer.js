import birdsData from '../../birds';
import './Answer.css';


export default function Answer(props) {

    const comparisonAnswer = (e, bird) => {
        let answer = false;
        let success = false;
        let allRadioButton = document.querySelectorAll('.radio-button');
        let radioButton = e.target.children[0];
        for (let i = 0; i < allRadioButton.length; i++) {
            if (allRadioButton[i].classList.contains('success')) {
                success = true;
            }
        }
        if (props.randomBirdVoice === bird.audio) {
            let rightAnswer = bird;
            console.log(rightAnswer);
            props.setRightAnswer(rightAnswer);
            answer = true;
            props.setScope(props.scope);
            radioButton.classList.add('success');
            // props.setCountAttemps(props.countAttemps);
        } else {
            if (success !== true && radioButton.classList.contains('error') !== true) {
                props.setScope(props.scope - 1);
                radioButton.classList.add('error');
            }
            
            // props.setCountAttemps(props.countAttemps + 1);
        }
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
        comparisonAnswer(e, bird);
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
