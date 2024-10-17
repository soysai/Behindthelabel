const image = document.getElementById('backgroundimage');
const wordContainer = document.getElementById('wordContainer');

// Define the word to be repeated
const wordToRepeat = "Fuck"; // Replace with the word you want to appear

// Function to generate a word at a random position
function generateWord() {
  // Create a new span element for the word
  const wordElement = document.createElement('span');
  wordElement.classList.add('word');
  wordElement.textContent = wordToRepeat;

  // Generate random position
  const randomX = Math.floor(Math.random() * window.innerWidth) + 'px';
  const randomY = Math.floor(Math.random() * window.innerHeight) + 'px';

  // Apply random position
  wordElement.style.left = randomX;
  wordElement.style.top = randomY;

  // Add the word to the container
  wordContainer.appendChild(wordElement);
}

// Add event listener to the image
image.addEventListener('click', function() {
  // Set an interval to keep generating words at a delay
  const intervalId = setInterval(generateWord, 500); // Generate word every 1 second
});