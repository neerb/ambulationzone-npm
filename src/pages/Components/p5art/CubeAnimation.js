import React, { Component } from 'react';
import p5 from 'p5';

class CubeAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.angleX = 0;
        this.angleY = 0;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(200, 200, p.WEBGL);
        };

        p.draw = () => {
            p.background(0);
            p.stroke(255);
            p.noFill();


            p.rotateX(this.angleX);
            p.rotateY(this.angleY);

            p.box(100);

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

export default CubeAnimation;
