// create divs with java
// variable for how many grid pixels there are
// adjustable variable for creating the divs
// research dom more

//pseudo code: select the container>add however many divs we want 
// div number should be determined by a slider or text input 
// selectall divs, add a listen for hover with the funciton of changing background color
// variable for background color should be difined by a different variable that is changed by buttons 
// space for grid is hard set, grid adjusts after space
//grid
//slider (slider sets the value only for one of the variables. value is copied to the other one )
//buttons
//reset (RESET BACKGROUND COLOR FOR ALL DIVS TO WHITE )

//GLOBAL VARIABLES
let color;
//SLIDER LOGIC
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;  //innerHTML places default slider value inside HTML

slider.oninput = function() {
  output.innerHTML = this.value; //on moving the slider this funtion updates the value of the slide
  return (slider.value);
}
//SLiDER LOGIC
//ColorPcker
let colorInput = document.querySelector("#color")
let hexInput = document.querySelector("#hex")
hexInput.innerHTML = colorInput.value;

colorInput.oninput = function() {
    color = colorInput.value;
    console.log(colorInput.value)
    hexInput.innerHTML = this.value;
    return(color);
}


//GRID
function makeGrid(size) {
let grid = document.querySelector(".grid");
let square = grid.querySelectorAll("div"); // removes all divs before the (1) create div is run
square.forEach((div) => div.remove());     // helps the grid to remain the correct size by resetting squares
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;  //creates the grid based on size variable
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
let amount = size * size;                   
for(let i=0; i<amount; i++) {
    let square = document.createElement("div"); // (1)
    square.addEventListener("mouseover", colorSquare); 
    square.style.backgroundColor = "white"; // background color for default squares
    grid.insertAdjacentElement("beforeend", square);  //injects squares before the end 
    }
}
makeGrid(16);

function changeSize(input) {
    makeGrid(input);
}
//GRID
function colorSquare() {
    this.style.backgroundColor=colorInput.value;
    console.log(colorInput.value);

}