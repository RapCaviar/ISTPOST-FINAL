$(document).ready(function(){
  // When the document is fully loaded, execute the following function

  $('.videos img').click(function(){
    // When any image inside the 'videos' class is clicked, execute the following function

    $(this).addClass('active').siblings().removeClass('active');
    // Add the 'active' class to the clicked image and remove it from its siblings

    var src = $(this).attr('src');
    // Get the 'src' attribute of the clicked image

    $('.main-videoX img').attr('src',src);
    // Set the 'src' attribute of the main video image to the 'src' of the clicked image
  });
});

window.onload = function() {
  // When the window is fully loaded, execute the following function

  setTimeout(() => document.getElementById('image1').classList.add('visible'), 500);
  // After 500 milliseconds, add the 'visible' class to the element with id 'image1'

  setTimeout(() => document.getElementById('image2').classList.add('visible'), 1000);
  // After 1000 milliseconds, add the 'visible' class to the element with id 'image2'

  setTimeout(() => document.getElementById('image3').classList.add('visible'), 1500);
  // After 1500 milliseconds, add the 'visible' class to the element with id 'image3'
};
