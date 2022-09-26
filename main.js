const bg = document.querySelector('.content')
const btn = document.querySelector('.button')

btn.addEventListener('click', changeColor)
function changeColor() {
  var cores = ['blue', 'pink', 'red', 'yellow', 'green', 'wheat', 'purple', 'black'];
  var nextColor = Math.floor(Math.random() * cores.length);
  var cor = cores[nextColor];
  bg.style.background = cor;
  bg.style.transition = '.7s'
}