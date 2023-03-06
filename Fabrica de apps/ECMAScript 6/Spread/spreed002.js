let pessoa = {
    nome: 'Felipe',
    cargo: 'Programador',
    idade : '21'
}

let novaPessoa = {
    ...pessoa,
    anoAtual: 2050,
    cidade: 'Rio de janeiro'
}

console.log(novaPessoa)