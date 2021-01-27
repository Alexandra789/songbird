import { useState } from 'react';
import './Question.css';
import birdShadow from './bird-shadow.jpg';

export default function Question() {
    const [name, setName] = useState('******');
    const [img, setImg] = useState({ birdShadow });
    return (
        <div className="question-container">
            <div className="bird-random">
                <img src={birdShadow} alt="bird shadow" />
                <div className="question-content">
                    <div className="name">{name}</div>
                </div>
            </div>
        </div>
    )
}