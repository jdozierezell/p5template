import p5 from 'p5'
import 'p5/lib/addons/p5.dom'

import Bubble from './bubble'

const sketch = p => {

  let bubbles = []

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    for (let i = 0; i < 10; i += 1) {
      const x = p.random(p.width)
      const y = p.random(p.height)
      bubbles.push(new Bubble(p, x, y))
    }
  }

  p.draw = () => {
    p.background(100)
    for (let i = 0; i < bubbles.length; i += 1) {
      bubbles[i].move()
      bubbles[i].display()
    }
  }
}

const myp5 = new p5(sketch)
