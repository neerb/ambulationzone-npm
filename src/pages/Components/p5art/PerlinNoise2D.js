import React, { Component } from 'react';
import p5 from 'p5';

class PerlinNoise2D extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.cols = 0;
        this.rows = 0;
        this.scl = 20;
        this.w = 250;
        this.h = 250;
        this.n = 0;
        this.r = 0;
        this.terrain = [];
        this.inc = 0.2;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(450, 300, p.WEBGL);
            this.cols = this.w / this.scl;
            this.rows = this.h / this.scl;
            for (let i = 0; i < this.cols; i++) {
                this.terrain[i] = [];
            }
        };

        p.draw = () => {
            p.background(0);
            p.stroke(255);
            p.strokeWeight(0.8);
            p.noFill();

            p.rotateX(p.PI / 2);
            p.rotateZ(this.r);
            p.translate(-this.w / 2, -this.h / 2);

            let yoff = this.n;
            for (let y = 0; y < this.rows; y++) {
                let xoff = 0;
                for (let x = 0; x < this.cols; x++) {
                    let createNoise = p.noise(xoff, yoff);
                    this.terrain[x][y] = p.map(createNoise, 0, 1, -100, 100);
                    xoff += this.inc;
                }
                yoff += this.inc;
            }

            for (let y = 0; y < this.rows - 1; y++) {
                p.beginShape(p.TRIANGLE_STRIP);
                for (let x = 0; x < this.cols; x++) {
                    p.vertex(x * this.scl, y * this.scl, this.terrain[x][y]);
                    p.vertex(x * this.scl, (y + 1) * this.scl, this.terrain[x][y + 1]);
                }
                p.endShape();
            }

            this.n -= 0.009;
            this.r += 0.005;
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default PerlinNoise2D;
