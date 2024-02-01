import React, { Component } from 'react';
import p5 from 'p5';
import "./p5styles.css"

class Kaleidoscope2D extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.rotation = 0;
    this.numSlices = 12; // Number of kaleidoscope slices
  }

  Sketch = (p) => {
    let colors = [];
    let centerX, centerY;
    let radius;

    p.setup = () => {
      p.createCanvas(400, 400);
      p.noStroke();
      p.angleMode(p.DEGREES);

      centerX = p.width / 2;
      centerY = p.height / 2;
      radius = p.min(p.width, p.height) / 2;

      // Generate random colors for the slices
      for (let i = 0; i < this.numSlices; i++) {
        colors.push(p.color(p.random(255), p.random(255), p.random(255)));
      }
    };

    p.draw = () => {
      p.background(255);
      p.translate(centerX, centerY);

      for (let i = 0; i < this.numSlices; i++) {
        p.fill(colors[i]);
        p.beginShape();

        // Rotate the slice around the center
        let angleA = this.rotation + (i * 360 / this.numSlices);
        let angleB = this.rotation + ((i + 1) * 360 / this.numSlices);

        // Define the vertices of the slice
        let x1 = radius * p.cos(angleA);
        let y1 = radius * p.sin(angleA);
        let x2 = radius * p.cos(angleB);
        let y2 = radius * p.sin(angleB);

        p.vertex(0, 0);
        p.vertex(x1, y1);
        p.vertex(x2, y2);
        p.endShape(p.CLOSE);
      }

      // Rotate the entire kaleidoscope
      this.rotation -= 1;
    };
  };

  componentDidMount() {
    this.myp5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef} className='p5-wrap'></div>;
  }
}

export default Kaleidoscope2D;
