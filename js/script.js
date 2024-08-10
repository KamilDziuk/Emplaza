
let hamburger = document.querySelector(".hamburger"); 
let navMenu = document.querySelector(".nav-menu");  

hamburger.addEventListener("click", () =>
{
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click", () =>
{
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}));

window.addEventListener("scroll", () =>
{
let nav_headar = document.querySelector(".nav_headar");
nav_headar.classList.toggle("sticky", window.scrollY > 0);
});


let galleryItem = document.querySelectorAll('.menuImage');
let numbers = 0;

function  gallery(index)
{
    galleryItem.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index)* 123}%)`;
        item.style.opacity = i  === index ? 1: 0.3;
    });

    
};






setInterval( () =>
{
    numbers = (numbers < galleryItem.length -1) ?  numbers +1:0;
    gallery(numbers);

},3000)


document.querySelector('.left').addEventListener('click', () => {
numbers = (numbers < galleryItem.length - 1)? numbers + 1: 0;
gallery(numbers);
});

document.querySelector('.right').addEventListener('click', () => {
numbers = (numbers > 0) ? numbers -1: galleryItem.length -1;
gallery(numbers);
});

gallery(numbers);