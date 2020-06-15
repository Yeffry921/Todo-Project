/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm */ \"./src/projectForm.js\");\n/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm */ \"./src/taskForm.js\");\n\r\n\r\n\r\n// PROJECT CONTROLLER\r\nconst projectController = (() => {\r\n\tlet projects = [];\r\n\t// check for existing saved data\r\n\tconst projectsJSON = localStorage.getItem('projects');\r\n\tif (projectsJSON !== null) {\r\n\t\tprojects = JSON.parse(projectsJSON);\r\n\t}\r\n\tconst Project = function(projectName, id) {\r\n\t\tthis.projectName = projectName;\r\n\t\tthis.todos = [];\r\n\t\tthis.id = id;\r\n\t};\r\n\tconst saveProject = (projects) => {\r\n\t\tlocalStorage.setItem('projects', JSON.stringify(projects));\r\n\t};\r\n\tconst addItem = function(projectName, id) {\r\n\t\tid = projects.length;\r\n\t\tconst newProject = new Project(projectName, id);\r\n\t\tprojects.push(newProject);\r\n\t\tsaveProject(projects);\r\n\t\treturn newProject;\r\n\t};\r\n\treturn {\r\n\t\taddItem,\r\n\t\tprojects,\r\n\t\tsaveProject\r\n\t};\r\n})();\r\n// UI CONTROLLER\r\nconst UIController = (() => {\r\n\tconst DOMStrings = {\r\n\t\taddBtn: '.add',\r\n\t\tform: '#project-form',\r\n\t\tprojectFormInput: '.project-form-input',\r\n\t\tprojects: '.project__list',\r\n\t\tprojectHolder: '.project__holder',\r\n\t\ttodosUl: '.todos',\r\n\t\ttodosForm: '#task-form',\r\n\t\ttodoDiv: '.todos',\r\n\t\ttodosWrapper: '.todos-wrapper',\r\n\t\tflexContainer: '.flex-container',\r\n\t\ttaskFormWrapper: '.task-form-wrapper',\r\n\t\ttaskInput: '.task-input'\r\n\t};\r\n\tconst getDOMStrings = () => {\r\n\t\treturn DOMStrings;\r\n\t};\r\n\tconst getInput = () => {\r\n\t\treturn {\r\n\t\t\tformInput: document.querySelector(DOMStrings.projectFormInput).value\r\n\t\t};\r\n\t};\r\n\tconst renderTodos = (project) => {\r\n\t\tconst todosContainer = document.querySelector(DOMStrings.todosUl);\r\n\t\ttodosContainer.innerHTML = '';\r\n\t\tif (project === undefined || project === '') {\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tproject.todos.forEach((todo, index) => {\r\n\t\t\ttodosContainer.innerHTML += `\r\n\t\t\t\t<div class=\"todo\">\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"check-box\" name=\"check\" data-id=${index}>\r\n\t\t\t\t\t<li class=\"todo-item\">${todo.todo}</li>\r\n\t\t\t\t\t<i class=\"fas fa-trash-alt deleteTodo\" data-id=${index}></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t`;\r\n\t\t});\r\n\t};\r\n\tconst renderAddTaskForm = () => {\r\n\t\treturn Object(_taskForm__WEBPACK_IMPORTED_MODULE_1__[\"taskForm\"])();\r\n\t};\r\n\tconst renderProjectForm = () => {\r\n\t\treturn Object(_projectForm__WEBPACK_IMPORTED_MODULE_0__[\"projectForm\"])();\r\n\t};\r\n\tconst renderProjects = (project) => {\r\n\t\tconst projectContainer = document.querySelector(DOMStrings.projectHolder);\r\n\t\tprojectContainer.textContent = '';\r\n\t\tif (project === undefined) {\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tproject.forEach((project, index) => {\r\n\t\t\tconst div = document.createElement('div');\r\n\t\t\tconst liElement = document.createElement('li');\r\n\t\t\tconst deleteBtn = document.createElement('i');\r\n\t\t\tdiv.className = 'flex-div';\r\n\t\t\tdeleteBtn.className = 'fas fa-trash-alt deleteProject';\r\n\t\t\tliElement.className = 'projectName';\r\n\t\t\tdeleteBtn.dataset.projectId = index;\r\n\t\t\tliElement.dataset.projectId = index;\r\n\t\t\tliElement.textContent = project.projectName;\r\n\t\t\tdiv.appendChild(liElement);\r\n\t\t\tdiv.appendChild(deleteBtn);\r\n\t\t\tprojectContainer.appendChild(div);\r\n\t\t});\r\n\t};\r\n\tconst renderStartingPage = (projects, todos) => {\r\n\t\tdocument.querySelector(DOMStrings.taskFormWrapper).innerHTML = renderAddTaskForm();\r\n\t\trenderProjects(projects);\r\n\t\trenderTodos(todos);\r\n\t};\r\n\r\n\tconst showProjectForm = () => {\r\n\t\tdocument.querySelector('.project-form-wrapper').innerHTML = renderProjectForm();\r\n\t};\r\n\treturn {\r\n\t\tgetDOMStrings,\r\n\t\tgetInput,\r\n\t\trenderProjects,\r\n\t\trenderTodos,\r\n\t\trenderProjectForm,\r\n\t\trenderAddTaskForm,\r\n\t\trenderStartingPage,\r\n\t\tshowProjectForm\r\n\t};\r\n})();\r\n\r\n// GLOBAL APP CONTROLLER\r\nconst controller = ((projectCtrl, UICtrl) => {\r\n\tconst selectors = UICtrl.getDOMStrings();\r\n\t// THIS IS ONE OF MY CONCERNS WITH MY CODE ATM\r\n\t// I NEED TO FIND A BETTER WAY TO KEEP TRACK OF THE CURRENT PROJECT THAT'S BEING CLICKED\r\n\tlet currentProject;\r\n\tconst init = () => {\r\n\t\tUICtrl.renderStartingPage(projectCtrl.projects, currentProject);\r\n\t\tloadEventListeners();\r\n\t};\r\n\r\n\tconst eventEmitterHandler = (e) => {\r\n\t\t// WHEN THE PROJECT FORM IS SUBMITTED\r\n\t\tif (e.target.classList.contains('addProjectBtn')) {\r\n\t\t\te.preventDefault();\r\n\t\t\tctrlAddProject();\r\n\t\t}\r\n\t\t// WHEN A PROJECT IS CLICKED\r\n\t\tif (e.target.classList.contains('projectName')) {\r\n\t\t\tctrlRenderTodos(e);\r\n\r\n\t\t\t// IF IT DOESNT === NULL THERE IS ALREADY AN ACTIVE PROJECT SO WE REMOVE THE PROJECT\r\n\t\t\tif (document.querySelector('.project__holder li.active') !== null) {\r\n\t\t\t\tdocument.querySelector('.project__holder li.active').classList.remove('active');\r\n\t\t\t}\r\n\t\t\t// WE SET THE CLICKED PROJECT AS THE ACTIVE\r\n\t\t\te.target.classList.toggle('active');\r\n\t\t}\r\n\t\t// WHEN A TASK IS ADDED\r\n\t\tif (e.target.classList.contains('addTask')) {\r\n\t\t\te.preventDefault();\r\n\t\t\tctrlAddTodos();\r\n\t\t}\r\n\t\t// WHEN DELETE TODO IS CLICKED\r\n\t\tif (e.target.classList.contains('deleteTodo')) {\r\n\t\t\tctrlDeleteTodos(e);\r\n\t\t}\r\n\t\t// WHEN ADD PROJECT IS CLICKED\r\n\t\tif (e.target.classList.contains('add')) {\r\n\t\t\tUICtrl.showProjectForm();\r\n\t\t}\r\n\t\t// WHEN A TODO IS CHECKED\r\n\t\tif (e.target.classList.contains('check-box')) {\r\n\t\t}\r\n\t\t// WHEN PROJECT DELETE IS CLICKED\r\n\t\tif (e.target.classList.contains('deleteProject')) {\r\n\t\t\tctrlDeleteProject(e);\r\n\t\t}\r\n\t};\r\n\r\n\tconst ctrlRenderTodos = (e) => {\r\n\t\tconst projectID = e.target.dataset.projectId;\r\n\t\tcurrentProject = projectCtrl.projects[projectID];\r\n\t\tUICtrl.renderTodos(currentProject);\r\n\t};\r\n\tconst ctrlAddTodos = () => {\r\n\t\tif (currentProject === undefined) {\r\n\t\t\treturn;\r\n\t\t}\r\n\t\tconst taskInputValue = document.querySelector(selectors.taskInput);\r\n\t\tif (taskInputValue.value.length) {\r\n\t\t\tcurrentProject.todos.push({\r\n\t\t\t\ttodo: taskInputValue.value,\r\n\t\t\t\tcompleted: false\r\n\t\t\t});\r\n\t\t\tprojectCtrl.saveProject(projectCtrl.projects);\r\n\t\t\tUICtrl.renderTodos(currentProject);\r\n\t\t\ttaskInputValue.value = '';\r\n\t\t}\r\n\t\t\r\n\t};\r\n\tconst ctrlDeleteTodos = (e) => {\r\n\t\tconsole.log('wat the fuck is going on');\r\n\t\tconst todoIndex = parseInt(e.target.dataset.id);\r\n\t\tcurrentProject.todos.splice(todoIndex, 1);\r\n\t\tUICtrl.renderTodos(currentProject);\r\n\t\tprojectCtrl.saveProject(projectCtrl.projects);\r\n\t};\r\n\tconst ctrlDeleteProject = (e) => {\r\n\t\tconst projectIndex = parseInt(e.target.dataset.projectId);\r\n\t\tprojectCtrl.projects.splice(projectIndex, 1);\r\n\t\tprojectCtrl.saveProject(projectCtrl.projects);\r\n\t\tcurrentProject = '';\r\n\t\tUICtrl.renderProjects(projectCtrl.projects);\r\n\t\tUICtrl.renderTodos(currentProject);\r\n\t};\r\n\tconst ctrlAddProject = () => {\r\n\t\tconst projectInput = UICtrl.getInput().formInput;\r\n\t\tif (projectInput.length) {\r\n\t\t\tprojectCtrl.addItem(projectInput);\r\n\t\t\tdocument.querySelector('.project-form-wrapper').innerHTML = '';\r\n\t\t}\r\n\t\t// WHEN WE MAKE A NEW PROJECT, SELECT THAT PROJECT AND MAKE IT THE CURRENT ONE\r\n\t\t// render the last one on the index, its the one we create anyway\r\n\t\tUICtrl.renderProjects(projectCtrl.projects);\r\n\t\tUICtrl.renderTodos(currentProject);\r\n\t};\r\n\tconst loadEventListeners = () => {\r\n\t\tdocument.querySelector(selectors.flexContainer).addEventListener('click', eventEmitterHandler);\r\n\t};\r\n\treturn {\r\n\t\tinit\r\n\t};\r\n})(projectController, UIController);\r\n\r\ncontroller.init();\r\n\r\n// Things left to do\r\n\r\n// figure out how to add the active tab functionality\r\n// ask for a code review\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/*! exports provided: projectForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectForm\", function() { return projectForm; });\nconst projectForm = () => {\r\n    return `\r\n        <form action=\"\" id=\"project-form\">\r\n            <header>\r\n                <h1>Add project</h1>\r\n            </header>\r\n            <section class=\"form-control\">\r\n                <label for=\"projectName\">Enter your project name</label>\r\n                <input type=\"text\" name=\"projectName\" class=\"project-form-input\">\r\n            </section>\r\n            <section class=\"form-control\">\r\n                <button type=\"submit\" class=\"addProjectBtn\">Add Project</button>\r\n            </section>\r\n        </form>\r\n        `;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/projectForm.js?");

/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/*! exports provided: taskForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskForm\", function() { return taskForm; });\nconst taskForm = () => {\r\n    return `\r\n        <form id=\"task-form\">\r\n            <header class=\"project-title\"></header>\r\n            <input type=\"text\" class=\"task-input\" name=\"taskInput\">\r\n            <button class=\"addTask\">Add Task</button>\r\n        </form>\r\n        `;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/taskForm.js?");

/***/ })

/******/ });