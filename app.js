// variables for product gallery
const arrowLeft = document.querySelector('[data-arrowLeft]');
const arrowRight = document.querySelector('[data-arrowRight]');
const productGallery = document.querySelector('.product-gallery')
let position = 0;
let x = 1;

// variables for collage
const slides = document.querySelector('.slides');
const carousel = document.querySelector('.carousel');

/** 
code for product gallery  
**/ 

arrowLeft.addEventListener('click', () => {
    
    // if it reaches the end of the gallery the left arrow disappear
    // else it shows the products on the left
    if(position == 0){
        arrowLeft.style.display = 'none';
    } else {
        productGallery.style.marginLeft = `-${position-100}vw`;
        position -= 100;
    }

    // shows back again the right arrow button
    if(position == 200){
        arrowRight.style.display = 'block';
    }
})

arrowRight.addEventListener('click', () => {
    
    // if it reaches the end of the gallery the right arrow disappear
    // else it shows the products on the left
    if(position < 300){
        position += 100;
        productGallery.style.marginLeft = `-${position}vw`;
    } else {
        arrowRight.style.display = 'none';
    }

    // shows back again the left arrow button
    if(position == 100){
        arrowLeft.style.display = 'block';
    }
})

/*
code for carousel
*/ 

slides.addEventListener('transitionend', () =>{

    slides.appendChild(slides.firstElementChild);
    slides.style.transition = 'none';
    slides.style.transform = 'translate(0)';
      setTimeout(() =>{
        slides.style.transition = '0.5s ease';
      })
    
});

function transitionEvent() {

    slides.style.transform = 'translate(-16.66%)';
};

setInterval(transitionEvent, 4000);
