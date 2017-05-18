//declaring all global variables first

numbers = [];
answers= [];
inputValue = [];
operator = [];

var addButton = document.getElementById('add');
var subtractButton = document.getElementById('subtract');
var multiplyButton = document.getElementById('multiply');
var divideButton = document.getElementById('divide');
var equalButton = document.getElementById('equal');

var operatorButton = document.getElementsByClassName('operators');

var clearButton = document.getElementsByClassName('clear')[0];
var percentButton = document.getElementById('percent');
var signChangeButton = document.getElementsByClassName('sign-change')[0];
var decimalButton = document.getElementById('decimal');

var addButtonClicked = false;
var subtractButtonClicked = false;
var multiplyButtonClicked = false;
var divideButtonClicked = false;

//var input = document.getElementsByTagName('input')[0]; //only one input tag
var screen = document.getElementById('screen');
//var answerScreen = document.getElementsByClassName('answerScreen')[0];

//display numbers on screen
var numberButton = document.getElementsByClassName('number');   // numbers 1-9
for (var i = 0; i<numberButton.length; i++) {
  numberButton[i].addEventListener('click', function() {
    var number = this.value * 1;  // value of the button pressed
    inputValue.push(number);
    screen.innerHTML = inputValue.join('')*1; // join values without commas
  })
}

// for (var i = 0; i< operatorButton.length; i++) {
  //operatorButton[i].addEventListener('click', function() {
    //numbers.push(Number(screen.innerHTML));
    //inputValue.length = 0;
    //console.log('operator buttons are working')
  //})
//}

addButton.addEventListener('click', function() {
  if (operator.length === 0) {        // if no operator button was pressed before
    numbers.push(Number(screen.innerHTML));   // store current value on screen to numbers array
    operator[0] = "addOperator";
  } else if (operator[0] === "addOperator") {
    operator.splice(0,1);
    operator[0] = 'addOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "subtractOperator") {
    operator.splice(0,1);
    operator[0] = 'addOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] - Number(screen.innerHTML);
      console.log("add button subtract is working");
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "multiplyOperator") {
    operator.splice(0,1);
    operator[0] = 'addOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "divideOperator") {
    operator.splice(0,1);
    operator[0] = 'addOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else {
    console.log('add button not working!')
  }
  screen.innerHTML = '';
  inputValue.length = 0;
})

subtractButton.addEventListener('click', function() {
  if (operator.length === 0) {        // if no operator button was pressed before
    numbers.push(Number(screen.innerHTML));   // store current value on screen to numbers array
    operator[0] = "subtractOperator";
    console.log('subtract button is working');
  } else if (operator[0] === "addOperator") {
    operator.splice(0,1);
    operator[0] = 'subtractOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "subtractOperator") {
    operator.splice(0,1);
    operator[0] = 'subtractOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "multiplyOperator") {
    operator.splice(0,1);
    operator[0] = 'subtractOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] * Number(screen.innerHTML);
      console.log(currentAnswer, "sub mult button is working!");
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] * Number(screen.innerHTML);
      console.log(currentAnswer, "sub mult button is working!");
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "divideOperator") {
    operator.splice(0,1);
    operator[0] = 'subtractOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else {
    console.log('subtract button not working!')
  }
  screen.innerHTML = '';
  inputValue.length = 0;
})

multiplyButton.addEventListener('click', function() {
  if (operator.length === 0) {        // if no operator button was pressed before
    numbers.push(Number(screen.innerHTML));   // store current value on screen to numbers array
    operator[0] = "multiplyOperator";
  } else if (operator[0] === "addOperator") {
    operator.splice(0,1);
    operator[0] = 'multiplyOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "subtractOperator") {
    operator.splice(0,1);
    operator[0] = 'multiplyOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "multiplyOperator") {
    operator.splice(0,1);
    operator[0] = 'multiplyOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "divideOperator") {
    operator.splice(0,1);
    operator[0] = 'multiplyOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else {
    console.log('multiply button not working!')
  }
  screen.innerHTML = '';
  inputValue.length = 0;
})

divideButton.addEventListener('click', function() {
  if (operator.length === 0) {        // if no operator button was pressed before
    numbers.push(Number(screen.innerHTML));   // store current value on screen to numbers array
    operator[0] = "divideOperator";
  } else if (operator[0] === "addOperator") {
    operator.splice(0,1);
    operator[0] = 'divideOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "subtractOperator") {
    operator.splice(0,1);
    operator[0] = 'divideOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "multiplyOperator") {
    operator.splice(0,1);
    operator[0] = 'divideOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else if (operator[0] === "divideOperator") {
    operator.splice(0,1);
    operator[0] = 'divideOperator';
    if (answers.length === 0) {
      var currentAnswer = numbers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    } else {
      var currentAnswer = answers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
    }
  } else {
    console.log('divide button not working!')
  }
  screen.innerHTML = '';
  inputValue.length = 0;
})

equalButton.addEventListener ('click', function() {
  if (operator[0] === "addOperator") {
    if (answers.length === 0) {
      var currentAnswer = numbers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
      console.log('equal add is working');
      screen.innerHTML = answers[0];
      numbers.length = 0;
      operator.length = 0;
    } else {
      var currentAnswer = answers[0] + Number(screen.innerHTML);
      answers[0] = currentAnswer;
      screen.innerHTML = answers[0];
      operator.length = 0;
    }
  } else if (operator[0] === "subtractOperator") {
    if (answers.length === 0) {
      var currentAnswer = numbers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
      screen.innerHTML = answers[0];
      operator.length = 0;
    } else {
      var currentAnswer = answers[0] - Number(screen.innerHTML);
      answers[0] = currentAnswer;
      screen.innerHTML = answers[0];
      operator.length = 0;
    }
  } else if (operator[0] === "multiplyOperator") {
    if (answers.length === 0) {
      var currentAnswer = numbers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
      screen.innerHTML = answers[0];
      operator.length = 0;
    } else {
      var currentAnswer = answers[0] * Number(screen.innerHTML);
      answers[0] = currentAnswer;
      screen.innerHTML = answers[0];
      operator.length = 0;
    }
  } else if (operator[0] === "divideOperator") {
    if (answers.length === 0) {
      var currentAnswer = numbers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
      screen.innerHTML = answers[0];
      operator.length = 0;
    } else {
      var currentAnswer = answers[0] / Number(screen.innerHTML);
      answers[0] = currentAnswer;
      screen.innerHTML = answers[0];
      operator.length = 0;
    }
  } else {
    console.log('equal button not working!')
  }
});

//ALL CLEAR BUTTON = clear everything
clearButton.addEventListener('click', function() {
  //input.value = '';
  answers.length = 0;
  numbers.length = 0;
  screen.innerHTML = '';
  inputValue.length = 0;
  operator.length = 0;
});

// Change value to percentage
percentButton.addEventListener('click', function() {
  var percentage = Number(screen.innerHTML) / 100;
  screen.innerHTML = percentage;
});

// Change the sign of the value
signChangeButton.addEventListener('click', function() {
  var changedValue = Number(screen.innerHTML) * -1;
  screen.innerHTML = changedValue;
});

//Add decimal
decimalButton.addEventListener('click', function() {
  inputValue.push(".");
  screen.innerHTML = inputValue.join('');
})
