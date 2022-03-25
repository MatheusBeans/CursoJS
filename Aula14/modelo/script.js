
function clicar(){
    var msg = window.document.getElementById("msg")
    var tinicio = window.document.getElementById("inicio")
    var tfim = window.document.getElementById("fim")
    var tpasso = window.document.getElementById("passo")
    var inicio = Number(tinicio.value)
    var fim = Number(tfim.value)
    var passo = Number(tpasso.value)
    var msgtxt = ""
    for(inicio; inicio<=fim; inicio = inicio + passo){
        msgtxt = msgtxt + `${inicio}, `
    }
    msg.innerHTML = msgtxt

}