function generateSquareGrid(size) {
	const container = document.querySelector("#container");
	for (i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		for (j = 0; j < size; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.addEventListener("mouseover", function () {
				this.style.backgroundColor = "yellow";
			});
			row.appendChild(square);
		}
		container.appendChild(row);
	}
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

function buttonClick() {
	const button = document.querySelector("#button");
	button.addEventListener("click", function () {
		size = getSizeFromUser();
		clearGrid();
		generateSquareGrid(size);
	});
}

function main() {
	size = 4;
	generateSquareGrid(size);
	buttonClick();
}

main();
