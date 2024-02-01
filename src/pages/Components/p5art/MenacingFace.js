import React, { Component } from 'react';
import p5 from 'p5';

class MenacingFace extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.frameCount = 0;
    }

    Sketch = (p) => {
        let faceColor;
        let eyeColor;
        let hairColor;
        let mouthY;

        p.setup = () => {
            p.createCanvas(400, 400);
            p.frameRate(10); // Adjust the frame rate as needed

            faceColor = p.color(0, 0, 0); // Dark face color
            eyeColor = p.color(255); // White eyes
            hairColor = p.color(0, 0, 0); // Dark hair
            mouthY = 280;
        };

        p.draw = () => {
            p.background(255); // White background

            // Draw the head
            p.fill(faceColor);
            p.stroke(0);
            p.ellipse(200, 200, 200, 200);

            // Draw the eyes
            p.fill(eyeColor);
            p.ellipse(150, 150, 60, 40);
            p.ellipse(250, 150, 60, 40);

            // Draw the pupils (animated)
            p.fill(0);
            p.ellipse(150 + p.random(-5, 5), 150 + p.random(-5, 5), 20, 20);
            p.ellipse(250 + p.random(-5, 5), 150 + p.random(-5, 5), 20, 20);

            // Draw the nose
            p.fill(faceColor);
            p.triangle(200, 200, 190, 220, 210, 220);

            // Draw the mouth (animated)
            p.fill(255);
            p.arc(200, mouthY, 80, 40, 0, p.PI);

            // Draw the hair
            p.fill(hairColor);
            p.arc(200, 150, 200, 200, p.PI, p.TWO_PI);

            // Add more animated details (e.g., blinking eyes, moving features)
            if (this.frameCount % 15 === 0) {
                eyeColor = p.color(0); // Blinking eyes
            } else {
                eyeColor = p.color(255); // Open eyes
            }

            // Add menacing animation (move mouth up and down)
            mouthY = 280 + p.sin(this.frameCount * 0.1) * 10;

            // Increment frame count for animation
            this.frameCount++;
        };
    };

    componentDidMount() {
        this.myp5 = new p5(this.Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default MenacingFace;
