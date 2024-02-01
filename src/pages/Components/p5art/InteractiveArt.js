import React, { Component } from 'react';
import p5 from 'p5';

class InteractiveArt extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(300, 300);
        };

        p.draw = () => {
            // Calculate shape properties based on mouse position
            let mouseXPercent = p.mouseX / p.width;
            let mouseYPercent = p.mouseY / p.height;
            let shapeSize = p.map(p.dist(p.mouseX, p.mouseY, p.width / 2, p.height / 2), 0, p.width / 2, 20, 300);
            let shapeColor = p.color(360 * mouseXPercent, 100 * mouseYPercent, 100);

            // Set background color
            p.background(360 * mouseXPercent, 100, 100);

            // Draw a shape at the mouse position
            p.noStroke();
            p.fill(shapeColor);
            p.ellipse(p.mouseX, p.mouseY, shapeSize, shapeSize);
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default InteractiveArt;
