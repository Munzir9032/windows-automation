var robot = require("robotjs");
var fs = require("fs");
const { isContext } = require("vm");
setTimeout(handleOpenBoard, 2000);
function handleOpenBoard() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    setTimeout(function () {
        robot.typeString("OpenBoard");
        robot.keyTap("enter");
        setTimeout(writehi, 6000);

    }, 2000);
}
function writehi() {
    robot.moveMouseSmooth(400, 250);
    robot.mouseToggle("down", "left");;
    robot.dragMouse(400, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(400, 350);
    robot.mouseToggle("down", "left");;
    robot.dragMouse(600, 350);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(600, 250);
    robot.mouseToggle("down", "left");;
    robot.dragMouse(600, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 250);
    robot.mouseToggle("down", "left");;
    robot.dragMouse(900, 250);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800, 250);
    robot.mouseToggle("down", "left");;
    robot.dragMouse(800, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 450);
    robot.mouseToggle("down", "left");;
    robot.dragMouse(900, 450);
    robot.mouseToggle("up", "left");

    setTimeout(writesomthing, 2000);

}
function writesomthing() {

    robot.moveMouseSmooth(932, 833);
    robot.mouseClick();
    robot.moveMouseSmooth(1198, 302);
    robot.mouseClick();
    robot.typeString(" guys this is an operating system automation , made by Munzir");
    robot.moveMouseSmooth(1434, 17);
    robot.mouseClick();
    setTimeout(opentelegram, 4000);

}
function opentelegram() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    setTimeout(function () {
        robot.typeString("Telegram");
        robot.keyTap("enter");
    }, 2000)
    setTimeout(function () {
        robot.moveMouseSmooth(522, 47);
        robot.mouseClick();
        robot.typeString("pepcoding");
        robot.keyTap("enter");
        robot.typeString("Hello world");
        setTimeout(msword, 3000);
    }, 2000);
}
function msword() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    setTimeout(function () {
        robot.typeString("Word");
        robot.keyTap("enter");
    }, 3000);
    setTimeout(function () {
        robot.moveMouseSmooth(974, 626);
        robot.mouseClick();
        setTimeout(Openedge, 2000);
    }, 7000)
}
function Openedge() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    setTimeout(function () {
        robot.typeString("Microsoft Edge");
        robot.keyTap("enter");
        setTimeout(opentabs, 6000);
    }, 3000);

}
function opentabs() {
    var rdata = fs.readFileSync("./edge.json");
    var tabs = JSON.parse(rdata);
    for (var i = 0; i < tabs.length; i++) {
        for (var j = 0; j < tabs[i].length; j++) {
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");
            if (j < tabs[i].length - 1) {
                robot.keyToggle("control", "down");
                robot.keyTap("t");
                robot.keyToggle("control", "up");
            } else if (i < tabs.length - 1) {
                robot.keyToggle("control", "down");
                robot.keyTap("n");
                robot.keyToggle("control", "up");
            }
        }
    }
    robot.moveMouseSmooth(500, 500);
    robot.mouseClick();
    setTimeout(opennotepad, 3000);

}
function opennotepad() {
    robot.moveMouseSmooth(0, 863);
    robot.mouseClick();
    setTimeout(function () {
        robot.typeString("notepad");
        robot.keyTap("enter");
        setTimeout(writenotepad, 2000);
    }, 3000);

}
function writenotepad() {
    robot.typeString("your system is ready to use ");
}
