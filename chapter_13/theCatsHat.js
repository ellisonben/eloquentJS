/*
Extend the cat animation defined earlier so that both the cat and his hat orbit 
at opposite sides of the ellipse.

Or make the hat circle around the cat. Or alter the animation in some other 
interesting way.

To make positioning multiple objects easier, it is probably a good idea to 
switch to absolute positioning. This means that top and left are counted 
relative to the top left of the document. To avoid using negative coordinates, 
you can simply add a fixed number of pixels to the position values.
*/

var cat1 = document.querySelector("#cat1");
var hat1 = document.querySelector("#hat1");

var cat2 = document.querySelector("#cat2");
var hat2 = document.querySelector("#hat2");

var cat3 = document.querySelector("#cat3");
var hat3 = document.querySelector("#hat3");

var angle = 0, antiAngle = 0, lastTime = null;

// cat2 is stationary
cat2.style.top = "450px";
cat2.style.left = "250px";

function animate(time) {
    if (lastTime != null) {
        angle += (time - lastTime) * 0.001;
        antiAngle -= (time - lastTime) * 0.001;
    }
    lastTime = time;

    // cat and hat on opposite sides of ellipse
    cat1.style.top = (Math.sin(angle) * 70 + 100) + "px";
    cat1.style.left = (Math.cos(angle) * 200 + 250) + "px";
    
    hat1.style.top = (Math.sin(angle) * -70) + 100 + "px";
    hat1.style.left = (Math.cos(angle) * -200) + 250 + "px";
    
    // hat rotating around cat2 - slight offset (480) makes it look better
    hat2.style.top = (Math.sin(angle) * 150) + 480 + "px";
    hat2.style.left = (Math.cos(angle) * 150) + 250 + "px";
    
    //opposite direction cat and hat rotations
    cat3.style.top = (Math.sin(antiAngle) * 50 + 200) + "px";
    cat3.style.left = (Math.cos(antiAngle) * 50 + 700) + "px";
    
    hat3.style.top = (Math.sin(angle) * 150) + 200 + "px";
    hat3.style.left = (Math.cos(angle) * 150) + 700 + "px";
    
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
