document.addEventListener('DOMContentLoaded', () => {
  const greyBtn = document.getElementById('grey');
  const whiteBtn = document.getElementById('white');
  const blueBtn = document.getElementById('blue');
  const yellowBtn = document.getElementById('yellow');

  const canvas = document.querySelector('.canvas');

  const BGColorChanger = (color) => {
    canvas.style.backgroundColor = color;
  };

  greyBtn.addEventListener('click', () => {
    BGColorChanger('grey');
  });
});
