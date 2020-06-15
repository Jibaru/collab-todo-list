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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/public/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/js/app.js":
/*!******************************!*\
  !*** ./src/public/js/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/todo.js */ \"./src/public/js/model/todo.js\");\n/* harmony import */ var _model_user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/user.js */ \"./src/public/js/model/user.js\");\n/* harmony import */ var _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/user_controller.js */ \"./src/public/js/controller/user_controller.js\");\n/* harmony import */ var _controller_todo_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/todo_controller.js */ \"./src/public/js/controller/todo_controller.js\");\n/* harmony import */ var _components_user_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user_list.js */ \"./src/public/js/components/user_list.js\");\n/* harmony import */ var _components_todo_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo_list.js */ \"./src/public/js/components/todo_list.js\");\n/* harmony import */ var _utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/form_todo.js */ \"./src/public/js/utils/form_todo.js\");\n/* harmony import */ var _utils_modal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/modal.js */ \"./src/public/js/utils/modal.js\");\n\n\n\n\n\n\n\n\nvar params = new URLSearchParams(window.location.search);\n\nif (!params.has('user') && !params.has('workgroup')) {\n  window.location = 'index.html';\n  throw new Error('User and workgroup is empty');\n} // Create new instance for entered user\n\n\nvar user = new _model_user_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](params.get('user'), params.get('workgroup')); // Insert user on localStorage if not exists \n\n_controller_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"createUser\"](user); // Get All Workgroup Users and Todos\n\nvar users = _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"getUsers\"](user.workgroup);\nvar todos = _controller_todo_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"getTodos\"](user.workgroup); // Set the user and workgroup on home\n\ndocument.getElementById('user-logged').textContent = user.name;\ndocument.querySelector('.workgroup').textContent = user.workgroup; // Draw all users, todos\n\n_components_user_list_js__WEBPACK_IMPORTED_MODULE_4__[\"drawUsers\"](users);\n_components_user_list_js__WEBPACK_IMPORTED_MODULE_4__[\"drawSelectUsers\"](users);\n_components_todo_list_js__WEBPACK_IMPORTED_MODULE_5__[\"drawTodos\"](todos); // Listeners\n\ndocument.getElementById('add-todo').addEventListener('click', function (e) {\n  _utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"clearTodoForm\"]();\n  _utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"isUpdate\"](false);\n  Object(_utils_modal_js__WEBPACK_IMPORTED_MODULE_7__[\"openModal\"])('todo-modal');\n});\ndocument.getElementById('todo-form').addEventListener('submit', function (e) {\n  e.preventDefault();\n\n  if (e.submitter.id === 'btn-save-todo') {\n    var todo = _controller_todo_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"createTodo\"](_utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"getTodoFromForm\"](user));\n    _components_todo_list_js__WEBPACK_IMPORTED_MODULE_5__[\"appendTodo\"](todo);\n  } else if (e.submitter.id === 'btn-update-todo') {\n    var _todo = _controller_todo_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"updateTodo\"](_utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"getTodoFromForm\"](user));\n\n    _components_todo_list_js__WEBPACK_IMPORTED_MODULE_5__[\"updateTodo\"](_todo);\n  }\n\n  _utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"clearTodoForm\"]();\n  Object(_utils_modal_js__WEBPACK_IMPORTED_MODULE_7__[\"closeModal\"])('todo-modal');\n});\ndocument.getElementById('todos-list').addEventListener('click', function (e) {\n  e.preventDefault();\n  var className = e.target.className;\n\n  if (className.includes('edit-todo')) {\n    var idTodo = e.target.getAttribute('data-id');\n    var todo = _controller_todo_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"getTodo\"](idTodo);\n    _utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"clearTodoForm\"]();\n    _utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"loadTodoForm\"](todo);\n    _utils_form_todo_js__WEBPACK_IMPORTED_MODULE_6__[\"isUpdate\"](true);\n    Object(_utils_modal_js__WEBPACK_IMPORTED_MODULE_7__[\"openModal\"])('todo-modal');\n  } else if (className.includes('delete-todo')) {\n    var _idTodo = e.target.getAttribute('data-id');\n\n    _controller_todo_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"deleteTodo\"](_idTodo);\n    _components_todo_list_js__WEBPACK_IMPORTED_MODULE_5__[\"removeTodo\"](_idTodo);\n  } else if (className.includes('complete-todo')) {\n    var _idTodo2 = e.target.getAttribute('data-id');\n\n    var _todo2 = _model_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].empty();\n\n    _todo2.id = Number(_idTodo2);\n    _todo2.completed = true;\n    _todo2 = _controller_todo_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"partialUpdateTodo\"](_todo2);\n    _components_todo_list_js__WEBPACK_IMPORTED_MODULE_5__[\"updateTodo\"](_todo2);\n  }\n});\n\n//# sourceURL=webpack:///./src/public/js/app.js?");

