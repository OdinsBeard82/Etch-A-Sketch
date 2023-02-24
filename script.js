const container = document.getElementById("grid-container");

function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 0; j < size; j++) {
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);

      col.addEventListener("mouseenter", () => {
        col.classList.add("hover");
      });
    }
  }
}

function resetGrid() {
  let newSize = prompt("Enter new grid size");
  if (newSize !== null && newSize !== '' && newSize <= 100) {
    createGrid(parseInt(newSize));
  }
}

createGrid(16);

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", resetGrid);
