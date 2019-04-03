
// Create a table to act as a template for the flag and append it to html file
var table = document.createElement('table');
table.setAttribute("id","gameTable");

for (var r=0; r<3; r++){
    var tr = document.createElement('tr');
        tr.setAttribute("height","90");
        table.appendChild(tr);
    for (var c=0; c<3; c++){
        var td = document.createElement('td');
        td.setAttribute("width", "90");
        td.setAttribute("class", "gameCells");
        tr.appendChild(td); 
    }
}
var gameSection = document.getElementById('game');
gameSection.appendChild(table);


// Create a function to generate random colors and assign a range of value to each color. Also bind it to change the background colors of the selected cell on click event.
function color(event){
    var colorNum = Math.floor(Math.random() * 10);
    if (colorNum < 2) {
        this.style.background = "orange";
    }
    else if (colorNum > 2 && colorNum <4) {
        this.style.background = "blue";
    }
    else if (colorNum >4 && colorNum < 6){
        this.style.background = "red";
    }
    else if (colorNum >6 && colorNum<9){
        this.style.background = "green";
    }
    else {
        this.style.background = "white";
    }
}

// Loop through the table cells and add an event listner on each cell to trigger a click event that calls the color function on a click.
var tCells = document.getElementsByClassName("gameCells");
for (var i=0; i<tCells.length; i++){
    tCells[i].addEventListener("click", color);

    console.log("event added");
 }
    

 
