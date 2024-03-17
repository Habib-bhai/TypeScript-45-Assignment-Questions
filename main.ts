//////////////////////////QUESTION NO.1////////////////////////////
// Have already installed Node.js TypeScript and VS Code



///////////////////////////////QUESTION NO.02/////////////////////////////
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Person_name:string = "John";

console.log(`Hello ${Person_name}, would you like to learn some TypeScript Today.`);

/////////////////////////////QUESTION.NO.03////////////////////////////
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let P_name:string = "roman";

console.log(P_name.toLowerCase());
console.log(P_name.toUpperCase());

console.log(P_name.charAt(0).toUpperCase() + P_name.slice(1));


///////////////////////QUESTION.NO.04//////////////////////////////////////
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”


console.log(`Steve Jobs once said,"Stay Hungry, Stay Foolish"`);

////////////////////////QUESTION.NO.05//////////////////////////////////
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Steve Jobs"
let message = "Stay Hungry, Stay Foolish"
console.log(`${famous_person} once said, "${message}"`)


/////////////////////////QUESTION.NO.06////////////////////////////////////////////////////
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let Person_Name: string = "Habib"
console.log("\t",Person_Name,"\t")
console.log(Person_Name);


/////////////////////////QUESTION.NO.07/////////////////////////////////
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(4+4)
console.log(12-4)
console.log(4*2)
console.log(32/4)


////////////////////////QUESTION.NO.08//////////////////////////////
// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("___________________________________________________")
console.log("\n",4+4)
console.log("___________________________________________________")
console.log("___________________________________________________")
console.log("\n",4+4)
console.log("___________________________________________________")
console.log("___________________________________________________")
console.log("\n",4+4)
console.log("___________________________________________________")
console.log("___________________________________________________")
console.log("\n",4+4)
console.log("___________________________________________________")


//////////////////////////////QUESTION.NO.09/////////////////////////////
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNumber: number = 15;
console.log(`${favNumber} is my favourite number`);

//////////////////////////////QUESTION.NO.10///////////////////////////////////
// Choose two of the programs you’ve written, and add at least one comment to each. If you don’t 
// have anything specific to write because your programs are too simple at this point, just add your name 
// and the current date at the top of each program file. Then write one sentence describing what the 
// program does.


// Name: "Habib Ullah"
// Date : 3/3/24

// This program prints a quote.Which is my Favourite Quote that Steve Jobs said in a talk he gave at Stanford University
console.log(`Steve Jobs once said,"Stay Hungry, Stay Foolish"`);

//This program uses all basic arithematic operators and the answer that all these operations give is 8
console.log(4+4)
console.log(12-4)
console.log(4*2)
console.log(32/4)



/////////////////////////////////////QUESTION.NO.11///////////////////////////////
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friendNames: string[] = ["Anees","Faiq","Raja","Ashar"]
console.log(`\n${friendNames[0]}\n${friendNames[1]}\n${friendNames[2]}\n${friendNames[3]}`)



////////////////////QUESTION.NO.12////////////////////////////////////////////
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friendName: string[] = ["Anees","Faiq","Raja","Ashar"]
console.log(`Hello ${friendName[0]} Kiya haal hain\nHello ${friendName[1]} Kiya haal hain \nHello ${friendName[2]} Kiya haal hain \nHello ${friendName[3]} Kiya haal hain`)

///////////////////////////////QUESTION.NO.13/////////////////////////////////
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favTransport: string[] = ["Buggati Cheron Super","Hayabusa","Haval"];

console.log(`${favTransport[0]} is my favourite super Car. It's astonishing top speed of 490 km/h fascinates me allot`)
console.log(`${favTransport[1]} is my favourite super Bike, It is so because of its Elegant design and speed it has`)
console.log(`${favTransport[2]} is my desired hybrid Car in Pakistan. It's Hybrid features are the things that makes it one of my favourites `)

//////////////////////////////////QUESTION.NO.14////////////////////////////////////
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests: string[] = ["Uncle Sami","Anees","Habib"]
console.log("Hi", guests[0]," it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests[1]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests[2]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")



