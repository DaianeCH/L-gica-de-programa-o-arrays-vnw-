// Crie um array que receba 5 itens e exiba no console.
let itens = ["Café", "leite", "banana", "xícara", "teclado"]
console.log(itens)

// Utilize um método para adicionar um nome ao inicio do array.
itens.unshift("Caderno")
console.log(itens)

// Utilize um método para remover o último nome do array.
itens.pop()
console.log(itens)

// Utilize um método para adicionar dois nomes ao fim do array.
itens.push("batata", "prato")
console.log(itens)

// Utilize um método para remover o primeiro nome do array.
itens.shift()
console.log(itens)

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
numbers.sort(function (a, b) { return a - b })
console.log(numbers)

// Crie um objeto que receba ao menos três propriedades sobre você.
let propriedades = {
  nome: "Daiane",
  sobrenome: "Penaforte",
  idade: "16 anos",
}
console.log(propriedades)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
propriedades.comidafavorita = "pizza de frango"
console.log(propriedades)

// Remova uma propriedade desse objeto.
let user = {
  nome: "Daiane",
  idade: "16 anos",
}
delete user.idade
console.log(user)


// Mostre no console todas as propriedades desse objeto.
let age = {
  nome: "Daiane",
  idade: "16 anos",
}
console.log(age)

//Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
let cadastro = [
  {
    nome: "Daiane",
    idade: "16 anos",
    telefone: '(93) 99999-9999',
    comidafavorita: "pizza de frango",
    petfavorito: "gato",

    amigos: [
      'Victor',
      'Italo',
      'Iran',
      'Junior',]
  },
  {
  nome:"Victor",
  idade: "22 anos",
  telefone:'(93) 99999-9999',
  comidafavorita:"acarajé",
  petfavorito:"gato e cachorro",

  amigos: [
    'Daiane',
    'Iran',
    'Italo',
    'Junior',]
  },
  {
  nome:"Iran",
  idade:"21 anos",
  telefone:'(93) 99999-9999',
  comidafavorita:"lasanha",
  petfavorito:"gato e cachorro",

  amigos: [
    'Victor',
    'junior',
    'Italo',
    'Daiane',
  ]
  },
  {

  nome:"Italo",
  idade:"24 anos",
  telefone:'(93) 99999-9999',
  comidafavorita:"pizza",
  petfavorito:"gato",

  amigos: [
    'Victor',
    'junior',
    'Iran',
    'Daiane',
  ]
  },
  {
  nome:"Junior",
  idade:"23 anos",
  telefone:'(93) 99999-9999',
  comidafavorita:"macarronada",
  petfavorito:"gato",

  amigos: [
    'Victor',
    'Italo',
    'Iran',
    'Daiane',
  ]
  },
]
console.log("cadastro posicao 0", cadastro[0].amigos)
console.log("cadastro posicao 1", cadastro[1].amigos)
console.log("cadastro posicao 2", cadastro[2].amigos)
console.log("cadastro posicao 3", cadastro[3].amigos)
console.log("cadastro posicao 4", cadastro[4].amigos)


// Mostre no console o nome de um amigo de cada lista.

console.log("cadastro posicao 0", cadastro[0].amigos[0])
console.log("cadastro posicao 1", cadastro[1].amigos[2])
console.log("cadastro posicao 2", cadastro[2].amigos[3])
console.log("cadastro posicao 3", cadastro[3].amigos[1])
console.log("cadastro posicao 4", cadastro[4].amigos[2])








