function speedUp(velocity, acceleration, unit = 'km/s'){
    let newVelocity = velocity + acceleration
    console.log('Nova velocidade: ' + newVelocity + unit)
}

speedUp(50, 20)

//As atribuições são na ordem declarada;
//velocity recebe 50 e acceleration recebe 20;
//unit é setado como valor padrão 'km/s'