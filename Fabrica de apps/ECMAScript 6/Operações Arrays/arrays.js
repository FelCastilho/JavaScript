const list = [1,2,3,4,5,6,7,8,9,10]

const novaLista =  list.map(function(item, index){
    return item + index
})

console.log(novaLista)


const soma = list.reduce(function(total,proximo){
    return total + proximo
})

console.log(soma)