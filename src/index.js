document.addEventListener("DOMContentLoaded", () => {
  // your code here

//This is the primary Event Listener that listens to the submit button on the entire form.
document.querySelector("form").addEventListener('submit', (e) => {
  e.preventDefault()
  addNewTask(e.target["new-task-description"].value) //at this point in the function, it call upon a global function to add listed element
  e.target.reset() //resets form after new task has been input
})


//function created to add listed element
function addNewTask (task) {
  let li = document.createElement("li")
  let button = document.createElement("button")
  button.addEventListener("click",() => button.parentElement.remove())
  button.innerHTML = " X " 
   //now that Li and the Button have been creatted. Append the button to LI.
  li.textContent = task
  li.append(button)

  document.querySelector("#tasks").append(li)
}





});
