const player = {nome: 'Felipe', energia: 100, vidas: 5, mana: 150}
const player2 = {nome: 'Miguel', energia: 100, vidas: 2, dano: 300}

const player3 = {...player, ...player2} //Usando o spreed o player 3 recebe todos os atributos

console.log(player3)
console.log(typeof(player3))