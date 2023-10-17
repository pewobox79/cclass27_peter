// DOM Manipulation

// Get element and change value!
const headerTitle = document.getElementById("title");
console.log(headerTitle);
headerTitle.innerHTML = "My Personal JS Session";



// create Element and provide to index.html
const divSection = document.getElementById("divSection");
const div = document.createElement("div");
div.innerHTML = "<strong>Hello Div</strong>";
// add context div to divSection
divSection.append(div)
console.log(div);










//dynamic appending element to DOM
// 1. Step: get all needed elements to JS file
const addButton = document.getElementById("addButton");
const listOfElements = document.getElementById("listOfElements");

// 2. step create function for add event

const addElement = () => {
    const div = document.createElement("div");
    const randomNumber = Math.floor(Math.random() * 100);
    div.innerText = "new Element: " + randomNumber;
    listOfElements.append(div);
}

// 3. step: add event listener to button
addButton.addEventListener("click", addElement);


