function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.querySelector('.profile-picture').addEventListener('mouseover', function () {
    var randomColor = getRandomColor();
    this.style.backgroundImage = 'url(images/bigbnw.png)';
    this.querySelector('.profile-overlay').style.backgroundColor = randomColor;
  });
  
  document.querySelector('.profile-picture').addEventListener('mouseout', function () {
    this.style.backgroundImage = 'url(images/bigcolorful.png)';
    this.querySelector('.profile-overlay').style.backgroundColor = 'transparent';
  });
  