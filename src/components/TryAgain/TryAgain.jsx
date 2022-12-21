import React from "react";
import "./TryAgain.css";

const TryAgain = ({ characters, words, wpm, startAgain }) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div>
                <button onClick={() => startAgain()} className="end-buttons start-again-btn">Retry</button>
                <button className="end-buttons share-btn" onClick={() => window.open("https://www.facebook.com/sharer/sharer.php", "facebook-share-dialogue", "width=800, height=600")}>Share</button>
                <button className="end-buttons tweet-btn" onClick={() => window.open("https://www.twitter.com/intent/tweet", "twitter", "width=800, height=600")}>Tweet</button>
            </div>
        </div>
    );
}

export default TryAgain;