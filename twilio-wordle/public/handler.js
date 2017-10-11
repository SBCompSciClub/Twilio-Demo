let canvas = document.getElementById("wordle-container");
let style = window.getComputedStyle(canvas);
canvas.width = parseInt(style.width);
canvas.height = parseInt(style.height);