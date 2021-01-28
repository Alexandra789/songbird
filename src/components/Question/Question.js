import './Question.css';
import birdShadow from './bird-shadow.jpg';

export default function Question(props) {
    return (
        <div className="question-container">

            {props.displayImage ?
                (<img src={props.displayImage} alt="bird shadow" />)
                :
                <img src={birdShadow} alt="bird shadow" />
            }
            <div className="question-content">
                {props.displayName ?
                    (<div className="name">{props.displayName}</div>)
                    :
                    <div className="name">******</div>
                }
                {props.displayEngName ?
                    (<div className="eng-name">{props.displayEngName}</div>)
                    :
                    ''
                }
                <audio className="bird-voice" controls preload="metadata">
                    <source src={"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}