/*
When we looked up all the people in our data set that lived more than 90 years, 
only the latest generation in the data came out. Let’s take a closer look at 
that phenomenon.

Compute and output the average age of the people in the ancestry data set per 
century. A person is assigned to a century by taking their year of death, 
dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

For bonus points, write a function groupBy that abstracts the grouping 
operation. It should accept as arguments an array and a function that computes 
the group for an element in the array and returns an object that maps group 
names to arrays of group members.
*/

var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

/*
// initial implementation of solution
var lifeExpectancies = {};

for (var i=0; i<ancestry.length; i++) {
    var century = Math.ceil(ancestry[i].died / 100);
    if (century in lifeExpectancies) {
        lifeExpectancies[century].push(ancestry[i]);        
    } else {
        lifeExpectancies[century] = [];
        lifeExpectancies[century].push(ancestry[i]);
    }
}
*/

//for bonus points!
function groupBy(array, grouper) {
    groups = {};
    array.forEach(function(element) {
        group = grouper(element);
        if (!(group in groups)) {
            groups[group] = [];    
        }
        groups[group].push(element);
    });
    return groups;
}

//application of group by using century to form groups
var lifeExpectancies = groupBy(ancestry, function(element) { 
    return Math.ceil(element.died / 100); 
});

//following grouping, use average on mapped objects to find avg age at death
for (century in lifeExpectancies) {
    console.log(century + ':' + average(lifeExpectancies[century].map(function(person) {
        return person.died - person.born;
    })));
}


