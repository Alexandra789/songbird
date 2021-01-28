import './Header.css';
import logo from './logo.svg';
import { useState } from 'react';

export default function Header() {
    const menuItems = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
    const [scope, setScope] = useState(0);
    const [item] = useState(menuItems);
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
