function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'meninocrianca.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'homemjovem.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulhercrianca.jpg')

            } else if (idade < 21) {
                img.setAttribute('src', 'mulherjovem.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'adultomulher.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}