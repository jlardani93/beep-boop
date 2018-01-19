$(document).ready(function() {
  //returns an integer generated from user input
  var getUserInput = function() {
    tempUserInput = parseInt($("#numberInput").val())
    if(typeof(tempUserInput) === "number" && tempUserInput > 0 && tempUserInput <= 1000) {
      return tempUserInput;
    } else {
      alert("Your submission was not a valid number. Please resubmit a valid, positive integer that is less than or equal to 1000.")
      reset();
    };
  };
  //converts user input to an array
  var setNumArray = function(userInput) {
    var tempArray = [];
    for (var i = 1; i <= userInput; i++) {
      tempArray.push(i);
    };
    console.log(tempArray);
    return tempArray;
  };
  //checks whether number contains zero
  var setContainsZero = function(num) {
    var digitsArray = num.toString().split("");
    var tempBoolean = false;
    digitsArray.forEach(function(digit) {
      console.log(digit);
      if (digit === "0") {
        tempBoolean = true;
      };
    });
    return tempBoolean;
  };
  //checks whether number contains one
  var setContainsOne = function(num) {
    var digitsArray = num.toString().split("");
    var tempBoolean = false;
    digitsArray.forEach(function(digit) {
      if (digit === "1") {
        tempBoolean = true;
      };
    });
    return tempBoolean;
  };
  //checks whether number is divisible by three
  var setDivisibleByThree = function(num) {
    if (num % 3 === 0) {
      return true;
    } else {
      return false;
    };
  };
  // runs through beepBoopArray and shows user a modified list of numbers, beeps, and boops.
  var beepBoop = function(numArray) {
    var beepBoopArray = []

    numArray.forEach(function(num) {
      var containsZero = false;
      var containsOne = false;
      var divisibleByThree = false;

      containsZero = setContainsZero(num);
      containsOne = setContainsOne(num);
      divisibleByThree = setDivisibleByThree(num);

      console.log(containsZero + " " + containsOne + " " + divisibleByThree);

      beepBoopArray.push(setBeepBoopArray(num, containsZero, containsOne, divisibleByThree));

    });

    appendBeepBoopArray(beepBoopArray);
  };
  //adds an element to beepBoopArray
  var setBeepBoopArray = function(num, containsZero, containsOne, divisibleByThree) {

    if (divisibleByThree) {
      return "I'm sorry, Dave. I'm afraid I can't do that";
    } else {
      if (containsOne) {
        return "Boop!";
      } else {
        if (containsZero) {
          return "Beep!";
        } else {
            return num;
        };
      };
    };
  };
  //animates robot image
  var changeRobot = function(robotCount) {
    var showRobot1 = function() {
      $("#robot1").show();
      $("#robot2").hide();
      $("#robot3").hide();
    };
    var showRobot2 = function() {
      $("#robot1").hide();
      $("#robot2").show();
      $("#robot3").hide();
    };
    var showRobot3 = function() {
      $("#robot1").hide();
      $("#robot2").hide();
      $("#robot3").show();
    };

    var robot = (robotCount % 3) + 1;

    if (robot === 1) {showRobot1()};
    if (robot === 2) {showRobot2()};
    if (robot === 3) {showRobot3()};
  };
  //modifes DOM to show elements of beepBoopArray
  var appendBeepBoopArray = function(beepBoopArray) {
    var robotCount = 1;
    var function1 = function(iterator, beepBoopArray, robotCount) {
      $("#response").append(beepBoopArray[i] + ", ");
      changeRobot(robotCount);
      robotCount ++;
    };
    var i = 0;
    var howManyTimes = beepBoopArray.length;
    $("#response").fadeIn();
    function animate() {
      console.log(beepBoopArray[i]);
      $("#response").append(beepBoopArray[i] + ",    ");
      i++;
      changeRobot(robotCount);
      robotCount++;
      console.log(i);
      if (i < howManyTimes) {
        setTimeout( animate, 400);
      };
    };
    animate();

    // beepBoopArray.forEach(function(element) {
    //   setTimeout(function(robotCount) {
    //     $("#response").append(element + ", ");
    //     changeRobot(robotCount);
    //     robotCount ++;
    //   }, 500);
    // });
  };
  //clears text in response paragraph in DOM
  var reset = function() {
    $("#response").text("");
  };

  $("#userInput").submit(function(event) {

    reset();

    userInput = getUserInput();
    var numArray = setNumArray(userInput);
    console.log(numArray[0]);

    if (numArray[0] !== undefined) {
      beepBoop(numArray);
    };

    event.preventDefault();

    $("button").text("Resubmit");
  });
});
