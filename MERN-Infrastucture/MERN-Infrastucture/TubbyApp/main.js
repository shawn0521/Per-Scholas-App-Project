window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el= document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please enter a task.");
            return;
        }

        const task_el = document.createdElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createdElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        const task_input_el = document.createdElement("input");
        task_input_el.classlist.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setattribute("readonly", "readonly");

        task_content_el.appendChild(task_content_el);
        
        list_el.appendChild(task_el);
    })
})