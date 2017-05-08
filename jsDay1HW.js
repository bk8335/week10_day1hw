// Episode 1
// will print "My name is Keith" becuase Keith is a global variable

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();






// Episode 2
// local variable overshadows the global scope, so will print "3"
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());







// Episode 3
// local myAnimals (Ducks, Dogs, Lions) will overshadow the global variable
// the for loop will print 0: Ducks /n 1: Dogs /n 2: Lions, it prints increasing number, and a colon and the name of each item in the array
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();





// Episode 4
// Harvey overshadows Keith for suspectThree inside the allSuspects function (but not outside)
// will print: "Suspects include: Jay, Val, Harvey, Rick"
// suspectThree remains Keith on the global basis, so final output will be: "Suspect three is: Keith"
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is: ' + suspectThree );






// Episode 5
// detectiveInfo has the 'name' poirot overshadow the detective name of Ace Ventura
// WRONG: will print: name: Poirot /n pet: 'monkey'
// RIGHT: detectiveInfo function returns printName function which returns the detective.name (where Poirot overshadows Ace Ventura), pet information is never printed
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());






// Episode 6

// WRONG
// because valerie does not have a var it becomes the global value for murderer
// running outerfunction includes running innerfunction so Valerie is the murderer
// murderer goes from being rick (global) to marc (local) to valerie (global)
// will print "the murderer is Valerie"

// RIGHT
// the murderer is rick.
// marc is local so gets overriden by Rick which is global.
// because the innerFunction is part of outerFunction it only becomes global one level up, for the outerFunction.

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);




// Episode 7
// will print a massive number

var number1 = 1;

var allTheNumbers = function() {
  var number1 = 18;
  var number2 = 4;
  return number2 * number1  ** 3;
}

console.log("the number is: " + allTheNumbers() );
console.log("number1 is: " + number1);