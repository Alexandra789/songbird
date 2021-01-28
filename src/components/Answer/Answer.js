// import { useState } from 'react';
import birdsData from '../../birds';
import './Answer.css';

export default function Answer() {
    return (
        <div className="answer-container">
            <ul className="answers-list">
                {birdsData[0].map((item, i) =>
                    <li className="item" key={i}>
                        <span className="radio-button"></span>
                        {item.name}
                    </li>
                )}
            </ul>
        </div>
    )
}