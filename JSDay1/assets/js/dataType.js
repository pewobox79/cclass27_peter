// DATA TYPES

// Declare Constant and Variables

const myString = "this is a String type";
const myNumber = 44;
const myBoolean = true; // boolean ether true OR false

const myArray = ["Bananas", "Apples", "Oranges"];
const myCarObject = {
    brand: "BMW", // property of key brand
    color: "red",
    fuel: "gasoline"
}


const combinedArray = ["Bananas", 44, true, { name: "Peter" }]

const myCarCollection = [
    {
        brand: "BMW",
        color: "red",
        seats:{
            material: "leather",
            color: "gray"
        }
    },
    {
        brand: "Benz",
        color: "green",
        seats: {
            material: "plastic",
            color: "white"
        }
    },
    {
        brand: "Ford",
        color: "black",
        seats: {
            material: "silk",
            color: "yellow"
        }
    }
]

const bookCollection=[
    {
        title: "Harry Potter",
        character: "Harry",
    },
    {
        title: "no time to die",
        character: "james bond"
    }
]

const petersCollectionOverview=[myCarCollection, bookCollection];
console.log("collection",petersCollectionOverview)

console.log(" matrial: ", myCarCollection[0].seats.material) // dot-notation to access object properties


console.log("car color", myCarObject.color)

console.log("complete array", myArray)
console.log("Array index 1 only: ", myArray[1])
//console.error(myString)
//console.warn(myString)