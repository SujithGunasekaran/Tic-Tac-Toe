import { useEffect } from 'react';
import useForm from '../Hooks/useForm';

export default function Form({ setStartGame, setPlayerNameOne, setPlayerNameTwo }) {
    const { playerName: { playerOneName, playerTwoName }, formResult, playerFormError: { playerOneNameError, playerTwoNameError }, handleInputPlayerName, handleFormSubmit } = useForm();
    useEffect(() => {
        if (formResult) {
            setStartGame(true);
            setPlayerNameOne(playerOneName);
            setPlayerNameTwo(playerTwoName);
        }
    }, [formResult])
    return (
        <div>
            <div className="form-container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <div className="form-heading">Welcome To Tic-Tac-Teo</div>
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    type="text"
                                    className={playerOneNameError ? 'form-input-field-error' : 'form-input-field'}
                                    name="playerOneName"
                                    placeholder="Player One Name"
                                    value={playerOneName}
                                    onChange={handleInputPlayerName}
                                />
                                {
                                    playerOneNameError ? <div className="form-name-error">{playerOneNameError}</div> : null
                                }
                                <input
                                    type="text"
                                    className={playerTwoNameError ? 'form-input-field-error' : 'form-input-field'}
                                    name="playerTwoName"
                                    placeholder="Player Two Name"
                                    value={playerTwoName}
                                    onChange={handleInputPlayerName}
                                />
                                {
                                    playerTwoNameError ? <div className="form-name-error">{playerTwoNameError}</div> : null
                                }
                                <button className="form-submit-btn">Start Game</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}