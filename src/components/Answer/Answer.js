import { useState } from 'react';
import birdsData from '../../birds';
import './Answer.css';

export default function Answer(){
    return(
        <div className="answer-container">
            <ul className="asnwers-list">
                {/* {birdsData.map((item, i) =>
                        <li className="item" key={i}>{item}</li>
                    )} */}
            </ul>
        </div>
    )
}