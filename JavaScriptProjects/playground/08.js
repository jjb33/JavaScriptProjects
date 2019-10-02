//The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.

//not the first iteration will always be run since it does so before checking "while" condition
var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25); 

//break statements jump to the next code block
//continue goes to next iteration. These are just like Python