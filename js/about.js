var name = "zainab";
var age  = "22";
var date = new Date ();

console.log('what is your name?',name);
console.log('how old are you?',age);
console.log('this is the date today',date);


var name1 = prompt('what is your name?: ');
var age1 = prompt('how old are you?: ');


var date1 = confirm('this is the date today',date);
console.log ('this is the date today',date);

alert ("are you zainab?");


var fun1 = function(){

    var x = 1;
    var y = 2;
    var z = x+y;

    return z;
}

fun1();
var output = fun1();
console.log('the output',output)

function fun2(){

    var gender = prompt('what is your gender : ');

    if(gender == 'female'){
        document.write('<h2> your gender is : '+ gender + '</h2>')
    } else {
        alert('other gender :' , gender);
    }

    return gender;
}

fun2();
var out = fun2();
console.log('fun2', out);



