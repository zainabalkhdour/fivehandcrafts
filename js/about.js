// var name = "zainab";
// var age  = "22";
// var date = new Date ();

// console.log('what is your name?',name);
// console.log('how old are you?',age);
// console.log('this is the date today',date);


// var name1 = prompt('what is your name?: ');
// var age1 = prompt('how old are you?: ');


// var date1 = confirm('this is the date today',date);
// console.log ('this is the date today',date);

// alert ("are you zainab?");


// var fun1 = function(){

//     var x = 1;
//     var y = 2;
//     var z = x+y;

//     return z;
// }

// fun1();
// var output = fun1();
// console.log('the output',output)

// function fun2(){

//     var gender = prompt('what is your gender : ');

//     if(gender == 'female'){
//         document.write('<h2> your gender is : '+ gender + '</h2>')
//     } else {
//         alert('other gender :' , gender);
//     }

//     return gender;
// }


// fun2();
// var out = fun2();

// // while is the keyword of the loop and you must get out of loop or you will be there forever 
// console.log('fun2', out);


var age2 = prompt ('how old are you?')
confirm ("did you take premission?")

while(age2< 10){
    console.log("yes");
   // age++; --> ++ means add the var+1
   age2= age2+2;
}
//how to use the loop, what are the applications of while loop?

//so now we are going to study (for) loop
//(var count=0;count<10; count=count+3) it's the counter that inailizaion
for(var count=0;count<=10; count=count+2){
    console.log(count*2)

}

var userinput = prompt('are you female or male?');
//the user should select female or male only or the popup countinue
while(userinput !== "female" && userinput !== "male"){
    userinput = prompt('are you female or male?');
    console.log(userinput);
}

//repeat a certain nuber we use for loop
