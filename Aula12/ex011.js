var agora = new Date();
var hora = agora.getHours();
console.log(`Agoora são exatamente ${hora}hrs`)
if(hora<12){
    console.log(`Bom dia são ${hora}hrs`)
} else if (hora>18){
    console.log(`Boa noite são ${hora}hrs`)
} else {
    console.log(`Boa tarde são ${hora}hrs`)
}