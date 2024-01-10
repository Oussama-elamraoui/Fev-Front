import { Text } from '@react-pdf/renderer';
import React, { useState, useEffect } from 'react';


interface LetterByLetterAnimationProps {
    text: string;

}

const OpenAiResult: React.FC<LetterByLetterAnimationProps> = ({ text }) => {
    const [animatedText, setAnimatedText] = useState<string>('');
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setAnimatedText((prevText) => prevText + text[index]);
            index++;

            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, 0.000001); // You can adjust the interval to control the speed of the animation

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <>
            <p className='text-muted' style={{fontSize:'0.775em'}}>{animatedText}</p>

        </>
    );
};

export default OpenAiResult;