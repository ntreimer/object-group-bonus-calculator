$(document).ready(readyNow);

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
let newEmployee ={};

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function readyNow(){
  $('#startProgram').on('click', grabEmployee);
  $('#startProgram').on('click', printInfo);
}

function printInfo(){
  let outputlEl = $('#empList');
  outputlEl.empty();
  outputlEl.append(`<u>Employee:</u> ` + newEmployee.name + ` ` 
  + `<u>Bonus Percentage:</u> ` + newEmployee.bonusPercentage + ' ' 
  + `<u>Bonus Total:</u> ` + newEmployee.totalBonus + ' ' 
  + `<u>Total Compensation:</u> ` + newEmployee.totalCompensation)
}

function grabEmployee(){
  let output = employeeBonuses( $('#empID').val() );
  $('#empID').val('');
  console.log(output);
  return output;
}

function employeeBonuses(Employee){
  let position = employeePosition(Employee);
  let employeeOutput = employeeBonus(position);
  return employeeOutput;
}

function employeePosition(Employee){
  for (let i = 0; i < employees.length; i++) {
    if (Employee === employees[i].name){
      return i
    }//end if
  }//end for
}

function employeeBonus(employee){
  if(employees[employee].reviewRating < 2){
    newEmployee.name = employees[employee].name;
    newEmployee.bonusPercentage= 0;
    newEmployee.totalBonus = 0;
    newEmployee.totalCompensation = Number(employees[employee].annualSalary) + Number(newEmployee.totalBonus);
    }
  
    else if(employees[employee].reviewRating === 3){
    newEmployee.name = employees[employee].name;
    newEmployee.bonusPercentage = 4;
    newEmployee.totalBonus= Math.round(employees[employee].annualSalary * .04);
    newEmployee.totalCompensation= Number(employees[employee].annualSalary) + Number(newEmployee.totalBonus);
    }
    
    else if(employees[employee].reviewRating ===4) {
    newEmployee.name = employees[employee].name;
    newEmployee.bonusPercentage= 6;
    newEmployee.totalBonus = Math.round(employees[employee].annualSalary * .06);
    newEmployee.totalCompensation = Number(employees[employee].annualSalary) + Number(newEmployee.totalBonus);
    }
    
    else if (employees[employee].reviewRating === 5){
    newEmployee.name= employees[employee].name;
    newEmployee.bonusPercentage= 10;
    newEmployee.totalBonus= Math.round(employees[employee].annualSalary * .1);
    newEmployee.totalCompensation = Number(employees[employee].annualSalary) + Number(newEmployee.totalBonus);
  }
  if(employees[employee].employeeNumber.length === 4){
    newEmployee.name = employees[employee].name;
    newEmployee.bonusPercentage = Number(newEmployee.bonusPercentage) + 5;
    newEmployee.totalBonus = Math.round(Number(employees[employee].annualSalary) * (Number(newEmployee.bonusPercentage)/100));
    newEmployee.totalCompensation = Number(employees[employee].annualSalary) + Number(newEmployee.totalBonus);
  }
  if(employees[employee].annualSalary > 65000){
    newEmployee.name= employees[employee].name;
    newEmployee.bonusPercentage= Number(newEmployee.bonusPercentage) - 1;
    newEmployee.totalBonus= Math.round(Number(employees[employee].annualSalary) * (Number(newEmployee.bonusPercentage)/ 100));
    newEmployee.totalCompensation= Number(newEmployee.totalBonus) + Number(employees[employee].annualSalary);
  }
  if(newEmployee.bonusPercentage > 13){
    newEmployee.name = employees[employee].name;
    newEmployee.bonusPercentage= 13;
    newEmployee.totalBonus= Math.round(Number(employees[employee].annualSalary) * (Number(newEmployee.bonusPercentage/ 100))),
    newEmployee.totalCompensation= Number(newEmployee.totalBonus) + Number(employees[employee].annualSalary);
  }
  if(newEmployee.bonusPercentage < 0){
    newEmployee.name= employees[employee].name;
    newEmployee.bonusPercentage= 0,
    newEmployee.totalBonus= Math.round(Number(employees[employee].annualSalary) * (Number(newEmployee.bonusPercentage/ 100)));
    newEmployee.totalCompensation = Number(newEmployee.totalBonus) + Number(employees[employee].annualSalary);
  }
    return newEmployee;
      }
  
console.log(employeeBonuses('Jem'));

console.log(employeeBonuses('Scout'));