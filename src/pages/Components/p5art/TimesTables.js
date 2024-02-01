import React, { Component } from 'react';
import p5 from 'p5';
import './p5styles.css'

class TimesTables extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let points = 128; // Amount of points around the circle's perimeter: increase for a finer, more detailed image, lower for the opposite
        let angleInc;
        let angle = 0;
        let radius;
        let times = 1;
        let width = 400;
        let height = 400;
        let flip = false;
        let inc = 0.05;

        p.setup = () => {
            p.createCanvas(width, height);
            angleInc = p.floor(360 / points);
            radius = width / 2.5;
            times = 0; // 7919;///sqrt(2);
            p.frameRate(24);
        }

        p.draw = () => {
            p.background(51);
            p.text(times, 30, 30);
            p.translate(width / 2, height / 2); // Translate to center times table
            p.noFill();
            p.ellipse(0, 0, radius * 2, radius * 2); // Draws circle around times table

            let index = 0;

            // Continues to loop until we have completely drawn a times table
            while (angle <= 360) {
                p.stroke(255);
                p.strokeWeight(0.5);

                let hue = p.map(p.sin(p.radians(angle * times)), -1, 1, 0, 255);
                let brightness = p.map(p.cos(p.radians(angle)), -1, 1, 50, 255);
                p.stroke(hue, 255, brightness);

                // Conversion from polar to Cartesian coordinates
                let x = p.cos(p.radians(angle)) * radius;
                let y = p.sin(p.radians(angle)) * radius;

                p.point(x, y);

                let num = p.floor(index * times);

                // Conversion from polar to Cartesian coordinates
                let nextX = p.cos(p.radians(angleInc * num)) * radius;
                let nextY = p.sin(p.radians(angleInc * num)) * radius;

                // Draws a line from the current coordinate to the newly calculated coordinate (polar)
                p.line(x, y, nextX, nextY);

                angle += p.floor(angleInc);
                index++;
            }

            angle = 0;

            if (flip) {
                times -= inc;
            }
            else
                times += inc;

            if (times >= 10) {
                flip = true;
            }

            if (times <= 0) {
                flip = false;
            }
        }
    }

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div className='p5-wrap' ref={this.myRef}></div>
        );
    }
}

export default TimesTables;
