window.onload = function() {
  // When the window is fully loaded, execute the following function

  setTimeout(() => document.getElementById('image1').classList.add('visible'), 500);
  // After 500 milliseconds, add the 'visible' class to the element with id 'image1'

  setTimeout(() => document.getElementById('image2').classList.add('visible'), 1000);
  // After 1000 milliseconds, add the 'visible' class to the element with id 'image2'

  setTimeout(() => document.getElementById('image3').classList.add('visible'), 1500);
  // After 1500 milliseconds, add the 'visible' class to the element with id 'image3'
};
