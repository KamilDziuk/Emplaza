let contenterGallery = document.querySelector(".contenterGallery");
let mainSlider = document.querySelector(".mainSlider");
let image = document.querySelectorAll(".image");
let imageBackgrounds = document.querySelectorAll(".imageBackgrounds");
let contendeImages = document.querySelectorAll(".contendeImages");
let text = document.querySelectorAll(".text");
let arrowLeft = document.querySelector(".arrow--left");
let arrowRight = document.querySelector(".arrow--right");
let mainSlideContender = document.querySelector(".mainSlideContender");


arrowLeft.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 4 4'%3E %3Cpolyline points='3 1 1 2 3 3' stroke='white' stroke-width='.3' stroke-opacity='.5' fill='none'%3E%3C/polyline%3E %3C/svg%3E\"), auto";
arrowRight.style.cursor = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 4 4'%3E %3Cpolyline points='1 1 3 2 1 3' stroke='white' stroke-width='.3' stroke-opacity='.5' fill='none'%3E%3C/polyline%3E %3C/svg%3E\"), auto";


//  Moving photos
imagesMove = (e) =>
{
image.forEach(element => {
let x = e.clientX / 170;
let y = e.clientY / 70;
element.style.transform = "translateX("+ x + "px) translateY("+ y + "px)";
});
}


// mouseLeave = () =>
//    {
//    image.forEach(elementl => {
//       elementl.style.transform = "translateX("+ 0 + "px)   translateY("+ 0 + "px)"

    
//    });
//    }

arrowLeft.addEventListener("mousemove",imagesMove);
arrowRight.addEventListener("mousemove",imagesMove);




let backgroundNumbers = 0;
let mainNumbers = 0;
let textNumber = 0;
function textSliderFunction(index)
{
text.forEach((textElement,i) => {
textElement.style.transform = `translateY(${(i-index) *100}%)`;
});
};


function mainSliderFunction(index1)
{
contendeImages.forEach((mainElement, j) => {
mainElement.style.transform = `translateX(${(j -index1) *100}%)`; 
});
};

function backgroundSliderFunction(index2)
{
imageBackgrounds.forEach((elementBackgrounds, d) => {
elementBackgrounds.style.transform = `translateX(${(d-index2) *100}%)`; 
});
};




let left = document.querySelector(".leftbs");
let right = document.querySelector(".rightbs");

let leftMobile = document.querySelector(".leftMobile");
let rightMobile = document.querySelector(".rightMobile");


muvingBlockLeft = () => 
{
   backgroundNumbers = (backgroundNumbers > 0) ? backgroundNumbers - 1 : imageBackgrounds.length - 1;
   mainNumbers = (mainNumbers > 0) ? mainNumbers - 1 : image.length - 1;
   textNumber = (textNumber > 0) ? textNumber - 1 : text.length - 1;
   mainSliderFunction(mainNumbers);
   textSliderFunction(textNumber);
   backgroundSliderFunction(backgroundNumbers);
}

muvingBlockRight = () => 
   {
      mainNumbers = (mainNumbers < image.length -1) ?  mainNumbers  + 1: 0;
      backgroundNumbers = (backgroundNumbers < imageBackgrounds.length -1) ?  backgroundNumbers + 1: 0;
      textNumber = (textNumber < text.length -1) ?  textNumber + 1: 0;
      mainSliderFunction(mainNumbers);
      backgroundSliderFunction(backgroundNumbers);
      textSliderFunction(textNumber);
      
   }
   

   textAnimation = () =>
   {
      let contenderTitle = document.querySelector('.contenderTitle .block');
      let texts = document.querySelectorAll('.contenderTitle .text');
   
      
      contenderTitle.style.animation = 'none';
      void contenderTitle.offsetWidth;
      contenderTitle.style.animation = '';
   
     
      texts.forEach((text) => {
          text.style.animation = 'none';
          void text.offsetWidth;
          text.style.animation = '';
          text.style.position ="absolute";
      });
   }


leftMobile.addEventListener("click", () => {


   muvingBlockLeft();
   textAnimation();
  
});

rightMobile.addEventListener("click", () => {

   muvingBlockRight();
   textAnimation();

});

left.addEventListener("click", () => {
 
   muvingBlockLeft();
   textAnimation();
});

right.addEventListener("click", () => {
   muvingBlockRight();
   textAnimation();

});

 const next =  setInterval(() =>
{
   muvingBlockRight();
   textAnimation();
  
},5000)


right.addEventListener("mousemove", () => {
   
   clearInterval(next);

})



left.addEventListener("mousemove", () => {
   clearInterval(next);

})

rightMobile.addEventListener("mousemove", () => {
   
   clearInterval(next);

})



leftMobile.addEventListener("mousemove", () => {
   clearInterval(next);

})


