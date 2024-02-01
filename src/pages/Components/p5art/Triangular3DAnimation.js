import React, { Component } from 'react';
import p5 from 'p5';

class Triangular3DAnimation extends Component {
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
            p.noStroke(); // Remove stroke for a cleaner look
        }

        p.draw = () => {
            p.background(200, 200, 250);
            p.ambientLight(100); // Add ambient light to brighten the scene
            p.pointLight(255, 255, 255, 0, 0, 300); // Add a bright point light source

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
                    let r = p.map(p.cos(a), -1, 1, 0, 255);
                    let g = p.map(p.sin(a), -1, 1, 0, 255);
                    let b = p.map(p.tan(a), -1, 1, 0, 255);

                    p.translate(x, 0, z);
                    p.specularMaterial(r, g, b); // Use calculated color for material
                    p.beginShape();
                    p.vertex(0, -h / 2, 0);
                    p.vertex(w / 2, h / 2, 0);
                    p.vertex(-w / 2, h / 2, 0);
                    p.endShape(p.CLOSE);
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

export default Triangular3DAnimation;
