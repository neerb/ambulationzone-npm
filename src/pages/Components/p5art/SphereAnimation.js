import React, { Component } from 'react';
import p5 from 'p5';

class SphereAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.angle = 0;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(300, 300, p.WEBGL);
        };

        p.draw = () => {
            p.background(0);
            p.strokeWeight(2);
            p.noFill();

            let radius = 100;
            let numParticles = 300;
            let particleSize = 5;

            p.rotateX(this.angle);
            p.rotateY(this.angle);

            for (let i = 0; i < numParticles; i++) {
                let xpos = radius * p.sin(i * p.TWO_PI / numParticles);
                let ypos = radius * p.cos(i * p.TWO_PI / numParticles);
                let hue = (i + p.frameCount) % 360;
                p.stroke(hue, 255, 255);
                p.push();
                p.translate(xpos, ypos);
                let swirlFactor = p.sin(this.angle * 5 + i * 0.2) * 50;
                p.rotateX(p.radians(swirlFactor));
                p.rotateY(p.radians(swirlFactor));
                p.sphere(particleSize);
                p.pop();
            }

            this.angle += 0.01;
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default SphereAnimation;
