// import * as React from "react";
// import './windowscard.css';
// import { useState, useCallback } from "react";
// import Draggable from "react-draggable";
// import { FaComputer } from "react-icons/fa6"
// import { AiOutlineDown } from "react-icons/ai"
// import $ from "jquery";

// function WindowsCard(props) {

//     let skillCardNoShadow = 'windows-programface';
//     let skillCardShadow = 'windows-programface windows-shadow';
//     let minimizedStylesHandle = 'windows-handle windows-shadow';
//     let maximizedStylesHandle = 'windows-handle';

//     const [minimized, setMinimized] = useState(false);


//     function handleMinimize(e) {
//         setMinimized(!minimized);
//     }

//     const handleDrag = useCallback((e) => {
//         // $("#" + props.id).toggleClass("above");
//         $("#" + props.id).addClass("above");
//         console.log(props.id);
//         // e.preventDefault();
//     });


//     return (
//         // <div className="skill-img-label">
//         <Draggable
//             onDrag={handleDrag}
//             // onMouseDown={handleDrag}
//             handle=".windows-handle"
//             defaultPosition={{ x: 0, y: 0 }}
//             scale={1}>
//             <div id={props.id} className={minimized ? skillCardNoShadow : skillCardShadow}>
//                 <div className={minimized ? minimizedStylesHandle : maximizedStylesHandle}>
//                     {/* iconhere */}
//                     <div className="w-title-wrap">
//                         <FaComputer className="w-program-icon" />
//                         <h1 className='w-program-title'>{props.programText}</h1>
//                     </div>
//                     <button className='w-minimize-btn' style={{ background: minimized ? "radial-gradient(yellow, goldenrod)" : "radial-gradient(orange, red)" }} onClick={handleMinimize} onTouchEnd={handleMinimize}></button>
//                 </div>
//                 <div className='windows-program-wrapper' style={{ visibility: minimized ? 'hidden' : 'visible' }}>
//                     {props.artComp}
//                 </div>
//             </div>
//         </Draggable >
//         // </div>
//     );
// }

// export default WindowsCard;

import * as React from "react";
import './windowscard.css';
import { useState, useCallback } from "react";
import Draggable from "react-draggable";
import { FaComputer } from "react-icons/fa6";
import { AiOutlineDown } from "react-icons/ai";
import $ from "jquery";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function WindowsCard(props) {
    let skillCardNoShadow = 'windows-programface';
    let skillCardShadow = 'windows-programface windows-shadow';
    let minimizedStylesHandle = 'windows-handle windows-shadow';
    let maximizedStylesHandle = 'windows-handle';
    const [minimized, setMinimized] = useState(false);
    function handleMinimize(e) {
        setMinimized(!minimized);
    }
    const handleDrag = useCallback(e => {
        // $("#" + props.id).toggleClass("above");
        $("#" + props.id).addClass("above");
        console.log(props.id);
        // e.preventDefault();
    });
    return (
        /*#__PURE__*/
        // <div className="skill-img-label">
        _jsx(Draggable, {
            onDrag: handleDrag
            // onMouseDown={handleDrag}
            ,
            handle: ".windows-handle",
            defaultPosition: {
                x: 0,
                y: 0
            },
            scale: 1,
            children: /*#__PURE__*/_jsxs("div", {
                id: props.id,
                className: minimized ? skillCardNoShadow : skillCardShadow,
                children: [/*#__PURE__*/_jsxs("div", {
                    className: minimized ? minimizedStylesHandle : maximizedStylesHandle,
                    children: [/*#__PURE__*/_jsxs("div", {
                        className: "w-title-wrap",
                        children: [/*#__PURE__*/_jsx(FaComputer, {
                            className: "w-program-icon"
                        }), /*#__PURE__*/_jsx("h1", {
                            className: "w-program-title",
                            children: props.programText
                        })]
                    }), /*#__PURE__*/_jsx("button", {
                        className: "w-minimize-btn",
                        style: {
                            background: minimized ? "radial-gradient(yellow, goldenrod)" : "radial-gradient(orange, red)"
                        },
                        onClick: handleMinimize,
                        onTouchEnd: handleMinimize
                    })]
                }), /*#__PURE__*/_jsx("div", {
                    className: "windows-program-wrapper",
                    style: {
                        visibility: minimized ? 'hidden' : 'visible'
                    },
                    children: props.artComp
                })]
            })
        })
        // </div>
    );
}
export default WindowsCard;