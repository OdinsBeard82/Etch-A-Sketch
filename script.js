const container = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);

  for (let j = 0; j < 16; j++) {
    const col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col);

    col.addEventListener("mouseenter", () => {
      col.classList.add("hover");
    });

  }
}
