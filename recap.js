//var x = 12;
//x = 'Dixant'; //the beauty of JS as a weakly type language is that we don't have to explicitly state the type of value, unlike with strongly typed lanaguage e.g. int x = 12 (we need to state that the value is an "int" i.e. integer);

//console.log(`Value of x : ${x}`) //backtick+${} allows us to print the value of a  variable

//conditional statements
// let age = 19;
// if(age>18){console.log("You can vote!")} else {console.log("You cannot vote yet.")};



// let x = 12;
// let y = 3;
// console.log("Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ", + (x / y));
// console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`); //equivalent to the previous line


//FUNCTIONS
//function print_sum(a,b) {console.log(`a: ${a}`); console.log(`b: ${b}`); console.log(`a + b = ${a + b}`)};
//print_sum(2,3)

// function add(a,b) {return a + b};
// var sum = add(2,3);
// console.log(`Sum: ${sum}`);


// ///anonymous functions
// var anonFunction = function (m,n) {console.log("m + n = " + (m+n))};
// console.log(anonFunction);
// anonFunction(1,2);


//arrow functions
// var function_to_print_sum = (x, y) => {console.log("x + y = " + (x + y));};
// function_to_print_sum(4, 4);
// var function_to_print_sum = function (x, y) {console.log("x + y = " + (x + y));};  --> equivalent to the above
// function_to_print_sum(4,4)



//CALLBACK FUNCTION 
function add(a, b) {return a + b;};
function product(a, b) {return a * b;};
function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
};
  
print_after_operation(3, 4, add);
print_after_operation(3, 4, product);
print_after_operation(3, 4, (a, b) => {return a - b;});