/*
A tabbed interface is a common design pattern. It allows you to select an 
interface panel by choosing from a number of tabs “sticking out” above an 
element.

In this exercise you’ll implement a simple tabbed interface. Write a function, 
asTabs, that takes a DOM node and creates a tabbed interface showing the child 
elements of that node. It should insert a list of <button> elements at the top 
of the node, one for each child element, containing text retrieved from the 
data-tabname attribute of the child. All but one of the original children 
should be hidden (given a display style of none), and the currently visible 
node can be selected by clicking the buttons.

When it works, extend it to also style the currently active button differently.
*/

function asTabs(node) {
    var tabs = [];
    var buttons = [];
    for (var i = 1; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType == document.ELEMENT_NODE) {
            tabs.push(node.childNodes[i]);
        }
    }
    var firstChild = node.firstChild;
    
    function displayTab(number) { // takes index in tabs array as number
        for (var i = 0; i < tabs.length; i++) {
            if (i == number) {
                tabs[i].style.display = "block";
            } else { 
                tabs[i].style.display = "none";
            }
        }
    }
    
    function colourActiveButton(number) {
        for (var i = 0; i < buttons.length; i++) {
            if (i == number) {
                buttons[i].style.backgroundColor = "#CAEFEC"; 
            } else { 
                buttons[i].style.backgroundColor = "#788A88"; 
            }
        }
    }
    
    tabs.forEach(function(tab) {
        var button = document.createElement("button");
        var buttonText = document.createTextNode(tab.getAttribute('data-tabname'));
        button.appendChild(buttonText);
        buttons.push(button);
        button.addEventListener("click", function() { 
            displayTab(tabs.indexOf(tab));
            colourActiveButton(tabs.indexOf(tab));
        });
        node.insertBefore(button, firstChild);
    });
    
    displayTab(0);
    colourActiveButton(0);
}
asTabs(document.querySelector("#wrapper"));
