import './Button.css';
export default function Button(props) {
    let button = document.querySelector('.button-level');
    let radioButton = document.querySelectorAll('.radio-button');
    let menuItem = document.querySelectorAll('.menu-item');
    console.log(menuItem)
    if (props.answer === true) {
        button.classList.add('active');
    }
    
    const addLevel = () => {
        if (button != null) {
            if (button.classList.contains('active')) {
                for (let i = 0; i < radioButton.length; i++) {
                    radioButton[i].classList.remove('error');
                    radioButton[i].classList.remove('success');                 
                }
                menuItem[props.level].classList.remove('active');
                props.setBirdInfo(null);
                props.setRightAnswer(null);
                props.setAnswer(false);
                props.setLevel(props.level + 1);
                menuItem[props.level+1].classList.add('active');
            }
            button.classList.remove('active');
        }
    }
    return (
        <button className="button-level" onClick={addLevel}>Next Level</button>
    )
}
