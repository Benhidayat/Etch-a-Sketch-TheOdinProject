const container = document.getElementById('container');
const rowContainer = document.createElement('div');
rowContainer.classList.add('row-grid');
container.appendChild(rowContainer);
const babyDiv = document.createElement('div');
babyDiv.classList.add('baby-div');
const body = document.querySelector('body');
const section = document.createElement('section');
section.classList.add('button-section');
body.insertBefore(section, container);
const startBtn = document.createElement('button');
startBtn.setAttribute('type', 'button');
startBtn.classList.add('start-button');
startBtn.textContent = "Set Number";
section.appendChild(startBtn);
/*const resetBtn = startBtn.cloneNode();   <---- if you wanted to have reset button.
resetBtn.setAttribute('type', 'button');
resetBtn.classList.add('reset-button');
resetBtn.textContent = "Reset";
startBtn.after(resetBtn);*/


function createRowGrid(num) {
    for (let i = 0; i < num; i ++) {
        if (i === 0) {
            rowContainer.appendChild(babyDiv);
        } else {
            let clonedDiv = babyDiv.cloneNode(true);
            clonedDiv.classList.add('baby-div');
            babyDiv.after(clonedDiv);
        }
    }
}

function createColumnGrid(num) {
    let columnNum = num - 1;
    for (let i = 0; i < columnNum; i++) {
        let clonedRowContainer = rowContainer.cloneNode(true);
        clonedRowContainer.classList.add('row-grid');
        rowContainer.after(clonedRowContainer);
    }
}

function createSquaredGrid() {
    let numOfGrid = prompt('Enter number from 1 - 100');

    if (numOfGrid < 1 || numOfGrid > 100 || isNaN(numOfGrid)) alert('Please enter valid number from 1 - 100');

    createRowGrid(numOfGrid);
    createColumnGrid(numOfGrid);

    const divs = document.querySelectorAll('.baby-div');
    divs.forEach(div => div.addEventListener('mouseover', (e) => {
        const randomColor = getRandomColor();
        e.target.style.backgroundColor = `${randomColor}`;
    }));
}

function resetGrid() {
    const removeGrid = document.querySelectorAll('.baby-div');
    removeGrid.forEach(grid => grid.remove());
}

function getRandomColor() {
    const hexChars = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexCOlorRep = "#";

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random()* hexChars.length);
        hexCOlorRep += hexChars[randomIndex];
    }
    return hexCOlorRep;
}

startBtn.addEventListener('click', function() {
    resetGrid();
    createSquaredGrid();
});
//resetBtn.addEventListener('click', resetGrid);