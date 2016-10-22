/*
Write a function buildTable that, given an array of objects that all have the 
same set of properties, builds up a DOM structure representing a table. The 
table should have a header row with the property names wrapped in <th> elements 
and should have one subsequent row per object in the array, with its property 
values in <td> elements.

The Object.keys function, which returns an array containing the property names 
that an object has, will probably be helpful here.

Once you have the basics working, right-align cells containing numbers by 
setting their style.textAlign property to "right".
*/


function buildTable(data) {
    var table = document.createElement("table");
    
    // creates top row of table from object keys 
    // assumes consistency of keys in objects in data
    var topRow = document.createElement("tr");
    for (var i = 0; i < Object.keys(data[0]).length; i++) {
        var header = document.createElement("th");
        var key = document.createTextNode(Object.keys(data[0])[i]);
        header.appendChild(key);
        topRow.appendChild(header);
    }
    table.appendChild(topRow);
    
    // creates rest of the rows from object properties
    for (var i = 0; i < data.length; i++) {           
        var row = document.createElement("tr");
        for (var j = 0; j < Object.keys(data[i]).length; j++) {
            var cell = document.createElement("td");
            var content = data[i][Object.keys(data[i])[j]].toString();
            // right-aligns if cell contents are numbers 
            // assumes numbers have been formatted in a certain way (all digit chars)
            if (content.match(/^\d+$/)) {
                cell.style.textAlign = "right";
            }
            cell.appendChild(document.createTextNode(content));
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}

// MOUNTAINS is loaded in the htm file
document.body.appendChild(buildTable(MOUNTAINS));


