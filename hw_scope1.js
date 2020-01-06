// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.


// EP1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Output will be "The murderer is Miss Scarlet". Both the function and the scenario are set as constant and can be accessed. Verdict = "The murderer is Miss Scarlet".

// EP2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//changeMurderer won't change the murder as it's const, outcome will be an error.
// the verdict printed will be declareMurderer The murderer is Professor Plum.



// EP3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// inside declareMurderer function another function let is created and assigned as "Mrs Peacock."
// firstVerdict will print declareMurderer The murderer is Mrs Peacock.
// the secondVerdict will print "The murderer is Professor plum" as it will access the let murderer in line 41



// EP4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// the three suspects are initialised and assigned here. the const function declareAllSuspects will return "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard." and the output is stored in the const suspects and printed to console in line 72.
// console line 76 will print instead Suspect 3 is Mrs Peacock as the let in line 66 is not in the global scope and cannot be accessed here.

// EP5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);


// the function changeWeapon can change the property of the object scenario.
// the declared Weapon const changes from CandleStick to Revolver.
// console log will print the verdict "The weapon is the Revolver"


// EP6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// the const function changeMurderer would change the murderer in Mr. Green .
// the const plotTwist would change it  in Mrs. White.
// plotTwist is called, murderer = Mrs. White.
// then changeMurderer is called and the verdict should print "The murderer is Mr White"


// EP7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//the const function changeMurderer is changin M to mr green, then initialised and calls a function called plotTwist, that initialised another const called Unexpected outcome and calls it (=> outcome of unexpected is m= Miss scarlet but it just changed the let murderer set in line 137 that is different from the one in line 131 and edited in 134).
//console log is returning the verdict "the murderer is mr green."




// EP8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};
const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }
    unexpectedOutcome('Colonel Mustard');
  }
  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// change scenario gets called and can edit the const scenario property.
// new values are: murderer: 'Mrs. Peacock',room = 'Dining Room' but the function also initialise and calls plottwist that since it's passing the if condition [room is Dining room], it changes the murderer in Colonel Mustard; and initialise and call the function unexpectedOutcome that passing the if statement [murderer is now Mustard] it changes the weapon to candle stick.
// change scenario outcome is Colonel Mustard Dining Room Candle Stick.
// console log prints the verdict "the weapon is Candle Stick"


// EP9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// since murderer is prof plum it passes the if condition and initialise another let variable murderer = Mrs peacock.
// the verdict is going to print "the murderer is Prof Plum"
