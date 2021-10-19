// varibales
let cont = document.querySelector("#container");
let headings = document.querySelector("h1");
let par = document.querySelector('p');
let img = document.querySelector('#img');
let text = document.querySelector('#userN');
let paragraphs = document.querySelectorAll("p");
// creat buttons
let bttn = document.createElement("button")
bttn.textContent = "change";
cont.appendChild(bttn);

// button event
bttn.addEventListener("click",() =>{
   headings.style.fontSize = "6rem";
   par.style.fontStyle = "italic";
   par.style.background = 'pink';
   img.style.display = 'none';
  
})
// creat buttons 2
// let bttn2 = document.createElement("button")
// bttn2.textContent = "change image";
// cont.appendChild(bttn2);
// bttn2.addEventListener("click",() =>{
//    let imge2 = document.createElement("img");
// //    imge2.setAttribute("src").inner
// }


// input alert
function alert1 () {
    alert("Hello")
}

// loading page alret
function loadPage() {
    alert("Don't load the page")
}

// paragraphs.addEventListener("mouseover",() => {
//     style.background = "green";
// })


// image click right event

img.addEventListener("contextmenu",() => {
    alert("You clicked right")
})


// Change an image when the mouse moves onto it, and then back to the original image when the mouse moves off of it.
img.addEventListener("mouseenter", () => {
    img.style.background = "pink";
})

img.addEventListener("mouseleave", () => {
    img.style.background = "none";
})