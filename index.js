const paragraphs = document.querySelectorAll('.readmore');
const showMoreBtns = document.querySelectorAll('.showMoreBtn');

// Check if the <p> tags and buttons exist
if (paragraphs.length === showMoreBtns.length) {
  paragraphs.forEach((paragraph, index) => {
    const showMoreBtn = showMoreBtns[index];
    
    // Get the text content of the <p> tag
    const text = paragraph.textContent.trim();
    
    // Check the length of the text
    if (text.length > 30) {
      const trimmedText = text.slice(0, 100);
      const hiddenWords = text.slice(100);
  
      // Update the <p> tag with trimmed text
      paragraph.textContent = trimmedText;
  
      // Set onclick event for the button
      showMoreBtn.onclick = function() {
        // Append the hidden words when the button is clicked
        // paragraph.textContent += hiddenWords;
        // Remove the button after showing the hidden words
        showMoreBtn.remove();
      };
    }
  });
} else {
  console.log('The number of <p> tags and buttons does not match.');
}
    

const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navbarLinks=document.getElementsByClassName('toggle_Button')[0]
toggleButton.addEventListener('click',()=>{navbarLinks.classList.toggle('active')})