/***/ }),

/***/ "./src/public/js/components/todo_list.js":
/*!***********************************************!*\
  !*** ./src/public/js/components/todo_list.js ***!
  \***********************************************/
/*! exports provided: drawTodos, appendTodo, updateTodo, removeTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawTodos\", function() { return drawTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendTodo\", function() { return appendTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodo\", function() { return updateTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return removeTodo; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar todoList = document.getElementById('todos-list');\n\nvar btnEdit = function btnEdit(todo) {\n  return \"\\n    <button class=\\\"edit-todo btn btn-info btn-sm btn-block\\\" data-id=\\\"\".concat(todo.id, \"\\\">\\n        Editar\\n    </button>\\n    \");\n};\n\nvar btnDelete = function btnDelete(todo) {\n  return \"\\n    <button class=\\\"delete-todo btn btn-danger btn-sm btn-block\\\" data-id=\\\"\".concat(todo.id, \"\\\">\\n        Eliminar\\n    </button>\\n    \");\n};\n\nvar btnComplete = function btnComplete(todo) {\n  return \"\\n    <button class=\\\"complete-todo btn btn-success btn-sm btn-block\\\" data-id=\\\"\".concat(todo.id, \"\\\">\\n        Completado\\n    </button>\\n    \");\n};\n\nvar todoContent = function todoContent(todo) {\n  return \"\\n    <div class=\\\"row\\\">\\n        <div class=\\\"col-md-9\\\">\\n            <div>\\n                <span id=\\\"todo-name-\".concat(todo.id, \"\\\" class=\\\"font-weight-bold\\\">\").concat(todo.name, \"</span>\\n            </div>\\n            <div>\\n                <span class=\\\"badge badge-primary\\\">Descripci\\xF3n: </span>\\n                <span id=\\\"todo-description-\").concat(todo.id, \"\\\">\").concat(todo.description, \"</span>\\n            </div>\\n            <div>\\n                <span class=\\\"badge badge-info\\\">Estado: </span>\\n                <span id=\\\"todo-status-\").concat(todo.id, \"\\\">\").concat(todo.completed ? 'Completado' : 'Sin completar', \"</span>\\n            </div>\\n            <div>\\n                <span class=\\\"badge badge-success\\\">Asignado a:</span>\\n                <span id=\\\"todo-assigned-to-\").concat(todo.id, \"\\\">\").concat(todo.assignedTo, \"</span>\\n            </div>\\n        </div>\\n        <div class=\\\"col-md-3\\\">\\n            \").concat(todo.completed ? '' : btnEdit(todo), \"\\n            \").concat(btnDelete(todo), \"\\n            \").concat(todo.completed ? '' : btnComplete(todo), \"\\n        </div>\\n    </div>\\n    \");\n};\n\nvar todoLi = function todoLi(todo) {\n  return \"\\n    <div id=\\\"todo-\".concat(todo.id, \"\\\" class=\\\"border shadow-sm p-3 mb-3 bg-white rounded\\\">\\n        \").concat(todoContent(todo), \"\\n    </div>\\n    \");\n};\n\nvar drawTodos = function drawTodos(todos) {\n  todoList.innerHTML = '';\n\n  var _iterator = _createForOfIteratorHelper(todos),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var todo = _step.value;\n      todoList.innerHTML += todoLi(todo);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\nvar appendTodo = function appendTodo(todo) {\n  todoList.innerHTML += todoLi(todo);\n};\nvar updateTodo = function updateTodo(todo) {\n  document.getElementById(\"todo-\".concat(todo.id)).innerHTML = todoContent(todo);\n};\nvar removeTodo = function removeTodo(id) {\n  var todo = document.getElementById(\"todo-\".concat(id));\n  todo.parentNode.removeChild(todo);\n};\n\n//# sourceURL=webpack:///./src/public/js/components/todo_list.js?");

/***/ }),

/***/ "./src/public/js/components/user_list.js":
/*!***********************************************!*\
  !*** ./src/public/js/components/user_list.js ***!
  \***********************************************/
