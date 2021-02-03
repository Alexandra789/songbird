import './Button.css';
export default function Button(props) {
    let button = document.querySelector('.button-level');
    let radioButton = document.querySelectorAll('.radio-button');
    let menuItem = document.querySelectorAll('.menu-item');
    let mainContent = document.querySelector('.main-content');
    let birdCard = document.querySelector('.bird-card');
    let gameOver = document.querySelector('.game-over');
    const voiceNumber = Math.floor(Math.random() * Math.floor(6));

    if (props.answer === true) {
        button.classList.add('active');
    }

    const reset = () => {
        for (let i = 0; i < radioButton.length; i++) {
            radioButton[i].classList.remove('error');
            radioButton[i].classList.remove('success');
        }
       
        props.setBirdInfo(null);
        props.setRightAnswer(null);
        props.setAnswer(false);
        button.classList.remove('active');
    }

    const addLevel = () => {
        if (button != null) {
            console.log("LEVELLLLLLL ===" + props.level)
            if (props.level === 5) {
                menuItem[props.level].classList.remove('active');
                gameOver.style.display = 'block';
                mainContent.style.display = 'none';
                birdCard.style.display = 'none';
                reset();
            }
            else {
                if (button.classList.contains('active')) {
                    reset();
                    menuItem[props.level].classList.remove('active');
                    props.setVoiceNumber(voiceNumber);
                    props.setLevel(props.level + 1);
                    menuItem[props.level + 1].classList.add('active');
                }
                
            }
        }
    }
    return (
        <button className="button-level" onClick={addLevel}>Next Level</button>
    )
}
