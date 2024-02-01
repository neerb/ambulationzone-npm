import * as React from "react";
import './maccard.css';
import { useState } from "react";
import Draggable from "react-draggable";
import { FaComputer } from "react-icons/fa6"
import { BsFillFolderFill } from "react-icons/bs"
import { AiOutlineDown } from "react-icons/ai"
import $ from "jquery";

function MacCard(props) {
    let skillCardNoShadow = 'mac-programface';
    let skillCardShadow = 'mac-programface mac-shadow';
    let minimizedStylesHandle = 'mac-handle mac-shadow';
    let maximizedStylesHandle = 'mac-handle';

    const [minimized, setMinimized] = useState(false);


    function handleMinimize(e) {
        setMinimized(!minimized);
    }

    function handleDrag(e) {
        $("#" + props.id).addClass("above");
        console.log(props.id);
    }

    return (
        // <div className="skill-img-label">
        <Draggable
            onDrag={handleDrag}
            handle=".mac-handle"
            defaultPosition={{ x: 0, y: 0 }}
            scale={1}
        >
            <div id={props.id} className={minimized ? skillCardNoShadow : skillCardShadow}>
                <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
                    <button className={"m-minimize-btn " + (minimized ? "btn-b" : "btn-r")} onClick={handleMinimize} onTouchEnd={handleMinimize}></button>
                    <button className={"m-minimize-btn " + (minimized ? "btn-b" : "btn-y")} onClick={handleMinimize} onTouchEnd={handleMinimize}></button>
                    <button className={"m-minimize-btn " + (minimized ? "btn-b" : "btn-g")} onClick={handleMinimize} onTouchEnd={handleMinimize}></button>
                    <div className="m-title-wrap">
                        <BsFillFolderFill className="m-program-icon" />
                        <h1 className='m-program-title'>{props.programText}</h1>
                    </div>
                </div>
                <div className="under-bar" style={{ visibility: minimized ? 'hidden' : 'visible', display: !props.underbartext ? "none" : "" }}>
                    <div className="under-bar-text">
                        {props.underbartext}
                    </div>
                </div>
                <div className='mac-program-wrapper' style={{ visibility: minimized ? 'hidden' : 'visible' }}>
                    {props.artComp}
                </div>
            </div>
        </Draggable>
        // </div>
    );
}

export default MacCard;