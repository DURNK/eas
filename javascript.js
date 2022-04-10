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
//reset

//SLIDER LOGIC
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;  //innerHTML places default slider value inside HTML

slider.oninput = function() {
  output.innerHTML = this.value; //on moving the slider this funtion updates the value of the slide
  console.log(slider.value);
 
}
//SLDER LOGIC

function makeGrid () {

}