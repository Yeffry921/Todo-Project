const taskForm = () => {
    return `
        <form id="task-form">
            <header class="project-title"></header>
            <input type="text" class="task-input" name="taskInput">
            <button class="addTask">Add Task</button>
        </form>
        `;
};

export {taskForm}