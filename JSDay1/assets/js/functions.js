
// FUNCTIONS in JS

console.log("peter");

//ARROW FUNCTION => NamendFunction
// CLEAN CODE PRINCIPLES => descriptive function naming!


// DRY - don´t repeat yourself
const printNamePeterInTheConsole = () => {
    console.log("Peter from function");

};

const printNameMaxInTheConsole =()=>{
    console.log("Max");
}

//solution to avoid DRY
const printNameInConsole=(name)=>{

    console.log(name);
}

const addTwoNumber=(num1, num2)=>{
    console.log("result: ",num1 + num2);
    //return a new value
    const result = num1 + num2
    return result

}

const newResult = addTwoNumber(32,5) // global variable
console.log("new Result", newResult)

const devideByTwo=(number)=>{
    console.log("devided ",number / 2)
}

devideByTwo(newResult)
//execute the function
printNamePeterInTheConsole();
printNameMaxInTheConsole();
printNameInConsole({title: "peter", age: 44});
addTwoNumber(33, 44)




