const add = function(num1,num2) {

  return num1 + num2
	
};

const subtract = function(num1,num2) {

  return num1 - num2
	
};

const sum = function(arr) {
  
  let total = 0
  for(let i=0;i<arr.length;i++)
  {
    total += arr[i]
  }

  return total
	
};

const multiply = function(arr) {
  let product = 1

  for(let i=0;i<arr.length;i++)
  {
    product *= arr[i]
  }

  return product

};

const power = function(num,power) {
	 return num ** power
};

const factorial = function(num) {
  let factorial = 1
  if(num === 0)
  {
    return 1
  }
  else
  {
    for(i=1;i<=num;i++)
    {
      factorial *= i
    }
  }
  return factorial
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
