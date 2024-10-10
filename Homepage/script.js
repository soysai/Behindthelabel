//BACKGROUND CHANGE IS NOT INITIATED UNTIL CLICK

let backgroundChange = false;

// TO CREATE A MOUSE TRAIL
document.addEventListener("mousemove", function (e) {
    if (backgroundChange) return; //ONLY CREATED WHEN BACKGROUND IS BLACK

    const mousetrail = document.createElement("div");
    mousetrail.classList.add("mousetrail");
    mousetrail.style.left = e.pageX + "px";
    mousetrail.style.top = e.pageY + "px";
    document.body.appendChild(mousetrail);

    setTimeout(() => {
        mousetrail.style.opacity = "0"; // Gradual fade out
        setTimeout(() => {
          document.body.removeChild(mousetrail);
        }, 500); // Wait for the fade-out to complete before removing
      }, 500);
});

// TO CREATE A TRANSITION ON CLICK

document.getElementById("clicktoexplore").addEventListener("click", function() {
    document.body.classList.add("gradient");
    backgroundChange = true;     // BACKGROUND CHANGE IS INITIATED
    this.style.opacity = 0;     //THE TEST ALSO FADES AWAY

const videoLogo = document.querySelector(".videologo");
videoLogo.style.display = "block";

// Use a small delay to ensure the transition effect occurs
setTimeout(() => {
  videoLogo.style.opacity = 1; // Trigger the CSS transition to fade in the video
}, 50);

});

// WHEN "OUR INITIATIVE" STICKER IS CLICKED, 1) THE LOGO FLIES AWAY

document.querySelector(".ourinitiativesticker").addEventListener("click", function() {
    // Select the video element
    const videoElement = document.querySelector(".videologo");
    const buttonElement = document.querySelector(".ourinitiativesticker");
    const marqueeElement = document.querySelector(".marqueesection");
    // Add the 'slide-up' class to trigger the slide-up animation
    videoElement.classList.add("slide-up");
    buttonElement.classList.add("slide-up");
    marqueeElement.classList.add("slide-up");

    // When it's clicked, image gallery is displayed
    const imagegallery = document.querySelector(".image-gallery");
    imagegallery.style.display = "block";

    const gallery = document.querySelector('.image-gallery');

    setTimeout(() => {
        // Add the 'show-gallery' class to reveal the gallery
        document.body.classList.add('show-gallery');
      }, 2000);
});

// TO PAUSE ANIMATION
const scrollContainer = document.querySelector('.scroll-container');

// Function to pause animation on mouse enter
scrollContainer.addEventListener('mouseenter', function() {
    scrollContainer.style.animationPlayState = 'paused'; // Pause the animation
});

// Function to resume animation on mouse leave
scrollContainer.addEventListener('mouseleave', function() {
    scrollContainer.style.animationPlayState = 'running'; // Resume the animation
});