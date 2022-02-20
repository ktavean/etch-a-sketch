let container = document.querySelector("#container");
let button = document.querySelector("#reset");
let divArray = [];

newGrid(16);

function clickity() {
    for (item of divArray) {
        item.classList.remove("drawn");
        item.remove();
    }
    let dimension = prompt("Enter an amount of squares for the new grid. (limit: 100);")
    newGrid(dimension);
}

function newGrid(num) {
    for (let i = 0; i < num * num; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "square");
        div.setAttribute("style", `width: ${540/num}px; height: ${540/num}px;`)
        divArray.push(div);
        container.appendChild(div);
    }
    for (item of divArray) {
        item.addEventListener("mouseover", function(e) {
            e.target.classList.toggle("drawn");
        });
    };

}

