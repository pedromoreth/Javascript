let num = document.getElementById('txtnumber')
let list = document.querySelector('select#flista')
let res = document.getElementById('res')
let vetor = []


function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (numero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor já encontrado na lista ou inválido.')
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (vetor.length == 0) {
        window.alert('Coloque algum valor para começar')
    } else {
        let tot = vetor.length
        vetor.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
        res.innerHTML = ''
        res.innerHTML += `<p>Foram digitados ${tot} elementos.</p>`
        res.innerHTML += `<p>O maior elemento digitado foi ${vetor[vetor.length -1]}</p>`
        res.innerHTML += `<p>O menor elemento digitado foi ${vetor[0]}</p>`
        let soma = 0
        for (let num in vetor) {
            soma = soma + vetor[num]
        }
        res.innerHTML += `<p>A soma dos valores digitados foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados foi ${soma/tot}<\p>`
    }
}