import useGame from '../Hooks/useGame';

export default function Game({ playerOneName, playerTwoName }) {
    const { playerName, content, winner, handleButtonClick } = useGame(playerOneName, playerTwoName);
    return (
        <div>
            <div className="game-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="game-heading">
                                {winner ? '🎉 Winner 🎉' : 'Current Player'}
                            </div>
                            <div className="game-player-name">
                                {playerName}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="game-x-container">
                                <div className="row">
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[0] === null && !winner ? (e) => handleButtonClick(e, 0) : null}>{content[0]}</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[1] === null && !winner ? (e) => handleButtonClick(e, 1) : null}>{content[1]}</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[2] === null && !winner ? (e) => handleButtonClick(e, 2) : null}>{content[2]}</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[3] === null && !winner ? (e) => handleButtonClick(e, 3) : null}>{content[3]}</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[4] === null && !winner ? (e) => handleButtonClick(e, 4) : null}>{content[4]}</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[5] === null && !winner ? (e) => handleButtonClick(e, 5) : null}>{content[5]}</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[6] === null && !winner ? (e) => handleButtonClick(e, 6) : null}>{content[6]}</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[7] === null && !winner ? (e) => handleButtonClick(e, 7) : null}>{content[7]}</button>
                                    </div>
                                    <div className="col-4">
                                        <button className="game-x-btn-one" onClick={content[8] === null && !winner ? (e) => handleButtonClick(e, 8) : null}>{content[8]}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}