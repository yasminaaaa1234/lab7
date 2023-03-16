document.getElementById("header").innerHTML = "Lab7 Assignment";
document.getElementById("header").setAttribute("style", "font-family: verdana");
document.getElementById("header").style.color = "blue"; 


console.log(document);
let hr = document.createElement("hr");
document.body.appendChild(hr);
console.log(document);

console.log(document);
let h2 = document.createElement("h2");
h2.innerText = "Task"
h2.setAttribute("style", "font-family: verdana");
h2.style.color = "red"; 
document.body.appendChild(h2);
console.log(document);

 
console.log(document);
let p1 = document.createElement("p1");
p1.innerText = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1);
console.log(document);



console.log(document);
let ul = document.createElement("ul");

document.body.appendChild(ul);
console.log(document);
let newLi = document.createElement('li');
newLi.innerHTML = "find element in the DOM (5 points);";
newLi.style.color = "green"; 
 document.body.appendChild(newLi);
 let secLi = document.createElement('li');
 secLi.innerHTML = "create/add/remove elements (5 points);";
 secLi.style.color = "purple"; 
  document.body.appendChild(secLi);
  let thirdLi = document.createElement('li');
  thirdLi.innerHTML = "change content of the element (5 points);";
  thirdLi.style.color = "green"; 
   document.body.appendChild( thirdLi);
   let fourLi = document.createElement('li');
   fourLi.innerHTML = "change styles of the elements (5 points);";
   fourLi.style.color = "purple";
    document.body.appendChild( fourLi);
    let fifthLi = document.createElement('li');
    fifthLi.innerHTML = "change attributes of the element (5 points);";
    fifthLi.style.color = "green"; 
    document.body.appendChild( fifthLi);
    let sixLi = document.createElement('li');
   sixLi.innerHTML = "change classes of the element (5 points);";
   sixLi.style.color = "purple";
    document.body.appendChild( sixLi);

    console.log(document);
let sechr = document.createElement("hr");
document.body.appendChild(sechr);
console.log(document);

console.log(document);
let newh2 = document.createElement("h2");
newh2.innerText = "Submission"
newh2.setAttribute("style", "font-family: verdana");
newh2.style.color = "red";
document.body.appendChild(newh2);
console.log(document);

console.log(document);
let newp1 = document.createElement("p1");
newp1.innerText = "To submit your work, follow these instructions:"
document.body.appendChild(newp1);
console.log(document);



let newul = document.createElement("ul");
document.body.appendChild(newul);

let Li1 = document.createElement('li');
Li1.innerHTML = "Create a new repository on GitHub, named lab7 (1 point).";
Li1.style.color = "green"; 
document.body.appendChild(Li1);
let Li2 = document.createElement('li');
Li2.innerHTML = "Clone this repository to your local machine and work inside it.";
Li2.style.color = "purple"; 
document.body.appendChild(Li2);
let Li3 = document.createElement('li');
Li3.innerHTML = "Create a new HTML file, called index.html, which has only one 'h1' tag with 'Hello, World!' message (1 point)."; 
Li3.setAttribute("style", "font-size: 16px");
Li3.style.color = "green"; 
document.body.appendChild(Li3);
let Li4 = document.createElement('li');
Li4.innerHTML = "Create a new JavaScript file, called main.js, which must contain your program (assignment) described above (1 point).";
Li4.style.color = "purple"; 
document.body.appendChild(Li4);
let Li5 = document.createElement('li');
Li5.innerHTML = "Link this main.js file to your index.html file (Note: place your  script at the end  of the body section).";
Li5.style.color = "green"; 
document.body.appendChild(Li5);
let Li6 = document.createElement('li');
Li6.innerHTML = "Write a JavaScript program in main.js to make your index.html look identical to this HTML file (5 points).";
Li6.style.color = "purple"; 
document.body.appendChild(Li6);
let Li7 = document.createElement('li');
Li7.innerHTML = "After you finish your work, submit it to the GitHub (2 points).";
Li7.style.color = "green"; 
document.body.appendChild(Li7);
console.log(document);

console.log(document);
let thirdhr = document.createElement("hr");
document.body.appendChild(thirdhr);
console.log(document);



document.getElementById("head").classList.add("h1");
document.getElementById("head").classList.remove("h1");





