// ! ! !
// Three Bugs


var objectAtticus = {
  name: 'Atticus',
  identification: '2405',
  salary:'47000',
  rating:3
}

var objectJem = {
  name: 'Jem',
  identification: '62347',
  salary: '63500',
  rating:4
}

var objectBoo = {
  name: 'Boo',
  identification: '11435',
  salary: '54000',
  rating:3
}

var objectScout = {
  name: 'Scout',
  identification: '6243',
  salary: '74750',
  rating: 5
}

var array = [objectAtticus, objectJem, objectBoo, objectScout];
console.log(array);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
  
}

function calculateSTI(objectMockingbird){
  var newObj = {};

  newObj.name= objectMockingbird.name;


  var employeeNumber = objectMockingbird.identification;
  var baseSalary = objectMockingbird.salary;
  var reviewScore = objectMockingbird.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObj.percent = bonus;
  newObj.totalSalary = parseInt(baseSalary * (1.0 + bonus));
  newObj.bonusAmount = parseInt(baseSalary * bonus);
  console.log(newObj.name + " " + newObj.percent + " " + newObj.totalSalary + " " + newObj.bonusAmount);
  return newObj;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}