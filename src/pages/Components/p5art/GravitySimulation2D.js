import React, { Component } from 'react';
import p5 from 'p5';

class GravitySimulation2D extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.balls = [];
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            p.frameRate(60);

            for (let i = 0; i < 5; i++) {
                let radius = p.random(20, 40);
                let x = p.random(radius, p.width - radius);
                let y = p.random(radius, p.height - radius);
                let speedY = p.random(2, 5);
                let gravity = 0.2; // Gravity value

                let ball = new Ball(x, y, radius, speedY, gravity);
                this.balls.push(ball);
            }
        }

        p.draw = () => {
            p.background(220);

            for (let ball of this.balls) {
                ball.update(p);
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

class Ball {
    constructor(x, y, radius, speedY, gravity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = speedY;
        this.gravity = gravity;
    }

    update(p) {
        this.speedY += this.gravity;
        this.y += this.speedY;

        if (this.y + this.radius > p.height) {
            this.y = p.height - this.radius;
            this.speedY *= -0.8; // Bounce with some loss of energy
        }
    }

    display(p) {
        p.fill(255, 0, 0);
        p.noStroke();
        p.ellipse(this.x, this.y, this.radius * 2);
    }
}

export default GravitySimulation2D;
