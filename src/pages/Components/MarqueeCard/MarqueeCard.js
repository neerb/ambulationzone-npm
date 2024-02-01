import * as React from "react";
import './marqueecard.css';

function MarqueeCard(props) {
    return (
        <React.Fragment>
            <div className="marquee-wrap">
                <div className="marquee-inner">
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                    <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span>
                </div>
                <div className="marquee-inner">
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                    <span className="marquee-left">{"<-LEFT<-LEFT<-LEFT"}</span>
                </div>
                {/* <span className="marquee-right">{"RIGHT->RIGHT->RIGHT->"}</span> */}
            </div>
        </React.Fragment>
    );
}

export default MarqueeCard;