import birdsData from '../../birds';
import './Answer.css';

export default function Answer(props) {
    const changeBird = (e) => {
        let bird;
        for (let i = 0; i < birdsData.length; i++) {
            for (let j = 0; j < birdsData.length; j++) {
                if (birdsData[i][j].name === e.target.innerText) {
                    bird = birdsData[i][j];
                    console.log(bird);
                }
            }
        }
        props.setBirdInfo(bird);
    };
    return (
        <div className="answer-container">
            <ul className="answers-list">
                {birdsData[0].map((item, i) =>
                    <li className="item" key={i} onClick={changeBird}>
                        <span className="radio-button"></span>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>
    )
}