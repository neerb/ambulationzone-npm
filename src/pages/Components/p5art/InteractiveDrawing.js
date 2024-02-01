import React, { Component } from 'react';
import p5 from 'p5';
import './p5styles.css'

class InteractiveDrawing extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let backgroundColor = 0;

        p.setup = () => {
            p.createCanvas(270, 270);
        };

        p.draw = () => {
            let r = p.map(p.mouseX, 0, p.width, 0, 255);
            let g = p.map(p.mouseY, 0, p.height, 0, 255);
            let b = p.map(p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2), 0, p.width / 2, 255, 0);

            p.background(backgroundColor);
            p.fill(r, g, b);
            p.noStroke();

            if (p.random(0, 3) == 0) {
                p.ellipse(p.mouseX, p.mouseY, 50, 50);
            }
            else {
                p.rect(p.mouseX - 25, p.mouseY - 25, 50, 50);
            }

        };

        p.mousePressed = () => {
            backgroundColor = 255 - backgroundColor;
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div className='p5-wrap' ref={this.myRef}></div>;
    }
}

export default InteractiveDrawing;
