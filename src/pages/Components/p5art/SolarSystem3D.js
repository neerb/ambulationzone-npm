import React, { Component } from 'react';
import p5 from 'p5';

class SolarSystem3D extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.planets = [];
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(1400, 600, p.WEBGL);
            p.noStroke();

            // Adjust camera position
            p.camera(0, -800, 800, 0, 0, 0, 0, 1, 0);

            // Define the planets with their properties
            this.planets = [
                {
                    name: 'Sun',
                    radius: 100,
                    color: [255, 165, 0],
                    orbitRadius: 0,
                    angle: 0,
                    speed: 0,
                    moons: [],
                },
                {
                    name: 'Mercury',
                    radius: 10,
                    color: [169, 169, 169],
                    orbitRadius: 150,
                    angle: 0.5,
                    speed: 1,
                    moons: [],
                },
                {
                    name: 'Venus',
                    radius: 15,
                    color: [255, 228, 196],
                    orbitRadius: 250,
                    angle: 1,
                    speed: 0.5,
                    moons: [],
                },
                {
                    name: 'Earth',
                    radius: 20,
                    color: [0, 0, 255],
                    orbitRadius: 350,
                    angle: 0,
                    speed: 0.25,
                    moons: [
                        { name: 'Moon', radius: 5, color: [192, 192, 192], orbitRadius: 50, angle: 0, speed: 1 },
                    ],
                },
                {
                    name: 'Mars',
                    radius: 18,
                    color: [255, 69, 0],
                    orbitRadius: 500,
                    angle: 0,
                    speed: 0.2,
                    moons: [
                        { name: 'Phobos', radius: 3, color: [192, 192, 192], orbitRadius: 30, angle: 0, speed: 2 },
                        { name: 'Deimos', radius: 2, color: [128, 128, 128], orbitRadius: 60, angle: 0, speed: 1 },
                    ],
                },
                {
                    name: 'Jupiter',
                    radius: 50,
                    color: [255, 0, 0],
                    orbitRadius: 700,
                    angle: 0,
                    speed: 0.1,
                    moons: [
                        { name: 'Io', radius: 10, color: [255, 165, 0], orbitRadius: 80, angle: 0, speed: 0.5 },
                        { name: 'Europa', radius: 9, color: [192, 192, 192], orbitRadius: 100, angle: 0, speed: 0.3 },
                        { name: 'Ganymede', radius: 12, color: [255, 228, 196], orbitRadius: 120, angle: 0, speed: 0.2 },
                    ],
                },
                {
                    name: 'Saturn',
                    radius: 45,
                    color: [255, 255, 0],
                    orbitRadius: 900,
                    angle: 0,
                    speed: 0.08,
                    moons: [
                        { name: 'Titan', radius: 10, color: [192, 192, 192], orbitRadius: 150, angle: 0, speed: 0.2 },
                        { name: 'Enceladus', radius: 5, color: [128, 128, 128], orbitRadius: 130, angle: 0, speed: 0.5 },
                    ],
                },
                {
                    name: 'Uranus',
                    radius: 30,
                    color: [0, 191, 255],
                    orbitRadius: 1100,
                    angle: 0,
                    speed: 0.05,
                    moons: [
                        { name: 'Titania', radius: 6, color: [0, 0, 128], orbitRadius: 60, angle: 0, speed: 0.3 },
                        { name: 'Oberon', radius: 5, color: [0, 128, 128], orbitRadius: 80, angle: 0, speed: 0.2 },
                    ],
                },
                {
                    name: 'Neptune',
                    radius: 28,
                    color: [0, 0, 128],
                    orbitRadius: 1300,
                    angle: 0,
                    speed: 0.03,
                    moons: [
                        { name: 'Triton', radius: 7, color: [128, 128, 128], orbitRadius: 70, angle: 0, speed: 0.5 },
                        { name: 'Proteus', radius: 4, color: [192, 192, 192], orbitRadius: 90, angle: 0, speed: 0.3 },
                    ],
                },
                // Add more planets with moons as needed
            ];
        };

        p.draw = () => {
            p.background(0);

            for (const planet of this.planets) {
                // Display each planet
                p.push();
                p.rotateY(p.radians(planet.angle));
                p.translate(planet.orbitRadius, 0);
                p.fill(...planet.color);
                p.sphere(planet.radius);

                // Display moons
                for (const moon of planet.moons) {
                    p.push();
                    p.rotateY(p.radians(moon.angle));
                    p.translate(moon.orbitRadius, 0);
                    p.fill(...moon.color);
                    p.sphere(moon.radius);
                    p.pop();

                    // Update the angle for moon rotation based on its speed
                    moon.angle += moon.speed;
                }

                p.pop();

                // Update the angle for planet rotation based on its speed
                planet.angle += planet.speed;
            }
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default SolarSystem3D;
