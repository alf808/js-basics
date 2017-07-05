/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/
console.log("#example");
var pet = "sebastian the pug";
console.log(pet);
console.log("\n");

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/
console.log("#1");
var firstName = "Alf";
var lastName = "Lang";
var birthPlace = "Manila";
var favoriteFood = "Indian";
var bestMovie = "Europa Europa";
var favLoveSong = "Core \'ngrato";
var cuteAnimal = "bear";
var favColor = "green";

console.log("firstName: " + firstName);
console.log("lastName: " + lastName);
console.log("birthPlace: " + birthPlace);
console.log("favoriteFood: " + favoriteFood);
console.log("bestMovie: " + bestMovie);
console.log("favLoveSong: " + favLoveSong);
console.log("cuteAnimal: " + cuteAnimal);
console.log("favColor: " + favColor);
console.log("\n");

/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/
console.log("#2");
var favoriteNumber = 97;
var currentYear = 2017;
var thatOnePrinceSong = 1999;
var tokyoOlympics = 1964;
var mariahCareyAge = 47;
var currentTemp = 26;
var studentsInClass = 8;
var numOfJapanPrefectures = 47;
var currentIphoneModel = 5;
var shoeSize = 8;

console.log("favoriteNumber: " + favoriteNumber);
console.log("currentYear: " + currentYear);
console.log("thatOnePrinceSong: " + thatOnePrinceSong);
console.log("tokyoOlympics: " + tokyoOlympics);
console.log("mariahCareyAge: " + mariahCareyAge);
console.log("currentTemp: " + currentTemp);
console.log("studentsInClass: " + studentsInClass);
console.log("numOfJapanPrefectures: " + numOfJapanPrefectures);
console.log("currentIphoneModel: " + currentIphoneModel);
console.log("shoeSize: " + shoeSize);
console.log("\n");

/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/
console.log("#3");
var likesMcDonalds = true;
var watchedMrRobot = false;
var ranMarathon = true;
var wrestledABear = false;
var lovesDonuts = false;
var readHarryPotter = false;
var sleptInClass = true;
var drinksCoffee = true;
var shopsAtWholeFoods = true;
var ownsRedShoes = false;

console.log("likesMcDonalds: " + likesMcDonalds);
console.log("watchedMrRobot: " + watchedMrRobot);
console.log("ranMarathon: " + ranMarathon);
console.log("wrestledABear: " + wrestledABear);
console.log("lovesDonuts: " + lovesDonuts);
console.log("readHarryPotter: " + readHarryPotter);
console.log("sleptInClass: " + sleptInClass);
console.log("drinksCoffee: " + drinksCoffee);
console.log("shopsAtWholeFoods: " + shopsAtWholeFoods);
console.log("ownsRedShoes: " + ownsRedShoes);
console.log("\n");

/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/
console.log("#4");
completedPrepClass = null;
traveledToMars = null;
scoredTDinNFL = null;

console.log("completedPrepClass: " + completedPrepClass);
console.log("traveledToMars: " + traveledToMars);
console.log("scoredTDinNFL: " + scoredTDinNFL);
console.log("\n");

/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/
console.log("#5");
console.log("type of null: " + (typeof null));
console.log("type of undefined: " + (typeof undefined));
/*
null and undefined are special values that represent nothing or absence of value. They are equivalent or loosely equal as shown below.
*/
console.log("null == undefined");
console.log(null == undefined);
/*
However, they are not strictly equal wherein undefined is of type undefined and null is of type object.
*/
console.log("null === undefined");
console.log(null === undefined);
console.log("\n");

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variable named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/
console.log("#6");
var plateLunch = ["tofu", "boiled veggies", "brown rice", "glass noodles", "soba noodles"];
var fruitBasket = ["pomelo", "orange", "banana", "apple", "pear"];
var westCoast = ["Washington", "California", "Oregon", "Alaska", "Hawaii"];
var lotteryResult = [34985, 9434, 0, 347, 563];
var duets = [["Pavarotti", "Dalla"], ["Pet Shop Boys", "Liza"], ["Mel Torme", "Dusty Springfield"]];
var mixPlate = [7, "wow", undefined, false];

