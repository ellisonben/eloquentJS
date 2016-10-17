/*
The getElementsByTagName method returns all child elements with a given tag 
name. Implement your own version of it as a regular nonmethod function that 
takes a node and a string (the tag name) as arguments and returns an array 
containing all descendant element nodes with the given tag name.

To find the tag name of an element, use its tagName property. But note that 
this will return the tag name in all uppercase. Use the toLowerCase or 
toUpperCase string method to compensate for this.
*/


function byTagName(node, tagName) {
    var tagName = tagName.toUpperCase();
    var array = [];
    function nameCheck(node, tagName) {
        if (node.nodeType == document.ELEMENT_NODE) {
            if (node.tagName == tagName) {
                array.push(node);
            }
            for (var i = 0; i < node.childNodes.length; i++) {
                nameCheck(node.childNodes[i], tagName);
            }
        }
    }
    nameCheck(node, tagName);
    return array;
}



//Testing
console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2

