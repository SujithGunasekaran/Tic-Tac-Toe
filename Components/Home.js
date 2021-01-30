import { useState } from 'react';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';
import Form from './Form';

export default function Home() {
    const [startGame, setStartGame] = useState(false);
    const [playerOneName, setPlayerNameOne] = useState('');
    const [playerTwoName, setPlayerNameTwo] = useState('');
    return (
        <div className="main">
            <Header />
            <div>
                {
                    startGame ?
                        <>
                            <Game
                                playerOneName={playerOneName ? playerOneName : ''}
                                playerTwoName={playerTwoName ? playerTwoName : ''}
                            />
                            <Footer
                                setStartGame={setStartGame}
                                setPlayerNameOne={setPlayerNameOne}
                                setPlayerNameTwo={setPlayerNameTwo}
                            />
                        </> :
                        <Form
                            setStartGame={setStartGame}
                            setPlayerNameOne={setPlayerNameOne}
                            setPlayerNameTwo={setPlayerNameTwo}
                        />
                }
            </div>
        </div>
    )

}