console.log("plateLunch:");
console.log(plateLunch);
console.log("fruitBasket:");
console.log(fruitBasket);
console.log("westCoast:");
console.log(westCoast);
console.log("lotteryResult:");
console.log(lotteryResult);
console.log("duets:");
console.log(duets);
console.log("mixPlate:");
console.log(mixPlate);
console.log("\n");

/*7
* Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

What is the length of this array? Please print the length (a number) to the console.
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/
console.log("#7");
var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];
console.log("length of partyList array: " + partyList.length);
console.log("index position of \'carrot cake\': " + partyList.indexOf('carrot cake'));
console.log("index position of \'lemon bars\': " + partyList.indexOf('lemon bars'));
console.log("\n");

/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.
*/
console.log("#8");
var fullName = firstName + " " + lastName;
console.log("fullName: " + fullName);

/*
* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 */
var whereFrom = fullName + " is from " + birthPlace + ".";
console.log(whereFrom);

 /*
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/
var favSneaker = "Puma pumps";
var coffeeShop = "Peets coffee bar";
var mariahStory = "At the age of " + mariahCareyAge + ", Mariah Carey, wearing her fancy " + favSneaker + " sang " + "\'" + favLoveSong + "\'" + " at the " + coffeeShop + ".";
console.log(mariahStory);
console.log("\n");

/*
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
*/
console.log("#9");
var num1 = 91;
var num2 = 19;

/*
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
*/
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
console.log("num1 = " + num1 + ", num2 = " + num2);
console.log("sum of num1 and num2: " + sum);
console.log("difference of num1 and num2 (num1 - num2): " + difference);
console.log("product of num1 and num2: " + product);
console.log("quotient of num1 and num2: " + quotient);
console.log("remainder of num1 / num2: " + (num1 % num2));
console.log("\n");

/*
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
*/
console.log("#10");
var isStrictlyEqual = ("Tacocat" === "tacocat");
console.log("\"Tacocat\" === \"tacocat\" : " + isStrictlyEqual);

var isLooselyEqual = ("Tacocat" == "tacocat");
console.log("\"Tacocat\" == \"tacocat\" : " + isLooselyEqual);
/* "Tacocat" and "tacocat" are not equal, loosely or strictly, because of case sensitivity.
*
* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.
*/
var sameNum = ("5" === 5);
var sameNumba = ("5" == 5);
console.log("\"5\" === 5 : " + sameNum);
console.log("\"5\" == 5 : " + sameNumba);
/*
"5" and 5 are not strictly equal since they are different types, namely string and number respectively.
* They are however equivalent in inner content as the expression with operator \'==\' demonstrates.

* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?*/
var compWithOr = (3>2 || 3<1);
console.log("3>2 || 3<1 : " + compWithOr);
console.log("This is true. With \'or\' operator ||, only one of the expressions needs to be true.");
var compWithAnd = (3>2 && 6>3);
console.log("3>2 && 6>3 : " + compWithAnd);
console.log("This is true. With \'and\' operator &&, all expressions need to be true in order for the whole expression to be true.");
var compWithAnd2 = (7>2 && 8<5);
console.log("7>2 && 8<5 : " + compWithAnd2);
console.log("This is false since one of the expressions 8<5 is false.");
console.log("\n");

/*
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*/
console.log("#11");
var myBox = 108;
console.log("myBox = " + myBox);
myBox = true;
console.log("myBox = " + myBox);
myBox = undefined;
console.log("myBox = " + myBox);
myBox = "ditch";
console.log("myBox = " + myBox);
myBox = [0, 1];
console.log("myBox = ");
console.log(myBox);
console.log("\n");

/*
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.*/
console.log("Final Boss");
function bakePie(ingredient) {
	return "Today\'s special is " + ingredient + " pie.";
}
var pieResult = bakePie("blueberry");
console.log(pieResult);

/*
* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"

* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.
*/
function jump(height) {
	return "You jumped " + height + " feet high!";
}
var jumpResult = jump(9);
console.log(jumpResult);

/*
* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
*/
function cook(ingredient1, ingredient2, recipeName) {
	return ingredient1 + " and " + ingredient2 + " make a " + recipeName + "!";
}
console.log(cook("Tomatoes", "Cheese", "Pizza"));