/*! exports provided: drawSelectUsers, drawUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSelectUsers\", function() { return drawSelectUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawUsers\", function() { return drawUsers; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar userList = document.getElementById('users-list');\nvar selectList = document.getElementById('select-todo-to');\n\nvar userLi = function userLi(user) {\n  var comp = \"\\n        <li class=\\\"list-group-item\\\">\\n        \".concat(user.name, \"\\n        </li>\");\n  return comp;\n};\n\nvar drawSelectUsers = function drawSelectUsers(users) {\n  selectList.innerHTML = '';\n\n  var _iterator = _createForOfIteratorHelper(users),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var user = _step.value;\n      var option = document.createElement('option');\n      option.text = user.name;\n      option.value = user.name;\n      selectList.add(option);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\nvar drawUsers = function drawUsers(users) {\n  userList.innerHTML = '';\n\n  var _iterator2 = _createForOfIteratorHelper(users),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var user = _step2.value;\n      userList.innerHTML += userLi(user);\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n};\n\n//# sourceURL=webpack:///./src/public/js/components/user_list.js?");

/***/ }),

/***/ "./src/public/js/controller/data_controller.js":
/*!*****************************************************!*\
  !*** ./src/public/js/controller/data_controller.js ***!
  \*****************************************************/
/*! exports provided: saveData, getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveData\", function() { return saveData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\nvar saveData = function saveData(key, content) {\n  localStorage.setItem(key, JSON.stringify(content));\n};\nvar getData = function getData(key) {\n  var data = JSON.parse(localStorage.getItem(key));\n  return data ? data : [];\n};\n\n//# sourceURL=webpack:///./src/public/js/controller/data_controller.js?");

/***/ }),

/***/ "./src/public/js/controller/todo_controller.js":
/*!*****************************************************!*\
  !*** ./src/public/js/controller/todo_controller.js ***!
  \*****************************************************/
/*! exports provided: getTodos, getTodo, deleteTodo, updateTodo, partialUpdateTodo, createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodos\", function() { return getTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodo\", function() { return getTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodo\", function() { return deleteTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodo\", function() { return updateTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"partialUpdateTodo\", function() { return partialUpdateTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\n/* harmony import */ var _data_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_controller.js */ \"./src/public/js/controller/data_controller.js\");\n\n\nvar getAllTodos = function getAllTodos() {\n  return Object(_data_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"getData\"])('todos');\n};\n\nvar setAllTodos = function setAllTodos(todos) {\n  return Object(_data_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"saveData\"])('todos', todos);\n};\n\nvar getTodos = function getTodos(workgroup) {\n  return getAllTodos().filter(function (todo) {\n    return todo.workgroup == workgroup;\n  });\n};\nvar getTodo = function getTodo(id) {\n  return getAllTodos().find(function (todo) {\n    return todo.id == id;\n  });\n};\nvar deleteTodo = function deleteTodo(id) {\n  var todosUpdated = getAllTodos().filter(function (todo) {\n    return todo.id != id;\n  });\n  setAllTodos(todosUpdated);\n};\nvar updateTodo = function updateTodo(todo) {\n  var todos = getAllTodos();\n  var todoIndex = getAllTodos().map(function (t) {\n    return t.id;\n  }).indexOf(todo.id);\n  todos[todoIndex] = todo;\n  setAllTodos(todos);\n  return todos[todoIndex];\n};\nvar partialUpdateTodo = function partialUpdateTodo(todo) {\n  var todos = getAllTodos();\n  var todoIndex = getAllTodos().map(function (t) {\n    return t.id;\n  }).indexOf(todo.id);\n  Object.keys(todo).forEach(function (key) {\n    if (!!todo[key]) {\n      todos[todoIndex][key] = todo[key];\n    }\n  });\n  setAllTodos(todos);\n  return todos[todoIndex];\n};\nvar createTodo = function createTodo(todo) {\n  if (!todo.id) {\n    var todos = getAllTodos();\n    todo.id = todos.length;\n    todos.push(todo);\n    setAllTodos(todos);\n    return todo;\n  }\n};\n\n//# sourceURL=webpack:///./src/public/js/controller/todo_controller.js?");

/***/ }),

/***/ "./src/public/js/controller/user_controller.js":
/*!*****************************************************!*\
  !*** ./src/public/js/controller/user_controller.js ***!
  \*****************************************************/
/*! exports provided: getUsers, getUser, createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony import */ var _data_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_controller.js */ \"./src/public/js/controller/data_controller.js\");\n\n\nvar getAllUsers = function getAllUsers() {\n  return Object(_data_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"getData\"])('users');\n};\n\nvar setAllUsers = function setAllUsers(users) {\n  return Object(_data_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"saveData\"])('users', users);\n};\n\nvar getUsers = function getUsers(workgroup) {\n  return getAllUsers().filter(function (user) {\n    return user.workgroup == workgroup;\n  });\n};\nvar getUser = function getUser(name) {\n  return getAllUsers().find(function (user) {\n    return user.name == name;\n  });\n};\nvar createUser = function createUser(user) {\n  if (!getUser(user.name)) {\n    var users = getAllUsers();\n    users.push(user);\n    setAllUsers(users);\n  }\n};\n\n//# sourceURL=webpack:///./src/public/js/controller/user_controller.js?");

