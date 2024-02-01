import React, { Component } from 'react';
import p5 from 'p5';

class ColorfulBouncingBalls3D extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.balls = [];
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 400, p.WEBGL);
            for (let i = 0; i < 20; i++) {
                let radius = p.random(20, 40);
                let x = p.random(-200, 200);
                let y = p.random(-200, 200);
                let z = p.random(-200, 200);
                let speedX = p.random(-2, 2);
                let speedY = p.random(-2, 2);
                let speedZ = p.random(-2, 2);
                let r = p.random(0, 255);
                let g = p.random(0, 255);
                let b = p.random(0, 255);
                let ball = new Ball3D(x, y, z, radius, speedX, speedY, speedZ, r, g, b);
                this.balls.push(ball);
            }
        }

        p.draw = () => {
            p.background(220);
            p.rotateX(p.frameCount * 0.01);
            p.rotateY(p.frameCount * 0.01);

            for (let ball of this.balls) {
                ball.update();
                ball.display(p);
            }
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

class Ball3D {
    constructor(x, y, z, radius, speedX, speedY, speedZ, r, g, b) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.speedZ = speedZ;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.speedZ;

        if (this.x - this.radius < -200 || this.x + this.radius > 200) {
            this.speedX *= -1;
        }

        if (this.y - this.radius < -200 || this.y + this.radius > 200) {
            this.speedY *= -1;
        }

        if (this.z - this.radius < -200 || this.z + this.radius > 200) {
            this.speedZ *= -1;
        }
    }

    display(p) {
        p.push();
        p.translate(this.x, this.y, this.z);
        p.fill(this.r, this.g, this.b);
        p.noStroke();
        p.sphere(this.radius);
        p.pop();
    }
}

export default ColorfulBouncingBalls3D;
