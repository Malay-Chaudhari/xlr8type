import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import "./ChallengeSection.css"

const ChallengeSection = ({ selectedParagraph, words, characters, wpm, timeRemaining, timeStarted, testInfo, onInputChange, startAgain }) => {
    return (
        <div className="challenge-section-container">
            <h1 dataa-aos="fade-down" className='challenge-section-header'>
                Take a speed test now!
            </h1>
            <TestContainer words={words} characters={characters} wpm={wpm} timeRemaining={timeRemaining} timeStarted={timeStarted} selectedParagraph={selectedParagraph} testInfo={testInfo} onInputChange={onInputChange} startAgain={startAgain} />
        </div>
    );
}

export default ChallengeSection;