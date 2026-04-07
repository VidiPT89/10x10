const titulo = document.querySelector("h1 span");
const grid = document.querySelector("#grid");
document.addEventListener("keydown", moverValidar);

const gridSize = parseInt(prompt("Tamanho?", 10));

const initialPosition = Math.floor(Math.random() * gridSize * gridSize);
let currentPosition = initialPosition;

titulo.innerText = `${gridSize} x ${gridSize}`;

const squares = [];

// corrigir o tamanho dos quadrados e organização com css
const gridWidth = gridSize * 40;
grid.style.width = gridWidth + "px";
grid.style.height = gridWidth + "px";

// consuantes das direcções
const moveLeft = -1;
const moveRight = 1;
const moveUp = -gridSize;
const moveDown = gridSize;

function moverValidar(event) {
    let direction = 0;
    switch (event.key) {
        case "ArrowLeft":
            if (currentPosition % gridSize !== 0) direction = moveLeft;
            break;
        case "ArrowRight":
            if (currentPosition % gridSize !== gridSize - 1)
                direction = moveRight;
            break;
        case "ArrowUp":
            if (currentPosition >= gridSize) direction = moveUp;
            break;
        case "ArrowDown":
            if (currentPosition < gridSize * gridSize - gridSize)
                direction = moveDown;
            break;
    }
    if (direction !== 0) moverBoneco(direction);
}

function moverBoneco(direction) {
    squares[currentPosition].classList.remove("boneco");
    currentPosition += direction;
    squares[currentPosition].classList.add("boneco");

    if (squares[currentPosition].classList.contains("alien")) {
        console.log("Alien capturado!!!", currentPosition);
        squares[currentPosition].classList.remove("alien");
        const faltam = document.querySelectorAll(".alien").length;
        if (faltam > 0) console.log("Faltam", faltam, "aliens");
        else {
            console.log("Ganhaste!!!!");
            document.removeEventListener("keydown", moverValidar);
        }
    }
}

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        squares.push(square);
        grid.appendChild(square);
    }

    squares[initialPosition].classList.add("boneco");
}

function createAliens() {
    for (let i = 0; i < 6; i++) {
        const posicao = Math.floor(Math.random() * (gridSize * gridSize));

        if (
            posicao === initialPosition ||
            squares[posicao].classList.contains("alien")
        ) {
            i--;
            continue;
        }

        squares[posicao].classList.add("alien");
    }
}

createGrid();
createAliens();
