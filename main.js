canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

// "ctx" is the variable by us.//

color="red";
width_of_line=1;
radius=50;

document.getElementById("color_input").value=color;
document.getElementById("width_input").value=width_of_line;
document.getElementById("radius_input").value=radius;

var mouse_event="empty";

console.log(mouse_event);

canvas.addEventListener("mousedown", My_mousedown);

function My_mousedown(e){
    color= document.getElementById("color_input").value;
    width_of_line= document.getElementById("width_input").value;
    radius= document.getElementById("radius_input").value;

    console.log(color);
    console.log(width_of_line);
    console.log(radius);

    mouse_event="mousedown";
   console.log(mouse_event);

}

canvas.addEventListener("mouseup", My_mouseup);

function My_mouseup(e){
    
    mouse_event="MouseUp";
   console.log(mouse_event);

}

canvas.addEventListener("mouseleave", My_mouseleave);

function My_mouseleave(e){

mouse_event="MouseLeave";
console.log(mouse_event);

}

canvas.addEventListener("mousemove", My_mousemove);

function My_mousemove(e){

    current_position_of_mousex= e.clientX - canvas.offsetLeft;
    current_position_of_mousey = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        console.log("Currentof x and y coordinates = ")
        console.log("x = " + current_position_of_mousex + "y =" + current_position_of_mousey);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mousex , current_position_of_mousey , radius , 0, 2 * Math.PI);
        ctx.stroke();
    }
    
}

function clearCanvas() {

ctx.clearRect(0,0,800,600);

}
    