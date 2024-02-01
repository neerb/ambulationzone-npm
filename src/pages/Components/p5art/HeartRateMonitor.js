import React, { Component } from 'react';
import p5 from 'p5';

class HeartRateMonitor extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.heartRateValues = [];
        this.lastBeatTime = 0;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 200);
            p.stroke(255);
            p.noFill();
        };

        p.draw = () => {
            p.background(0);

            // Draw heart rate monitor graph
            p.translate(0, p.height / 2);
            p.beginShape();
            for (let i = 0; i < this.heartRateValues.length; i++) {
                let x = i * 5;
                let y = this.heartRateValues[i] * -50; // Scale the values for better visualization
                p.vertex(x, y);
            }
            p.endShape();

            // Add new heart rate value every frame
            let heartRateValue = 0; // Default value is 0 (flat line)
            if (p.millis() - this.lastBeatTime > 1000) {
                // Simulate a beat approximately every second
                heartRateValue = p.random(1.5, 2); // Increase the heart rate value to simulate a beat
                this.lastBeatTime = p.millis(); // Update the last beat time
            }

            this.heartRateValues.push(heartRateValue);
            if (this.heartRateValues.length > p.width / 5) {
                this.heartRateValues.shift();
            }
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default HeartRateMonitor;
