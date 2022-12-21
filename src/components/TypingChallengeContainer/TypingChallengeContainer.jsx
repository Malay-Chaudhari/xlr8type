import React from "react";
import ChallegeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({ selectedParagraph, words, characters, wpm, timeRemaining, timeStarted, testInfo, onInputChange }) => {
    return (
        <div className="typing-challenge-container">
            {/* Details Section  */}
            <div className="details-container">
                {/* Words typed */}
                <ChallegeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters typed */}
                <ChallegeDetailsCard cardName="Characters" cardValue={characters} />

                {/* Speed */}
                <ChallegeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>

            {/* The Real challenge */}
            <div className="typewriter-container">
                <TypingChallenge timeRemaining={timeRemaining} timeStarted={timeStarted} selectedParagraph={selectedParagraph} testInfo={testInfo} onInputChange={onInputChange} />
            </div>
        </div>
    );
}

export default TypingChallengeContainer;