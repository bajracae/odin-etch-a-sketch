function generateSquareGrid(size) {
	const container = document.querySelector("#container");
	for (i = 0; i < size; i++) {
		const column = document.createElement("div");
		column.classList.add("column");
		for (j = 0; j < size; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.addEventListener("mouseover", function () {
				this.style.backgroundColor = randomHexColor();
			});
			column.appendChild(square);
		}
		container.appendChild(column);
	}
}

function randomHexColor() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return "#" + randomColor;
}

function getSizeFromUser() {
	while (true) {
		size = Number(prompt("Enter size (1-100):"));
		if (size > 0 && size <= 100) {
			return size;
		}
	}
}

function clearGrid() {
	const container = document.querySelector("#container");
	container.innerHTML = "";
}

function resizeGridButtonCick() {
	const button = document.querySelector("#button");
	button.addEventListener("click", function () {
		size = getSizeFromUser();
		clearGrid();
		generateSquareGrid(size);
	});
}

function main() {
	default_size = 4;
	generateSquareGrid(default_size);
	resizeGridButtonCick();
}

main();
