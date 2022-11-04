function insert(num)
{
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num
  

  if(numero.length>5){
    document.getElementById('resultado').innerHTML="senha muito comprida"
    document.getElementById('resultado').style='border:solid 2px red;'
    console.log("senha com no minimo 6 digitos")
    document.getElementById('resultado').innerHTML=""
    window.alert("apenas 6 digitos")
  }

}
function clean()
{
    document.getElementById('resultado').innerHTML=""
    document.getElementById('resultado').style='background-color:white'
}
function verificar(){
  var result= document.getElementById('resultado').innerHTML
  const senha="666666"
  if(result==senha){
    document.getElementById('resultado').innerHTML="senha correta"
    document.getElementById('resultado').style='border:solid 2px green'
    
  }
  else if(result.length<4){
    document.getElementById('resultado').innerHTML="no minimo 6 digitos"
    document.getElementById('resultado').style='border:solid 2px yellow'
  }
  else if(result.length!=senha){
    document.getElementById('resultado').innerHTML="senha incorreta"
    document.getElementById('resultado').style='border:solid 2px red'
  }
}