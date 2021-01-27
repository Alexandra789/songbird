import './Header.css';
import logo from './logo.png';
import { useState } from 'react';

export default function Header() {
    const [scope, setScope] = useState(0);
    const [item] = useState(['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']);
    return (
        <div className="header-container">
            <div className="header-top">
                <img src={logo} alt="" />
                <p className="score">Score: {scope}</p>
            </div>
            <ul className="menu">
                {
                    item.map((item, i) =>
                        <li className={i === 0 ? "item active" : "item"} key={i}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

