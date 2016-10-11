/*
Design an interface that abstracts iteration over a collection of values. An 
object that provides this interface represents a sequence, and the interface 
must somehow make it possible for code that uses such an object to iterate over 
the sequence, looking at the element values it is made up of and having some 
way to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that 
takes a sequence object and calls console.log on its first five elements—or 
fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration 
over the array using the interface you designed. Implement another object type 
RangeSeq that iterates over a range of integers (taking from and to arguments 
to its constructor) instead.
*/

function logFive(sequenceObject) {
    var i = 0;
    while (sequenceObject.elementsLeft() > 0 && i<5) {
        console.log(sequenceObject.next());
        i++;
    }
}

// iterates over an array
function ArraySeq(array) {
    this.array = array;
    this.count = -1;
}
ArraySeq.prototype.next = function() {
    this.count++;
    return this.array[this.count];
};
ArraySeq.prototype.elementsLeft = function() {
    return (this.array.length - this.count - 1);
};

// iterates over a range of integers: from (inclusive) to (exclusive).
function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    this.count = from-1;
}
RangeSeq.prototype.next = function() {
    this.count++;
    if (this.count < this.to)  {
        return this.count;
    }
};
RangeSeq.prototype.elementsLeft = function() {
    return (this.to - this.count - 1);
};


// Testing
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
