// Code how many ping pong balls it would take to fill a cube shaped room of x,y,z dimensions.

class PingPongBall {
  constructor(radius) {
    this.radius = radius;
  }

  getVolume() {
    console.log('ball', 4/3 * Math.PI * this.radius**3);
    return 4/3 * Math.PI * this.radius**3;
  }
}

class CubedRoom {
  constructor(edge) {
    this.edge = edge;
  }

  getVolume() {
    console.log('room', this.edge**3)
    return this.edge ** 3;
  }
}

class HowManyPingPongBallsFitInRectangularCube {
  constructor(ball, cube) {
    this.ball = ball;
    this.cube = cube;
  }

  getResult() {
    return this.cube.getVolume() / this.ball.getVolume();
  }
}

const ppball = new PingPongBall(20);
const room = new CubedRoom(9241.6);
const result = new HowManyPingPongBallsFitInRectangularCube(ppball, room);

console.log(result.getResult());