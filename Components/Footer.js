export default function Footer({ setStartGame }) {
    return (
        <div>
            <div className="footerContainer">
                <button className="restart-btn" onClick={() => setStartGame(false)}>Restart</button>
            </div>
            <style jsx>
                {`
                    .footerContainer {
                        margin: 10px 0px 0px 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .restart-btn {
                        margin-bottom: 30px;
                        border: none;
                        border-radius: 5px;
                        background-color: red;
                        color: white;
                        padding: 5px 15px;
                    }
                `}
            </style>
        </div>
    )
}