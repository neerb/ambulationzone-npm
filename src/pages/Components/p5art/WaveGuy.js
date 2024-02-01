import React, { Component } from 'react';
import p5 from 'p5';
import "./p5styles.css"

class WaveGuy extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let angle = 0;
        let w = 24;
        let ma;
        let maxD;
        let r = 0;

        p.setup = () => {
            p.createCanvas(400, 400, p.WEBGL);
            ma = p.atan(p.cos(p.QUARTER_PI));
            maxD = p.dist(0, 0, 200, 200);
            p.rotateY(ma);
        }

        p.draw = () => {
            p.background(100, 100, 250);
            p.ortho(-400, 400, -400, 400, 0, 1000);
            p.rotateX(-p.QUARTER_PI);
            p.rotateY(-r / 2);

            for (let z = 0; z < p.height; z += w) {
                for (let x = 0; x < p.width; x += w) {
                    p.push();
                    let d = p.dist(x, z, p.width / 2, p.height / 2);
                    let offset = p.map(d, 0, maxD, -p.PI, p.PI);
                    let a = angle + offset;
                    let h = p.floor(p.map(p.sin(a), -1, 1, 100, 300));
                    p.translate(x - p.width / 2, 0, z - p.height / 2);
                    p.normalMaterial();
                    p.box(w - 2, h, w - 2);
                    p.pop();
                }
            }

            angle -= 0.07;
            r += 0.01;
        }

    }

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return (
            <div ref={this.myRef} className='p5-wrap'>

            </div>
        );
    }
}

export default WaveGuy;
