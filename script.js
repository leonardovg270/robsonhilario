


let anchorSelector = 'a[href^="#"]';
      
        // Collect all such anchor links
        let anchorList = 
            document.querySelectorAll(anchorSelector);
          
        // Iterate through each of the links
        anchorList.forEach(link => {
            link.onclick = function (e) {
      
                // Prevent scrolling if the
                // hash value is blank
                e.preventDefault();
          
                // Get the destination to scroll to
                // using the hash property
                let destination = 
                    document.querySelector(this.hash);
          
                // Scroll to the destination using
                // scrollIntoView method
                destination.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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



let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}





const carousel = document.querySelector(".carousel")
       const firstCardWidth = carousel.querySelector(".card").offseWidth;
       const carouselChildrens = [...carousel.children];


       let isDragging = false, startX;
       let cardPerView = Math.round(carousel.offseWidth / firstCardWidth)


       const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");

        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;  
    }



       const dragging = (e) => {
        if(!isDragging) return;
       carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {

        isDragging = false;
        carousel.classList.remove("dragging");

    }

    carousel.addEventListener("mousedown", dragStart)
    carousel.addEventListener("mousemove", dragging)
    document.addEventListener("mouseup", dragStop)
