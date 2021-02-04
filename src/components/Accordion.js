import React, { useState, useRef } from 'react';
import Chevron from './Chevron';    

import './Accordion.css';

const Accordion = (props) => {

    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState('');

    const content = useRef('null');

    const toogleAccordion = () => {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(
            setActive === 'active'
                ? '0px'
                : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === 'active'
                ? ''
                : 'rotate'
        );  
    }

    return (
        <div key={props.item.id} className="accordion-section">
            <div className="title-wrapper" onClick={toogleAccordion}>
                <p className="title">{props.item.title}</p>
                <Chevron
                    className={`${setRotate}`}
                    width={24}
                    height={24}
                    fill="#000"
                />
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="content"
            >
                <div dangerouslySetInnerHTML={{ __html: props.item.content }} />
            </div>
        </div>
    );
};

export default Accordion;