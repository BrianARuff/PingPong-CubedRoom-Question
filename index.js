// Code how many ping pong balls it would take to fill a cube shaped room of x,y,z dimensions.
var PingPongBall = /** @class */ (function () {
    function PingPongBall(radius) {
        this.radius = radius;
    }
    PingPongBall.prototype.getVolume = function () {
        console.log("ball", (4 / 3) * Math.PI * Math.pow(this.radius, 3));
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    };
    return PingPongBall;
}());
var CubedRoom = /** @class */ (function () {
    function CubedRoom(edge) {
        this.edge = edge;
    }
    CubedRoom.prototype.getVolume = function () {
        console.log("room", Math.pow(this.edge, 3));
        return Math.pow(this.edge, 3);
    };
    return CubedRoom;
}());
var HowManyPingPongBallsFitInRectangularCube = /** @class */ (function () {
    function HowManyPingPongBallsFitInRectangularCube(ball, cube) {
        this.ball = ball;
        this.cube = cube;
    }
    HowManyPingPongBallsFitInRectangularCube.prototype.getResult = function () {
        return this.cube.getVolume() / this.ball.getVolume();
    };
    return HowManyPingPongBallsFitInRectangularCube;
}());
var ppball = new PingPongBall(20);
var room = new CubedRoom(9241.6);
var result = new HowManyPingPongBallsFitInRectangularCube(ppball, room);
console.log(result.getResult());
