import './GameOver.css';

export default function GameOver(props) {
    let gameOver = document.querySelector('.game-over');
    let mainContent = document.querySelector('.main-content');
    let birdCard = document.querySelector('.bird-card');
    let menuItem = document.querySelectorAll('.menu-item');
   
    const restartGame = () => {
        props.setLevel(0);
        props.setScope(0);
        menuItem[0].classList.add('active');
        gameOver.style.display = 'none';
        mainContent.style.display = 'block';
        birdCard.style.display = 'block';
    }
    
    if(props.scope === 30) {
        gameOver.style.backgroundImage = 
        "url('https://4.bp.blogspot.com/-F_lsH73yHMQ/W0Its2856gI/AAAAAAAAGtU/mjJpotIB1bss2LmXNmCdF60KHFuS_626QCLcBGAs/s1600/fireworks.gif')";
        
    }
    if(props.scope !== 30 && gameOver){
        gameOver.style.backgroundColor = '#303030';
        gameOver.style.backgroundImage = 'none';   
    }

    return (
        <div className="game-over">
            <h1 className="congrats">Поздравляем!</h1>
            <p className="text">Вы прошли викторину и набрали {props.scope} из 30 возможных баллов</p>
            <button className="button-game-over" onClick={restartGame}>Попробовать еще раз!</button>
        </div>
    )
}