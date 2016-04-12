
// select / find all buttons, store them in variable buttons
var buttons = document.querySelectorAll('button');

// calculatorState variable tracks state of inputs number 1, operator, number 2
var calculatorState = {
  num1: null,
  num2: null,
  opp: null,
  negative: null
};

// add a variable for display on the calculator
var display = document.querySelector('#answer');

// function to process button clicks
function processBtn (event) {

  // event.target gives you the button that was clicked
  // <button data-type="num">7</button>
  var button = event.target;

  // gives you the data type of each button element
  var type = button.dataset.type;

  // if statements direct each type of button to execute a specific function
  if (type === 'num') return processNum(button);
  if (type === 'opp') return processOpp(button);
  if (type === 'negative') return processNegative(button);
  if (type === 'equal') return processEqual(button);
  if (type === 'clear') return processClear(button);

}

// Function for Numbers
function processNum (button) {
  if ( calculatorState.num1 === null ) {
    display.innerHTML += button.innerHTML;
  } else if ( calculatorState.num2 === null) {
    display.innerHTML += button.innerHTML;
  }
}

// Function for Opperators
function processOpp (button) {
  if ( calculatorState.num1 === null ) {
    display.innerHTML += button.innerHTML;
  } else if ( calculatorState.opp === null ) {
    display.innerHTML += button.innerHTML;
    calculatorState.opp = button.innerHTML;
  }
}

// Function for Opperators
function processNegative (button) {
  if ( calculatorState.opp === null ) {
    display.innerHTML += button.innerHTML;
    calculatorState.opp = button.innerHTML;
    console.log('processingnegative');
  }
}


// Function for Equal
function processEqual (button) {
  display.innerHTML = eval( display.innerHTML );
}

// Function for Clear
function processClear (button) {
  display.innerHTML = '';
  calculatorState = {
    num1: null,
    num2: null,
    opp: null,
    negative: null
  };
}


// for loop over buttons
for ( var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', processBtn);
}
