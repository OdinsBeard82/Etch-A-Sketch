function resetGrid() {
  let newSize = prompt("Enter new grid size");
  if (newSize !== null && newSize !== '' && newSize <= 100) {
    createGrid(parseInt(newSize));
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid(16);

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", resetGrid);
const refreshButton = document.querySelector(".refresh");

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener("click", refreshPage)


