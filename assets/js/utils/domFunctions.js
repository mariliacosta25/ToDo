// SOLID

// PRincípios de boas práticas de programação.

// S - SRO - Single Responsibility Principle
// Princípio de responsabilidade Única

// Funções bem inscritas devem, ser mantidas simples, curtas e realizando um objetivo.

// quando precisamos acessar uma função em outro aqrquivo, é necessário eportá-la.

// CRUD - Create Read Update Delete
export function addTask() {
  alert("Cadastrando uma nova tarefa");
}
export function removeTask() {
  alert("Removendo uma tarefa");
}
export function updateTask() {
  alert("Alterando uma nova tarefa");
}
export function getAllTask() {
  alert("Listando todas tarefas");
}
export function getTaskById() {
  alert("Exibindo uma tarefa");
}

// quando for importar do arquivo domfunctions, o JS não sabe quantas funções estão disponíveis.
// Quando eu preciso extrair qualquer recurso, usando a desestruturação. Destructuring
// import { addTask } from './domFunctions,js';