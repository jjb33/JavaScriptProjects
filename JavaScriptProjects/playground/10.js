function HeyYou(name) {
    alert('I dind\'t remember your name. Thanks for reminding me that it\'s ' + name +'.')
}

HeyYou(prompt("Hey You! What's your name again?"));

//I think you could also do it like Python:

name1 = prompt('What is your name?', 'Type name here')

function DidntForget(x) {
    alert("Pshhh. Yeah I knew your name was " + x + ", but thanks for letting me know.")
}

DidntForget(name1);

//The confirm box returns only true (ok) or false (cancel)
var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}

//Funtions can also have a return statement like Python. So you can:
//function myfunc(x) {
 //   x += 1  
//    return x
//}
//newx = myfunc(5);
