import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import "./TestContainer.css";

const TestContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timeStarted, testInfo, onInputChange, startAgain }) => {

    return (
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-cont">
                        <TypingChallengeContainer words={words} characters={characters} wpm={wpm} timeRemaining={timeRemaining} timeStarted={timeStarted} selectedParagraph={selectedParagraph} testInfo={testInfo} onInputChange={onInputChange} />
                    </div>
                ) : (
                    <div className="try-again-cont">
                        <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain} />
                    </div>
                )
            }
        </div>
    );
}

export default TestContainer;