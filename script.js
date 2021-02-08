function generateChess() {
    const result = document.getElementById("result");
    const str = "ABCDEFGH";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            
            if ((i === 1) || (i === 10)) {
                if ((j > 1) && (j < 10)) {
                    cell.innerHTML = str[j - 2];
                }
            } else if ((j === 1) || (j === 10)) {
                cell.innerHTML = (10 - i);
            } else {
                cell.style.opacity = "50%";
                if (((i % 2 === 0) && (j % 2 === 0)) || ((i % 2 === 1) && (j % 2 === 1))) {
                    cell.style.backgroundColor = "#ffffff";
                } else {
                    cell.style.backgroundColor = "#000000";
                }
            }
            result.appendChild(cell);
        }
    }
}
generateChess();

// Task 2 Dynamic cart