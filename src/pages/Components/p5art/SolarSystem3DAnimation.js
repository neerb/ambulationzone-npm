import React, { Component } from 'react';
import p5 from 'p5';

class SolarSystem3DAnimation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.planets = [];
    }

    Sketch = (p) => {
        let sun;
        let mercury;
        let venus;
        let earth;
        let mars;

        p.setup = () => {
            p.createCanvas(400, 400, p.WEBGL);
            sun = new Planet(p, 0, 0, 0, 50, 0, 0, p.color(255, 204, 0)); // Yellow for the sun
            mercury = new Planet(p, 70, 0, 0, 5, 1, 0.01, p.color(200, 200, 200)); // Gray for Mercury
            venus = new Planet(p, 120, 0, 0, 7, -0.8, 0.005, p.color(255, 140, 0)); // Orange for Venus
            earth = new Planet(p, 180, 0, 0, 8, 0.6, 0.003, p.color(0, 0, 255)); // Blue for Earth
            mars = new Planet(p, 250, 0, 0, 6, 0.4, 0.002, p.color(255, 0, 0)); // Red for Mars

            this.planets.push(sun, mercury, venus, earth, mars);
        }

        p.draw = () => {
            p.background(0);
            p.orbitControl();

            for (let planet of this.planets) {
                planet.update(p);
                planet.display(p);
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

class Planet {
    constructor(p, x, y, z, radius, speed, angleSpeed, color) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.radius = radius;
        this.speed = speed;
        this.angle = p.random(p.TWO_PI);
        this.angleSpeed = angleSpeed;
        this.color = color;
    }

    update(p) {
        this.angle += this.angleSpeed;
        this.x = this.radius * p.cos(this.angle);
        this.y = this.radius * p.sin(this.angle);
    }

    display(p) {
        p.push();
        p.translate(this.x, this.y, this.z);
        p.specularMaterial(this.color); // Assign the unique color
        p.fill(this.color);
        p.sphere(this.radius);
        p.pop();
    }
}

export default SolarSystem3DAnimation;


