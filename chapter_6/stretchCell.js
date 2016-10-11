/*
Implement a cell type named StretchCell(inner, width, height) that conforms to 
the table cell interface described earlier in the chapter. It should wrap 
another cell (like UnderlinedCell does) and ensure that the resulting cell has 
at least the given width and height, even if the inner cell would naturally be 
smaller.

This is the interface:

 # minHeight() returns a number indicating the minimum height this cell 
 requires (in lines).

 # minWidth() returns a number indicating this cell’s minimum width (in 
 characters).

 # draw(width, height) returns an array of length height, which contains a 
 series of strings that are each width characters wide. This represents the 
 content of the cell.
*/

//Code to work with for testing
function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

//My code
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
StretchCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
};
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
};

//Testing
var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
