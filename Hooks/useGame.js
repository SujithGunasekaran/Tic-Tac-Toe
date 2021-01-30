import { useState, useEffect } from 'react';

const useGame = (playerOneName, playerTwoName) => {
    const [playerChance, setPlayerChance] = useState(true);
    const [playerName, setPlayerName] = useState(playerOneName);
    const [content, setContent] = useState(Array(9).fill(null));
    const [winner, setWinnerResult] = useState(false);

    useEffect(() => {
        if (playerChance) setPlayerName(playerOneName);
        else setPlayerName(playerTwoName);
    }, [playerChance])

    const handleButtonClick = (e, arrIndex) => {
        if (playerChance) e.target.classList.add('playerOne');
        else e.target.classList.add('playerTwo');
        setContent((prevContent) => {
            let content = [...prevContent];
            content[arrIndex] = playerChance ? 'X' : 'O';
            let result = checkWinner(content);
            if (result !== null) {
                setWinnerResult(true)
                setPlayerName(result)
            } else {
                setPlayerChance(!playerChance);
            }
            return content
        })
    }

    const checkWinner = (content) => {
        let result = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < result.length; i++) {
            const [one, two, three] = result[i];
            if (content[one] === 'X' && content[two] === 'X' && content[three] === 'X') {
                return playerOneName;
            }
            if (content[one] === 'O' && content[two] === 'O' && content[three] === 'O') {
                return playerTwoName;
            }
        }
        return null;
    }

    return { content, playerName, winner, handleButtonClick }
}

export default useGame;