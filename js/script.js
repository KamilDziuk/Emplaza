let hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active"),navMenu.classList.toggle("active")})
,document.querySelectorAll(".nav-link").forEach(e=>e.addEventListener("click",()=>{hamburger.classList.remove("active"),navMenu.classList.remove("active")})),
window.addEventListener("scroll",()=>{document.querySelector(".nav_headar").classList.toggle("sticky",window.scrollY>0)});




let galleryItem=document.querySelectorAll(".menuImage");
numbers = 0;
function gallery(e){
    galleryItem.forEach((r,l)=>{
        r.style.transform =`translateX(${(l-e)*100}%)`;
    
    
    
    
    
    }

        
    
    )}
// setInterval(()=>{gallery(numbers=numbers<galleryItem.length-1?numbers+1:0)},5e3),
document.querySelector(".left").addEventListener("click",()=>{gallery(numbers=numbers<galleryItem.length-1?numbers+1:0)}),
document.querySelector(".right").addEventListener("click",()=>{gallery(numbers=numbers>0?numbers-1:galleryItem.length-1)}),
gallery(numbers);


let header = document.querySelector("header");


header.addEventListener("mousemove", (e) => {

let x = e.clientX / 150;
let y = e.clientY / 100;




header.style.transform = "translateX("+ x + "px)   translateY("+ y + "px)"
})


header.addEventListener("mouseleave", (e) => {

    
 
    header.style.transform = "translateX("+ 0 + "px)   translateY("+ 0 + "px)"
    header.style.transition = "transform 0.5s ease, opacity 0.3s ease";
    })
    
    

const panoramas = [
    {id: 'image0', file: 'image/image360One.webp', autoLoad: true},
    {id: 'image1', file: 'image/image360Two.webp'},
    {id: 'image3', file: 'image/image360Three.webp'},
    {id: 'image4', file: 'image/image360Four.webp'},
    {id: 'image5', file: 'image/image360Five.webp'},
    {id: 'image6', file: 'image/image360Six.webp'},
    {id: 'image7', file: 'image/image360Seven.webp'}
];

panoramas.forEach(panorama => {
    pannellum.viewer(panorama.id, {
        "type": "equirectangular",
        "panorama": panorama.file,
        "autoLoad": panorama.autoLoad || false,
        "autoRotate": -2,
        "showFullscreenCtrl": true,
        "showControls":true
        
    });
});






let test = document.querySelectorAll(".pnlm-load-button");

test.forEach(element => {
    element.innerHTML = ` Kliknij aby zobaczyć interaktywne wizualizacje 360°`;
 element.style.fontFamily  = "ProximaNova-Light";


});


let image0 = document.querySelectorAll(".pnlm-load-box");

image0.forEach(element1 => {
    element1.innerHTML = `Ładowanie`
});




// let test9 = document.querySelectorAll(".");

// test9.forEach(er => {
//     er.style.display = "none";
// });