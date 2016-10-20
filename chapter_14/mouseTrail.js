/*
In JavaScript’s early days, which was the high time of gaudy home pages with 
lots of animated images, people came up with some truly inspiring ways to use 
the language.

One of these was the “mouse trail”—a series of images that would follow the 
mouse pointer as you moved it across the page.

In this exercise, I want you to implement a mouse trail. Use absolutely 
positioned <div> elements with a fixed size and background color (refer to the 
code in the “Mouse Clicks” section for an example). Create a bunch of such 
elements and, when the mouse moves, display them in the wake of the mouse 
pointer.

There are various possible approaches here. You can make your solution as 
simple or as complex as you want. A simple solution to start with is to keep a 
fixed number of trail elements and cycle through them, moving the next one to 
the mouse’s current position every time a "mousemove" event occurs.
*/

var trail = [];
var count = 0;
var timer;

// initiates trail
function initTrail(event) { 
    for (var i=0; i<10; i++) {
        var trailDiv = document.createElement("div");
        trailDiv.className = "trail";
        trailDiv.style.left = (event.pageX - 4) + "px";
        trailDiv.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(trailDiv);
        trail.push(trailDiv);
    }
    removeEventListener("mousemove", initTrail);
}

// gets trail to follow where mouse is
function follow(event) {
    trail[count%10].style.left = (event.pageX - 4) + "px";
    trail[count%10].style.top = (event.pageY - 4) + "px";
    count++;
}

// gets trail to catch up when mouse stops
function catchUp(event) {
    var i = 0;
    clearInterval(timer);
    timer = setInterval(function() {
        if (i >= 10) {
            clearInterval(timer);
        }
        trail[count%10].style.left = (event.pageX - 4) + "px";
        trail[count%10].style.top = (event.pageY - 4) + "px";
        count++;
        i++
    }, 50);
}

addEventListener("mousemove", initTrail);
addEventListener("mousemove", follow);
addEventListener("mousemove", catchUp);
