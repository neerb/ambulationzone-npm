import React, { Component } from 'react';
import p5 from 'p5';

class AnimatedFlowerBouquet extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.flowers = [];
    this.numFlowers = 5;
  }

  Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.frameRate(24);

      // Create random flowers
      for (let i = 0; i < this.numFlowers; i++) {
        let x = p.random(p.width);
        let y = p.random(p.height);
        let size = p.random(40, 50);
        let stemHeight = p.random(50, 100);
        let petalColor = p.color(p.random(255), p.random(255), p.random(255));
        let bloomColor = p.color(p.random(255), p.random(255), p.random(255));

        this.flowers.push(new Flower(x, y, size, stemHeight, petalColor, bloomColor));
      }
    };

    p.draw = () => {
      p.background(220);

      for (let flower of this.flowers) {
        flower.display(p);
        flower.update(p);
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

class Flower {
  constructor(x, y, size, stemHeight, petalColor, bloomColor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.stemHeight = stemHeight;
    this.petalColor = petalColor;
    this.bloomColor = bloomColor;
    this.angle = 0;
  }

  display(p) {
    // Stem
    p.stroke(30, 150, 30);
    p.strokeWeight(5);
    p.line(this.x, this.y, this.x, this.y + this.stemHeight);

    // Petals
    p.noStroke();
    p.fill(this.petalColor);
    for (let i = 0; i < 6; i++) {
      let angle = p.TWO_PI / 6 * i + this.angle;
      let xOff = p.cos(angle) * this.size * 1.5;
      let yOff = p.sin(angle) * this.size * 1.5;
      p.ellipse(this.x + xOff, this.y + yOff, this.size, this.size);
    }

    // Flower center
    p.fill(this.bloomColor);
    p.ellipse(this.x, this.y, this.size * 0.6, this.size * 0.6);
  }

  update(p) {
    // Oscillate the flowers
    this.angle = p.sin(p.frameCount * 0.05) * 0.5;
  }
}

export default AnimatedFlowerBouquet;
