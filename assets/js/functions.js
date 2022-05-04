// // // Função nominal com parâmetro obrigatório
// // // undefined é um tipo de valor que não existe.
// // // null é um tipo de valor inválido.
// // function escreve(nome, sobrenome){
// //     const a = sobrenome;
// //     if(a === undefined){
// //         console.log("a é undefined");
// //         console.log("Valor de a", a, "\n");
// //         console.log("Valor de sobrenome", sobrenome, "\n");
// //     }
// //     console.log(`${nome} ${sobrenome}`);
// // }
// // escreve ("Marilia");
// // //função nominal que retorna valor.
// // function soma(a, b){
// //     return Number(a) + Number (b);
// // }
// // const resultado = soma(1,2);
// // console.log(soma(3,5));
// // //expressão de função
// // const exibe = function(x){
// //     return `Exibindo parâmetro ${x}` ;
// // };
// // console.log(exibe("chocolate"));
// // // Onde o JavaScript esta sendo executado ? qual o contexto ?
// // // Contexto: Navegador . This depende do contexto.
// // // no navegador o this é a window.
// // // mas se você estiver usando a versão estrita do javascript, o this não será  a window.
// // // ===
// // //quando queremos usar o JAvascript na versão mais polida, o use strict deve ser informado no inicio.
// //     // var nome = "Fiap";
// //     // const e let(variavel que muda de valor)
// //     //2018 - Os navegadores passaram a implementar o use strict.
// //     // option explicit
// //     // this === windows - true 
// //     // this === windows - false;
// //     // use strict - this é undefined.
// //     // this significa - este - é uma variavel interna para apontar atributos e metodos dentro de um objeto ou classe.
// //     // pessoa correr() pessoa.correr();
// //     // pessoa correr() parar() andar() sentar(); levantar(); velocidade=0;
// //     // function andar() { this.velocidade = 1;}


// // function quemEoThis(){
// //     console.log(this ===window);
// // }

// // function quemEoThisEstrito() {
// //     "use strict";
// // console.log("strict");
// // console.log(this === window);
// // }

// // quemEoThis ();
// // quemEoThisEstrito();

// // function Exibe2() {
// //     this.a =50;
// // }

// // const novoObjeto = new Exibe2();
// // console.log(novoObjeto.a);

// //objeto global
// // let empresa = this; 
// //window
// // estrito - this é undefined.
// // quando criamos um objeto, criamos um escopo.
// //this sozinho - objeto global.
// // ao usar strict - this vira undefined;
// // this ele muda dependendo do contexto;

// const aluno = {
//     nome: 'Marilia',
//     matricula: 123,
//     executar: function(){
//         return `Exibindo de dentro de um método ${this.nome}`;
//     },
// };
//  console.log(aluno.executar());
//  console.log(aluno.nome);


// console.log("Quem é o this no contexto global",empresa);

//this dentro de uma função - também é um objeto global

function globalObj() {
    // "use strict"; // this vira undefined;
    return this;
}
document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());

// globalObj().alert("Hello Wolrd!");

// Arrow Function - Funcao de seta, ela é mais curta, não tem o própio contexto.
const novaFuncao = (a, b) =>{
    console.log("Chamando de dentro de uma arrow function")
    //Interpolação de variaveis é chamar uma variavel dentro de uma string; Template String.
    console.log(`Exibindo o valor de ${a}`);
    //concatenação de variaveis.
    console.log ("Exibindo o total de caracteres" + b.length);
    //Indentação é um código escrito de forma legivel, que respeita hierarquia{da um espaço, para facilitar a leitura de código, um código indentado é uma das maneiras de manter um código limpo.}
};

const funcao3 = (a) =>
  console.log(`Exibindo o total de caracteres de ${a.length}`);

funcao3("Marilia Costa");
//no arrow function, o this não existe.

// novo JavaScript ES2017
// spread operator ...

const carros = (primeiro, segundo, ...restante) =>{
    console.log(
        `Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são ${restante.join("," )}`
    );
};

carros(
    "DelRey",
    "Brasilia",
    "Belina",
    "Fusca",
    "Variant",
    "Parati",
    "Monza",
    "scort",
    "fiat 147",
    "D-20",
    "Kombi",
    "BMW",
    "Opaka",
    "Land-over",
    "Gurgel",
    "Maverick",
    "Marea"
);
const frutas = ['Guaraná' , 'Cupuaçu' , 'Açai'];
const todasFrutas = [...frutas, "banana", "abacaxi"];
// const {password, ...result} = await user.findById(50);
//password
//name, email, id, salary


console.log("Todas as Fuutas", todasFrutas);

//Desestruturação é uma extração-
//destructuring assigment
//Atribuição por desestruturação.

let a = 50;
let b = 100;

const[primeiro, segundo, terceiro, ...resto] = [a,b,200, 1000, 5000];
console.log("Exibindo o primeiro", primeiro);
console.log("Exibindo o resto: ", resto);


const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join(", "));

// const [p, s, t, q] = meuArray;
// const [...p, q] = meuArray;
// console.log("exibindo o quarto elemento" , q);

const [q, ...p] = meuArray.reverse();
console.log(p.reverse());



