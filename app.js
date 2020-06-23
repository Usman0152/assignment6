// Assignment 6 //

//Chapter 21-25 //
//Task 1//

// var firstName=prompt("Enter first name :");
// var lastName=prompt("Enter last name :");
// var fullName=firstName+" "+lastName;
// console.log("Welcome " +fullName);

// //Task 2//

// var mobileNumber=prompt("Enter your favouriye mobile model");
// console.log("My favourite mobile phone is "+mobileNumber);
// var str1=mobileNumber.length;
// console.log(str1);

// //Task 3 //

// var str2="Pakistani"
// console.log("The index number of n in Pakistani is "+str2.indexOf("n"));

// //Task 4//

// var str3="Hello World"
// console.log("The index number of last l in "+str3+ " is "+str3.lastIndexOf("l"));

//Task 5 //

// var str4="Pakistani"
// console.log("The character at index 3 is : "+str4.charAt(3));

// //Task 6//
// var Firstname=prompt("Enter first name :");
// var Lastname=prompt("Enter last name: ");
// var res=Firstname.concat(Lastname);
// console.log(res);

//Task 7 //
// var str5="Hyderabad"
// var rep=str5.replace("Hyder","Islam");
// console.log("Actual word = "+str5);
// console.log("After replacement = "+ rep);

// //Task 8 //

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log("Actual message : "+message);
// var editmessage=message.replace(/and/g,"&");
// console.log("After edit : "+editmessage);

// //Task 9//
// var str6="472";
// console.log(typeof str6);
// var int=parseInt(str6);
// console.log(typeof int);

// //Task 10 //
// var name=prompt("Enter the name in small alphabets");
// console.log(name);
// name=name.toUpperCase();
// console.log(name);

// //Task 11 //

// var name2=prompt("Enter the name :");
// nameOutput=name2.slice(0,1).toUpperCase() + name2.slice(1);
// console.log(nameOutput);

//Task 12 //

// var num=35.36;
// num=num.toString();
// console.log(typeof num);
// console.log(num);

//Task 13 //

// var userName=prompt("Enter the username :");
// if(userName.slice(0)==="!"){
//     alert("The username is invalid !");
//     return(false);
// }
// else if(userName.slice(0)==="#"){
//     alert("The username is invalid !");
//     return(false);
// }
// else if(userName.slice(0)==="."){
//     alert("The username is invalid !");
//     return(false);
// }
// else if(userName.slice(0)==="%"){
//     alert("The username is invalid !");
//     return(false);
// }
// else if(userName.slice(0)==="@"){
//     alert("The username is invalid !");
//     return(false);
//     break;
// }

// else{
//     alert("You entered "+userName);
// }

//Task 14 //
// var item=prompt("Enter the item you want to purchase :");
// item=item.toUpperCase();
// var items=["COOKIE","BREAD","CAKE","BISCUITS","PASTRIES","COLD DRINK"];
// var findIndex=items.indexOf(item);
// for(i=0;i<=items.length;i++){
//     if(item===items[i]){
//         console.log(item +" is available on index no. "+findIndex);
//         break;
//     }
    
// }


//Task 15 //
// var password=prompt("Enter your password");
// var num=["1","2","3","4","5","6","7","8","9","0"];
// for(i=0;i<=num.length;i++){
//     if(password.slice(0,1)===num[i]){
//         alert("Password cannot begin with a number")
        
//     }
// }
// if(password===""){
//     alert("Password cannot be blank");
// }
// else if(password.length<=8){
//     alert("Password must contain 8 characters");
// }


// Task 16 //

// var uniname="University of Karachi";
// var strdis=uniname.split("");
// console.log(strdis);

//Task 17 //

// var iNput=prompt("Enter an input");
// var ran=iNput.lastIndexOf(iNput);
// var check=iNput.charAt(ran);
// console.log(check);

//Task 18 //
// var str8="The quick brown fox jumps over the lazy dog";
// var matche=str8.match(/the/gi);
// console.log(matche);
// var show=matche.length;
// console.log(show);

// Chapters 26-30 //

// Task 1 //
// var num=prompt("Enter any positive integer number :");
// console.log(num);
// var roundOff=("The rounnd off value is : "+Math.round(num));
// console.log(roundOff);
// var flooR=Math.floor(num);
// console.log("The floor value of "+ num+" is "+flooR);
// var cEil=Math.ceil(num);
// console.log("The ceil value of "+num+" is "+cEil);


// Task 2 //

// var num2=prompt("Enter any negative floating point number :");
// console.log(num2);
// var roundOff=("The rounnd off value is : "+Math.round(num2));
// console.log(roundOff);
// var flooR=Math.floor(num2);
// console.log("The floor value of "+ num2+" is "+flooR);
// var cEil=Math.ceil(num2);
// console.log("The ceil value of "+num2+" is "+cEil);

//Task 3 //
// var num3=prompt("Enter any number :");
// var abst=Math.abs(num3);
// console.log("The absolute value of "+num3+" is "+abst);


//Task 4 //
// var dice1=Math.ceil(Math.random()*6);
// var dice2=Math.ceil(Math.random()*6);
// console.log("Random value of dice :" +dice1);
// console.log("Random value of dice :" +dice2);

//Task 5 //

// var coin=Math.ceil(Math.random()*2);
// if(coin===2){
//     console.log(coin +"\n"+"Heads won the toss");
// }
// else{
//     console.log(coin+ "\n"+ "Tails won the toss");
// }

// Task 6 //
// var anynum=Math.round(Math.random()*100);
// console.log("The random number between 1 and 100 is : "+anynum);

//Task 7 //
// var weight=prompt("Enter your weight :");
// var weightint=parseInt(weight);
// console.log("The weight of the customer is "+weightint+" Kgs");

//Task 8 //
// var secretnumber=Math.round(Math.random()*10);
// var userinput=prompt("Enter any number from 1 to 10 ");
// console.log(secretnumber);
// if(secretnumber==userinput){
//     alert("Congragulations you have won the game ");
// }
// else{
//     alert("Sorry,Try again");
// }

//Chapters 31-34 //
//Task 1 //
// var d=new Date();
// console.log(d);

// Task 2//
// var m=new Date();
// console.log(m.getMonth());

//Task 3 //
// var weekday = new Date();
// var weekDay = new Array(7);
// weekDay[0] = "Sun";
// weekDay[1] = "Mon";
// weekDay[2] = "Tue";
// weekDay[3] = "Wed";
// weekDay[4] = "Thu";
// weekDay[5] = "Fri";
// weekDay[6] = "Sat";

// var n = weekDay[weekday.getDay()];
// console.log("Today is "+n);

//Task 4 //

// var funday=new Date();
// var day=funday.getDay();
// if(day===0 || day===6){
//     console.log("Today is funday");
// }
// else{
//     console.log("Its not funday");
// }

//Task 5//
// var dated=new Date();
// console.log(dated);
// if(dated<=15){
//     console.log("First fifteen days of month");
// }
// else{
//     console.log("Last days of month");
// }
// Task 7 //
// var d=new Date();
// var hour=d.getHours();
// if(hour<=12){
//     console.log("It is AM")
// } 
// else{
//     console.log("It is PM");
// }