const { Tab } = require("bootstrap")

function gerar() {
    let numero = document.getElementById('txtnumber')
    let res = document.getElementById('res')
    var resposta = 0
    if (numero.value.length == 0) {
        window.alert('Digite um valor')
    } else {
        res.innerHTML = ''
        let n = Number(numero.value)
        for (var multi = 0; multi <= 10; multi++) {
            let item = document.createElement('option')
            item.text = `${n} x ${multi} = ${n*multi}`
            item.value = `tab${multi}`
            res.appendChild(item)
        }


    }
}