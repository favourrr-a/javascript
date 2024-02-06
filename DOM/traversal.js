
//let element = document.body;
//let child = element.firstElementChild;

let element1 = document.querySelector("#vegetables");
//let parent = element1.parentElement;
//parent.style.backgroundColor = "lightgreen";

//let sibling1 = element1.nextElementSibling;
//sibling1.style.backgroundColor = "lightgreen";

//let sibling2 = element1.previousElementSibling;
//sibling2.style.backgroundColor = "lightgreen";

//let child1 = element1.firstElementChild;
//child1.style.backgroundColor = "lightgreen";


//we can access the children of an element using the index
//let child2 = element1.children[1];
//child2.style.backgroundColor = "lightgreen";

let children = Array.from(element1.children);
children.forEach(child => child.style.backgroundColor = "lightgreen");

// .firstElementChild - the first element within a parent element
// .lastElementChild - the last element within a parent element
// .parentElement - the parent element of a child
// .nextElementSibling - the element after a child
// .previousElementSibling - the element before a child
// .children[]
// Array.from(.children)