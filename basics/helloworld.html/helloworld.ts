// create Element with p tag
var p = document.createElement("p");

var hello: string = "Hello";
var world: string = "World";

// asign text content
p.textContent = ` ${hello} ${' '} ${world}`;

document.body.appendChild(p);