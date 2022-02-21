let container = document.querySelector("#container");
let button = document.querySelector("#reset");
let divArray = [];


newGrid(16);

function randomColor(counter) {
    if (counter === 9) {
        return "rgb(0, 0, 0)";
    } else if (counter === 10) {
        return "rgb(255, 255, 255)";
    } else {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
}

function clickity() {
    for (item of divArray) {
        item.div.remove();
    }
    divArray = [];
    let dimension = prompt("Enter an amount of squares for the new grid. (limit: 100);")
    newGrid(dimension);
}

function newGrid(num) {
    for (let i = 0; i < num * num; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "square");
        div.setAttribute("style", `width: ${540/num}px; height: ${540/num}px;`)
        let counter = 0;
        divObject = {"div": div, "counter": counter}
        divArray.push(divObject);
        container.appendChild(div);
    }
    for (let i = 0; i < divArray.length; i++) {
        divArray[i].div.addEventListener("mouseover", function(e) {
            e.target.style.background = `${randomColor(divArray[i].counter)}`;
            divArray[i].counter += 1
        });
    };

}
