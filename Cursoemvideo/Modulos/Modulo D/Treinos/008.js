var idade = 

if (idade < 16){
    console.log('Não pode votar')
}else if(idade < 18 || idade >= 67){
    console.log('Voto opcional')
}else if (idade >= 99){
    console.log('Nem vivo você deve estar mais!')
}else{
    console.log('Voto Obrigatório!')
}