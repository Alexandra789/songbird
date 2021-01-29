import './Button.css';
export default function Button(props) {
    let level = 0;
    let button = document.querySelector('button');

    if (props.answer === true) {
        button.classList.add('active')
    }

    const addLevel = () => {
        if (button != null) {
            if (button.classList.contains('active')) {
                level = level +1;
                props.setLevel(level)
                button.classList.remove('active');
            } 
        }
    }
    return (
        <button className="button" onClick={addLevel}>Next Level</button>
    )
}
