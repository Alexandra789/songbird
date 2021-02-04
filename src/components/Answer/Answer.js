import birdsData from '../../birds';
import './Answer.css';


export default function Answer(props) {
    let answer = false;
    let success = false;
    let soundSuccess = new Audio("https://zvukipro.com/uploads/files/2018-10/1540309297_line_open.mp3");
    let soundError = new Audio("https://zvukipro.com/uploads/files/2018-10/1540308447_6_sto-k-odnomu-ne-pra_ilnyy-ot_et.mp3")
    let allRadioButton = document.querySelectorAll('.radio-button');

    const comparisonAnswer = (e, bird) => {
        let radioButton = e.target.children[0];
        for (let i = 0; i < allRadioButton.length; i++) {
            if (allRadioButton[i].classList.contains('success')) {
                success = true;
            }
        }
        if (props.randomBirdVoice === bird.audio && radioButton.classList.contains('success') !== true) {
            soundSuccess.play();
            props.setRightAnswer(bird);
            answer = true;
            console.log("LENGHT = " + allRadioButton.length);
            console.log("ATTEMPS = " + props.countAttemps)
            let scopeLevel = allRadioButton.length - props.countAttemps
            props.setScope(props.scope + scopeLevel);
            radioButton.classList.add('success');
        } else {
            if (success !== true && radioButton.classList.contains('error') !== true) {
                props.setCountAttemps(props.countAttemps + 1);
                soundError.play();  
                radioButton.classList.add('error');
            }
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
                {birdsData[props.level].map((item, i) =>
                    <li className="item" key={i} onClick={changeBird}>
                        <span className="radio-button"></span>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>
    )
}
