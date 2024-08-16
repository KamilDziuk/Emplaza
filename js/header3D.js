const pre = document.querySelector(".header3D");


document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre)
});

function rotateElement(event, element)
{
//get mouse position
const x = event.clientX;
const y = event.clientY;

// find the middle
const middleX = window.innerWidth / 2;
const middleY = window.innerHeight / 2;



//get offset form middle
const offsetX = ((x - middleX) / middleX ) * 25;
const offsetY = ((y - middleY) / middleY )* 25;

element.style.setProperty("--rotateX", -1 * offsetX + "deg");
element.style.setProperty("--rotateY",offsetY + "deg");

};