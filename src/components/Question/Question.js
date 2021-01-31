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
                {props.displayVoice ? (
                    <audio className="bird-voice" controls preload="metadata">
                        <source src={props.displayVoice} type="audio/mpeg" /> </audio>
                        )
                    : (<audio className="bird-voice" controls preload="metadata">
                        <source src={props.randomBirdVoice} type="audio/mpeg" />
                    </audio>)
                }
            </div>
        </div>
    )
}  