import * as React from "react";
import './messageform.css';
import { useState } from "react";
import Draggable from "react-draggable";
import { FaComputer } from "react-icons/fa6"

function MessageForm(props) {
    let skillCardNoShadow = 'mform-programface windomf-item';
    let skillCardShadow = 'mform-programface box-shadow windomf-item';
    let minimizedStylesHandle = 'mform-handle box-shadow';
    let maximizedStylesHandle = 'mform-handle';

    const [minimized, setMinimized] = useState(false);
    const [formReady, setFormReady] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [ssnVal, setSsnVal] = useState("");


    function handleMinimize(e) {
        setMinimized(!minimized);
    }

    function handleSubmit(e) {
        if (ssnVal === "" || ssnVal.length <= 0) {
            setFormReady(false);
        } else {
            setFormReady(true);
            setFormSubmitted(true);
        }
    }

    const onSsnChange = e => {
        setSsnVal(e.target.value);

        if (e.target.value === "" || e.target.value.length <= 0) {
            setFormReady(false);
        } else {
            setFormReady(true);
        }
    }

    return (
        // <div className="skill-img-label">
        <Draggable
            handle=".mform-handle"
            defaultPosition={{ x: 0, y: 0 }}
            scale={1}>
            <div className={minimized ? skillCardNoShadow : skillCardShadow}>
                <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
                    <div className="mf-title-wrap">
                        <FaComputer className="mf-program-icon" />
                        <h1 className='mf-program-title'>{props.programText}</h1>
                    </div>
                    <button className='mf-minimize-btn' style={{ background: minimized ? "radial-gradient(yellow, goldenrod)" : "radial-gradient(orange, red)" }} onClick={handleMinimize}></button>
                </div>
                <div className='mform-program-wrapper' style={{ visibility: minimized ? 'hidden' : 'visible' }}>
                    {/* Build form here, ask for name, last name, message ssn but require only the ssn.  I will definitely respond to your VERY important message... promptly. */}
                    <div className="form-wrapper">
                        {
                            formSubmitted ?
                                <React.Fragment>
                                    <h1 className="form-submitted">GOOD JOB</h1>
                                    <p className="form-submitted-good-job">
                                        I will <span className="yellow-span">*DEFINITELY*</span> prioritize and respond to your message promptly.
                                        <span className="blue-span italics">  You are so important</span><span className="green-span">.</span>
                                    </p>
                                    <p className="form-submitted-good-job">
                                        <span className="red-span">  I care so much</span>
                                    </p>
                                    <p className="form-submitted-p">
                                        (forget your own name)
                                    </p>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <h1 className="form-title">Inquire me!</h1>
                                    <div className="names">
                                        <div className="name-wrap">
                                            <h1 className="input-tag"><span className="green-span">FIRST</span> Name:</h1>
                                            <input className="input"></input>
                                        </div>
                                        <div className="name-wrap">
                                            <h1 className="input-tag"><span className="blue-span">LAST</span> Name:</h1>
                                            <input className="input"></input>
                                        </div>
                                    </div>

                                    <div className="input-div">
                                        <h1 className="input-tag"><span className="pink-span">SSN</span># (<span className="pink-span">S</span>ocial <span className="pink-span">S</span>ecurity <span className="pink-span">N</span>umber):</h1>
                                        <h1 className="required-text" style={{ display: formReady ? 'none' : 'block' }}>*This field is REQUIRED*</h1>
                                        <input className="input" type='text' onChange={onSsnChange} value={ssnVal}></input>
                                    </div>

                                    <div className="input-div">
                                        <h1 className="input-tag">Your <span className="yellow-span">*VERY*</span> important message:</h1>
                                        <textarea className="message-input" type="email"></textarea>
                                    </div>

                                    <button className="send-button" onClick={handleSubmit}>Send</button>
                                </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </Draggable>
        // </div>
    );
}

export default MessageForm;