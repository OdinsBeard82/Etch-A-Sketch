const container = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
  const item = document.createElement("div");
  item.classList.add("col");
  container.appendChild(item);
  
}
