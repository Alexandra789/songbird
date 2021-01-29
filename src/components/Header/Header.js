import './Header.css';
import logo from './logo.svg';

export default function Header(props) {
    const menuItems = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
    return (
        <div className="header-container">
            <div className="header-top">
                <img src={logo} alt="" />
                <p className="score">Score: {props.scope}</p>
            </div>
            <ul className="menu">
                {
                    menuItems.map((item, i) =>
                        <li className={i === 0 ? "item active" : "item"} key={i}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

