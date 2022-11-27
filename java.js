const slideshowImages = document.querySelectorAll(".slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImages[currentImageCounter]. style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter]. style.display = "none";
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.display = "block";
}

/* The code for the slideshow, including css, html and javascript,
was derived from the youtube video linked here:
https://www.youtube.com/watch?v=o_hRhTZORNY&t=941s */
