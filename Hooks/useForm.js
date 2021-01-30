import { useState } from 'react';

const useForm = () => {

    const [playerName, setPlayerName] = useState({ 'playerOneName': '', 'playerTwoName': '' });
    const [formField] = useState(['playerOneName', 'playerTwoName']);
    const [playerFormError, setPlayerFormError] = useState({ 'playerOneNameError': '', 'playerTwoNameError': '' })
    const [formResult, setFormResult] = useState(false);

    const handleInputPlayerName = (e) => {
        setPlayerName((prevPlayerName) => {
            let playerName = JSON.parse(JSON.stringify(prevPlayerName));
            playerName[e.target.name] = e.target.value;
            return playerName;
        })
        const { playerOneNameError, playerTwoNameError } = playerFormError;
        if (playerOneNameError !== '' || playerTwoNameError !== '') {
            setPlayerFormError((prevPlayerFormError) => {
                let playerFormError = JSON.parse(JSON.stringify(prevPlayerFormError));
                playerFormError[e.target.name + 'Error'] = '';
                return playerFormError;
            })
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let result = validateForm();
        if (result) {
            setFormResult(true);
        }
    }

    const validateForm = () => {
        let result = true;
        formField.forEach(formName => {
            if (playerName[formName] === '') {
                console.log("Form Error")
                setPlayerFormError((prevPlayerNameError) => {
                    let playerError = JSON.parse(JSON.stringify(prevPlayerNameError));
                    playerError[formName + 'Error'] = `Please Enter ${formName}`;
                    return playerError;
                })
                result = false;
            }
        })
        return result;
    }

    return { playerName, playerFormError, formResult, handleInputPlayerName, handleFormSubmit }
}

export default useForm;