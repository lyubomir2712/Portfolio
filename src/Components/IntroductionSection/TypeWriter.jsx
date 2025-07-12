import React, { useState, useEffect } from 'react';
import './TypeWriter.css'
const Typewriter = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [blink, setBlink] = useState(false);
    const words = ['ASP.NET', 'C#', 'SQL', 'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Docker', 'Azure', 'EF Core'];
    const typingSpeed = 200;
    const deleteSpeed = 100;
    const pauseTime = 1000;
    const blinkSpeed = 500;

    useEffect(() => {
        let timeout;

        const currentWord = words[index];

        if (!isDeleting) {
            if (letterIndex < currentWord.length) {
                timeout = setTimeout(() => {
                    setText((prevText) => prevText + currentWord[letterIndex]);
                    setLetterIndex((prevIndex) => prevIndex + 1);
                }, typingSpeed);
            } else {
                setBlink(true);
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setBlink(false);
                }, pauseTime);
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText((prevText) => prevText.slice(0, -1));
                }, deleteSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % words.length);
                    setLetterIndex(0);
                }, pauseTime);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, letterIndex]);

    useEffect(() => {
        if (blink) {
            const blinkTimeout = setInterval(() => {
                setBlink((prevBlink) => !prevBlink);
            }, blinkSpeed);

            return () => clearInterval(blinkTimeout);
        }
    }, [blink]);

    return (
        <span className="technologies">
            {text}
            <span style={{ opacity: blink ? 0 : 1 }}>|</span> {}
        </span>
    );
};

export default Typewriter;