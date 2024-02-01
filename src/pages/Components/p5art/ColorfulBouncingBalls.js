import React, { Component } from 'react';
import p5 from 'p5';

class ColorfulBouncingBalls extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.balls = [];
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            for (let i = 0; i < 20; i++) {
                let radius = p.random(20, 40);
                let x = p.random(radius, p.width - radius);
                let y = p.random(radius, p.height - radius);
                let speedX = 2;
                let speedY = 2;
                let r = p.random(0, 255);
                let g = p.random(0, 255);
                let b = p.random(0, 255);
                let ball = new Ball(x, y, radius, speedX, speedY, r, g, b);
                this.balls.push(ball);
            }
        }

        p.draw = () => {
            p.background(220);

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

class Ball {
    constructor(x, y, radius, speedX, speedY, r, g, b) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x - this.radius < 0 || this.x + this.radius > 400) {
            this.speedX *= -1;
        }

        if (this.y - this.radius < 0 || this.y + this.radius > 400) {
            this.speedY *= -1;
        }
    }

    display(p) {
        p.fill(this.r, this.g, this.b);
        p.noStroke();
        p.ellipse(this.x, this.y, this.radius * 2);
    }
}

export default ColorfulBouncingBalls;
