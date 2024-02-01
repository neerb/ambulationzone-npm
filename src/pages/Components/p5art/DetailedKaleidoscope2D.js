import React, { Component } from 'react';
import p5 from 'p5';

class DetailedKaleidoscope2D extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.numSlices = 24; // Number of kaleidoscope slices
    this.rotationSpeed = 1.5; // Rotation speed
    this.slices = [];
  }

  Sketch = (p) => {
    let centerX, centerY;
    let radius;
    let bgColor;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.noStroke();
      p.angleMode(p.DEGREES);

      centerX = p.width / 2;
      centerY = p.height / 2;
      radius = p.min(p.width, p.height) / 2;

      // Generate random vibrant colors for the slices
      for (let i = 0; i < this.numSlices; i++) {
        this.slices.push({
          color: p.color(p.random(255), p.random(255), p.random(255)),
          angle: i * (360 / this.numSlices),
          rotation: p.random(0, 360),
          speed: p.random(0.1, 2),
        });
      }

      bgColor = p.color(0); // Dark background color
    };

    p.draw = () => {
      p.background(bgColor);
      p.translate(centerX, centerY);

      for (let slice of this.slices) {
        p.fill(slice.color);
        p.push();
        p.rotate(slice.angle + slice.rotation);
        p.beginShape();

        // Define the vertices of the slice
        let x1 = radius * p.cos(0);
        let y1 = radius * p.sin(0);
        let x2 = radius * p.cos(360 / this.numSlices);
        let y2 = radius * p.sin(360 / this.numSlices);

        p.vertex(0, 0);
        p.vertex(x1, y1);
        p.vertex(x2, y2);
        p.endShape(p.CLOSE);

        p.pop();

        // Rotate the slice
        slice.rotation += slice.speed * this.rotationSpeed;
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

export default DetailedKaleidoscope2D;

