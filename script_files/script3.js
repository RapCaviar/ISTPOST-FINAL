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
