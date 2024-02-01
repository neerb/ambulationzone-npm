import React, { Component } from 'react';
import p5 from 'p5';

class FluidDynamicsDiagram extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.particles = [];
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(400, 400);
            for (let i = 0; i < 100; i++) {
                this.particles.push(new Particle(p));
            }
        };

        p.draw = () => {
            p.background(0);

            for (let particle of this.particles) {
                particle.update(p.mouseX, p.mouseY, p);
                particle.display();
            }
        };

        class Particle {
            constructor(p) {
                this.position = p.createVector(p.random(p.width), p.random(p.height));
                this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
                this.acceleration = p.createVector(0, 0);
                this.maxSpeed = 2;
            }

            update(targetX, targetY, p) {
                if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
                    const force = p.createVector(targetX - this.position.x, targetY - this.position.y);
                    const distance = force.mag();
                    force.normalize();
                    force.mult(10 / (distance + 1)); // Adjust the force strength
                    this.applyForce(force);
                }

                this.velocity.add(this.acceleration);
                this.velocity.limit(this.maxSpeed);
                this.position.add(this.velocity);
                this.acceleration.mult(0);
                this.checkEdges(p);
            }

            applyForce(force) {
                this.acceleration.add(force);
            }

            checkEdges(p) {
                if (this.position.x > p.width) {
                    this.position.x = p.width;
                    this.velocity.x *= -1;
                } else if (this.position.x < 0) {
                    this.position.x = 0;
                    this.velocity.x *= -1;
                }

                if (this.position.y > p.height) {
                    this.position.y = p.height;
                    this.velocity.y *= -1;
                } else if (this.position.y < 0) {
                    this.position.y = 0;
                    this.velocity.y *= -1;
                }
            }

            display() {
                p.stroke(255);
                p.strokeWeight(8);
                p.point(this.position.x, this.position.y);
            }
        }
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div className='p5-wrap' ref={this.myRef}></div>;
    }
}

export default FluidDynamicsDiagram;
