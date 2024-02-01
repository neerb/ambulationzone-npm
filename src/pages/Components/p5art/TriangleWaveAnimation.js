import React, { Component } from 'react';
import p5 from 'p5';

class TriangleWaveAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.triangleSize = 40;
        this.amplitude = 50;
        this.frequency = 0.1;
        this.phase = 0;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 400);
        };

        p.draw = () => {
            p.background(0);
            p.noFill();
            p.stroke(255);

            for (let x = 0; x < p.width + this.triangleSize; x += this.triangleSize) {
                let y = -p.tan(x * this.frequency + this.phase) * this.amplitude + p.height / 2;
                this.drawEquilateralTriangle(x, y, this.triangleSize);
            }

            this.phase += 0.05; // Move the wave horizontally
        };

        this.drawEquilateralTriangle = (x, y, size) => {
            let height = size * (Math.sqrt(3) / 2);
            p.beginShape();
            p.vertex(x, y - height / 2);
            p.vertex(x + size / 2, y + height / 2);
            p.vertex(x - size / 2, y + height / 2);
            p.endShape(p.CLOSE);
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default TriangleWaveAnimation;
