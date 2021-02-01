import './Question.css';
import './Player.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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
                    <AudioPlayer
                        showJumpControls={false}
                        autoPlay={false}
                        autoPlayAfterSrcChange={false}
                        src={props.displayVoice}
                    />
                )
                    :
                    (
                        <AudioPlayer
                            showJumpControls={false}
                            autoPlay={false}
                            autoPlayAfterSrcChange={false}
                            src={props.randomBirdVoice}
                        />
                    )
                }
            </div>
        </div>
    )
}  