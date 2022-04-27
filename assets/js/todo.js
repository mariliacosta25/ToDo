console.log("Hello Wolrd");
console.info("Hello Wolrd");
console.error("Forçando o erro");
console.warn("Forçando o erro")

//case sensitive - camelCase
// cont - constante - Não muda. Nunca. A não ser objetos e referências, aí o seu conteúdo pode mudar.
const nome = 'Marilia Costa'
//let - variável - pode mudar a qualquer momento.
let email = 'marilia-gabriela96@hotmail.com'

//var nome
//tc39 - Grupo de Tecnologia dentro ECMA International - Responsável EcmaScript - ES2015....ES2017.

console.log(`Nome: ${nome} Email: ${email}`);

// hoisting - Chamar uma função que não foi mencionada. o JavaScript faz duas analises no seu codigo: a primeira é analise léxica
// segunda analise sintática - para saber se escreveu certo
// const e let não sofrem hoisting
// template string - crase para chamar texto no meio do código

function escreve(x){
    console.log("Frase: " + x);
}

escreve(`Seja bem-vindo ${nome}`);
escreve("Treinamento HTML5, CSS3, JS");




// ##################################
// objeto.metodo(); ação 
// objeto.propriedade = valor;
// console=objeto log=metodo
// document é um objeto. Quais são os metodos e quais as propiedades ?
// Window é um objeto. window.innerHeight widow. innerWidth
//###################################

// Em JavaScript existem 7 tipos de erros


// Type Error, Reference Error,  Syntax Error, Eval, Range Error, Internal Error, URIError (URI- Uniform Resource Identifier - url é um conjunto de uri)

// Type, Reference, Syntax.

//################################### //



