
let view = JSON.parse(localStorage.getItem("view"));
console.log(view);
let name = view["name"];
let title = view["title"];
let price = view["price"];
let image = view["image"];
let description = view["description"];

let myImg = document.getElementById("myImg");
let img = document.createElement("img");
img.setAttribute("src" , image);
img.setAttribute("class" , "img-fluid z-depth-1  mt-4");
myImg.appendChild(img);
let prodDetails = document.getElementById("prodDetails");
let h5 = document.createElement("h5");
h5.innerText = title;
let p1 = document.createElement("p");
p1.innerText = name;
let p2 = document.createElement("p");
let p3 = document.createElement("p");
p3.setAttribute("class" ,"pt-1");
let span = document.createElement("span");
span.setAttribute("class" ,"mr-1");
let strong = document.createElement("strong");
strong.innerText = price;
span.appendChild(strong);
p2.appendChild(span);
p3.innerText = description ;
prodDetails.appendChild(h5);
prodDetails.appendChild(p1);
prodDetails.appendChild(p2);
prodDetails.appendChild(p3);
