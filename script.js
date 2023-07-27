function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    // exites function if blank. i.e an item should be added if the textbox is 
    //blank.

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.classList.add("innerClassForEachItemContainingTheText")
    
    const CreateInputElementAndItsType = document.createElement("input");
    CreateInputElementAndItsType.type = checkbox;

    listItem.innerText = taskText;

    CreateInputElementAndItsType.addEventListener("change", function () {
        listItem.querySelector(".taskText").classList.toggle("done", this.checked);
      });

    
    // this class is within each item we add to the list.
    // that is, I can style within each item area to properly layout
    // the delete-icons text.


    taskList.appendChild(listItem);
    taskInput.value = "";

}

document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});