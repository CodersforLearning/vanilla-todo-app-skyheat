function addTask() {
  var taskText = document.getElementById("newTask").value;
  if (taskText) {
    var li = document.createElement("li");

    var taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    li.appendChild(taskContent);

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteButton");
    deleteBtn.onclick = function (event) {
      event.stopPropagation();
      deleteTask(this);
    };
    li.appendChild(deleteBtn);

    li.onclick = function () {
      toggleComplete(this);
    };

    document.getElementById("taskList").appendChild(li);
    document.getElementById("newTask").value = "";
  }
}

function toggleComplete(li) {
  li.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}
