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


bttn.addEventListener("click",() =>{
   headings.style.fontSize = "6rem";
   par.style.fontStyle = "italic";
   par.style.background = 'pink';
   img.style.display = 'none';
  
})
// creat buttons 2
let bttn2 = document.createElement("button")
bttn2.textContent = "change image";
cont.appendChild(bttn2);
// bttn2.addEventListener("click",() =>{
//    let imge2 = document.createElement("img");
// //    imge2.setAttribute("src").inner
// }

/* <img src="./undraw_Time_management_re_tk5w.svg" alt="image" id="img"> */

function alert1 () {
    alert("Hello")
}

// function loadPage() {
//     alert("Don't load the page")
// }

// paragraphs.addEventListener("mouseover",() => {
//     style.background = "green";
// })
