/*
Use the requestAnimationFrame technique that we saw in Chapter 13 and Chapter 
15 to draw a box with a bouncing ball in it. The ball moves at a constant speed 
and bounces off the box’s sides when it hits them.
*/

var cx = document.querySelector("canvas").getContext("2d");

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
    // work out position of ball
    //vectors
    //speed 
    //lastPosition
    
    
    // clear canvas
    cx.clearRect(0, 0, 400, 400);
    // draw box
    cx.strokeRect(0, 0, 400, 400);
    // drawBall(centreX, centreY)
    drawBall(100, 100);
    
}

function drawBall(centreX, centreY) {
    cx.beginPath();
    // arc(centreX centreY radius startAngle endAngle)
    cx.arc(centreX, centreY, 5, 0, 7);
    cx.fill();
}

function clearCanvas();
