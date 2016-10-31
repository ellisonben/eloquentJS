/*
Use the requestAnimationFrame technique that we saw in Chapter 13 and Chapter 
15 to draw a box with a bouncing ball in it. The ball moves at a constant speed 
and bounces off the box’s sides when it hits them.
*/

var cx = document.querySelector("canvas").getContext("2d");
var ball = new Ball(new Vector(100, 100));

// Vector constructor
function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(other) {
    return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.times = function(factor) {
    return new Vector(this.x * factor, this.y * factor);
};

// Ball constructor
function Ball(position) {
    this.position = position;
    this.speed = new Vector(0, 100);
}

Ball.prototype.act = function(step) {
    var newPosition = this.position.plus(this.speed.times(step));
    if (newPosition.x > 400 || newPosition.x < 0) {
        this.speed = this.speed.times(-1);
    } else if (newPosition.y > 400 || newPosition.y < 0) {
        this.speed = this.speed.times(-1); // needs to be improved
    } else {
        this.position = newPosition;
    }
    
}

// Updates Ball Position
function updateBallPosition() {
    
}


// Draw functions
function drawBall(centreX, centreY) {
    cx.beginPath();
    // arc(centreX centreY radius startAngle endAngle)
    cx.arc(centreX, centreY, 5, 0, 7);
    cx.fill();
}

function clearCanvas() {
    cx.clearRect(0, 0, 400, 400);
}

function drawBox() {
    cx.strokeRect(0, 0, 400, 400);
}


// Animation
var lastTime = null;
function frame(time) {
    if (lastTime != null) {
        updateAnimation(Math.min(100, time - lastTime) / 1000);
    }
    lastTime = time;
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function updateAnimation(step) {
    
    ball.act(step);
        
    clearCanvas();
    
    drawBox();
    
    drawBall(ball.position.x, ball.position.y);
}



