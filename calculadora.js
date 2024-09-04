var escolhaNumero1=parseFloat(prompt("Deigite o primeiro número que deseja:"));
var escolhaSinal=prompt("Qual sinal deseja usar?:");
var escolhaNumero2=parseFloat(prompt("Deigite o segundo número que deseja:"));

if(escolhaSinal==+){
    var soma=escolhaNumero1+escolhaNumero2;
    console.log("Resultado" +soma);

}else if(escolhaSinal==-){
    var subtracao=escolhaNumero1-escolhaNumero2
    console.log("Resultado" +subtracao);

}else if(escolhaSinal==*){
    var multiplicacao=escolhaNumero1*escolhaNumero2
    console.log("Resultado" +multiplicacao);

}else if(escolhaSinal==/){
    var divisao=escolhaNumero1/escolhaNumero2
    console.log("Resultado" +divisao);
    
}else{
    console.log("error");
}