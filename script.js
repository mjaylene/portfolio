document.addEventListener('DOMContentLoaded', function () {
    var profilePicture = document.querySelector('.profile-picture');
  
    profilePicture.addEventListener('mouseover', function () {
      profilePicture.classList.add('profile-hovered');
    });
  
    profilePicture.addEventListener('mouseout', function () {
      profilePicture.classList.remove('profile-hovered');
    });
  });
  