/***/ }),

/***/ "./src/public/js/model/todo.js":
/*!*************************************!*\
  !*** ./src/public/js/model/todo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todo; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Todo = /*#__PURE__*/function () {\n  function Todo(id, name, description, assignedTo, workgroup) {\n    _classCallCheck(this, Todo);\n\n    this.id = id;\n    this.name = name;\n    this.description = description;\n    this.assignedTo = assignedTo;\n    this.workgroup = workgroup;\n    this.completed = false;\n  }\n\n  _createClass(Todo, null, [{\n    key: \"empty\",\n    value: function empty() {\n      return new Todo(undefined, undefined, undefined, undefined);\n    }\n  }]);\n\n  return Todo;\n}();\n\n\n\n//# sourceURL=webpack:///./src/public/js/model/todo.js?");

/***/ }),

/***/ "./src/public/js/model/user.js":
/*!*************************************!*\
  !*** ./src/public/js/model/user.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar User = function User(name, workgroup) {\n  _classCallCheck(this, User);\n\n  this.name = name;\n  this.workgroup = workgroup;\n};\n\n\n\n//# sourceURL=webpack:///./src/public/js/model/user.js?");

/***/ }),

/***/ "./src/public/js/utils/form_todo.js":
/*!******************************************!*\
  !*** ./src/public/js/utils/form_todo.js ***!
  \******************************************/
/*! exports provided: getTodoFromForm, loadTodoForm, clearTodoForm, isUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoFromForm\", function() { return getTodoFromForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTodoForm\", function() { return loadTodoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearTodoForm\", function() { return clearTodoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUpdate\", function() { return isUpdate; });\n/* harmony import */ var _model_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/todo.js */ \"./src/public/js/model/todo.js\");\n\nvar idInput = document.getElementById('input-todo-id');\nvar nameInput = document.getElementById('input-todo-name');\nvar descriptionInput = document.getElementById('input-todo-description');\nvar assignedToSelect = document.getElementById('select-todo-to');\nvar btnSaveTodo = document.getElementById('btn-save-todo');\nvar btnUpdateTodo = document.getElementById('btn-update-todo');\nvar getTodoFromForm = function getTodoFromForm(user) {\n  var id = Number(idInput.value);\n  var name = nameInput.value;\n  var description = descriptionInput.value;\n  var assignedTo = assignedToSelect.options[assignedToSelect.selectedIndex].value;\n  return new _model_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id, name, description, assignedTo, user.workgroup);\n};\nvar loadTodoForm = function loadTodoForm(todo) {\n  idInput.value = todo.id;\n  nameInput.value = todo.name;\n  descriptionInput.value = todo.description;\n  assignedToSelect.value = todo.assignedTo;\n};\nvar clearTodoForm = function clearTodoForm() {\n  idInput.value = '';\n  nameInput.value = '';\n  descriptionInput.value = '';\n};\nvar isUpdate = function isUpdate(value) {\n  if (value) {\n    displayBtnSave(false);\n    displayBtnUpdate(true);\n    btnUpdateTodo.type = \"submit\";\n    btnSaveTodo.type = \"button\";\n  } else {\n    displayBtnSave(true);\n    displayBtnUpdate(false);\n    btnUpdateTodo.type = \"button\";\n    btnSaveTodo.type = \"submit\";\n  }\n};\n\nvar displayBtnUpdate = function displayBtnUpdate(value) {\n  value ? btnUpdateTodo.style.display = 'block' : btnUpdateTodo.style.display = 'none';\n};\n\nvar displayBtnSave = function displayBtnSave(value) {\n  value ? btnSaveTodo.style.display = 'block' : btnSaveTodo.style.display = 'none';\n};\n\n//# sourceURL=webpack:///./src/public/js/utils/form_todo.js?");

/***/ }),

/***/ "./src/public/js/utils/modal.js":
/*!**************************************!*\
  !*** ./src/public/js/utils/modal.js ***!
  \**************************************/
/*! exports provided: openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openModal\", function() { return openModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"closeModal\", function() { return closeModal; });\nvar modal = function modal(id, action) {\n  $(\"#\".concat(id)).modal(action);\n};\n\nvar openModal = function openModal(id) {\n  modal(id, 'show');\n};\nvar closeModal = function closeModal(id) {\n  modal(id, 'hide');\n};\n\n//# sourceURL=webpack:///./src/public/js/utils/modal.js?");

/***/ })

/******/ });