import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0); // Tracks the current word index
    const [letterIndex, setLetterIndex] = useState(0); // Tracks the current letter index
    const words = ['ASP.NET', 'C#', 'SQL', 'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Docker', 'Azure'];
    const typingSpeed = 200; // Speed of typing in milliseconds
    const deleteSpeed = 100; // Speed of deleting in milliseconds
    const pauseTime = 1000; // Time to pause after typing or deleting

    useEffect(() => {
        let timeout;

        const currentWord = words[index];

        if (!isDeleting) {
            // Typing logic: Add one letter at a time
            if (letterIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setText((prevText) => prevText + currentWord[letterIndex]);
                    setLetterIndex((prevIndex) => prevIndex + 1);
                }, typingSpeed);
            } else {
                // Pause after typing is complete
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            // Deleting logic: Remove one letter at a time
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText((prevText) => prevText.slice(0, -1));
                }, deleteSpeed);
            } else {
                // Pause after deleting is complete
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
                    setLetterIndex(0); // Reset letter index for the next word
                }, pauseTime);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, letterIndex]);

    return (
        <span>
            {text}
            <span>|</span> {/* Cursor */}
        </span>
    );
};

export default Typewriter;