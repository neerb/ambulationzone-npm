import * as React from "react";
import './skillcard.css';
import { useState } from "react";
import Draggable from "react-draggable";
import $ from 'jquery'

function SkillCard(props) {
    let minimizedStylesHandle = 'handle box-shadow';
    let maximizedStylesHandle = 'handle';
    let skillCardNoShadow = 'multi-array-window';
    let skillCardShadow = 'multi-array-window box-shadow';

    const [minimized, setMinimized] = useState(false);


    function handleMinimize(e) {
        setMinimized(!minimized);
    }

    const hoverWindow = (e) => {
        console.log("h");
        // $("body").addClass("grayscale");
        // $("#" + props.setId).addClass("removegray");

        // $('*').not("#" + props.setId).addClass("grayscale");
    }

    const endHover = (e) => {
        // $("body").removeClass("grayscale");
        // $("#" + props.setId).removeClass("removegray");

        // $('body').not("#" + props.setId).removeClass("grayscale");
    }

    return (
        // <div className="skill-img-label">
        <Draggable
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            scale={1}>
            <div id={props.setId} onMouseEnter={hoverWindow} onMouseLeave={endHover} className={(minimized ? skillCardNoShadow : skillCardShadow)}>
                <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
                    <button className='minimize-btn' style={{ background: minimized ? "radial-gradient(yellow, gold 80%)" : "radial-gradient(crimson, red 80%)" }} onClick={handleMinimize} onTouchEnd={handleMinimize}></button>
                    <div className='program-title'>
                        <div className="program-lines">
                            <div className='program-line'></div>
                            <div className='program-line'></div>
                            <div className='program-line'></div>
                        </div>
                        <h1 className='skills-text-title'>{props.programText}</h1>
                        <div className="program-lines">
                            <div className='program-line'></div>
                            <div className='program-line'></div>
                            <div className='program-line'></div>
                        </div>                    </div>
                </div>
                <div className='multi-image-skill-wrapper' style={{ visibility: minimized ? 'hidden' : 'visible' }}>
                    {props.artComp}
                </div>
            </div>
        </Draggable >
        // </div>
    );
}

export default SkillCard;