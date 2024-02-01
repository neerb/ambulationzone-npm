import React, { Component } from 'react';
import p5 from 'p5';
import "./p5styles.css"

class SineWaveGraph extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.amplitude = 50;
        this.frequency = 0.02;
        this.phase = 0;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 200);
        };

        p.draw = () => {
            p.background(0);
            p.noFill();
            p.stroke(255);

            for (let x = 0; x < p.width; x += 10) {
                let y = p.sin(x * this.frequency + this.phase) * this.amplitude + p.height / 2;
                p.rect(x, p.height / 2, 10, y - p.height / 2);
            }

            this.phase += 0.03; // Move the wave horizontally
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef} className='p5-wrap'></div>;
    }
}

export default SineWaveGraph;
