/*
Between 1928 and 2013, Turkish law forbade the use of the letters Q, W, and X 
in official documents. This was part of a wider initiative to stifle Kurdish 
culture—those letters occur in the language used by Kurdish people but not in 
Istanbul Turkish.

As an exercise in doing ridiculous things with technology, I’m asking you to 
program a text field (an <input type="text"> tag) that these letters cannot be 
typed into.

(Do not worry about copy and paste and other such loopholes.)
*/

var field = document.querySelector("#censored");

field.addEventListener("keydown", function(event) {
    if (event.keyCode == 81 || event.keyCode == 87 || event.keyCode == 88) {
        event.preventDefault();
    }
});
