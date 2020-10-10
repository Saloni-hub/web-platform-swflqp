// console.log("Hello world",4+6,"Another log");
// console.warn("This is warning");
// console.error("This is an error");
/*
var num1=20;
var num2=30;
console.log(num2)
console.log(num1+num2);

 var x=prompt("Enter a numer");
 var y=prompt("Enter a second number");
mul=x*y;
console.log("value of x is:"+x);
console.log("value of y is :"+y);
x++;
console.log("x after increment::"+x);
console.log(mul);


// string concanating

var firstName="Saloni";
var secondName="Pandey";
var fullName=firstName+" "+secondName;
console.log(fullName);
console.log("length of string::"+firstName.length);  //length of string

// concanateing string with plus and equal operator

var myName="hii saloni how are you ?"
myName+="i am fine and you."
console.log(myName);

// bracket notation finding specfic index value of string
var myName="Saloni";
var fistNameLetter="";
fistNameLetter=myName[0];
console.log("first letter of string::"+fistNameLetter);
console.log("last letter of string::"+myName[myName.length-1]);//last letter of string

//  store multiple value with array
var numArr=[50,40,12,34,56];
// access array data with indexes
var ourData=numArr[1];
console.log(ourData);
// modify array data
numArr[1]=70;
console.log("modify array data"+numArr);

// access multidimenional array
var myArr=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],[14,15,63]],13,14];
var myData=myArr[3][1];
var myData2=myArr[4];
console.log(myData);
console.log(myData2);

// push() function use push in last element 
var ourArr=[1,2,3];
ourArr.push(4);
console.log(ourArr);

// pop() function use pop in last element
var ourArr=[4,8,9,5];
ourArr.pop();
console.log(ourArr);

// shift() similer to pop but its remove in first element
var ourArr=["Saloni","Pandey","juhi"];
var removeArr=ourArr.shift();
console.log(removeArr);
console.log(ourArr);

// unshift() similer to push its first position

var ourArr=["Happy","J","cat","Boy"];
ourArr.unshift("Saloni");
console.log(ourArr);

// function
function ourReusable(){
    console.log("Heyya,World");
}
ourReusable(); // function call
ourReusable();

// create function with argument
 function add(a,b){
     console.log(a+b);
     console.log(a-b);
 }
 add(10,5);

//  global and local scope of variable
var a=10;
function fun(b){
    var sum=a+b;
    console.log(sum);
    console.log("local varaable is b:"+b);
}
console.log("Golable variable is:"+a);
fun(34);

// assigned return
changed=0;
function change(num){
    return (num+5)/3;
}
changed=change(10);
console.log(changed);

//  -----Stand in line (Queue)
function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}
var testArr=[1,2,3,4,5];
console.log("Before:"+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:"+JSON.stringify(testArr));

// if Statement

function compare(a,b){
    if(a==b){
        return true;
    }
    return false;
}
console.log(compare(4,4));

var names = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"];
function golfScore(par,strokes){
    if(strokes==1){
        return names[0];
    } else if(strokes<=par-2){
        return names[1];
    } else if(strokes==par-1){
        return names[2];
    } else if(strokes==par){
        return names[3];
    } else if(strokes==par+1){
        return names[4];
    } else if(strokes==par+2){
        return names[5];
    } else if(strokes>=par+3){
        return names[6];
    } else {
        return "Change Me";
    }
}
console.log(golfScore(5,4));

// #############  Switch statement

var a=14;
var b=2;
var ans;
function calc(val){
    switch(val){
        case 1:
            ans=a+b;
            break;
        case 2:
            ans=a*b;
            break;
        case 3:
            ans=a-b;
            break;
        case 4:
            ans=a/b;
            break;
        case 5:
            ans=a%b;
            break;
        default :
            ans="enter correct input";
            break;
    }
    return ans;
}
console.log(calc(1));



//  ###############   OBJECT   ###################

var myDog = {
    "name": "Tommy",
    "legs": 4,
    "tails":1,
    "friends":["everything"]
};

// accessing object property with dotation
var nameValue=myDog.name;
console.log(nameValue);
var legValue=myDog.tails;
console.log(legValue);
//  accessing object property with bracket notation
var dogName=myDog["name"];
console.log(dogName);

// change object property
myDog.name="Dugdug";
console.log(myDog);

// delete object property
delete myDog.tails;
console.log(myDog);

// using lookup vriable
function photLookup(val){
    var result="";
    var lookup = {
        "alpha":"Admas",
        "bravo":"Boston",
        "charlie":"Chicogo"
    };
    result = lookup[val];
    return result;
}
console.log(photLookup("bravo"));

//  testing object from property

var myObj = {
    gift:"pony",
    pet:"kitten"
};
function checkObj(checkProp) {
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("gift"));

// accessing nested object
var myStroge={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "etrunk":"jack"
        }
    }
};
var globalBoxValue= myStroge.car.inside["glove box"];
let etrunkValue=myStroge.car.outside["etrunk"];
console.log(globalBoxValue);
console.log(etrunkValue);

var meLikesFruite={
    "fruits":{
        "Apple":{
            "color":"Red",
            "flavour":"sweet",
            "shape":"heart"
        },
        "banana":{
            "color":"YellowBlack",
            "flavour":"Yummy"
        },
        "papaya":{
            "color":"Yellow",
            "flavour":"delecious"
        },
    }
};

var bananaValue=meLikesFruite.fruits.banana["color"];
console.log(bananaValue);

// accessing nested Arrays

var myPlants=[
  {
    type : "flowers",
    list : [
        "rose",
        "tulip",
        "dandelion"
    ]
},
{
    type : "trees",
    list : [
        "fir",
        "pine",
        "birch"
    ]
},
{
    type:"fruit",
    list : [
        "Apple",
        "Banana",
        "PineApple"
    ]
},
];
var secondTree = myPlants[2].list[1];
console.log(secondTree);

// while loop

var myArray = [];
var i=0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray);
*/
// for loop
var prod;
var i=1;
var num=prompt("Enter a number");
while(i<=10){
    var prod=num*i;
}
console.log(pro);