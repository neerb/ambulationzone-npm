import * as React from "react";
import './floortoolbar.css';
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

function ToolSwitch(props) {
    const [isEnabled, setIsEnabled] = useState(props.enabled);

    const handleClick = (e) => {
        props.toggle(!isEnabled);
        setIsEnabled(!isEnabled);
    }

    return (
        <div className="toolswitch-wrapper">
            <div className="toolswitch">
                <h1 className="switch-title">{props.switchname}</h1>
                <button className="switch-btn" onClick={handleClick} style={isEnabled ? enabledStyles : disabledStyles}>
                    {
                        isEnabled ?
                            <AiOutlineCheck />
                            :
                            <RxCross1 />
                    }
                </button>
            </div>
        </div>
    );
}

const enabledStyles = {
    background: "#59C9A5",
}

const disabledStyles = {
    background: "#D81E5B",
}

function FloorToolbar(props) {
    const [isMinimized, setIsMinimized] = useState(true);

    const handleMinimize = (e) => {
        setIsMinimized(!isMinimized);
    }

    return (
        <React.Fragment>
            <div className="toolbar-min-wrap" style={{ display: (isMinimized ? "" : "none") }} onClick={handleMinimize} onTouchEnd={handleMinimize}>
                <div className="toolbar">
                    <div className="bolt-wrapper">
                        <div className="screw" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
                    </div>

                    <hr className="dashed center"></hr>

                    <button className="min-btn" onClick={handleMinimize} onTouchEnd={handleMinimize}>
                        <BiUpArrow />
                    </button>

                    <hr className="dashed center"></hr>

                    <div className="bolt-wrapper">
                        <div className="bolt" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
                    </div>
                </div>
            </div>

            <div className="toolbar-btn-wrap" style={{ display: (isMinimized ? "none" : "") }}>
                {/* <button className="min-btn center trans" onClick={handleMinimize} onTouchEnd={handleMinimize}>
                    <BiDownArrow />
                </button> */}

                <div className="toolbar-wrapper">
                    <div className="toolbar">
                        <div className="bolt-wrapper">
                            <div className="bolt" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
                            <div className="screw" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
                        </div>

                        <div className="settings-wrapper">
                            <div className="title-wrapper-toolbar">
                                <hr className="dashed"></hr>

                                <h1 className="title-text-toolbar">
                                    {"> Settings <"}
                                </h1>

                                <hr className="dashed"></hr>
                            </div>

                            <div className="switches-wrapper">
                                <ToolSwitch switchname='-Filter-' enabled={true} toggle={props.tFilter} />
                                <ToolSwitch switchname='*Grid*' enabled={true} toggle={props.tGrid} />
                                <button className="min-btn centerx transx" onClick={handleMinimize} onTouchEnd={handleMinimize}>
                                    <BiDownArrow />
                                </button>
                                <ToolSwitch switchname='^Invert^' enabled={false} toggle={props.tInversion} />
                                <ToolSwitch switchname='~Music~' enabled={true} toggle={props.tSounds} />
                            </div>

                            <hr className="dashed"></hr>
                        </div>

                        <div className="bolt-wrapper">
                            <div className="screw" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
                            <div className="bolt" style={{ transform: "rotateZ(" + (Math.random() * 25) + "deg)" }} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default FloorToolbar;