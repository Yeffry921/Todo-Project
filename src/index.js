import { projectForm } from './projectForm';
import { taskForm } from './taskForm';

// PROJECT CONTROLLER
const projectController = (() => {
	let projects = [];
	// check for existing saved data
	const projectsJSON = localStorage.getItem('projects');
	if (projectsJSON !== null) {
		projects = JSON.parse(projectsJSON);
	}
	const Project = function(projectName) {
		this.projectName = projectName;
		this.todos = [];
		this.id = id;
	};
	const saveProject = (projects) => {
		localStorage.setItem('projects', JSON.stringify(projects));
	};
	const addItem = function(projectName) {
		const id = projects.length;
		const newProject = new Project(projectName, id);
		projects.push(newProject);
		saveProject(projects);
		return newProject;
	};
	return {
		addItem,
		projects,
		saveProject
	};
})();
// UI CONTROLLER
const UIController = (() => {
	const DOMStrings = {
		addBtn: '.add',
		form: '#project-form',
		projectFormInput: '.project-form-input',
		projects: '.project__list',
		projectHolder: '.project__holder',
		todosUl: '.todos',
		todosForm: '#task-form',
		todoDiv: '.todos',
		todosWrapper: '.todos-wrapper',
		flexContainer: '.flex-container',
		taskFormWrapper: '.task-form-wrapper',
		taskInput: '.task-input'
	};
	const getDOMStrings = () => {
		return DOMStrings;
	};
	const getInput = () => {
		return {
			formInput: document.querySelector(DOMStrings.projectFormInput).value
		};
	};
	const renderTodos = (project) => {
		const todosContainer = document.querySelector(DOMStrings.todosUl);
		todosContainer.innerHTML = '';
		if (project === undefined || project === '') {
			return;
		}
		project.todos.forEach((todo, index) => {
			todosContainer.innerHTML += `
				<div class="todo">
					<input type="checkbox" class="check-box" name="check" data-id=${index}>
					<li class="todo-item">${todo.todo}</li>
					<i class="fas fa-trash-alt deleteTodo" data-id=${index}></i>
				</div>
				`;
		});
	};
	const renderAddTaskForm = () => {
		return taskForm();
	};
	const renderProjectForm = () => {
		return projectForm();
	};
	const renderProjects = (project) => {
		const projectContainer = document.querySelector(DOMStrings.projectHolder);
		projectContainer.textContent = '';
		if (project === undefined) {
			return;
		}
		project.forEach((project, index) => {
			const div = document.createElement('div');
			const liElement = document.createElement('li');
			const deleteBtn = document.createElement('i');
			div.className = 'flex-div';
			deleteBtn.className = 'fas fa-trash-alt deleteProject';
			liElement.className = 'projectName';
			deleteBtn.dataset.projectId = index;
			liElement.dataset.projectId = index;
			liElement.textContent = project.projectName;
			div.appendChild(liElement);
			div.appendChild(deleteBtn);
			projectContainer.appendChild(div);
		});
	};
	const renderStartingPage = (projects, todos) => {
		document.querySelector(DOMStrings.taskFormWrapper).innerHTML = renderAddTaskForm();
		renderProjects(projects);
		renderTodos(todos);
	};

	const showProjectForm = () => {
		document.querySelector('.project-form-wrapper').innerHTML = renderProjectForm();
	};
	return {
		getDOMStrings,
		getInput,
		renderProjects,
		renderTodos,
		renderProjectForm,
		renderAddTaskForm,
		renderStartingPage,
		showProjectForm
	};
})();

// GLOBAL APP CONTROLLER
const controller = ((projectCtrl, UICtrl) => {
	const selectors = UICtrl.getDOMStrings();
	let currentProject;

	const init = () => {
		UICtrl.renderStartingPage(projectCtrl.projects, currentProject);
		loadEventListeners();
	};

	const eventEmitterHandler = (e) => {
		// WHEN THE PROJECT FORM IS SUBMITTED
		if (e.target.classList.contains('addProjectBtn')) {
			e.preventDefault();
			ctrlAddProject();
		}
		// WHEN A PROJECT IS CLICKED
		if (e.target.classList.contains('projectName')) {
			ctrlRenderTodos(e);

			// IF IT DOESNT === NULL THERE IS ALREADY AN ACTIVE PROJECT SO WE REMOVE THE PROJECT
			if (document.querySelector('.project__holder li.active') !== null) {
				document.querySelector('.project__holder li.active').classList.remove('active');
			}
			// WE SET THE CLICKED PROJECT AS THE ACTIVE
			e.target.classList.toggle('active');
		}
		// WHEN A TASK IS ADDED
		if (e.target.classList.contains('addTask')) {
			e.preventDefault();
			ctrlAddTodos();
		}
		// WHEN DELETE TODO IS CLICKED
		if (e.target.classList.contains('deleteTodo')) {
			ctrlDeleteTodos(e);
		}
		// WHEN ADD PROJECT IS CLICKED
		if (e.target.classList.contains('add')) {
			UICtrl.showProjectForm();
		}
		// WHEN A TODO IS CHECKED
		if (e.target.classList.contains('check-box')) {
		}
		// WHEN PROJECT DELETE IS CLICKED
		if (e.target.classList.contains('deleteProject')) {
			ctrlDeleteProject(e);
		}
	};

	const ctrlRenderTodos = (e) => {
		const projectID = e.target.dataset.projectId;
		currentProject = projectCtrl.projects[projectID];
		UICtrl.renderTodos(currentProject);
	};
	const ctrlAddTodos = () => {
		if (currentProject === undefined) {
			return;
		}
		const taskInputValue = document.querySelector(selectors.taskInput);
		if (taskInputValue.value.length) {
			currentProject.todos.push({
				todo: taskInputValue.value,
				completed: false
			});
			projectCtrl.saveProject(projectCtrl.projects);
			UICtrl.renderTodos(currentProject);
			taskInputValue.value = '';
		}
		
	};
	const ctrlDeleteTodos = (e) => {
		const todoIndex = parseInt(e.target.dataset.id);
		currentProject.todos.splice(todoIndex, 1);
		UICtrl.renderTodos(currentProject);
		projectCtrl.saveProject(projectCtrl.projects);
	};
	const ctrlDeleteProject = (e) => {
		const projectIndex = parseInt(e.target.dataset.projectId);
		projectCtrl.projects.splice(projectIndex, 1);
		projectCtrl.saveProject(projectCtrl.projects);
		currentProject = '';
		UICtrl.renderProjects(projectCtrl.projects);
		UICtrl.renderTodos(currentProject);
	};
	const ctrlAddProject = () => {
		// 1- Get project input
		const projectInput = UICtrl.getInput().formInput;
		// 2- Verify its not empty and add it to the projects
		if (projectInput.length) {
			projectCtrl.addItem(projectInput);
			document.querySelector('.project-form-wrapper').innerHTML = '';
		}
		// 3- Render the project
		UICtrl.renderProjects(projectCtrl.projects);
		UICtrl.renderTodos(currentProject);
	};
	const loadEventListeners = () => {
		document.querySelector(selectors.flexContainer).addEventListener('click', eventEmitterHandler);
	};
	return {
		init
	};
})(projectController, UIController);

controller.init();
