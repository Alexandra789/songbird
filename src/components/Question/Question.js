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
            </div>
        </div>
    )
}