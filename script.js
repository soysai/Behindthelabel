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
}, 30);

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


// FOR MODAL 1

// Get the modal, button, close button, and image gallery
const modal1 = document.getElementById("ourStoryModal");
const btn1 = document.getElementById("ourStoryButton");
const closeBtn1 = document.getElementById("closeModal1");
const overlay = document.getElementById("darkBackground");

// Open the modal and apply effects
btn1.onclick = function() {
  modal1.style.display = "block"; // Show the modal
  overlay.style.display = "block"; // Show the dark background
}

// Close the modal and reset effects
closeBtn1.onclick = function() {
  modal1.style.display = "none"; // Hide the modal
  overlay.style.display = "none"; // Hide the dark background
}

// Optional: Close the modal if the overlay is clicked
overlay.onclick = function() {
  modal1.style.display = "none";
  overlay.style.display = "none";
}


  // MODAL 2 OPENS UP WITH ONLY HEADER IN SIGHT AFTER CLICKING ON IMMIGRANT DIGEST
  const modal2 = document.getElementById("anecdotesModal");
  const modal3 = document.getElementById("anecdotesModaltext");
  const modal8 = document.getElementById("anecdotesModaltext2");
  const btn2 = document.getElementById("immigrantButton");
  const closeBtn2 = document.getElementById("closeModal2");
  const closeBtn3 = document.getElementById("closeModal3");
  const closeBtn8 = document.getElementById("closeModal8");
  const foodisfamily = document.getElementById("foodisfamily");
  const foodissharing = document.getElementById("foodissharing");
  const foodisjourney = document.getElementById("foodisjourney");
  const foodisproblem = document.getElementById("foodisproblem");

  // Open the modal and apply effects
btn2.onclick = function() {
  modal2.style.display = "block"; // Show the modal
  modal3.style.display = "block"; // Show the modal
  modal8.style.display = "block"; // Show the modal
  overlay.style.display = "block"; // Show the dark background
  foodisfamily.style.display = "block";
  foodissharing.style.display = "block";
  foodisjourney.style.display = "block";
  foodisproblem.style.display = "block";
}

// Close the modal and reset effects
closeBtn2.onclick = function() {
  modal2.style.display = "none"; // Hide the modal
  overlay.style.display = "none"; // Hide the dark background
  modal8.style.display = "none"; // Show the modal
  modal3.style.display = "none"; // Hide the modal
  roticurryimg.style.display = "none";
  foodisfamily.style.display = "none"; // Show the dark background
  foodissharing.style.display = "none";
  foodisjourney.style.display = "none";
  foodisproblem.style.display = "none";
}

closeBtn3.onclick = function() {
  modal3.style.display = "none"; // Hide the modal
  modal2.style.display = "none"; // Hide the modal
  modal8.style.display = "none"; // Show the modal
  overlay.style.display = "none"; // Hide the dark background
  roticurryimg.style.display = "none";
  foodissharing.style.display = "none";
  foodisfamily.style.display = "none"; 
  foodisjourney.style.display = "none";
  foodisproblem.style.display = "none";
}

closeBtn8.onclick = function() {
  modal3.style.display = "none"; // Hide the modal
  modal2.style.display = "none"; // Hide the modal
  modal8.style.display = "none"; // Show the modal
  overlay.style.display = "none"; // Hide the dark background
  roticurryimg.style.display = "none";
  foodissharing.style.display = "none";
  foodisfamily.style.display = "none"; 
  foodisjourney.style.display = "none";
  foodisproblem.style.display = "none";
}

// Optional: Close the modal if the overlay is clicked
overlay.onclick = function() {
  modal2.style.display = "none";
  modal3.style.display = "none";
  modal8.style.display = "none"; // Show the modal
  overlay.style.display = "none";
  roticurryimg.style.display = "none";
}

// ROTI CURRY SHOWS UP ONLY AFTER CLICKING ON WORD 

const roticurry = document.getElementById("roticurry");
const roticurryimg = document.getElementById("roticurryimg");

roticurry.onclick = function() {
  roticurryimg.style.display = "block"; // Show the modal
}


// such that when a snack is hovered onabort, it displays sparkle
const maggi = document.getElementById("maggi");
const sparkle1 = document.getElementById("sparkle1");


maggi.addEventListener("mouseenter", (e) => {
  sparkle1.style.display = "block"; // Show the sparkle
});
