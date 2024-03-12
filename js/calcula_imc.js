// alert("Olá mundo.");

// console.log(document.querySelector("h1")); Selecionando todos os elementos h1.

let titulo = document.querySelector("h1");
// Armazenando o elemento selecionado numa variável.

// Exemplo de função nomeada:
titulo.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
	console.log("Título foi clicado");
}

// Exemplo de função anônima:
titulo.addEventListener("click", function() {
console.log("Função criada na função anônima.") });

// Exemplo de aero function, que também funciona sem colocar as chaves após a seta:
titulo.addEventListener("click", () => 
console.log("Função criada na função aero!") );

console.log(titulo.textContent);
// Exibindo apenas o conteúdo em texto que está dentro daquele elemento armazenado na variável.

titulo.textContent = "Aparecida Nutricionista";
console.log(titulo.textContent);
// Alterando o conteúdo daquele elemento e exibindo o resultado.

console.log(document.querySelector("h2"));

let titulo_classe = (document.querySelector(".titulo"));
console.log(titulo_classe.textContent);
// Selecionando um elemento pela classe.

let paciente = document.querySelector("#primeiro-paciente");
// Selecionando o elemento com id.

let pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);
for (let i = 0; i < pacientes.length; i++) {
	const paciente = pacientes[i];
	
	let td_peso = paciente.querySelector(".info-peso");
	let td_altura = paciente.querySelector(".info-altura");
	let td_gordura = paciente.querySelector(".info-gordura");
	let td_imc = paciente.querySelector(".info-imc");
	// Selecionando os elementos filhos através de suas classes, utilizando o nome da variável.

	let altura = td_altura.textContent;
	let peso = td_peso.textContent;
	// Definindo que os valores são o conteúdo daqueles elementos armazenados.

	// let altura_quadrado = altura*altura;
	// let imc = peso/altura_quadrado;
	// let imc = peso / ( altura*altura );
	let imc = calculaIMC(peso, altura);
	// Fazendo o cálculo.

	td_imc.textContent = imc;
	// Definindo o valor para aquele elemento, e adicionando duas casas decimais para exibição.
}

function calculaIMC(peso, altura) {
	let imc = 0;
	imc = peso / Math.pow(altura, 2);
	return imc.toFixed(2);
}