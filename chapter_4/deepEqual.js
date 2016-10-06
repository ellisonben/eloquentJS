/*
The == operator compares objects by identity. But sometimes, you would prefer 
to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if 
they are the same value or are objects with the same properties whose values 
are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator 
for that) or by looking at their properties, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison. But 
you have to take one silly exception into account: by a historical accident, 
typeof null also produces "object".
*/

function deepEqual(value1, value2) {
    if ((typeof value1 == "object" && value1 !=null) && (typeof value2 == "object" && value2 !=null)) {
        if (Object.keys(value1).length == Object.keys(value2).length) {
            for (prop in value1) {
                if (value2[prop] == undefined) {
                    return false;
                } else if (!deepEqual(value1[prop], value2[prop])) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    } else {
        return value1 === value2;
    }
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(2, 2));
// → true
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
