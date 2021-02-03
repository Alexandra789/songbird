import './Button.css';
export default function Button(props) {
    let level = 0;
    let button = document.querySelector('.button-level');
    console.log(button)
    if (props.answer === true) {
        // if (button != null) {
        button.classList.add('active');
        // }
    }

    const addLevel = () => {
        console.log(props.answer)
        if (button != null) {
            button.classList.remove('active');
            if (button.classList.contains('active')) {
                // level = level +1;
                // props.answer = false;
                props.setLevel(level + 1)
            }
        }
    }
    return (
        <button className="button-level" onClick={addLevel}>Next Level</button>
    )
}
