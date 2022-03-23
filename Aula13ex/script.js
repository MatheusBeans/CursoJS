function clicar(){
    var txtnasc = window.document.getElementById('txtnasc')
    var numnasc = Number(txtnasc.value)
    var agora = new Date() 
    var ano = agora.getFullYear()
    var idade = ano - numnasc
    var msg = window.document.getElementById('msg')

    msg.innerHTML = `Sua idade é ${idade}`

}