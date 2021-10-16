let names = ["Abruptly", "Absurd", "Abyss", "Affix", "Askew", "Azure", "Bikini", "Bookworm", "Buzzing", "Buffoon", "Duplex", "Equip", "Dizzying", "Faking", "Crypt",
  "Embezzle", "Flapjack", "Flyby", "Fixable", "Galaxy"];
let list = document.getElementById("myList");

names.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});



var print = document.getElementById('print');
var print2 = document.getElementById('print2');
let upperCase = names.map(name => name.toUpperCase());;
let lowerCase = names.map(name => name.toLowerCase());;


function random(min, max) {
  return Math.random() * (max - min) + min;
}

function Operator() {
  let string = names[Math.floor(random(1, 21)) - 1];
  document.getElementById("random").innerHTML = string;
  document.getElementById("word-upper").innerHTML = string.toUpperCase();
  document.getElementById("word-lower").innerHTML = string.toLowerCase();
  document.getElementById('countVowels').innerHTML = calculateVowels(string);
  document.getElementById('countConstants').innerHTML = calculateConstants(string);

  let button = document.getElementById("confirm");

  button.addEventListener("click", function () {
    let input =document.getElementById("input1").value;
    if (string.includes(input)) {
      document.getElementById("Yes").innerHTML = "The word is in the array";
    } else {

      document.getElementById("No").innerHTML = "The word is not in the array";
    }

    let test = countOccurrence(string, input);
        document.getElementById("occurrences").innerHTML = test;

  });
}

function countOccurrence (string,char) {
  var count = 0;
  for(var i=0; i<string.length; i++) {
    if(string[i] === char) {
      count++;
    }
  }
  return count;
}


function calculateVowels(str) {

  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}



function calculateConstants(str) {

  const constants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (constants.includes(letter)) {
      count++;
    }
  }
  return count;
}

