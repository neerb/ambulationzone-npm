import React, { Component } from 'react';
import p5 from 'p5';

class TorusAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.angleX = 0;
        this.angleY = 0;
        this.radius1 = 100;
        this.radius2 = 30;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 400, p.WEBGL);
            p.noFill();
        };

        p.draw = () => {
            p.background(0);
            p.rotateX(this.angleX);
            p.rotateY(this.angleY);

            for (let j = 0; j < p.TWO_PI; j += p.PI / 6) {
                p.beginShape(p.TRIANGLE_STRIP);
                for (let i = 0; i < p.TWO_PI + 0.1; i += p.PI / 6) {
                    let x = (this.radius1 + this.radius2 * p.cos(j)) * p.cos(i);
                    let y = (this.radius1 + this.radius2 * p.cos(j)) * p.sin(i);
                    let z = this.radius2 * p.sin(j);
                    p.vertex(x, y, z);

                    x = (this.radius1 + this.radius2 * p.cos(j + p.PI / 6)) * p.cos(i);
                    y = (this.radius1 + this.radius2 * p.cos(j + p.PI / 6)) * p.sin(i);
                    z = this.radius2 * p.sin(j + p.PI / 6);
                    p.vertex(x, y, z);
                }
                p.endShape();
            }

            this.angleX += 0.01;
            this.angleY += 0.01;
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default TorusAnimation;