////////////////////////////////QUESTION.NO.15//////////////////////////////////
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guests1: string[] = ["Uncle Sami","Anees","Habib"]

console.log("Hi", guests1[0]," it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests1[1]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests1[2]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log(`${guests1[2]} is not coming \n Removing ${guests1[2]} from the list `)


guests1.pop()
guests1.push("Abdul Rahman")

console.log("Hi", guests1[0],"! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this.")

console.log("\nHi", guests1[1]," ! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time")

console.log("\nHi", guests1[2],"! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time ")


/////////////////////////////////////////QUESTION.NO.16/////////////////////////////////
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.  



let guests2: string[] = ["Uncle Sami","Anees","Habib"]

console.log("Hi", guests2[0]," it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests2[1]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests2[2]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log(`\n${guests2[2]} is not coming \n Removing ${guests[2]} from the list\n`)


guests2.pop()
guests2.push("Abdul Rahman")

console.log("Hi", guests2[0],"! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this.")

console.log("\nHi", guests2[1]," ! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time")

console.log("\nHi", guests2[2],"! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time ")

console.log("Hey Everyone! I just found a big dinner table, This means we are going to have larger space!")
guests2.splice(0,0,"Bro Habib")
guests2.splice(2,0,"Ahmed")
guests2.push("Joseph")

console.log("\nHello", guests2[0],"! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there!")

console.log("\nHi", guests2[1],"! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there! ")

console.log("\nHi", guests2[2],"! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ")

console.log("\nHi", guests2[3],"! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!")

console.log("\nHi", guests2[4],"! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!")

console.log("\nHi", guests2[5],"! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ")


//////////////////////////////QUESTION.NO.17///////////////////////////////////////
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let guests3: string[] = ["Uncle Sami","Anees","Habib"]

console.log("Hi", guests3[0]," it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests3[1]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests3[2]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log(`\n${guests3[2]} is not coming \n Removing ${guests3[2]} from the list\n`)


guests3.pop()
guests3.push("Abdul Rahman")

console.log("Hi", guests3[0],"! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this.")

console.log("\nHi", guests3[1]," ! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time")

console.log("\nHi", guests3[2],"! You know that 'Habib' is not coming.But, you are still invited so be one time in reaching the venue. I'm pretty sure that we are going to have a very exciting get together this time ")

console.log("Hey Everyone! I just found a big dinner table, This means we are going to have larger space!")

guests3.splice(0,0,"Bro Habib")
guests3.splice(2,0,"Ahmed")
guests3.push("Joseph")

console.log("\nHello", guests3[0],"! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there!")

console.log("\nHi", guests3[1],"! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there! ")

console.log("\nHi", guests3[2],"! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ")

console.log("\nHi", guests3[3],"! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!")

console.log("\nHi", guests3[4],"! Once again messaging you! This time I just wanna inform you that as you probably read the text I send you that I got a bigger table, so, 3 suprise guests are joining us. See you there!")

console.log("\nHi", guests3[5],"! Hope you are well there! As you know I got a bigger table, so, you are also invited don't forget to reach there on time, see you there! ")

console.log("Hey Everyone! Sorry to say that our dinner table won't be arriving on time today. So, I can host only two people!")

let removedOnes= guests3.pop()
console.log(`\n \t Hey!${ removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `)

removedOnes = guests3.pop()
console.log(`\n \t Hey!${ removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `)

removedOnes = guests3.pop()
console.log(`\n \t Hey!${ removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `)

removedOnes = guests3.pop()
console.log(`\n \t Hey!${ removedOnes}! This is to inform you sadly, that unfortunately our dinner table won't be arriving on time so, I can only host 2 Peoples, so, I am sorry to say that I won't be able to host you. But this doesn't matter next week inshallah we will be meeting! `)

console.log(`\nHello! ${guests3[0]} You are still invited. So, be on time. See you there!`)
console.log(`\nHello! ${guests3[0]} You are still invited. So, be on time. See you there!\n`)

guests3.pop()
guests3.pop()

console.log(guests3)

/////////////////////////////////////QUESTION.NO.18/////////////////////////////////////
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// order has changed

let locations = ["Las Vegas","Silicon Valley","Saudi Arabia","NYC","Dellas Texas"]
console.log("Array in the original order")
console.log(locations)

console.log("Array in Alphabatical order")
console.log([...locations].sort())

console.log("Array is still in its original state")
console.log(locations)

console.log("now in REVERSE order without changing the original array")
console.log([...locations].reverse())

console.log("Array is still in its original state")
console.log(locations)

console.log("Reversing the original array")
console.log(locations.reverse())

console.log("Again Reversing the array to get the original order back")
console.log(locations.reverse())

console.log("Sorting the original array into Alphabetical order")
console.log(locations.sort())

console.log("reversing the order of array")
console.log(locations.reverse())

locations.forEach(element => {
    console.log(element)
});


/////////////////////////////QUESTION.NO.19/////////////////////////////////////
// Working with one of the programs from Exercises 14 through 18, print a message indicating 
// the number of people you are inviting to dinner.

let guests4: string[] = ["Uncle Sami","Anees","Habib"]
console.log("Hi", guests4[0]," it is Sunday today. I am inviting you to have today's supper with us. We all be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests4[1]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

console.log("\nHi", guests4[2]," it is Sunday today. I am inviting you to have today's supper with us. I will be glad to see you. And don't think of making any excuse you have to come on any condition.")

// printing the number of guests
console.log("3 guests are invited")


/////////////////////////////////QUESTION.NO.20////////////////////////////////////////
// . Think of something you could store in an array. For example, you could make a list of mountains, 
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
// containing these items.

let cities = ["Silicon Valley", "Las Vegas", "Hollywood","NYC","Manhattan","Toronto"]


cities.forEach(element => {
   console.log(element)
});


/////////////////////////////QUESTION.NO.21////////////////////////////////////////////////
// They think of something you could store in a TypeScript Object. Write a program that creates 
// Objects containing these items.


let exercises = 
{
 num1:"push ups",
 num2: "bench press",
 num3:"squats",
 num4:"rope jumping"
}

console.log(exercises)


////////////////////////////////////////QUESTION.NO.22///////////////////////////////////////
// If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error 
// before closing the program.
let weights = ["20kg","30kg","40kg","60kg"]
// accessing the the index which is not present and will cause the array index error
console.log(weights[5])
//correcting it by accessing one which is present in the array
console.log(weights[2])



//////////////////////////////////QUESTION.NO.23/////////////////////////////////////////////////////
// Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let weight = 70;
console.log(weight == 70)
console.log(weight > 70)
console.log(weight < 70)
console.log(weight <= 70)
console.log(weight >= 70)
console.log(weight >= 70 || weight< 70)
console.log(weight >= 70 && weight == 70)
console.log(weight <= 7)
console.log(weight != 70)
console.log(weight !=70 && weight != 80 )


///////////////////////////////////////////QUESTION.NO.24/////////////////////////////////////
// You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array

let n = "TOM"
let gen = "MALE"
console.log("Equality and inequality in strings")
console.log(n == gen)// equality
console.log(n != gen)// inequality
console.log(n === gen)//equality and type comparison
console.log("tests using the toLowerCase function")
console.log(n.toLowerCase() === gen.toLowerCase()) //comparing both values and types
console.log(n.toLowerCase() != gen.toLowerCase()) //comparing that first one is not equal to the second one
console.log(n.toLowerCase() !== gen.toLowerCase()) //comparing inequality and type
console.log("Now comparison in numbers")
let a = 2;
let b = 2;
console.log(a === b) //comparing equality and type
console.log(a !== b)// comparing inequality and type
console.log(a < b)// less than comparison
console.log(a > b)// greater than comparison
console.log(a >= b)// greater than equal to comparison
console.log(a <= b)// less than equal to comparison

console.log(a == b || n == gen)// comparison using OR operator
console.log(a !== b || n !== gen)// comparison using OR operator
console.log(a == b && n !== gen)// comparison using AND operator
console.log(a === b && n === gen)// comparison using AND operator
console.log()
let comparison  = [1,2,3,4]
let comparisonVariable= 2;
console.log(comparison.includes(1))
console.log(comparison.includes(24))

//////////////////////////////QUESTION.NO.25//////////////////////////////////////////////
// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign 
// it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
let alien_color = "green";
if(alien_color == "green") {console.log("CONGRATULATIONS! You earned 5 points")}
alien_color = "red";
if(alien_color == "red"){}

////////////////////////////QUESTION.NO.26/////////////////////////////////////////////
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the 
// alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_color1 = "green";
if(alien_color == "green"){ console.log("Congrats! You earned 5 points for shooting the Alien")}
else {
    
    console.log("You earned 10 points!")
}
if(alien_color1 == "Red"){ console.log("Congrats! You earned 5 points for shooting the Alien")}
else {
    
    console.log("You earned 10 points!")
}


/////////////////////////////QUESTION.NO.27////////////////////////////////////////////////////
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color 
// alien.
let alienColor = "Green";
//  alienColor = "yellow";
//  alienColor = "red";
if (alienColor == "Green") {
    console.log("you earned 5 points");
} else if (alienColor == "yellow") {
  console.log("you earned 10 points");
} else if (alienColor == "red") {
  console.log("you earned 15 points");
} else console.log("This color doesn't exist");

//////////////////////////////////QUESTION.NO.28/////////////////////////////////////////////
// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 
// and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 3;
if(age == 0 || age< 2){console.log("You are a Baby")}
else if(age == 2 || age < 4){console.log("You are a Toddler")}
else if(age ==4 || age < 13){console.log("You are a Kid")}
else if(age ==13 || age <20){console.log("You are a TeenAger")}
else if(age == 20 || age < 65){console.log("You are a Adult")}
else if(age > 65){console.log("You are an Elder Person")}
else {console.log("You have entered a wrong age")}

//////////////////////////QUESTION.NO.29///////////////////////////////////////
// Make an array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement,
// such as You really like bananas!
let favourite_fruits = ["Pomegranate", "Guava", "Banana"];
if (favourite_fruits.includes("Apples")) {
  console.log("you really Like Apples");
}
if (favourite_fruits.includes("Pomegranate")) {
  console.log("you really Like Pomegranate");
}
if (favourite_fruits.includes("Orange")) {
  console.log("you really Like Orange");
}
if (favourite_fruits.includes("Guava")) {
  console.log("you really Like Guava");
}
if (favourite_fruits.includes("Banana")) {
  console.log("you really Like Apples");
}

/////////////////////////////QUESTION.NO.30////////////////////////////////////////////
// Make an array of five or more usernames, including the name 'admin'. Imagine you are writing 
// code that will print a greeting to each user after they log in to a website. Loop through the array, and 
// print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let users = ["Ahmed","Habib","Anees","admin","Johny","Bhai"]
for (const iterator of users) {
    if(iterator === "admin") {console.log(`Hello ${iterator}! would you like to see a status report today`)}
    else
    console.log(`Hello ${iterator}! Pleasure to have you logged in!`)
}


///////////////////////////////QUESTION.NO.31/////////////////////////////////////////
// Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printe

let users1 = ["Ahmed","Habib","Anees","admin","Johny","Bhai"]
for (const iterator of users) {
    if(iterator === "admin") {console.log(`Hello ${iterator}! would you like to see a status report today`)}
    else
    console.log(`Hello ${iterator}! Pleasure to have you logged in!`)
}
users = []
if(users.length == 0){
console.log("\n \nWe need to find some users!")
}

///////////////////////QUESTION.NO.32//////////////////////////////
// Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print 
// a message that the person will need to enter a new username. If a username has not been used, print 
// a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
// accepted

let current_users = ["Habib","fabonacci","Anees","Johnny SinGh","Rancho"]
let new_users = ["JOHNNY Singh"," Khan","Rancho","Michael","Franklin"]


//using some() method
new_users.forEach(element => {
        let n_Lower = element.toLowerCase()
        let CToLowerTrue = current_users.some(e => e.toLowerCase() === n_Lower)
    if(CToLowerTrue) {
            console.log(`\n${n_Lower} is not available, Select anyother Username`)
        }
        else 
        console.log(`\n${n_Lower} is available`)
    })
    
    
    
    
    
    // //just using loops WHICH ISN'T WORKING PROPERLY
    // new_users.forEach(e=>{
    //     let N_User = e.toLowerCase() //to convert elements of new_users to lower case
    
    //     current_users.forEach(C=> {   //accessing the members of current_users
    //         let C_Users = C.toLowerCase() //converting them to lower case
    //         if(N_User === C_Users) // The condition to check whether or not new users are available in the current users list
    //         { console.log(`\n${N_User} is not available`) 
    //         console.log("select another one") }
    //         else
    //         {console.log(`\n${N_User} is available `)}
    //     })
    
    // })

//////////////////////////////////////QUESTION.NO.33////////////////////////////////////////////////
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output 
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let nums = [1,2,3,4,5,6,7,8,9]
nums.forEach(elem => {
if(elem ==1){console.log("1st")}
else if(elem ==2){console.log("2nd")}
else if(elem ==3){console.log("3rd")}
else 
{console.log(`${elem}th`)}
})

/////////////////////////////QUESTION.NO.34/////////////////////////////////////////
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
// then use a for loop to print the name of each pizza.
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of
// the pizza. For each pizza you should have one line of output containing a simple statement like I like
// pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
// output should consist of three or more lines about the kinds of pizza, you like and then an additional
// // sentence, such as I really love pizza!

let favouritePizza = ["Cheese Pizza", "Vegetable Pizza", "Pepperoni Pizza"];

favouritePizza.forEach((elem) => console.log(elem));

favouritePizza.forEach((elem) => {
  if (elem == "Cheese Pizza") {
    console.log(`\n${elem} is one of my favourite pizza flavors, love it for its simplicity and the perfect balance between tangy tomato sauce and melty cheese. `);
  } 
  else if (elem == "Vegetable Pizza") {
    console.log(`${elem} and with it's Peppers, onions, and mushrooms in a warm, gooey embrace.the flavor party on my crust is endless with Vegetable Pizza!`);
  } 
  else if (elem == "Pepperoni Pizza") {
    console.log(`In ${elem} I love that crispy crust, tangy sauce, and all those little spicy pepperonis can't go wrong with a good  pepperoni pizza!`);
  } 
  else console.log("This flavor is not my favourite");
});
console.log("\n**I really love Pizza**");


///////////////////////////////QUESTION.NO.35//////////////////////////////////////////////
// Think of at least three different animals that have a common characteristic. Store the names
// of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print
// a sentence such as Any of these animals would make a great pet!

let animals = ["Eagles", "Cats", "Owls"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// now one statement for each animal.
for (let i = 0; i < animals.length; i++) {
  if (animals[i] == "Eagles") {
    console.log(
      `\n${animals[i]} is a robust pet animal, with its ultra pro max ability of vision`
    );
  } else if (animals[i] == "Cats") {
    console.log(`${animals[i]} is a cute animal to adopt as a pet`);
  } else if (animals[i] == "Owls")
    console.log(`${animals[i]} have a good night vision.`);
  else {
  console.log("This animal doesn't have the one common characteristic like all above")}
}

console.log("\nAll these Animal have one thing common, THEY HAVE A GOOD VISION!")

//////////////////////////////////QUESTION.NO.36/////////////////////////////////
// Write a function called make_shirt() that accepts a size and the text of a message that should 
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
// message printed on it. Call the function.

const make_shirt = (size:number, text:string):string => {
     
    return `The size of the shirt is ${size} with this printed on it,"${text}"`
}

console.log(make_shirt(32,"TypeScript"))

/////////////////////////QUESTION.NO.37///////////////////////////////
// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.


const make_shirt1 = (size?:string,text?:string):string => {
    if(size && text) {
        return `\nThe size of the shirt is ${size} with this printed on it,"${text}"`
    } 
    else
    return "\nThe size of the shirt is Large and with this printed on it 'I love TypeScript'"
}

console.log(make_shirt1())
console.log(make_shirt1("MEDIUM","TypeScript is great!"))

// ANOTHER WAY TO DO THE SAME THING

// function m_shirt(text:string, size:string ="large") {
//     console.log(`size is ${size} and text to print is "${text}"`)
// }
// m_shirt("I love TS")
// m_shirt("I love TS","MEDIUM")


//////////////////////////QUESTION.NO.38////////////////////////////////////////
// Write a function called describe_city() that accepts the name of a city and its country. The 
// function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
// country a default value. Call your function for three different cities, at least one of which is not in the
// default country

const describe_city=(city:string, country:string = "PAKISTAN")=> {
    console.log(`${city} is in ${country}`)
   }
   
   describe_city("Karachi")
   describe_city("NYC","America")
   describe_city("Paris","France")

   ////////////////////QUESTION.NO.39//////////////////////////////////
   // Write a function called city_country() that takes in the name of a city and its country. The 
// function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least 
// three city-country pairs, and print the value that’s returned.

const city_country=(city:string, country:string):string=> {
    return `"${city}, ${country}"`
}


console.log(city_country("Islamabad","Pakistan"))
console.log(city_country("Toronto","Canada"))
console.log(city_country("Berlin","Germany"))

///////////////////////////QUESTION.NO.40///////////////////////////////
// Write a function called make_album() that builds an Object describing a music album. The
// function should take in an artist name and an album title, and it should return a Object containing
// these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make
// at least one new function call that includes the number of tracks on an album.

const make_album = (
    artistName: string,
    albumTitle: string,
    numOfTrack?: number
  ) => {
    let obj = {
      "Artist Name": artistName,
      "Album Title": albumTitle,
    };
  
    if (numOfTrack) {
      let obj = {
        "Artist Name": artistName,
        "Album Title": albumTitle,
        "Number of Tracks": numOfTrack,
      };
  
      return obj;
    }
    return obj;
  };
  
  console.log(make_album("Atif Aslam", "Tere Sang"))
  console.log(make_album("Ali Zafar", "Larsha Pekhawar"))
  console.log(make_album("Arijit Singh", "Marjavan", 100))

  ///////////////////////////QUESTION.NO.41////////////////////////////
  // Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array.
let Magicians = ["Kala","Lala","David Abbot"]

const show_magicians=(magicians:string[])=> {
    magicians.forEach(elem=> console.log(elem))
}

show_magicians(Magicians)

///////////////////////QUESTION.NO.42///////////////////////////////
// Start with a copy of your program from Exercise 41. Write a function called make_great() that 
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
// show_magicians() to see that the list has actually been modified.

let Magicians1 = ["Kala","Lala","David Abbot"]

const show_magicians1=(magicians:string[])=> {
    magicians.forEach(elem=> console.log(elem))
}

const greatMagicians =(magicians:string[])=> {
  let great=  magicians.forEach((elem,index)=>{
    magicians[index]= `${elem} Great`}) 
  
}

greatMagicians(Magicians)

show_magicians(Magicians)


////////////////////QUESTION.NO.43/////////////////////////////////////
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.

let Magicians2 = ["Kala","Lala","David Abbot"]

const show_magicians2=(magicians:string[])=> {
    magicians.forEach(elem=> console.log(elem))
}

const greatMagicians2 =(magicians:string[])=> {
  let great=  magicians.forEach((elem,index)=>{
    magicians[index]= `${elem} Great`}) 
}
let copGreatMag = [...Magicians]
greatMagicians(copGreatMag)


show_magicians2(Magicians)
show_magicians2(copGreatMag)

/////////////////////////////QUESTION.NO.44//////////////////////////////
// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time.

function sandwichItems(...Items:string[]):void {
    console.log("You want a sandwich with ")
    Items.forEach(elem => console.log(elem))
}

sandwichItems("bread","ketchup","mayo","vegetables","paper salt")

/////////////////////////////////QUESTION.NO.45//////////////////////////////
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly.


type car = {
    manufacturer: string,
    model: string,
    [key:string]:string;
}

function carInformation(manufacturer:string, model: string,optional:Record<string,any>):car {
return {
    manufacturer,
    model,
    ...optional
}
}

let myCar= carInformation("Toyota","haval",{color:"black", hp:"3000"})


  console.log(myCar);
  