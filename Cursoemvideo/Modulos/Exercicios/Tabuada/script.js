function tabuada(){
    let num = document.getElementById('#txtn')
    let tab = document.getElementById('#seltab')

    if (num == 0){
        alert('ERRO')
    }else{
        let n = Number(num.value)
        let c = 1

        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++
        }
    }
}