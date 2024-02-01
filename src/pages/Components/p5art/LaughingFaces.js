import React, { Component } from 'react';
import p5 from 'p5';

class LaughingFaces extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.face1 = { x: 200, y: 200, size: 100, laughing: false };
        this.face2 = { x: 400, y: 200, size: 100, laughing: false };
    }

    Sketch = (p) => {
        p.setup = () => {
            p.createCanvas(600, 400);
            p.frameRate(10); // Adjust the frame rate as needed
        };

        p.draw = () => {
            p.background(220);

            // Draw the first face
            this.drawFace(p, this.face1.x, this.face1.y, this.face1.size, this.face1.laughing);

            // Draw the second face
            this.drawFace(p, this.face2.x, this.face2.y, this.face2.size, this.face2.laughing);

            // Toggle the laughing expression
            this.face1.laughing = !this.face1.laughing;
            this.face2.laughing = !this.face2.laughing;
        };

        // Helper function to draw a smiley face
        this.drawFace = (p, x, y, size, laughing) => {
            // Draw the head
            p.fill(255);
            p.stroke(0);
            p.ellipse(x, y, size, size);

            // Draw the eyes
            const eyeOffset = size / 4;
            const eyeSize = size / 6;
            p.fill(0);
            p.ellipse(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize);
            p.ellipse(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize);

            // Draw the mouth
            p.noFill();
            p.stroke(0);
            const mouthY = laughing ? y + size / 6 : y + size / 3;
            p.arc(x, mouthY, size / 3, size / 3, 0, p.PI);
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default LaughingFaces;