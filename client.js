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

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function employeeBonuses(Employee){
  let position = employeePosition(Employee);
  let bonusPercentage = percentCalculator(position);
  
  let employeeOutput = {
    name: employees[position].name,
    bonusPercentage: bonusPercentage,
    totalCompensation: '',
    totalBonus: ''
  }
  return employeeOutput
}

function employeePosition(Employee){
  for (let i = 0; i < employees.length; i++) {
    if (Employee === employees[i].name){
      return i
    }//end if
  }//end for
}

function percentCalculator(input){
  
}

console.log(employeeBonuses('Jem'));

//employeeBonuses(Mayella)

/*

if(Employee.ratingreview < 2){
  
}//end if rating lower than 2

if(Employee.ratingreview === 3){

}//end if rating equal 3

if(Employee.ratingreview === 4){

}//end if rating equal 4

if(Employee.ratingreview === 5){

}//end if rating equal 5

if(employeeNumber.length < 5){

}//end if employeeId is 4 digits they have been there 15 years or longer

if()
