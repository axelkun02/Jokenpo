var nomeJogador = prompt("Olá, jogador(a). Digite seu nome:")
var apresentacao = document.getElementById("msg")





apresentacao.innerHTML = `<strong>${nomeJogador}</strong>, escolha sua jogada!`




 function jogar(){
    var imgJ = document.getElementById("img1")
    var imgM = document.getElementById("img2")

    var fJogada = document.getElementsByName('radJogada')
    var txtDesc = document.getElementById('desc')
    var txtDescMaquina = document.getElementById('descMaquina')
    var resTxt = document.getElementById('res')

    var tipoJogada = ''

    if (fJogada[0].checked){
        tipoJogada = 'Papel'
        txtDesc.innerText = `${nomeJogador} jogou ${tipoJogada}.`
        imgJ.src = "img/papel.png"
        
    } else if(fJogada[1].checked){
        tipoJogada = 'Pedra'
        txtDesc.innerText = `${nomeJogador} jogou ${tipoJogada}.`
        imgJ.src = "img/pedra.png"
    } else {
        tipoJogada = 'Tesoura'
        txtDesc.innerText = `${nomeJogador} jogou ${tipoJogada}.`
        imgJ.src = "img/tesoura.png"
    }

  
    var jogadaMaq = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var tipoJogadaMaq = ''

    if(jogadaMaq == 1){
    tipoJogadaMaq = 'Papel'
    txtDescMaquina.innerText = `A maquina jogou ${tipoJogadaMaq}.`
    imgM.src = "img/papel.png"

    } else if (jogadaMaq == 2){
        tipoJogadaMaq = 'Pedra'
        txtDescMaquina.innerText = `A maquina jogou ${tipoJogadaMaq}.`
        imgM.src = "img/pedra.png"
    } else {
        tipoJogadaMaq = 'Tesoura'
        txtDescMaquina.innerText = `A maquina jogou ${tipoJogadaMaq}.`
        imgM.src = "img/tesoura.png"
    }

if(tipoJogada == tipoJogadaMaq){
    resTxt.innerHTML = `Empatou! Jogue novamente.`
} else if (tipoJogada == 'Papel' && tipoJogadaMaq == 'Pedra'){
    resTxt.innerHTML = `${nomeJogador} venceu!`
} else if (tipoJogada == 'Papel' && tipoJogadaMaq == 'Tesoura'){
    resTxt.innerHTML = `A maquina venceu!`
} else if (tipoJogada == 'Tesoura' && tipoJogadaMaq == 'Papel'){
    resTxt.innerHTML = `${nomeJogador} venceu!`
} else if (tipoJogada == 'Tesoura' && tipoJogadaMaq == 'Pedra'){
    resTxt.innerHTML = `A maquina venceu!`
} else if (tipoJogada == 'Pedra' && tipoJogadaMaq == 'Papel'){
    resTxt.innerHTML = `A maquina venceu!`
} else if (tipoJogada == 'Pedra' && tipoJogadaMaq == 'Tesoura'){
    resTxt.innerHTML = `${nomeJogador} venceu!`

}


 }
