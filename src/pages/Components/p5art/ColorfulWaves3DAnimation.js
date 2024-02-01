import React, { Component } from 'react';
import p5 from 'p5';

class ColorfulWave3DAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.angle = 0;
    }

    Sketch = (p) => {
        let wave = [];

        p.setup = () => {
            p.createCanvas(400, 400, p.WEBGL);
            p.noFill();
            for (let x = 0; x <= 800; x += 10) {
                let y = p.random(100, 200) * p.sin(p.radians(x));
                wave.push(y);
            }
        }

        p.draw = () => {
            p.background(0);
            p.translate(0, p.height / 2, -200);
            p.rotateX(p.PI / 3);

            for (let i = 0; i < wave.length; i++) {
                p.stroke(i % 255, 255 - (i % 255), (i * 2) % 255);
                p.line(i - 400, wave[i], i - 400, wave[i] - 10);
            }

            this.angle += 0.05;
            for (let x = 0; x <= 800; x += 10) {
                let y = p.sin(p.radians(x + this.angle)) * 100;
                wave[x / 10] = y;
            }
        }
    }

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        );
    }
}

export default ColorfulWave3DAnimation;
