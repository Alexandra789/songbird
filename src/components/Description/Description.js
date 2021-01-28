import './Description.css';
import Question from '../Question/Question';

export default function Description(props) {
    return (
        <div className="description-container">
            <Question 
            displayImage = {props.birdInfo.image}
            displayName = {props.birdInfo.name}
            displayEngName = {props.birdInfo.species}/>
            <div className="description">
                {props.birdInfo ? props.birdInfo.description : '' }
        </div>
        </div>
    )
}