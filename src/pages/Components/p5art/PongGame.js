import React, { Component } from 'react';
import p5 from 'p5';
import "./p5styles.css"

class PongGame extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.ball = {
            x: 200,
            y: 150,
            radius: 10,
            xSpeed: 4,
            ySpeed: 4
        };
        this.leftPaddle = {
            x: 10,
            y: 100,
            width: 10,
            height: 70,
            speed: 4
        };
        this.rightPaddle = {
            x: 380,
            y: 100,
            width: 10,
            height: 70,
            speed: 4
        };
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 300);
        };

        p.draw = () => {
            p.background(0);
            p.fill(255);
            p.noStroke();

            // Move left paddle (bot)
            if (this.ball.x < p.width * 0.8) {
                if (this.ball.y > this.leftPaddle.y + this.leftPaddle.height / 2) {
                    this.leftPaddle.y += this.leftPaddle.speed;
                }
                else {
                    this.leftPaddle.y -= this.leftPaddle.speed;
                }
            }

            // Move right paddle (bot)
            if (this.ball.x > (p.width - p.width * 0.8)) {
                if (this.ball.y > this.rightPaddle.y + this.rightPaddle.height / 2) {
                    this.rightPaddle.y += this.rightPaddle.speed;
                } else {
                    this.rightPaddle.y -= this.rightPaddle.speed;
                }
            }

            // Draw paddles and ball
            p.rect(this.leftPaddle.x, this.leftPaddle.y, this.leftPaddle.width, this.leftPaddle.height);
            p.rect(this.rightPaddle.x, this.rightPaddle.y, this.rightPaddle.width, this.rightPaddle.height);
            p.ellipse(this.ball.x, this.ball.y, this.ball.radius * 2);

            // Move ball
            this.ball.x += this.ball.xSpeed;
            this.ball.y += this.ball.ySpeed;

            // Ball and wall collision logic
            if (this.ball.y - this.ball.radius <= 0 || this.ball.y + this.ball.radius >= p.height) {
                this.ball.ySpeed *= -1;
            }

            // Ball and paddle collision logic
            if (
                (this.ball.x - this.ball.radius <= this.leftPaddle.x + this.leftPaddle.width &&
                    this.ball.y >= this.leftPaddle.y &&
                    this.ball.y <= this.leftPaddle.y + this.leftPaddle.height) ||
                (this.ball.x + this.ball.radius >= this.rightPaddle.x &&
                    this.ball.y >= this.rightPaddle.y &&
                    this.ball.y <= this.rightPaddle.y + this.rightPaddle.height)
            ) {
                this.ball.xSpeed *= -1;
            }

            // Check if the ball is out of bounds
            if (this.ball.x - this.ball.radius <= 0 || this.ball.x + this.ball.radius >= p.width) {
                // Reset ball position
                this.ball.x = p.width / 2;
                this.ball.y = p.height / 2;
            }
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef} className='p5-wrap'></div>;
    }
}

export default PongGame;
