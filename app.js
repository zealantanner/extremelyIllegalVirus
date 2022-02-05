// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

var openCounter = 0;
function openWin() {
    // myWindow = window.open("hi", "hello", "width=200, height=200");
    console.log("opening window");
    virusWindow = window.open("superEvilVirusStuff/virus.html", "hello", "resizable=off toolbar=on, menubar=on, screenY=300, screenX=300, left=100, top=100, width=600, height=500");
    virusWindow.resizeTo(700, 800);
}
var alreadyResized = false;
function resizeWin(w, duration) {
    console.log("resizing")
    if(alreadyResized) {
        w.resizeBy(300, 250)
        alreadyResized = false;
    }
    else {
        w.resizeBy(-300, -250)
        alreadyResized = true;
    }
    // window.
}
function closeWin(w) {
    console.log("closing window");
    w.close();
}
// openWin();
function button1() {
    openWin();-
}
function button2() {
    resizeWin(virusWindow, 4);
}

function button3() {
    closeWin(virusWindow);
}
// function button4() {
//     openWin();
// }
// function button5() {
//     openWin();
// }
    function button6() {
        button2()
    }