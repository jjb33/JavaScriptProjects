//for (statement 1; statement 2; statement 3) {
//    code block to be executed
// }

// Statement 1 is executed before the loop (the code block) starts. 
//  - is optional, and can be omitted, if your values are set before the loop starts.
//  - Also, you can initiate more than one value in statement 1, using commas to separate them.
// Statement 2 defines the condition for running the loop (the code block).
//  - returns true, the loop will start over again, if it returns false, the loop will end.
//  - Statement 2 is also optional.
// Statement 3 is executed each time after the loop (the code block) has been executed.
//  - is also optional, and it can be omitted if you increment your values inside the loop

for (i=1; i<=5; i++) {
    document.write(i + "<br />");
 }