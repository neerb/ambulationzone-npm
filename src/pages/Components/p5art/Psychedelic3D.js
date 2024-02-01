import React, { Component } from 'react';
import p5 from 'p5';

class Psychedelic3D extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.rotationX = 0;
    this.rotationY = 0;
    this.numShapes = 20;
  }

  Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400, p.WEBGL);
      p.noStroke();
      p.colorMode(p.HSB, 100);

      p.ambientLight(50);
      p.pointLight(255, 255, 255, 0, 0, 200);

      p.frameRate(30);
    };

    p.draw = () => {
      p.background(0);
      p.rotateX(this.rotationX);
      p.rotateY(this.rotationY);

      for (let i = 0; i < this.numShapes; i++) {
        let hue = (p.frameCount + i * 10) % 100;
        let size = p.map(p.sin(p.frameCount * 0.05 + i * p.PI / 10), -1, 1, 20, 100);
        let posX = p.map(p.sin(p.frameCount * 0.01 + i), -1, 1, -200, 200);
        let posY = p.map(p.sin(p.frameCount * 0.01 + i), -1, 1, -200, 200);
        let posZ = p.map(p.sin(p.frameCount * 0.02 + i), -1, 1, -200, 200);

        p.fill(hue, 100, 100);
        p.push();
        p.translate(posX, posY, posZ);
        p.rotateZ(p.radians(p.frameCount * 2 + i * 10));
        p.box(size);
        p.pop();
      }

      this.rotationX += 0.01;
      this.rotationY += 0.01;
    };
  };

  componentDidMount() {
    this.myp5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default Psychedelic3D;
