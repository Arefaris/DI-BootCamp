const tasks = [];
const form = document.forms[0]
const addBtn = form[1]
const input = form[0]

const listTasks = document.querySelector(".list-tasks")

addBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    addTask()
})

function addTask(){
    
    if (input.value){

        let task = document.createElement("div")
        let icon = document.createElement("i")

        let label = document.createElement("label")
        let hr = document.createElement("hr")
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
   
        checkBox.name = input.value
        label.for = input.value

        
        icon.classList.add("fa-solid", "fa-xmark")
        task.classList.add("task")
        label.textContent = input.value

        task.appendChild(icon)
        task.appendChild(checkBox)
        task.appendChild(label)

        tasks.push(tasks)
        
        listTasks.appendChild(task)
        listTasks.appendChild(hr)
    }

    
}