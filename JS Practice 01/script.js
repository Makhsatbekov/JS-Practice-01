document.getElementById("name").innerHTML = "Yerassylbek Makhsatbekov CS-2117";

document.getElementById("year").innerHTML = new Date().getFullYear();
 
 if(new Date().getDay()==1){document.getElementById("weekday").innerHTML="Monday";}
 else if(new Date().getDay()==2){document.getElementById("weekday").innerHTML="Tuesday";}
 else if(new Date().getDay()==3){document.getElementById("weekday").innerHTML="Wednesday";}
 else if(new Date().getDay()==4){document.getElementById("weekday").innerHTML="Thursday";}
 else if(new Date().getDay()==5){document.getElementById("weekday").innerHTML="Friday";}
 else if(new Date().getDay()==6){document.getElementById("weekday").innerHTML="Saturday";}
 else if(new Date().getDay()==0){document.getElementById("weekday").innerHTML="Sunday";}

document.getElementById("date").innerHTML = new Date().getDate();

 if(new Date().getMonth()==1){document.getElementById("month").innerHTML="February";}
 else if(new Date().getMonth()==2){document.getElementById("month").innerHTML="March";} 
 else if(new Date().getMonth()==3){document.getElementById("month").innerHTML="April";}
 else if(new Date().getMonth()==4){document.getElementById("month").innerHTML="May";}
 else if(new Date().getMonth()==5){document.getElementById("month").innerHTML="June";}
 else if(new Date().getMonth()==6){document.getElementById("month").innerHTML="July";}
 else if(new Date().getMonth()==7){document.getElementById("month").innerHTML="August";}
 else if(new Date().getMonth()==8){document.getElementById("month").innerHTML="September";}
 else if(new Date().getMonth()==9){document.getElementById("month").innerHTML="October";}
 else if(new Date().getMonth()==10){document.getElementById("month").innerHTML="November";}
 else if(new Date().getMonth()==11){document.getElementById("month").innerHTML="December";}
 else if(new Date().getMonth()==0){document.getElementById("month").innerHTML="January";}

document.getElementById("hour").innerHTML = new Date().getHours();
document.getElementById("minute").innerHTML = new Date().getMinutes();
document.getElementById("second").innerHTML = new Date().getSeconds();

function multiplyBy()
{
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}