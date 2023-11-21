// This is for slideshow function in Welcome to Jujutsu Kaisen
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// navigate between galleries:
function nav_gallery(n) {
  let gallery1 = document.getElementById("gallery1");
  let gallery2 = document.getElementById("gallery2");
  let gallery3 = document.getElementById("gallery3");
  if (n==1) {
    gallery1.style.display = "grid";
    gallery2.style.display = "none";
    gallery3.style.display = "none";
  }
  if (n==2) {
    gallery2.style.display = "grid";
    gallery3.style.display = "none";
    gallery1.style.display = "none";
  }
  if (n==3) {
    gallery3.style.display = "grid";
    gallery1.style.display = "none";
    gallery2.style.display = "none";
  }
}






