import React, { Component } from 'react';
import p5 from 'p5';

class FallingObstaclesGame extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.player = {
            x: 50,
            y: 300,
            width: 50,
            height: 50,
            xSpeed: 0,
            ySpeed: 0,
            gravity: 0.6,
            jumpForce: -15,
            isJumping: false
        };
        this.obstacles = [];
        this.score = 0;
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(800, 400);
        };

        p.draw = () => {
            p.background(200);

            // Draw player
            p.fill(255, 0, 0);
            p.rect(this.player.x, this.player.y, this.player.width, this.player.height);

            // Draw obstacles and check for collisions
            for (let i = this.obstacles.length - 1; i >= 0; i--) {
                this.obstacles[i].y += 5;
                p.fill(0, 0, 255);
                p.rect(this.obstacles[i].x, this.obstacles[i].y, this.obstacles[i].size, this.obstacles[i].size);

                // Check for collision with player
                if (
                    this.player.x < this.obstacles[i].x + this.obstacles[i].size &&
                    this.player.x + this.player.width > this.obstacles[i].x &&
                    this.player.y < this.obstacles[i].y + this.obstacles[i].size &&
                    this.player.y + this.player.height > this.obstacles[i].y
                ) {
                    // Collision occurred, reset game
                    this.obstacles = [];
                    this.player.ySpeed = 0;
                    this.player.xSpeed = 0;
                    this.player.y = 300;
                    this.player.x = 50;
                    this.score = 0;
                }

                // Remove obstacles that have gone off the screen
                if (this.obstacles[i].y > p.height) {
                    this.obstacles.splice(i, 1);
                    this.score++;
                }
            }

            // Display score
            p.fill(0);
            p.textSize(24);
            p.text('Score: ' + this.score, 20, 30);

            // Apply gravity to player
            this.player.ySpeed += this.player.gravity;
            this.player.y += this.player.ySpeed;
            this.player.x += this.player.xSpeed;

            // Keep the player within the canvas
            this.player.y = p.constrain(this.player.y, 0, p.height - this.player.height - 1);
            this.player.x = p.constrain(this.player.x, 0, p.width - this.player.width - 1);
        };

        p.keyPressed = () => {
            if (p.keyCode === p.UP_ARROW && !this.player.isJumping) {
                // Make the player jump
                this.player.ySpeed = this.player.jumpForce;
                this.player.isJumping = true;
            }
            if (p.keyCode === p.RIGHT_ARROW) {
                // Move player right
                this.player.xSpeed = 5;
            }
            if (p.keyCode === p.LEFT_ARROW) {
                // Move player left
                this.player.xSpeed = -5;
            }
        };

        p.keyReleased = () => {
            if (p.keyCode === p.UP_ARROW) {
                this.player.isJumping = false;
            }
            if (p.keyCode === p.RIGHT_ARROW || p.keyCode === p.LEFT_ARROW) {
                // Stop horizontal movement when the arrow keys are released
                this.player.xSpeed = 0;
            }
        };

        p.mousePressed = () => {
            // Create a new obstacle when the mouse is clicked
            const obstacleSize = p.random(20, 50);
            const obstacleX = p.random(p.width - obstacleSize);
            this.obstacles.push({
                x: obstacleX,
                y: 0,
                size: obstacleSize
            });
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default FallingObstaclesGame;
