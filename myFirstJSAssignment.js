

// Assignment 1 question 

//Replace Function Expressions with arrow functions in the code below: 

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no()   
}

ask("Do you Agree?",
function(){alert("Agreed"),
function(){alert("You cancel the execution")}})


// Solution for 1;
ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}


ask("Do you Agree?",
() => {alert("Agreed"),
() => {alert("You cancel the execution")}})




//Understand SetTimeout and SetInterval and explain below code 

console.log("a");

console.log("b");

setTimeout(() => {console.log("c");}, 100);

setInterval(() => {console.log("e");}, 100);

console.log("d");



/// Mention different methods to empty an array of length 10000.

	var abc = new Array(10000) ;
    abc  = [];
    console.log(abc.length);


    var abc = new Array(10000) ;
    abc.length = 0;
    console.log(abc.length);

    var abc = new Array(10000) ;
    abc.splice(0, abc.length);
    console.log(abc.length);





    //Understand JavaScript Destructuring 

    let [firstName, surname] = "John Smith".split(' ');
    alert(firstName); // John
    alert(surname);


    let options = {
        title: "Menu"
    };
    
    let {width = 100, height = 200, title} = options;
    
    alert(title);  // Menu
    alert(width);  // 100
    alert(height);




    //Using array.reduce calculate the sum of elements in the below Array.

    var ab = [1,2,3,4,5,6,7,8,9];   
    console.log(ab.reduce( (total, value) => total + value ));




    //Using JavaScript Date method get yesterday’s, Today, Tomorrow and next year same date values

    var date = new Date();
    console.log(date + "Today's Date");
    
    date.setFullYear(2021);
    console.log(date + "Last year Date");

    date.setDate(2);
    console.log(date + "Tomorrow's Date");

    date.setDate(0);
    console.log(date + "Yesterday's Date");



    //Using JavaScript sort print ascending and descending order of cars based on speed. 

    const cars = [
        {
            name: "Honda",
            speed : 60
        },
        {
            name: "BMW",
            speed : 40
        } ,
        {
            name: "Bajaj",
            speed : 80
        },
        {
            name: "Yamaha",
            speed : 100
        },
        {
            name: "suzuki",
            speed : 50
        }
    ]


    var one = cars.sort((a, b) => a.speed - b.speed);
    console.log(one);

    var two = cars.sort((a, b) => b.speed - a.speed);
    console.log(two);



//  stack using JavaScript Classes.


let stackArray = [];

stackArray.push(1);
console.log(stackArray); 

stackArray.push(2);
console.log(stackArray); 

stackArray.push(3);
console.log(stackArray); 

stackArray.push(4);
console.log(stackArray);

//POP
console.log(stackArray.pop()); 
console.log(stackArray); 

console.log(stackArray.pop()); 
console.log(stackArray); 

console.log(stackArray.pop()); 
console.log(stackArray); 

console.log(stackArray.pop()); 
console.log(stackArray); 

console.log(stackArray.pop());



