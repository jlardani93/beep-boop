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
  //modifes DOM to show elements of beepBoopArray
  var appendBeepBoopArray = function(beepBoopArray) {
    beepBoopArray.forEach(function(element) {
      $("#response").append(element + ", ");
    });
  };
  //clears text in response paragraph in DOM
  var reset = function() {
    $("#response").text("");
  };

  $("#userInput").submit(function(event) {

    reset();

    userInput = getUserInput();
    var numArray = setNumArray(userInput);

    beepBoop(numArray);

    event.preventDefault();
  });

});

//1. collect userInput
//2. function: create array with numbers up to that point
//3. function: determine if number contains 0
//4. function: determine if number contains 1
//5. function: determine if number divisible by 3
//6. function: if divisible by 3 --> else ... if contains 1 --> else ... if contains 0 --> else ... return original number.
//7. function: reset so that user can resubmit
