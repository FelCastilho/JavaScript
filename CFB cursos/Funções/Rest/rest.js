function soma(...valores){ //Rest: Não é necessario passar um numero determinado de valores

    let res=0 //incializando com valor inicial 0

    for(i of valores){
        res+=i // res vai receber tanto o valor inicial 0 + os valores da array VALORES
    }

    return res
}

console.log(soma(10,5))