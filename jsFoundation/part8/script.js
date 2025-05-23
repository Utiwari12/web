//alert("connected");
//example 1

// let hold = document.getElementById("changeTextButton");
// console.log(hold);

// document.getElementById("changeTextButton").
// addEventListener("click", ()=> {
//     console.log(this);
// });

document.getElementById("changeTextButton").
addEventListener("click", function () {
    //console.log(this);
    let paragraph = document.getElementById("myParagraph")
    //console.log(paragraph);
    paragraph.textContent = "The paragraph is changed";
})

//example 2

document.getElementById("highlightFirstCity").
addEventListener("click", function () {
    let citieslist = document.getElementById("citiesList")
    //console.log(citieslist);
    //console.log(citieslist.firstElementChild.classList);
    citieslist.firstElementChild.classList.add("highlight");
})

//example 3

document.getElementById("changeOrder").
addEventListener("click", 
function (){

   let coffeeType = document.getElementById("coffeeType");
   coffeeType.textContent = "Espresso";
   coffeeType.style.backgroundColor = "brown";
   coffeeType.style.padding = "5px";  

})

//example 4
document.getElementById("addNewItem").
addEventListener("click", function () {
    let newItem =document.createElement("li");
    newItem.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
})

//example 5
document.getElementById("removeLastTask").
addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    //taskList.firstElementChild.remove();
    taskList.lastElementChild.remove();
})

//example 6
document.getElementById("clickMeButton").
addEventListener("dbclick", function (){
    alert("You clicked the button");
});

//example 7
document.getElementById("teaList").
addEventListener("click", function(event){
    //console.log(event.target);
    if(event.target && event.target.matches(".teaItem")){
        alert("Selected tea: " + event.target.textContent);
    };

})

//example 8 Form handling
document.getElementById("feedbackForm").
addEventListener("submit", function(event){
    //alert("Thank you for your feedback!");
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`;
})

//example 9 DOM Content Loaded
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = 
    "DOM fully loaded";
});

//example 10 CSS Class Manupulation
document.getElementById("toggleHighlight").
addEventListener("click", function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})