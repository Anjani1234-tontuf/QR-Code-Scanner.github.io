/* Goes from A-J on the X axis. (10) 
Goes from 1-10 on the Y axis. (10)
*/

function grid() {
    var randomise = Math.floor((Math.random() * 9) + 1);
    console.log("Square:" + randomise)
    
    if (randomise == 1) randomise="B";
    if (randomise == 2) randomise="C";
    if (randomise == 3) randomise="D";
    if (randomise == 4) randomise="E";
    if (randomise == 5) randomise="F";
    if (randomise == 6) randomise="G";
    if (randomise == 7) randomise="H";
    if (randomise == 8) randomise="I";
    if (randomise == 9) randomise="J";

    var randomise2 = Math.floor((Math.random() * 9) + 1);
    if (randomise2 == 2) randomise2="2";
    if (randomise2 == 3) randomise2="3";
    if (randomise2 == 4) randomise2="4";
    if (randomise2 == 5) randomise2="5";
    if (randomise2 == 6) randomise2="6";
    if (randomise2 == 7) randomise2="7";
    if (randomise2 == 8) randomise2="8";
    if (randomise2 == 9) randomise2="9";

    else randomise == "[UNDETECTED] - Report this to <a href = 'https://github.com/AlexHGaming/'>the GitHub repo and make an issue screenshotting your console.</a>"
    document.getElementById("mout").innerHTML = `<center>${randomise}${randomise2}</center>`
}