import React, { Component } from 'react';
import p5 from 'p5';

class Colorful3DAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let angleX = 0;
        let angleY = 0;
        let w = 24;
        let ma;
        let maxD;

        p.setup = () => {
            p.createCanvas(400, 400, p.WEBGL);
            ma = p.atan(p.cos(p.QUARTER_PI));
            maxD = p.dist(0, 0, 200, 200);
        }

        p.draw = () => {
            p.background(100, 100, 250);
            p.ortho(-400, 400, -400, 400, -400, 400);
            p.rotateX(angleX);
            p.rotateY(angleY);

            for (let z = -200; z < 200; z += w) {
                for (let x = -200; x < 200; x += w) {
                    p.push();
                    let d = p.dist(x, z, 0, 0);
                    let offset = p.map(d, 0, maxD, -p.PI, p.PI);
                    let a = angleX + angleY + offset;
                    let h = p.map(p.sin(a), -1, 1, 100, 300);
                    p.translate(x, 0, z);
                    p.specularMaterial(p.random(255), p.random(255), p.random(255));
                    p.box(w - 2, h, w - 2);
                    p.pop();
                }
            }
            angleX += 0.005; // Increase the angleX to create animation
            angleY += 0.005; // Increase the angleY to create animation
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

export default Colorful3DAnimation;
