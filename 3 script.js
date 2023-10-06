//! for loop:
//! ===>Example:
// for (var a=0;a<=10;a++)
// {
//    console.log(a);
// }
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// *************************************************************************************************************************

//! while loop:
//! ===>Example:

// var countdown = 10;
//    var i =0;
//    while(i < countdown)
//    {
//     console.log(countdown);
//     countdown--;
//    }                        
//    10
//    9
//    8
//    7
//    6
//    5
//    4
//    3
//    2
//    1
   
// *************************************************************************************************************************

//! do while loop:
//! ===>Example:

//    let count =0;
//    do{
//     console.log(count);
//     count ++;
//    }while(count<5)
//    0
//    1
//    2
//    3
//    4

// *************************************************************************************************************************

//! if-else loop:
//! ===>Example:

// var a=15;
// if(a%2 == 0)
// {
//    console.log("EVEN");
// }
// else
// {
//    console.log("ODD");
// }


//! if-else loop:

//! ===>Example 1:


// for (var a=1;a<=5;a++)
//{
// if(a%2 == 0)
// {
//    console.log("EVEN");
// }
// else
// {
//    console.log("ODD");
// }

//}

//output:

// ODD 
// EVEN 
// ODD 
// EVEN 
// ODD


//! ===>Example 2:
// for (var a=1;a<=50;a++)
//{
// if(a<=18)
// {
//    console.log("You are eligible for voting");
// }
// else
// {
//    console.log("You are eligible not for voting");
// }
//}

// *************************************************************************************************************************

//! Math Methods and Examples

// =>Math.floor
// console.log(Math.floor(5.9));//5
// console.log(Math.floor(-4.9));//-5

// =>Math.ceil
// console.log(Math.ceil(5.1));//6
// console.log(Math.ceil(-4.9));//-4

// =>Math.round
// console.log(Math.round(5.4));//5
// console.log(Math.round(6.6));//7

// =>Math.sqrt
// console.log(Math.sqrt(0));//0
// console.log(Math.sqrt(-2));//    
// console.log(Math.sqrt(25));//5

// =>Math.cbrt
// console.log(Math.cbrt(27));//3
// console.log(Math.cbrt(125));//5
// console.log(Math.cbrt(-125));//-5

// ==>Math.abs
// console.log(Math.abs(-4.5));//4.5
// console.log(Math.abs(-4.8));//4.8
// console.log(Math.abs(-4.4));//4.4

// ==>Math.trunc
// console.log(Math.trunc(6.5));//6
// console.log(Math.trunc(5.8));//5
// console.log(Math.trunc(4.4));//4

// ==>Math.min
// console.log(Math.min(3,25,49,-3.28));//-3.28

// ==>Math.max
// console.log(Math.max(3,25,49,3.28));//49

// ==>Math.pow
// console.log(Math.pow(2,5));//2*2*2*2*2

// ==>Math.random
// console.log(Math.random()*10)//0.6468471694373745 or 4.043306317764628

// *************************************************************************************************************************

//! Date get and set Methods and Examples

//get methods
//--->toDateString()

// var a = new Date();//date object
// console.log(a.toDateString());//Thu jul 27 2023

//getDate()
// var b = new Date();//date object
// console.log(b.getDate()); //27

//getFullYear()
// var c = new Date();//date object
// console.log(c.getFullYear()); //2023

//getMonth()
// const d = new Date();//date object
// console.log(d.getMonth());//6

// const e = new Date();
// console.log(e.getDay());
// console.log(e.getHours());
// console.log(e.getMinutes());
// console.log(e.getSeconds());
// console.log(e.getMilliseconds());
// console.log(e.getTime());

//set Methods
// const f = new Date();
// f.setDate(45);
// console.log(f)
// f.setFullYear(2020,5,26);
// console.log(f);
// f.setHours(8);
// console.log(f);
// f.setMinutes(45);
// console.log(f);
// f.setSeconds(55);
// console.log(f);
// f.setMilliseconds(999);
// console.log(f);
// f.setMonth(1);
// console.log(f);
// console.log(f.getTime());
// f.setTime(1690437220346)
//  console.log(f);

//*****************************************************************************************