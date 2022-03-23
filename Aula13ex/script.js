function clicar(){
    //idade
    var txtnasc = window.document.getElementById('txtnasc')
    var numnasc = Number(txtnasc.value)
    var agora = new Date() 
    var ano = agora.getFullYear()
    var idade = ano - numnasc

    //sexo
    var tseletor = window.document.getElementById('seletor')
    var msgdetect = window.document.getElementById('msgdetect')
    var numseletor = Number(tseletor.value)

    //imagem
    
    var imagem = window.document.getElementById("imagem")
    if(numseletor == 0){
        if(idade<=12){
            imagem.src="homem/_homem_crianca.png" 
            msgdetect.innerHTML = `Detectamos uma criança homem de ${idade} anos`
        } else if(idade<=17){
            imagem.src="homem/_homem_adolescente.png"
            msgdetect.innerHTML = `Detectamos um adolescente homem de ${idade} anos`
        } else if(idade<=40){
            imagem.src="homem/_homem_adulto.png"
            msgdetect.innerHTML = `Detectamos um adulto homem de ${idade} anos`
        } else if(idade<=60){
            imagem.src="homem/_homem_meiaIdade.png"
            msgdetect.innerHTML = `Detectamos um adulto homem meia idade de ${idade} anos`
        } else if(idade<=100){
            imagem.src="homem/_homem_velho.png"
            msgdetect.innerHTML = `Detectamos um homem velho de ${idade} anos`
        } else {
            imagem.src="_mumia.png"
            msgdetect.innerHTML = `Detectamos uma mumia homem de ${idade} anos`
        }
    } else {
        if(idade<=12){
            imagem.src="mulher/_mulher_crianca.png" 
            msgdetect.innerHTML = `Detectamos uma criança mulher de ${idade} anos`
        } else if(idade<=17){
            imagem.src="mulher/_mulher_adolescente.png"
            msgdetect.innerHTML = `Detectamos uma adolescente mulher de ${idade} anos`
        } else if(idade<=40){
            imagem.src="mulher/_mulher_adulta.png"
            msgdetect.innerHTML = `Detectamos uma mulher adulta de ${idade} anos`
        } else if(idade<=60){
            imagem.src="mulher/_mulher_meiaIdade.png"
            msgdetect.innerHTML = `Detectamos uma mulher adulta meia idade de ${idade} anos`
        } else if(idade<=100){
            imagem.src="mulher/_mulher_idosa.png"
            msgdetect.innerHTML = `Detectamos uma mulher idosa de ${idade} anos`
        } else {
            imagem.src="_mumia.png"
            msgdetect.innerHTML = `Detectamos uma mumia mulher de ${idade} anos`
        }
    }

}