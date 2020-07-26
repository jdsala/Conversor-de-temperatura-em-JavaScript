function convertTemp(converter)
{
 //instanciando objetos do HTML
var fahr = document.convert.fconvert, cel = document.convert.cconvert, kel= document.convert.kconvert;

//definindo direções para conversões
//Aqui vamos usar a função Math.round() para retornar o valor de um numero arredondado para um numero
//inteiro mais proximo
if (converter== "fahrenheit") 
{
    cel.value = Math.round((fahr.value - 32) * (5/9));
	kel.value = Math.round((parseInt(cel.value) + 459.67) * (5/9));
} 
else if (converter == "kelvin") 
 {
	fahr.value = Math.round((parseInt(cel.value) * (9/5)) -  459.67);
	cel.value = Math.round((fahr.value - 32) * (5/9));
	
 }
else
 {
	fahr.value = Math.round((parseInt(cel.value) * (9/5)) + 32);
	kel.value = Math.round((parseInt(cel.value) + 273));
 }
}
//Limpa os campos
function clearAll()
{
document.convert.fconvert.value="";
document.convert.cconvert.value="";
document.convert.kconvert.value="";
document.convert.username.value="";
document.convert.email.value="";
}

//Deixa uma mensagem de saida e fecha o site
function alerta()
{
    alert("Obrigado por usar o nosso site de conversão!");
    window.close();
}
