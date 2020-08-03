// This file is inaccurate, therefore not purposely meant to be in a good state.

var all = [
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
]

all = all.sort(); // just incase i be stupid and mess up the array

var all2 = [
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
]

var returnback = `<button type = "button" onclick = "window.location.href = '../HTML/index.html'">Go back to main site.</button>`
all2 = all2.sort(); // just incase i be stupid and mess up the array
function allgrid() {
document.write(`${all}<br><br>${all2}<br><br>${returnback}` )
}