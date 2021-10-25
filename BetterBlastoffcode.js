function playCraps() {
    console.log("playCraps() function Started");
    //Returns random number inclusive to 0 but exclusive to 1 now multiplied by 6
    //ceil rounds the number we recive up to a whole number
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //adds the 2 numbers together
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = "Die 1 =" + die1
    document.getElementById("die2Res").innerHTML = "Die 2 =" + die2
    document.getElementById("sumRes").innerHTML = " Sum =" + sum;
    // It checks sum var to see if equal if its then it does its function saying you lose and can be 7 or 11
    if (sum == 7 || sum == 11) {
        loss = loss + 1;
        document.getElementById("lossres").innerHTML = loss;
        document.getElementById("finalres").innerHTML = "CRAPS - you lose!";
    }
    // first checks if statment if its false moves on to this statment and in this statment both have to be true
    // for numbers %2 that equal 0 so if 2,2 4,4 6,6 you win on those combinations.
    else if (die1 == die2 && die1 % 2 == 0) {
        win = wins++;
        document.getElementById("winsres").innerHTML = wins;
        document.getElementById("finalres").innerHTML = "DOUBLES - you win";
    }
    // if the other 2 were not proced this one plays as in turn
    else {
        tie = tie + 1;
        document.getElementById("tieres").innerHTML = tie;
        document.getElementById("finalres").innerHTML = "Draw-You neither won or lost. Please try agin.";
    }

}

//  function blastoff(){
//    var currtime = 50;

//     document.getElementById("counddowntimer").innerHTML = currtime;
//      setTimeout(function () {
//         currtime = currtime - 5;
//         document.getElementById("counddowntimer").innerHTML = currtime;
//     }, 5000);
//     setTimeout(function () {
//         currtime = currtime - 5;
//         document.getElementById("counddowntimer").innerHTML = currtime;
//      }, 10000);
//     setTimeout(function () {
//        currtime = currtime - 5;
//        document.getElementById("counddowntimer").innerHTML = currtime;
//     }, 15000);
//     setTimeout(function () {
//        currtime = currtime - 5;
//         document.getElementById("counddowntimer").innerHTML = currtime;
//      }, 20000);
//      setTimeout(function () {
//         currtime = currtime - 5;
//         document.getElementById("counddowntimer").innerHTML = currtime;
//     }, 25000);
//     setTimeout(function () {
//         currtime = currtime - 5;
//         document.getElementById("counddowntimer").innerHTML = currtime;
//      }, 30000);
//      setTimeout(function () {
//          currtime = currtime - 5;
//          document.getElementById("counddowntimer").innerHTML = currtime;
//       }, 35000);
//      setTimeout(function () {
//         currtime = currtime - 5;
//          document.getElementById("counddowntimer").innerHTML = currtime;
//      }, 40000);
//     setTimeout(function () {
//          currtime = currtime - 5;
//          document.getElementById("counddowntimer").innerHTML = currtime;
//       }, 45000);
//      setTimeout(function () {
//           currtime = currtime - 5;
//           document.getElementById("counddowntimer").innerHTML = "Blastoff";
//      }, 50000);
//   }
function btrBlastOff() {

    console.log("btrBlastOff() started");
    var currtime = 50;
    for (var i = 0; i < 50; i++) {
        setTimeout(function () {
            if (currtime >= 10) {
                //if conditions are true
                document.getElementById("counddowntimer").innerHTML = currtime;

            } else if (currtime == 0) {
                //if else if conditions are true
                document.getElementById("counddowntimer").innerHTML = "Blastoff!";
            } else {
                //if conditions are not true
                document.getElementById("counddowntimer").innerHTML =
                    "Warning Less than ½ way to launch, time left , insert variable here" + currtime;
            }
            currtime = currtime - 5;
        }, i * 5000);

    }
}
function start(){
    console.log("start()function started")
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){
    console.log("stop()function started")
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
play();