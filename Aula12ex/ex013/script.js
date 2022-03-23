function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var bodyt = window.document.getElementById('bodytest')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}hrs`
    if(hora<12){
        img.src = "_fotomanha.png"
        img.alt="Foto da manhã"
        bodyt.style.background = 'rgb(169, 204, 228)';
    } else if(hora>18){
        img.src = "_fotonoite.png"
        img.alt="Foto da noite"
        bodyt.style.background = 'rgb(95, 99, 104)'
    } else {
        img.src = "_fototarde.png"
        img.alt="Foto da tarde"
        bodyt.style.background = 'rgb(235, 214, 157)';
    }
}