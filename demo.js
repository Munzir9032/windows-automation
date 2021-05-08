var robot = require("robotjs");
// robot.moveMouseSmooth(500, 500);
var id = setInterval(showmouseposition, 1000);

function showmouseposition() {
    var mouse = robot.getMousePos();
    console.log(mouse);
    if (mouse.x == 0 && mouse.y == 0) {
        clearInterval(id);
    }
}