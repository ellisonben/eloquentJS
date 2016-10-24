/*
Write a program that draws the following shapes on a canvas:

    A trapezium
    A red diamond (a rectangle rotated 45 degrees or ¼π radians)
    A zigzagging line
    A spiral made up of 100 straight line segments
    A yellow star

When drawing the last two, you may want to refer to the explanation of Math.cos 
and Math.sin in Chapter 13, which describes how to get coordinates on a circle 
using these functions.

I recommend creating a function for each shape. Pass the position, and 
optionally other properties, such as the size or the number of points, as 
parameters. The alternative, which is to hard-code numbers all over your code, 
tends to make the code needlessly hard to read and modify.
*/

var cx = document.querySelector("canvas").getContext("2d");

function drawTrapezium(context, position, width, height) {
    var x = position.x;
    var y = position.y;
    context.beginPath();
    context.moveTo(x + width/4, y);
    context.lineTo(x, y + height);
    context.lineTo(x + width, y + height);
    context.lineTo(x + width*3/4, y);
    context.closePath();
    context.stroke();
}

function drawDiamond(context, position, size, colour) {
    var x = position.x;
    var y = position.y;
    context.beginPath();
    context.moveTo(x + size/2, y);
    context.lineTo(x, y + size/2);
    context.lineTo(x + size/2, y + size);
    context.lineTo(x + size, y + size/2);
    context.closePath();
    context.fillStyle = colour;
    context.fill()
}

function drawZigZag(context, position, width, height, numberOfZigs) {
    var x = position.x;
    var y = position.y;
    var dir = 1;
    var dist = height/numberOfZigs;
    context.beginPath();
    context.moveTo(x, y);
    for (var down = dist; down <= height; down += dist) {
        context.lineTo(x + width/2 + (width/2)*dir, y + down);
        dir = -dir;
    }
    context.stroke();
}

function drawSpiral(context, position, size, whirls, numberOfLines) {
    var x = position.x;
    var y = position.y;
    var angle = 0;
    var totalAngle = whirls * 2 * Math.PI;
    var scale = size / (2 * Math.max(
                        Math.abs(totalAngle * Math.cos(totalAngle)), 
                        Math.abs(totalAngle * Math.sin(totalAngle))
                        ));
    context.beginPath();
    context.moveTo(x + size/2, y + size/2);
    for (var i = 0; i < numberOfLines; i++) {
        angle += totalAngle/numberOfLines
        context.lineTo(
                        x + size/2 + scale * angle * Math.cos(angle), 
                        y + size/2 + scale * angle * Math.sin(angle)
                        );
    }
    context.stroke();
}

function drawStar(context, position, size, numberOfPoints, colour) {
    var x = position.x;
    var y = position.y;
    var angle = 2 * Math.PI/numberOfPoints;
    var radius = size/2;
    var edgeX = x + size;
    var edgeY = y + size/2;
    context.beginPath();
    context.moveTo(edgeX, edgeY); //starts middle right
    for (var a = angle; a <= 2*Math.PI; a += angle) {
        edgeX = x + size/2 + radius * Math.cos(a);
        edgeY = y + size/2 + radius * Math.sin(a);
        context.quadraticCurveTo(x + size/2, y + size/2, edgeX, edgeY);
    }
    context.closePath();
    context.fillStyle = colour;
    context.fill();
}

//A trapezium
drawTrapezium(cx, {x: 0, y: 0}, 150, 150);
//A red diamond 
drawDiamond(cx, {x: 150, y: 0}, 150, "red");
//A zigzagging line
drawZigZag(cx, {x: 300, y: 0}, 150, 150, 11);
//A spiral made up of 100 straight line segments
drawSpiral(cx, {x: 450, y: 0}, 150, 3, 100);
//A yellow star
drawStar(cx, {x: 600, y: 0}, 150, 8, "yellow");
//A smoother spiral with more whirls
drawSpiral(cx, {x: 750, y: 0}, 150, 6, 1000);
