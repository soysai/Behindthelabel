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


// FOR MODAL 1 & 9 

// Get the modal, button, close button, and image gallery
const modal1 = document.getElementById("ourStoryModal");
const modal9 = document.getElementById("howthisworksModal");
const btn1 = document.getElementById("ourStoryButton");
const closeBtn1 = document.getElementById("closeModal1");
const closeBtn9 = document.getElementById("closeModal9");
const overlay = document.getElementById("darkBackground");

// Open the modal and apply effects
btn1.onclick = function() {
  modal1.style.display = "block"; // Show the modal
  modal9.style.display = "block"; // Show the modal
  overlay.style.display = "block"; // Show the dark background
}

// Close the modal and reset effects
closeBtn1.onclick = function() {
  modal1.style.display = "none"; // Hide the modal
  modal9.style.display = "none"; // Hide the modal
  overlay.style.display = "none"; // Hide the dark background
}

closeBtn9.onclick = function() {
  modal1.style.display = "none"; // Hide the modal
  modal9.style.display = "none"; // Hide the modal
  overlay.style.display = "none"; // Hide the dark background
}

// Optional: Close the modal if the overlay is clicked
overlay.onclick = function() {
  modal1.style.display = "none";
  modal9.style.display = "none"; // Hide the modal
  overlay.style.display = "none";
}


  // MODAL 2 OPENS UP WITH ONLY HEADER IN SIGHT AFTER CLICKING ON IMMIGRANT DIGEST
  const modal2 = document.getElementById("anecdotesModal");
  const modal3 = document.getElementById("anecdotesModaltext");
  const modal8 = document.getElementById("anecdotesModaltext2");
  const modal10 = document.getElementById("anecdotesModaltext3");
  const btn2 = document.getElementById("immigrantButton");
  const closeBtn2 = document.getElementById("closeModal2");
  const closeBtn3 = document.getElementById("closeModal3");
  const closeBtn8 = document.getElementById("closeModal8");
  const closeBtn10 = document.getElementById("closeModal10");
  const foodisfamily = document.getElementById("foodisfamily");
  const foodissharing = document.getElementById("foodissharing");
  const foodisjourney = document.getElementById("foodisjourney");
  const foodisproblem = document.getElementById("foodisproblem");

  // Open the modal and apply effects
btn2.onclick = function() {
  modal2.style.display = "block"; // Show the modal
  modal3.style.display = "block"; // Show the modal
  modal8.style.display = "block"; // Show the modal
  modal10.style.display = "block"; // Show the modal
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
  modal10.style.display = "none"; // Show the modal
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
  modal10.style.display = "none"; // Show the modal
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
  modal10.style.display = "none"; // Show the modal
  overlay.style.display = "none"; // Hide the dark background
  roticurryimg.style.display = "none";
  foodissharing.style.display = "none";
  foodisfamily.style.display = "none"; 
  foodisjourney.style.display = "none";
  foodisproblem.style.display = "none";
}

closeBtn10.onclick = function() {
  modal3.style.display = "none"; // Hide the modal
  modal2.style.display = "none"; // Hide the modal
  modal8.style.display = "none"; // Show the modal
  modal10.style.display = "none"; // Show the modal
  overlay.style.display = "none"; // Hide the dark background
  roticurryimg.style.display = "none";
  foodissharing.style.display = "none";
  foodisfamily.style.display = "none"; 
  foodisjourney.style.display = "none";
  foodisproblem.style.display = "none";
}


// ROTI CURRY SHOWS UP ONLY AFTER CLICKING ON WORD 

const roticurry = document.getElementById("roticurry");
const roticurryimg = document.getElementById("roticurryimg");
const  sparklebgroti = document.getElementById("sparklebgroti");

roticurry.onclick = function() {
  roticurryimg.style.display = "block"; // Show the modal
}

// WHEN ROTICURRY IMG IS HOVERED ON IT ALSO GETS THE SPARKLE BABY

roticurryimg.addEventListener('mouseenter', function() {
  sparklebgroti.style.display = "block"; // Show the modal
  imageGallery.style.pointerEvents = 'none';
});

roticurryimg.addEventListener('mouseleave', function() {
  // Hide the sparkle when the mouse leaves
  sparklebgroti.style.display = "none";

});

// such that when a snack is hovered onabort, it displays sparkle
const maggi = document.getElementById("maggi");
const registrationticket = document.getElementById("registration-ticket");
const nah = document.getElementById("nah");
const yes = document.getElementById("yes");
const registerbutton = document.getElementById("registerbutton");
const sparkle1 = document.getElementById("sparkle1");
const sparkle2 = document.getElementById("sparkle2");
const sparkle3 = document.getElementById("sparkle3");
const sparklebg = document.getElementById("sparklebg");
const imageGallery = document.querySelector('.image-gallery');
const images = imageGallery.getElementsByTagName('img'); // TO CALL THE IMAGES IN THE GALLERY

// WHEN MAGGI IS CLICKED ON, THE REGISTRATION TICKET IS DISPLAYED
maggi.onclick = function() {
  registrationticket.style.display = "block"; // Show the modal
  overlay.style.display = "block";
  nah.style.display = "block";
}

nah.onclick = function() {
  registrationticket.style.display = "none";
  nah.style.display = "none";
  overlay.style.display = "none";
}

registerbutton.onclick = function() {
  registrationticket.style.display = "none";
  yes.style.display = "block";
}

