import React, { Component } from 'react';
import p5 from 'p5';
import "./p5styles.css"

class FlowArt extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.particles = [];
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(450, 350);
            p.colorMode(p.HSB, 360, 100, 100, 1);
        };

        p.draw = () => {
            p.background(0);

            // Draw and update particles
            for (let i = this.particles.length - 1; i >= 0; i--) {
                this.particles[i].update();
                this.particles[i].display(p);
                if (this.particles[i].isDead()) {
                    this.particles.splice(i, 1);
                }
            }
        };

        p.mouseMoved = () => {
            let hue = p.random(0, 360);
            let saturation = p.random(50, 100);
            let brightness = p.random(50, 100);
            let size = p.random(10, 25);
            let particle = new Particle(p.mouseX, p.mouseY, hue, saturation, brightness, size, p);

            this.particles.push(particle);
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef} className='p5-wrap'></div>;
    }
}

class Particle {
    constructor(x, y, hue, saturation, brightness, size, p) {
        this.position = new p5.Vector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.mult(p.random(2, 5));
        this.acceleration = new p5.Vector(0, 0);
        this.lifespan = 255;
        this.hue = hue;
        this.saturation = saturation;
        this.brightness = brightness;
        this.size = size;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.lifespan -= 4;
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    display(p) {
        p.noStroke();
        p.fill(this.hue, this.saturation, this.brightness, this.lifespan);
        p.ellipse(this.position.x, this.position.y, this.size, this.size);
    }

    isDead() {
        return this.lifespan < 0;
    }
}

export default FlowArt;
