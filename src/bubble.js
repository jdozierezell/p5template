export default function (p, x, y) {
  this.x = x
  this.y = y
  
  this.display = function () {
    p.stroke(255)
    p.fill(255, 150)
    p.ellipse(this.x, this.y, 48, 48)
  }
  
  this.move = function () {
    this.x = this.x + p.random(-1, 1)
    this.y = this.y + p.random(-1, 1)
  }
}