yes.onclick = function() {
  overlay.style.display = "none";
  yes.style.display = "none";
  nah.style.display = "none";
}



for (let i = 0; i < images.length; i++) {
  // When the mouse enters an image
  images[i].addEventListener('mouseenter', function() {
    // Show the sparkle and position it near the hovered image
    sparkle1.style.display = "block"; 
    sparkle2.style.display = "block"; 
    sparkle3.style.display = "block"; 
    sparklebg.style.display = "block"; 
    // Get the position of the hovered image
    const rect = this.getBoundingClientRect();
    
    // Position the sparkle near the hovered image
    sparkle1.style.top = `${rect.top + window.scrollY - 30}px`;  // Adjust sparkle position
    sparkle1.style.left = `${rect.left + window.scrollX + 300}px`;  // Adjust sparkle position
    sparkle2.style.top = `${rect.top + window.scrollY + 70}px`;  // Adjust sparkle position
    sparkle2.style.left = `${rect.left + window.scrollX - 100}px`;  // Adjust sparkle position
    sparkle3.style.top = `${rect.top + window.scrollY + 90}px`;  // Adjust sparkle position
    sparkle3.style.left = `${rect.left + window.scrollX + 280}px`;  // Adjust sparkle position
    sparklebg.style.top = `${rect.top + window.scrollY + 150}px`;  // Adjust sparkle2 position
    sparklebg.style.left = `${rect.left + window.scrollX + 200}px`;
  });

  images[i].addEventListener('mouseleave', function() {
    // Hide the sparkle when the mouse leaves
    sparkle1.style.display = "none";
    sparkle2.style.display = "none";
    sparkle3.style.display = "none";
    sparklebg.style.display = "none";

  });
}

// TO MAKE THE MODAL 9 DRAGGABLE 

// Make the DIV element draggable:
dragElement(document.getElementById("howthisworksModal"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("modal9-bar")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("modal9-bar").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// RANDOM POPUPS 

function showPopup() {
  const popup = document.getElementById("fuckpopup");

  // Generate random positions for the popup
  const randomX = Math.random() * (window.innerWidth - popup.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - popup.offsetHeight);

  // Set the position of the popup
  popup.style.left = randomX + "px";
  popup.style.top = randomY + "px";

  popup.style.display = "block"

  // Set a timeout to close the popup automatically after a while (optional)
  setTimeout(closePopup, 5000); // Closes after 5 seconds
}

function closePopup() {
  document.getElementById("fuckpopup").style.display = "none";
}

// Function to trigger popups at random intervals
function triggerRandomPopups() {
  const randomInterval = Math.random() * 5000 + 2000; // Random time between 2 and 7 seconds

  setTimeout(() => {
    showPopup();
    triggerRandomPopups(); // Trigger the next popup
  }, randomInterval);
}

// TO SHOW THE TICKET ALSO RANDOMLY

function showTicket() {
  const ticket = document.getElementById("ticket");

  // Generate random positions for the ticket
  const randomX2 = Math.random() * (window.innerWidth - ticket.offsetWidth);
  const randomY2 = Math.random() * (window.innerHeight - ticket.offsetHeight);

  // Set the position of the ticket
  ticket.style.left = randomX2 + "px";
  ticket.style.top = randomY2 + "px";

  // Show the ticket
  ticket.style.display = "block";

  // Set a timeout to close the ticket automatically after a while (optional)
  setTimeout(closeTicket, 5000); // Closes after 5 seconds
}

function closeTicket() {
  document.getElementById("ticket").style.display = "none";
}

// Function to trigger tickets at random intervals
function triggerRandomTickets() {
  const randomInterval2 = Math.random() * 5000 + 2000; // Random time between 2 and 7 seconds

  setTimeout(() => {
    showTicket();
    triggerRandomTickets(); // Trigger the next ticket
  }, randomInterval2);
}

const buttonElement = document.querySelector(".ourinitiativesticker");
// Start both the popup and ticket generation when the page loads
buttonElement.onclick = function() {
  triggerRandomPopups();  // Start generating popups
  triggerRandomTickets(); // Start generating tickets
}


// TO SHOW THE standup ALSO RANDOMLY

function showstandup() {
  const standuppopup = document.getElementById("standuppopup");

  // Generate random positions for the ticket
  const randomX3 = Math.random() * (window.innerWidth - ticket.offsetWidth);
  const randomY3 = Math.random() * (window.innerHeight - ticket.offsetHeight);

  // Set the position of the ticket
  standuppopup.style.left = randomX3 + "px";
  standuppopup.style.top = randomY3 + "px";

  // Show the ticket
  standuppopup.style.display = "block";

  // Set a timeout to close the ticket automatically after a while (optional)
  setTimeout(closestandup, 5000); // Closes after 5 seconds
}

function closestandup() {
  document.getElementById("standuppopup").style.display = "standuppopup";
}

// Function to trigger tickets at random intervals
function triggerRandomstandup() {
  const randomInterval3 = Math.random() * 5000 + 2000; // Random time between 2 and 7 seconds

  setTimeout(() => {
    showstandup();
    triggerRandomstandup(); // Trigger the next ticket
  }, randomInterval3);
}

// Start both the popup and ticket generation when the page loads
buttonElement.onclick = function() {
  triggerRandomPopups();  // Start generating popups
  triggerRandomTickets(); // Start generating tickets
  triggerRandomstandup();
}