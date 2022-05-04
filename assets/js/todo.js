import { addTask,getAllTasks } from "./utils/domFunctions.js";



// Banco de dados NoSQL - Orientado a Documentos. MongoDB, Firebase
// Tarefas. Armazenar as tarefas em algum lugar. Por enquanto estamos armazenando na memória.
// usamos uma constante. Armazena em memória é volátil.

// Em localStorage e sessionStorage.

// NodeJS(aprender semana que vem) - MongoDB ou Firebase. Armazenamento em Banco de dados. Armazenamento Persistente.
// console.log(db[0].steps[2].step)
//objeto é um conjunto de atributos(ou propriedades) e métodos(ou funções ou ações)
// items: [{item:1}, {item:2},{item:3}]


const db = [
  {
     id: 1,
     title:"Concluir App Conexão Arte",
     steps: [
     {step: "Ajustar textos"},
     {step: "Trocar imagens para imagens públicas"},
     {step: "Publicar no Expo"},
     {step: "Publicar no Expo Store Connect"},
   ],
     done: false,
     dueDate:"2022-05-06",
    reminder: "2022-05-02 10:00",
  },

  {
    id: 2,
    title:"Aula 4 Fiap - Avanade",
    steps: [{step: "Atributos Globais"}, {step: "Estrutura CSS"}],
    done: true,
    dueDate:"2022-04-28",
 },
];

getAllTasks(db);




//console.log(db[0].title);
// DOM - Document Object Model - é o JavaScript acessando o HTML e manipulando ele.
// HTML ele é copilado pelo navegador em uma árvore de comandos, chamado DOM.

const form = document.querySelector("#addNewTask");
const newTask = document.querySelector("#inputTxtNewTask");

form.addEventListener("submit",(e) => {
  //Form faz um favor ? Pois não! Não faz nada...
    e.preventDefault();
});
newTask.addEventListener("keyup", (e) => {

    e.preventDefault();
    e.stopPropagation();
    if(e.key == "Enter") {
      // Se newTask.value for ao contrário de true. Ou seja, se for false, se estiver vazio.  
      if (!newTask.value) {
        alert("Digite uma nova tarefa, para adicionar.");
      } else {
    // alert(newTask.value);

    const d = new Date();
    const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

    db.push({
      id: Number(db.length) + 1, 
      title: newTask.value, 
      done:false, 
      dueDate: today,
    });

    document.querySelector(".tasks").innerHTML="";
    getAllTasks(db);

    newTask.value = "";
    console.log(db);
 }
}
});

   










