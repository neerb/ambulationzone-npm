import React from "react";
import "./skilltextcard.css";
import { useState } from "react";
import Draggable from "react-draggable";

function SkillTextCard(props) {
    let minimizedStylesHandle = 'text-handle box-shadow';
    let maximizedStylesHandle = 'text-handle';
    let skillCardNoShadow = 'skills-text-bubble';
    let skillCardShadow = 'skills-text-bubble box-shadow';
    const [minimized, setMinimized] = useState(false);

    function handleMinimize(e) {
        setMinimized(!minimized);
    }

    return (
        <Draggable
            handle=".text-handle"
            defaultPosition={{ x: 0, y: 0 }}
            scale={1}>
            <div className={minimized ? skillCardNoShadow : skillCardShadow}>
                <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
                    <button className='minimize-btn' onClick={handleMinimize} style={{ background: minimized ? "radial-gradient(yellow, gold 80%)" : "radial-gradient(crimson, red 80%)" }}></button>
                    <div className='program-title'>
                        <div className='program-line'></div>
                        <h1 className='skills-text-title'>{props.programText}</h1>
                        <div className='program-line'></div>
                    </div>
                </div>
                <div className='skills-text-wrapper' style={{ visibility: minimized ? 'hidden ' : 'visible ', backgroundColor: props.bgColor ? props.bgColor : "" }}>
                    <h1 className='skills-text-bubble-text' style={{ color: props.titleColor ? props.titleColor : "" }}>{props.titleText}</h1>
                    <p style={{ color: props.textColor ? props.textColor : "" }}>{props.skillsText}</p>
                </div>
            </div>
        </Draggable >
    );
}

export default SkillTextCard;