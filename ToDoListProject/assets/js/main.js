// get relevant elements
const inputField = document.getElementById("itemInput");
const addButton = document.getElementById("addButton")
const anchorForList = document.getElementById("anchorForList")

//global variable => access from everywhere
let myNewToDo = "";
let myListOfToDos = [];

function handleChange(event) {

    //lcoal variable
    //let localValue = event.target.value
    myNewToDo = event.target.value;
    event.target.value = "";

}


function createNewItemElement(listArray) {

    anchorForList.innerHTML = "";

    listArray.map((item) => {
        console.log("item value", item)

        const div = document.createElement("div");
        const textDiv = document.createElement("div");
        const p = document.createElement("p");

        const ButtonDiv = document.createElement("div");
        const deleteButton = document.createElement("div")
        const doneButton = document.createElement("div")

        ButtonDiv.append(deleteButton, doneButton)


        ButtonDiv.className = "toDoElement";
        deleteButton.classList.add("itemButton", "buttonRed");
        doneButton.classList.add("itemButton", "buttonGreen");

        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", handleDelete);
        deleteButton.id=item;

        doneButton.innerText = "D"
        div.className = "toDoItem";
        textDiv.className = "toDoElement";
        p.className = "itemTitle";

        div.append(textDiv, ButtonDiv)
        textDiv.append(p)

        p.innerText = item;

        anchorForList.append(div);



    })

}

function handleAddToDo() {

    if (myNewToDo.length > 2) {
        myListOfToDos.push(myNewToDo); //add new to do to list
        createNewItemElement(myListOfToDos);
        myNewToDo = "";
    } else {
        console.log("item title needs to have min 3 characters");
    }

}


function handleDelete(event){
    const itemToDelete = event.target.id;

    const myUpdatedList = myListOfToDos.filter((item)=> item !== itemToDelete )
   
    myListOfToDos = myUpdatedList
    createNewItemElement(myUpdatedList);
    

}













inputField.addEventListener("change", handleChange);
addButton.addEventListener("click", handleAddToDo)