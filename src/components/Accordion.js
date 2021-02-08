import React, { useState, useRef } from 'react';
import Chevron from './Chevron';    

import './Accordion.css';

const Accordion = (props) => {

    const [active, setActive] = useState('');
    const [height, setHeight] = useState('0px');
    const [rotate, setRotate] = useState('');

    const content = useRef('null');

    const toogleAccordion = () => {
        setActive(active === '' ? 'active' : '');
        setHeight(
            active === 'active'
                ? '0px'
                : `${content.current.scrollHeight}px`
        );
        setRotate(
            active === 'active'
                ? ''
                : 'rotate'
        );  
    }

    return (
        <div className="accordion-section">
            <div className="title-wrapper" onClick={toogleAccordion}>
                <h3
                    className="title"
                    dangerouslySetInnerHTML={{
                        __html: props.item.question
                    }}
                />
                <Chevron
                    className={`${rotate}`}
                    width={24}
                    height={24}
                    fill="#000"
                />
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="content"
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.item.correct_answer
                    }}
                />
            </div>
        </div>
    );
};

export default Accordion;