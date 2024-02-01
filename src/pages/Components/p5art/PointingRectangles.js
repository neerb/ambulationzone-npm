import React, { Component } from 'react';
import p5 from 'p5';

class PointingRectangles extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        const rectangles = [];
        let color = 0;

        p.setup = () => {
            p.createCanvas(300, 300);
            let inc = p.width / 11;
            let xPos = inc * 2;
            let yPos = inc * 2;

            for (let i = 1; i <= 64; i++) {
                rectangles.push(new RotatingRectangle(xPos, yPos, 24, 5));
                if (i % 8 == 0) {
                    xPos = inc;
                    yPos += inc;
                }
                xPos += inc;
            }
        };

        p.draw = () => {
            p.background(255 - color);

            for (let i = 0; i < rectangles.length; i++) {
                rectangles[i].update(p.mouseX, p.mouseY);
                rectangles[i].display();
            }

            p.mousePressed = () => {
                color = 255 - color;
            };
        };

        class RotatingRectangle {
            constructor(x, y, w, h) {
                this.x = x;
                this.y = y;
                this.width = w;
                this.height = h;
            }

            update(targetX, targetY) {
                const angle = p.atan2(targetY - this.y, targetX - this.x);
                this.rotation = angle;
            }

            display() {
                p.push();
                p.translate(this.x, this.y);
                p.rotate(this.rotation);
                p.rectMode(p.CENTER);
                p.stroke(0);
                p.fill(255 - color, 100, 100);
                p.rect(0, 0, this.width, this.height);
                p.pop();
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

export default PointingRectangles;
