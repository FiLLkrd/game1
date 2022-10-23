const board = document.querySelector('#board');
const colors = ['#00FF00', '#EE82EE', '#FA8072', '#FFFF00', '#ADFF2F', '#DCDCDC', '#F4A460', '#FF4500', '#191970', '#FFF5EE', '#483D8B', '#7FFFD4']
const squaresNubmer = 500;

for (let i = 0; i < squaresNubmer; i++){
    const square = document.createElement('div');
    square.classList.add('square');


square.addEventListener('mouseover', () => 
    setColor (square))

square.addEventListener('mouseleave', () => 
    removeColor (square))

    board.append(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}