var mostrar, operador;
 var result="";
  var n1="";
   var n2="";
    var n3="";
     var punto="";
      var memoria="";

function forma_variable(){ 
            n1 = "";
            mostrar = n2;
            punto ="";  
            memoria="";
}
function pantalla(nun_cal){    
    switch(nun_cal){
     case "cero":
          mostrar=0;
          n1="";
          n2="";
          punto="";
          memoria="";
          result="";
          break
     case "*":
          operador = nun_cal;
            if(n1 == ""){n2=result;}else {n2 = n1;}
              forma_variable();
          break
     case "/":
          operador = nun_cal;
            if(n1 == ""){n2=result;}else {n2 = n1;}
              forma_variable();
          break
     case "+":
          operador = nun_cal;
            if(n1 == ""){n2=result;}else {n2 = n1;}
              forma_variable();
          break
     case "-":
          operador = nun_cal;
           if(n1 == ""){n2=result;}else {n2 = n1;}
              forma_variable();
          break
     case ".":
          if(punto == ""){
            punto = nun_cal;
            if( n1 == ""){n1 = 0;}  
            n1 = "" + n1 + punto; }
            mostrar = n1;
          break 
     case "=":
          switch(operador){
                case "*":
                  if(n2 == ""){
                       result = result*n3;
                    }else{
                       result = Number(n2)*Number(n1);
                        n3=n1;
                        n1="";}
                    notacion(result);
                    break
                case "/":
                if(n2 == ""){
                       result = result/n3;
                    }else{
                       result = Number(n2)/Number(n1);
                        n3=n1;
                        n1="";}
                    notacion(result);
                    break
                case "-":
                if(n2 == ""){
                       result = result-n3;
                    }else{
                       result = Number(n2)-Number(n1);
                        n3=n1;
                        n1="";}
                    notacion(result);
                    break
                default:
                   if(n2 == ""){
                       result = result+n3;
                    }else{
                       result = Number(n2)+Number(n1);
                        n3=n1;
                        n1="";}
                    notacion(result);
                    }
         break
     default:
        if(n1==""){n1=nun_cal;
                  }else{
                      memoria = Number(memoria)+1;
                      if(memoria < 8){
                        n1 = ""+n1+nun_cal;
                      }
                  }
        mostrar=n1;
    }
    
    document.getElementById('display').innerHTML=texto=mostrar;
}

function on_on(){
        document.getElementById('on').style=("transform:scale(0.90,0.90)");
        var cero="cero";
        pantalla(cero);}

function on_off(){
        document.getElementById('on').style="width: 22%";}


function on_9(){
        document.getElementById('9').style=("transform:scale(0.90,0.90)");
        pantalla(9);}

function off_9(){
        document.getElementById('9').style="width: 22%";}

function on_8(){
        document.getElementById('8').style=("transform:scale(0.90,0.90)");
        pantalla(8);}

function off_8(){
        document.getElementById('8').style="width: 22%";}

function on_7(){
        document.getElementById('7').style=("transform:scale(0.90,0.90)");
        pantalla(7);}

function off_7(){
        document.getElementById('7').style="width: 22%";}

function on_6(){
        document.getElementById('6').style=("transform:scale(0.90,0.90)");
        pantalla(6);}

function off_6(){
        document.getElementById('6').style="width: 22%";}

function on_5(){
        document.getElementById('5').style=("transform:scale(0.90,0.90)");
        pantalla(5);}

function off_5(){
        document.getElementById('5').style="width: 22%";}

function on_4(){
        document.getElementById('4').style=("transform:scale(0.90,0.90)");
        pantalla(4);}

function off_4(){
        document.getElementById('4').style="width: 22%";} 

function on_3(){
        document.getElementById('3').style=("transform:scale(0.90,0.90)");
        pantalla(3);}

function off_3(){
        document.getElementById('3').style="width: 29%";} 

function on_2(){
        document.getElementById('2').style=("transform:scale(0.90,0.90)");
        pantalla(2);}

function off_2(){
        document.getElementById('2').style="width: 29%";}

function on_1(){
        document.getElementById('1').style=("transform:scale(0.90,0.90)");
        pantalla(1);}

function off_1(){
        document.getElementById('1').style="width: 29%";} 

function on_0(){
        document.getElementById('0').style=("transform:scale(0.90,0.90)");
        pantalla(0);} 

function off_0(){
        document.getElementById('0').style="width: 29%";} 

function on_punto(){
        document.getElementById('punto').style=("transform:scale(0.90,0.90)");
        pantalla(".");} 

function off_punto(){
        document.getElementById('punto').style="width: 29%";} 

function on_igual(){
        document.getElementById('igual').style=("transform:scale(0.90,0.90)");
        pantalla("=");} 

function off_igual(){
        document.getElementById('igual').style="width: 29%";}

function on_dividido(){                              
        document.getElementById('dividido').style=("transform:scale(0.90,0.90)");
        pantalla("/");} 

function off_dividido(){
        document.getElementById('dividido').style="width: 22%";} 

function on_por(){
        document.getElementById('por').style=("transform:scale(0.90,0.90)");
        pantalla("*");} 

function off_por(){
        document.getElementById('por').style="width: 22%";}

function on_menos(){
        document.getElementById('menos').style=("transform:scale(0.90,0.90)");
        pantalla("-");} 

function off_menos(){
        document.getElementById('menos').style="width: 22%";}

function on_mas(){
        document.getElementById('mas').style=("transform:scale(0.90,0.90)");
        pantalla("+");} 

function off_mas(){
        document.getElementById('mas').style="width: 90%";}


document.getElementById('on').onclick=on_on;
document.getElementById('on').onmouseout=on_off;

document.getElementById('9').onclick=on_9;
document.getElementById('9').onmouseout=off_9;

document.getElementById('8').onclick=on_8;
document.getElementById('8').onmouseout=off_8;

document.getElementById('7').onclick=on_7;
document.getElementById('7').onmouseout=off_7;

document.getElementById('6').onclick=on_6;
document.getElementById('6').onmouseout=off_6;

document.getElementById('5').onclick=on_5;
document.getElementById('5').onmouseout=off_5;

document.getElementById('4').onclick=on_4;
document.getElementById('4').onmouseout=off_4;

document.getElementById('3').onclick=on_3;
document.getElementById('3').onmouseout=off_3;

document.getElementById('2').onclick=on_2;
document.getElementById('2').onmouseout=off_2;

document.getElementById('1').onclick=on_1;
document.getElementById('1').onmouseout=off_1;

document.getElementById('0').onclick=on_0;
document.getElementById('0').onmouseout=off_0;

document.getElementById('punto').onclick=on_punto;
document.getElementById('punto').onmouseout=off_punto;

document.getElementById('igual').onclick=on_igual;
document.getElementById('igual').onmouseout=off_igual;

document.getElementById('dividido').onclick=on_dividido;
document.getElementById('dividido').onmouseout=off_dividido;

document.getElementById('por').onclick=on_por;
document.getElementById('por').onmouseout=off_por;

document.getElementById('menos').onclick=on_menos;
document.getElementById('menos').onmouseout=off_menos;

document.getElementById('mas').onclick=on_mas;
document.getElementById('mas').onmouseout=off_mas;



//funcion Notacion sientifica 
function notacion(numer){
    n2="";
    if(numer > 99999999){
        mostrar = numer.toExponential(2);
    }else if(numer < 0.99999999){
        mostrar = numer.toExponential(2);
     }else{mostrar = numer;}
}





