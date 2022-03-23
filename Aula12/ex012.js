var agora = new Date()
var diaSem = agora.getDay()-5
console.log(diaSem)

switch(diaSem){
    
    case 0:
        console.log('Domingou')
        break
    case 6:
        console.log('Sabadão') 
        break   
    case 5:
        console.log('Sextouu!!')
        break
    default:
        console.log('Dia de semana!')    
        break
}