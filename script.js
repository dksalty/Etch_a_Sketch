const container = document.getElementById('container');
const button = document.getElementById('button');

let size = 16; 
createGrid(size);


function createGrid(size) {
  container.innerHTML = ""; 
  const total = size * size;
  const childWidth = 100 / size;

  for (let i = 0; i < total; i++) {
    const div = document.createElement('div');
    div.classList.add('children');
    div.style.width = `${childWidth}%`;
    div.style.aspectRatio = '1 / 1';
    container.appendChild(div);
  }
}
function getRandomRgbColor() {
 const r = Math.floor(Math.random() * 256);
 const g = Math.floor(Math.random() * 256);
 const b = Math.floor(Math.random() * 256);
 return `rgb(${r}, ${g}, ${b})`;
}


container.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('children')) {
    e.target.style.backgroundColor =  getRandomRgbColor();
  }
}, true);


button.addEventListener('click', () => {
  const resize = Number(prompt('How many squares on each side?  (100 max)'));

  if (isNaN(resize) || resize <= 0) {
    alert('Please enter a valid positive number');
    return;
   }
   else if(resize > 100){
    alert('Please enter a number under 100')
    return;
   }

  size = resize;
  createGrid(size);
});