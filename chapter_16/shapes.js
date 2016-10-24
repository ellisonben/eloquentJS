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

//TODO: introduce size into functions 
//potentially make shapes flush with their container

function drawTrapezium(context, position) {
    var x = position.x;
    var y = position.y;
    context.beginPath();
    context.moveTo(x + 50, y + 10);
    context.lineTo(x + 10, y + 70);
    context.lineTo(x + 140, y + 70);
    context.lineTo(x + 100, y + 10);
    context.closePath();
    context.stroke();
}

function drawDiamond(context, position, colour) {
    var x = position.x;
    var y = position.y;
    context.beginPath();
    context.moveTo(x + 75, y + 10);
    context.lineTo(x + 10, y + 75);
    context.lineTo(x + 75, y + 140);
    context.lineTo(x + 140, y + 75);
    context.closePath();
    context.fillStyle = colour;
    context.fill()
}

function drawZigZag(context, position) {
    var x = position.x;
    var y = position.y;
    var dir = 1;
    context.beginPath();
    context.moveTo(x + 10, y + 10);
    for (var down = 20; down < 180; down += 10) {
        cx.lineTo(x + 75 + 65*dir, y + down);
        dir = -dir;
    }
    context.stroke();
}

//trapezium
drawTrapezium(cx, {x: 0, y: 0});
//red diamond 
drawDiamond(cx, {x: 150, y: 0}, "red");
//a zigzagging line
drawZigZag(cx, {x: 300, y: 0});
