//***GAME SETUP***/

let dominoes = [
  { d1: 22 },
  { d2: 23 },
  { d3: 24 },
  { d4: 25 },
  { d5: 26 },
  { d6: 32 },
  { d7: 33 },
  { d8: 34 },
  { d9: 35 },
  { d10: 36 },
  { d11: 43 },
  { d12: 44 },
  { d13: 45 },
  { d14: 46 },
  { d15: 53 },
  { d16: 54 },
  { d17: 55 },
  { d18: 56 },
  { d19: 62 },
  { d20: 63 },
  { d21: 64 },
  { d22: 65 },
  { d23: 66 },
];
let letters = [
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "b",
  "b",
  "c",
  "c",
  "d",
  "d",
  "d",
  "d",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "f",
  "f",
  "g",
  "g",
  "g",
  "h",
  "h",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "j",
  "k",
  "l",
  "l",
  "l",
  "l",
  "m",
  "m",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "o",
  "o",
  "o",
  "o",
  "o",
  "o",
  "o",
  "o",
  "p",
  "p",
  "q",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "s",
  "s",
  "s",
  "s",
  "t",
  "t",
  "t",
  "t",
  "t",
  "t",
  "u",
  "u",
  "u",
  "u",
  "v",
  "v",
  "w",
  "w",
  "x",
  "y",
  "y",
  "z",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "b",
  "b",
  "c",
  "c",
  "d",
  "d",
  "d",
  "d",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "e",
  "f",
  "f",
  "g",
  "g",
  "g",
  "h",
  "h",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "i",
  "j",
  "k",
  "l",
  "l",
  "l",
  "l",
  "m",
  "m",
  "n",
  "n",
  "n",
  "n",
  "n",
  "n",
  "o",
  "o",
  "o",
  "o",
  "o",
  "o",
  "o",
  "o",
  "p",
  "p",
  "q",
  "r",
  "r",
  "r",
  "r",
  "r",
  "r",
  "s",
  "s",
  "s",
  "s",
  "t",
  "t",
  "t",
  "t",
  "t",
  "t",
  "u",
  "u",
  "u",
  "u",
  "v",
  "v",
  "w",
  "w",
  "x",
  "y",
  "y",
  "z",
];

let gridValues = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];
let currentGridValue = 0;
//array of four. 0: end of last tile 1: beginning of current tile 2: end of current tile 3: beginning of next tile
let gridValueCompare = [];
let dominoHand = [];
let domHandValues = [];
//dominoes set up as objects in game setup. The value is the amount of dominoes on each side.
let domHandKeys = [];
//keys for second time dommino chosen
let domHandKeys1 = [];
let chosenKey = [];
let domKey = "";
let domHandFirst = [];
let dominoHandDisplayClasses = [".dom1", ".dom2", ".dom3", ".dom4"];
let domLeft = "";
let domRight = "";
let selectedDomino = false;
let dominoesUsed = [];
let letterHand = [];
let firstWord = "";
let secondWord = "";
let firstWordValid = false;
let secondWordValid = false;
let tiles = [
  ".tile1",
  ".tile2",
  ".tile3",
  ".tile4",
  ".tile5",
  ".tile6",
  ".tile7",
  ".tile8",
  ".tile9",
  ".tile10",
  ".tile11",
  ".tile12",
  ".tile13",
  ".tile14",
  ".tile15",
];
let gridTilesi = "";
let gridValuesi = [];
//let wordText = "";
let wordNumber = 1;
let firstProg = false;
let lettersUsed1 = [];
let lettersUsed2 = [];
let lettersUsedBoth = [];
let pngName = "";
let chosenName = "";
let domindex = 0;
//first & second digits of domino
let order = 0;
let chosen1 = 0;
let chosen2 = 0;
//values that define whether grid is full or no
let chosenValues = [];
let chosenNums = [];
let gridTiles = [
  ".domGrid1",
  ".domGrid2",
  ".domGrid3",
  ".domGrid4",
  ".domGrid5",
  ".domGrid6",
  ".domGrid7",
  ".domGrid8",
  ".domGrid9",
  ".domGrid10",
  ".domGrid11",
  ".domGrid12",
];

let dictionary = ["is", "be"];

let firstGo = true;
//indicates if a new tile can be placed
let blockPlaceTile = true;
let turns = 1;
let dominoesPlaced = 0;
let rotated = false;
let chosen1Temp = 0;
let chosen2Temp = 0;
let testExport = "testExport works!!!";
let score = 0;

//**DOM Shortcuts***//

let hallOfFame = document.querySelector(".hallOfFame");
let hallOfFameMessage = document.querySelector(".hallOfFameMessage");
let submitHOFBut = document.querySelector(".submitHOFBut");
let createWordGrid = document.querySelector(".createWordGrid");
let wordText = document.querySelector(".wordText");
let wordText1 = document.querySelector(".wordText1");
let wordText2 = document.querySelector(".wordText2");
let buttons1 = document.querySelector(".buttons1");
let buttons2 = document.querySelector(".buttons1");
let giveUp = document.querySelector(".giveUp");
let submit = document.querySelector(".submit");
let submit1 = document.querySelector(".submit1");
let submit2 = document.querySelector(".submit2");
let redo = document.querySelector(".redo");
let redo1But = document.querySelector(".redo1But");
let redo2But = document.querySelector(".redo2But");
let wordInstruct = document.querySelector(".wordInstruct");
let word1Instruct = document.querySelector(".word1Instruct");
let word2Instruct = document.querySelector(".word2Instruct");
let placeDomInstruct = "Select letter tiles below to make the word";
let chosenDom = document.querySelector(".chosenDom");
let reverseOrder = document.querySelector(".reverseOrder");
let instruction = document.querySelector(".instruction");
let instructionCenter = document.querySelector(".instructionCenter");
let scores = document.querySelector(".scores");

//***SET DISPLAY IN THE BEGINNING***//

hallOfFame.style["display"] = "none";
createWordGrid.style["display"] = "none";
document.querySelectorAll(".wordText").forEach((item) => {
  item.style["display"] = "none";
});
document.querySelector(".wordText1").classList.add("placeholder");
document.querySelector(".wordText2").classList.add("placeholder");
buttons1.style["display"] = "none";
buttons2.style["display"] = "none";

//***SCROLLING BEHAVIOURS***//

// This function scrolls the user to the top of the page
function scrollToTop() {
  console.log("Scroll to top working");
  window.scrollTo({
    top: 25,
    behavior: "smooth", // You can also use 'auto' or 'instant'
  });
}

//Scroll to just past first third of page
function scrollToMiddleThird() {
  const screenHeight = window.innerHeight;
  const scrollToPosition = screenHeight / 2; // Scroll to a position between 1/3 and 2/3 of the screen

  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
}

//Ensures focus on top of the screen after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
document.querySelector("html").style.scrollBehavior = "";

//***SET SCORES IN THE BEGINNING***//
console.log("title", document.querySelector("title"));
console.log("HOFTitle", document.querySelector(".HOFTitle"));

let averageScore = 0;
//check if any games played via length of scores array.
//If the array length is greater than zero, display the length otherwise display "games played" as "0"
let gamesPlayed = JSON.parse(localStorage.getItem("longGameScores"))
  ? JSON.parse(localStorage.getItem("longGameScores")).length
  : 0;
//**API CALL TO GET MINIMUM HALL OF FAME SCORE***//
//API to get minimum value
// Define the URL for the API endpoint
const apiUrl = "http://localhost:3000/minimums"; // Replace with your actual API URL
let minHOFScore; // Declare minHOFScore in a scope accessible to the entire program

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse response JSON
  })
  .then((responseData) => {
    // Handle the response data
    console.log("Response Data:", responseData);
    minHOFScore = responseData.minvalue[0].minvalue;
    console.log("minHOFScore", minHOFScore);

    // You can use minHOFScore here or assign it to other variables/functions
    // Example: myFunction(minHOFScore);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Fetch Error:", error);
    // Handle the error in your application as needed
  });
console.log("minHOFScore just after API", minHOFScore);

//score of last game played
let gameScore = 0;

//show a zero value for the game score if no games played
if (JSON.parse(localStorage.getItem("gameScore")) == null) {
  //ensure a zero appears in stats in the beginning if user hasn't played games
  gameScore = 0;
  localStorage.setItem("gameScore", JSON.stringify(0));
}

//calculate average score if any games played
function calcAverage() {
  if (JSON.parse(localStorage.getItem("longGameScores"))) {
    averageScore =
      JSON.parse(localStorage.getItem("longGameScores")).length != 0
        ? JSON.parse(localStorage.getItem("longGameScores")).reduce(
            (numa, numb) => numa + numb,
            0
          ) /
          JSON.parse(localStorage.getItem("longGameScores")).length.toFixed(0)
        : 0;
  } else {
    averageScore = 0;
  }
}

calcAverage();

//store average score in local storage
window.localStorage.setItem("averageScore", JSON.stringify(averageScore));

//***UPDATE SCORES***/

//Update Scores when givUp Button selected
function calcScore(gridValues) {
  for (let i = 0; i < gridValues.length; i++) {
    score += gridValues[i][0];
    score += gridValues[i][1];
  }
  //!!!important for getting score registered / in the HoF
  document.getElementById("score").value = score;
  //store score in local storage
  localStorage.setItem("gameScore", JSON.stringify(score));
}

//update scores in statistics after a game has been played
//longGameScores for first turn JSON.parse(localStorage.getItem("longGameScores")); after longGameScores in local storage
function updateScores() {
  let gameScore = JSON.parse(localStorage.getItem("gameScore"));
  console.log("gameScore", gameScore);
  //Add the latest score to the array of scores
  longGameScores =
    //check if longGameScores in local storage
    JSON.parse(localStorage.getItem("longGameScores"))
      ? //if not push latest score to array that isn't in local storage
        JSON.parse(localStorage.getItem("longGameScores")).concat([gameScore])
      : //otherwise push the latest score to the array that is in local storage
        [score];

  //Store the updated array in local storage
  localStorage.setItem("longGameScores", JSON.stringify(longGameScores));

  //define averageScore after change

  calcAverage();
  //amend stats message after score change
  //populate with last game score if that exists
  displayScoresInStatsPopup();
}

//**GENERAL DISPLAY FUNCTIONS***//
function addBlankLine() {
  instruction.style["margin-bottom"] = "1.5rem";
}

//***NAVIGATION REGION BUTTONS***//
function displayScoresInStatsPopup() {
  scores.innerHTML = `WorDominoes Game Score: <strong>${
    JSON.parse(localStorage.getItem("longGameScores"))
      ? JSON.parse(localStorage.getItem("longGameScores"))[
          JSON.parse(localStorage.getItem("longGameScores")).length - 1
        ]
      : 0
  }
  </strong><br><br>Games Played: <strong>${
    JSON.parse(localStorage.getItem("longGameScores")).length
  }</strong><br><br>Average Score: <strong>${averageScore.toFixed(
    0
  )}</strong><br/><br><a href="https://www.wordominoes.net">wordominoes.net</a>`;
}
displayScoresInStatsPopup();

//Ensures the active popup is displayed and remaining content hidden.
function displayPopup(inactivePopup, activePopup) {
  document.querySelector(`.${inactivePopup}`).style["display"] = "none";
  document.querySelector(".overallContainer").style["display"] = "none";
  document.querySelector(".overallContainer").style["z-index"] = "-1";
  document.querySelector(`.${activePopup}`).style["display"] = "inline-block";
}
function hidePopup(closedPopup) {
  document.querySelector(".overallContainer").style["display"] = "inline";
  document.querySelector(".overallContainer").style["z-index"] = "1";
  document.querySelector(`.${closedPopup}`).style["display"] = "none";
}

//Show Popup Content - Stats
document.querySelector(".stats").addEventListener("click", function () {
  displayPopup("helpContent", "statsContent");
});

//Close Button - Stats
document
  .querySelector(".closeButtonStats")
  .addEventListener("click", function () {
    hidePopup("statsContent");
  });

//Show Popup Content - Help
document.querySelector(".help").addEventListener("click", function () {
  displayPopup("statsContent", "helpContent");
});

//Close Button - Help
document
  .querySelector(".closeButtonHelp")
  .addEventListener("click", function () {
    hidePopup("helpContent");
  });

//Generate a Random Number within the range of the dominoes available
function randomNumberDom() {
  return Math.abs(Math.floor(Math.random() * (dominoes.length - 1)));
}

//generate first domino hand
if (firstGo) {
  for (let i = 0; i < 4; i++) {
    const randDomino = dominoes[randomNumberDom()];
    dominoHand.push(randDomino);
    dominoes.splice(dominoes.indexOf(randDomino), 1);
    dominoesUsed.push(randDomino);
  }
  //Flag that it isn't the user's first turn
  firstGo = false;
}

//displayDominoes
for (let i = 0; i < dominoHand.length; i++) {
  //No domino has yet been selected so all four displayed
  selectedDomino = false;
  //dominoes set up as objects in game setup. The key is the domino name. The value is the amount of dominoes on each side.
  domHandKeys.push(...Object.keys(dominoHand[i]));

  //domino image name and its style
  let pngName =
    "<img src = Images/" +
    domHandKeys[i] +
    '.png  style="width:30px;height:60px;">';
  //assign domino image and style to domino in hand to display domino
  if (document.querySelector(dominoHandDisplayClasses[i]))
    document.querySelector(dominoHandDisplayClasses[i]).innerHTML = pngName;
}
function initialDisplayChangeAfterDominoSelected() {
  document.querySelector(".instructionCenter").innerHTML =
    "Now make two words with the same amount of letters as the domino dots so you can place this domino";
  //remove rows from grid
  createWordGrid.style["grid-template-rows"] = "1.5rem 3rem";
  createWordGrid.style["grid-template-columns"] = "1fr 1fr";
  document.querySelector(".wordText1").style["display"] = "inline-block";
  redo1But.style["display"] = "inline-block";
  document.querySelector(".buttons1").style["display"] = "inline-block";
  word1Instruct.style["display"] = "inline-block";
  document.querySelector(".wordText1").innerHTML = placeDomInstruct;
  document.querySelector(".wordText2").style["display"] = "none";
  document.querySelector(".wordText2").style["backgroundColor"] = "none";
  document.querySelector(".wordText2").style["visibility"] = "hidden";
  document.querySelector(".instruction").style["display"] = "none";
  document.querySelector(".wordText1").style["display"] = "inline-block";
  document.querySelector(".word2Instruct").style["display"] = "none";
  document.querySelector(".wordText2").style["display"] = "none";
  document.querySelector(".giveUp").style["display"] = "inline-block";
  document.querySelector(".wordText2").style["display"] = "none";
  document.querySelector(".submit1").style["display"] = "inline-block";
  document.querySelector(".wordText2").classList.add("placeholder");
  document.querySelector(".wordText").style["background-color"] = "#ABABAB";
  document.querySelector(".wordText2").innerHTML =
  "Select letter tiles below to make the word";
}

//user selects domino

//get selectedDominoValue/
let selDomValue = function () {
  for (let j = 0; j < dominoHand.length; j++) {
    if (document.querySelector(dominoHandDisplayClasses[j]))
      //check if a domino has been selected from the hand by a user
      document
        .querySelector(dominoHandDisplayClasses[j])
        .addEventListener("click", function () {
          //ensure not rotated as latest trigger for rotation("secondWordValid") set to "false"
          secondWordValid = false;
          //layout changes to enable word creation
          initialDisplayChangeAfterDominoSelected();
          //Create array of word lengths from domino for each side
          domHandValues.push(...Object.values(dominoHand[j]));
          //domino name
          chosenKey.push(...Object.keys(dominoHand[j]));
          dominoHand.splice(j, 1);
          domKey = String(chosenKey);
          chosen1 = String(domHandValues[0])[0];
          chosen2 = String(domHandValues[0])[1];
          document.querySelector(
            ".word1Instruct"
          ).innerHTML = `Make a Word With ${chosen1} Letters`;
          if (rotated == false) {
            chosenName =
              "<img src = Images/" +
              domKey +
              '.png style="width:60px;height:120px;">';
          } else {
            chosenName =
              "<img src = Images/" +
              domKey +
              '.png style="width:60px;height:120px;transform:rotate(180deg)">';
          }
          document.querySelector(".chosenDom").innerHTML = chosenName;
          document.querySelector(".chosenDom").style["display"] =
            "inline-block";
          document.querySelector(".handLetters").style["display"] =
            "inline-block";
          document.querySelector(dominoHandDisplayClasses[j]).style["display"] =
            "none";

          document.querySelector(
            ".word1Instruct"
          ).innerHTML = `Make a word with ${chosen1} letters`;

          document.querySelector(
            ".word2Instruct"
          ).innerHTML = `Make a word with ${chosen2} letters`;

          showLetters();

          scrollToMiddleThird();

          selectedDomino = true;
        });
  }
  chosenValues.push(chosen1);
  chosenValues.push(chosen2);
};

selDomValue();

//generate first letter hand
function randomNumberLet() {
  return Math.abs(Math.floor(Math.random() * letters.length) - 1);
}

for (let i = 0; i < 15; i++) {
  let randLetter = randomNumberLet();
  letterHand.push(letters[randLetter]);
  letters.splice(randLetter, 1);
}
console.log("letterHandin beginning", letterHand);
console.log("letters after splice", letters);

//populate letter tiles
function showLetters() {
  for (let i = 0; i < letterHand.length; i++) {
    document.querySelector(tiles[i]).innerHTML = `${letterHand[i]}`;
    document.querySelector(tiles[i]).classList.remove("inactive");
  }
}

//Make Word 1st field

makeFirstWord();

function makeFirstWord() {
  wordText1 = "";

  for (let i = 0; i < 15; i++) {
    if (document.querySelector(tiles[i]))
      console.log("doesn't contain inactive");

    document.querySelector(tiles[i]).addEventListener("click", function () {
      if (!document.querySelector(tiles[i]).classList.contains("inactive")) {
        if (wordNumber == 1) {
          document.querySelector(".wordText1").classList.remove("placeholder");
          wordText1 += letterHand[i];
          lettersUsed1.push(tiles[i]);
          document.querySelector(".wordText1").innerHTML = wordText1;
          document.querySelector(".buttons1").style["display"] = "inline-block";
          document.querySelector(".createWordGrid").style["display"] =
            "inline-block";

          console.log(
            "wordText1 after created",
            document.querySelector(".wordText1").innerHTML
          );
          document.querySelector(".instructionCenter").innerHTML =
            "Now make two words with the same amount of letters as the domino dots so you can place this domino";

          // document.querySelector(tiles[i]).style["display"] = "none";
          document.querySelector(tiles[i]).classList.add("inactive");
        }
      }
    });
  }
}
redo1();

//redo first word
function redo1() {
  console.log("redo1 running");
  document.querySelector(".redo1But").addEventListener("click", function () {
    console.log("redo clicked");
    document.querySelector(".wordText1").classList.add("placeholder");
    document.querySelector(".wordText1").innerHTML =
      "Select letter tiles below to make the word";
    document.querySelector(
      ".word1Instruct"
    ).innerHTML = `Make a word with ${chosen1} letters`;

    lettersUsed1.forEach((item) =>
      document.querySelector(`${item}`).classList.remove("inactive")
    );
    wordText1 = "";
    lettersUsed1 = [];
  });
}

//Create 2nd Word

console.log("wordNumber in function two", wordNumber);
wordText2 = "";

for (let i = 0; i < 15; i++) {
  if (document.querySelector(tiles[i]))
    document.querySelector(tiles[i]).addEventListener("click", function () {
      if (!document.querySelector(tiles[i]).classList.contains("inactive")) {
        if (wordNumber == 2) {
          wordText2 += letterHand[i];
          document.querySelector(".wordText2").classList.remove("placeholder");
          lettersUsed2.push(tiles[i]);
          console.log("lettersUsed2");
          document.querySelector(".wordText2").innerHTML = wordText2;
          document.querySelector(".buttons2").style["display"] = "inline-block";

          document.querySelector(tiles[i]).classList.add("inactive");
          //if undo display all tiles, reset everything

          //check if answer 1 submitted
        }
      }
    });
}

redo2();
function redo2() {
  document.querySelector(".redo2But").addEventListener("click", function () {
    document.querySelector(
      ".word2Instruct"
    ).innerHTML = `Make a word with ${chosen2} letters`;
    document.querySelector(".wordText2").classList.add("placeholder");
    document.querySelector(".wordText2").innerHTML =
      "Select letter tiles below to make the word";

    console.log("lettersused2 in function for it", lettersUsed2);
    //wordText2 = "";

    lettersUsed2.forEach((item) =>
      document.querySelector(`${item}`).classList.remove("inactive")
    );
    wordText2 = "";
    lettersUsed2 = [];
    wordNumber = 2;
  });
}

//Word API from Wiktionary

//Word1

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var parser = new DOMParser();
    doc = parser.parseFromString(this.responseText, "text/xml");

    doc = parser.parseFromString(this.responseText, "text/xml");

    if (
      (this.responseText.length != 14 ||
        dictionary.includes(document.querySelector(".wordText1").innerHTML)) &&
      document.querySelector(".wordText1").innerHTML.length == chosen1
    ) {
      firstWordValid = true;
      document.querySelector(".word1Instruct").innerHTML = "Valid Word";
      document.querySelector(".buttons1").style["display"] = "none";
      document.querySelector(".wordText2").style["display"] = "inline-block";
      document.querySelector(".wordText2").style["visibility"] = "visible";
      document.querySelector(".wordText2").classList.add("placeholder");

      wordNumber = 2;
    } else if (
      document.querySelector(".wordText1").innerHTML.length !== Number(chosen1)
    ) {
      document.querySelector(
        ".word1Instruct"
      ).innerHTML = `The word doesn't have the right amount of letters. It needs ${chosen1} letters. Try Again.`;
      document.querySelector(".wordText1").innerHTML = "";
      lettersUsed1.forEach((item) =>
        document.querySelector(`${item}`).classList.remove("inactive")
      );
      wordText1 = "";
      lettersUsed1 = [];
      wordNumber = 1;
      document.querySelector(".word2Instruct").style["display"] = "none";
    } else {
      firstWordValid = false;
      document.querySelector(".word1Instruct").innerHTML =
        "Not a Valid Word. Try Again.";
      wordText1.innerHTML = "Select letter tiles below to make the word";
      document.querySelector(".wordText1").classList.add(".placeholder");

      document.querySelector(".wordText1").innerHTML = "";
      lettersUsed1.forEach((item) =>
        document.querySelector(`${item}`).classList.remove("inactive")
      );
      wordText1 = "";
      lettersUsed1 = [];
      wordNumber = 1;
      console.log("wordNumber", wordNumber);
    }
  }
});

console.log("firstWord", firstWord);

if (document.querySelector(".submit1"))
  document.querySelector(".submit1").addEventListener("click", function () {
    firstWord = document.querySelector(".wordText1").value;
    console.log("firstWord after 1st defined", firstWord);
    console.log("submit1 clicked");
    wordText1 = 0;
    wordNumber = 2;
    //make text for 2nd word appear
    document.querySelector(
      ".word2Instruct"
    ).innerHTML = `Make a word with ${chosen2} letters`;
    document.querySelector(".word2Instruct").style["display"] = "Inline-block";
    document.querySelector(".wordText2").style["background-color"] = "#ABABAB";

    xhr.open(
      "GET",
      `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${
        document.querySelector(".wordText1").innerHTML
      }`
    );
    xhr.setRequestHeader(
      "X-RapidAPI-Key",
      "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695"
    );
    xhr.setRequestHeader("X-RapidAPI-Host", "lingua-robot.p.rapidapi.com");

    xhr.send(data);
  });

//API Submit 2nd word
const data2 = null;

const xhr2 = new XMLHttpRequest();
xhr2.withCredentials = true;

xhr2.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    var parser = new DOMParser();
    doc = parser.parseFromString(this.responseText, "text/xml");

    doc = parser.parseFromString(this.responseText, "text/xml");

    if (
      (this.responseText.length != 14 ||
        dictionary.includes(document.querySelector(".wordText2").innerHTML)) &&
      document.querySelector(".wordText2").innerHTML.length == chosen2
    ) {
      secondWordValid = true;
      scrollToTop();

      document.querySelector(".word1Instruct").style["display"] = "none";
      document.querySelector(".redo").style["display"] = "none";
      document.querySelector(".submit").style["display"] = "none";
      wordText.style["display"] = "none";
      document.querySelector(".wordText2").style["display"] = "none";
      word2Instruct.style["display"] = "none";
      //wordText2.style["display"] = "none";
      createWordGrid.style["display"] = "none";

      document.querySelector(".instructionCenter").innerHTML =
        "<strong>Congratulations, you won a tile! <br><br>Click on a space in the domino grid on the top to place your tile. Remember: dominoes can only be placed next to each other if they have the same number of dots on their connecting sides.<br><br><p>To rotate, click on the domino above.</p></strong>";
      reverseOrder.style["flex-direction"] = "column-reverse";
      reverseOrder.style["margin-top"] = "-0.8rem";
      chosenDom.style["margin-bottom"] = "-1.5rem";

      document.querySelector(".buttons2").style["display"] = "none";
      //document.querySelector(".rotate").style["display"] = "inline-block";
      document.querySelector(".handLetters").style["display"] = "none";

      console.log("secondWordValid", secondWordValid, secondWord);
      console.log("letterHand before splice", letterHand);
      for (let i = 0; i < lettersUsed1.length; i++) {
        letterHand.splice(
          letterHand.indexOf(document.querySelector(lettersUsed1[i]).innerHTML),
          1
        );
      }
      console.log("letterhand 1 after splice", letterHand);
      for (let i = 0; i < lettersUsed2.length; i++) {
        letterHand.splice(
          letterHand.indexOf(document.querySelector(lettersUsed2[i]).innerHTML),
          1
        );
      }
      console.log("letterhand 2 after splice", letterHand);

      //selectDomGrid();
      //reset for user to be able to place 1st tile
      wordNumber = 1;
      //flag to ensure domino can't be placed twice
      blockPlaceTile = false;
    } else if (
      document.querySelector(".wordText2").innerHTML.length !== Number(chosen2)
    ) {
      console.log(
        "wordtext1length, chosen1.length",
        document.querySelector(".wordText2").innerHTML.length,
        chosen2
      );
      document.querySelector(
        ".word2Instruct"
      ).innerHTML = `The word doesn't have the right amount of letters. It needs ${chosen2} letters. Try Again.`;
      document.querySelector(".word2Instruct").style["display"] =
        "inline-block";
      document.querySelector(".wordText2").innerHTML = "";

      lettersUsed2.forEach((item) =>
        document.querySelector(`${item}`).classList.remove("inactive")
      );
      wordText2 = "";
      lettersUsed2 = [];
      wordNumber = 2;
    } else {
      secondWordValid = false;
      document.querySelector(".word2Instruct").innerHTML =
        "Not a Valid Word. Try Again.";
      document.querySelector(".wordText2").innerHTML = "";
      console.log("lettersused2 in function for it", lettersUsed2);
      wordText2 = "";

      lettersUsed2.forEach((item) =>
        document.querySelector(`${item}`).classList.remove("inactive")
      );
      lettersUsed2 = [];
      wordNumber = 2;
    }
  }
});
console.log("secondWord", secondWord);
if (document.querySelector(".submit2"))
  document.querySelector(".submit2").addEventListener("click", function () {
    //document.querySelector(".submit2").innerHTML = "Do word again"
    secondWord = document.querySelector(".wordText2").value;

    console.log("second Word after 1st defined", secondWord);
    console.log("submit2 clicked");
    wordText2 = 0;

    xhr2.open(
      "GET",
      `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${
        document.querySelector(".wordText2").innerHTML
      }`
    );
    xhr2.setRequestHeader(
      "X-RapidAPI-Key",
      "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695"
    );
    xhr2.setRequestHeader("X-RapidAPI-Host", "lingua-robot.p.rapidapi.com");

    xhr2.send(data2);
  });
//selectDomGrid();

for (let i = 0; i < gridTiles.length; i++) {
  if (document.querySelector(gridTiles[i]))
    document.querySelector(gridTiles[i]).addEventListener("click", function () {
      console.log("selectDomGrid running");
      console.log("blockPlaceTile", blockPlaceTile);
      if (blockPlaceTile == false) {
        currentGridValue = i;
        console.log("in in selectDomGrid", i);
        console.log("pngName", pngName);
        pushGridValues(currentGridValue);
      }
    });
}

if (document.querySelector(".chosenDom"))
  document.querySelector(".chosenDom").addEventListener("click", function () {
    if (secondWordValid == true) {
      console.log("rotated ==false", rotated == false);
      if (rotated == false) {
        console.log("rotated is true.chosendom html should change");
        //ensure the domKey is present or will show "image not found"
        if (domKey != "") {
          document.querySelector(".chosenDom").innerHTML =
            "<img src = Images/" +
            domKey +
            '.png style="width:60px;height:120px;transform:rotate(180deg)">';
        }
        document.querySelector(".chosenDom").style["display"] = "inline-block";
        chosen1Temp = chosen1;
        chosen2Temp = chosen2;
        chosen1 = chosen2Temp;
        chosen2 = chosen1Temp;
        rotated = true;
      } else {
        console.log("else statement rotated is false");
        rotated = false;
        if ((chosen1 = chosen2Temp)) {
          if (domKey != "") {
            document.querySelector(".chosenDom").innerHTML =
              "<img src = Images/" +
              domKey +
              '.png style="width:60px;height:120px;">';
          }
          chosen1 = chosen1Temp;
          chosen2 = chosen2Temp;
          rotated = false;
        }
      }
    }
  });

function pushGridValues(i) {
  currentGridValue = i;
  console.log("pushGridValues Running");
  console.log("i in pushGridValues", i);

  if (1 <= i && i <= 3) {
    console.log("tile not first or last");
    if (gridValueCompare.length < 4) {
      gridValueCompare.push(Number(gridValues[i - 1][1]));
      gridValueCompare.push(Number(chosen1));
      gridValueCompare.push(Number(chosen2));
      gridValueCompare.push(Number(gridValues[i + 1][0]));
      console.log("gridValueCompare between 0 and 3", gridValueCompare);
      i = "";
    }
  } else if (i == 4) {
    console.log("i is 4");
    gridValueCompare.push(Number(gridValues[i - 1][1]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i + 1][0]));
    console.log("gridValueCompare 4", gridValueCompare);
    i = "";
  } else if (i == 5) {
    console.log("i is 5");
    gridValueCompare.push(Number(gridValues[i - 1][1]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i + 1][1]));
    console.log("gridValueCompare 4", gridValueCompare);
    i = "";
  } else if (i == 6) {
    console.log("i is 6");
    gridValueCompare.push(Number(gridValues[i + 1][1]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i - 1][1]));
    console.log("gridValueCompare between 6", gridValueCompare);
    i = "";
  } else if (i == 7) {
    console.log("i is 7");
    gridValueCompare.push(Number(gridValues[i + 1][1]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i - 1][0]));
    console.log("gridValueCompare between 6 and 7", gridValueCompare);
    i = "";
  } else if (i == 8) {
    gridValueCompare.push(Number(gridValues[i + 1][1]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i - 1][0]));
    console.log("gridValueCompare between 6 and 9", i, gridValueCompare);
    i = "";
  } else if (i == 9) {
    gridValueCompare.push(Number(gridValues[i + 1][1]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i - 1][0]));
    console.log("gridValueCompare 9", i, gridValueCompare);
    i = "";
  } else if (i == 10) {
    gridValueCompare.push(Number(gridValues[i + 1][1]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i - 1][0]));
    console.log("gridValueCompare between 6 and 9", gridValueCompare);
    i = "";
  } else if (i == 0) {
    gridValueCompare.push(Number(gridValues[gridValues.length - 1][0]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i + 1][0]));
    console.log("i=0", gridValueCompare);
    i = "";
  } else if (i == gridValues.length - 1) {
    gridValueCompare.push(Number(gridValues[0][0]));
    gridValueCompare.push(Number(chosen1));
    gridValueCompare.push(Number(chosen2));
    gridValueCompare.push(Number(gridValues[i - 1][0]));
    console.log("i=11", gridValueCompare);
    i = "";
  }
  console.log("currentGridValue in push Grid Values", currentGridValue);

  evaluateGrid(currentGridValue);
}
console.log("dominoes placed", dominoesPlaced);
function evaluateGrid(i) {
  currentGridValue = i;
  console.log("currentGridValue in evaluate grid", currentGridValue);
  //Word Domination scenario - all tiles placed
  if (dominoesPlaced == gridTiles.length) {
    //...(Object.values(gridValues[9])) is 0  NOTE: doesn't work with [0]
    console.log("WordDomination!!!!!");
    let score = 0;
    for (let i = 0; i < gridValues.length; i++) {
      score += gridValues[i][0];
      score += gridValues[i][1];
    }
    score = score + 30;
    document.getElementById("score").value = score;
    score.value = score;
    console.log("scorevalue", score.value);
    instruction.style["display"] = "inline-block";
    document.querySelector(
      ".instruction"
    ).innerHTML = `Congratulations, You have achieved Word Domination! Your score is ${score}`;
    addBlankLine();
    instructionCenter.innerText = "WORD DOMINATION!!!";
    document.querySelector(".hallOfFame").style["display"] = "inline-block";
    updateScores();
    localStorage.setItem("gameScore", JSON.stringify(score));
    finishGameDisplay();
    document.querySelector(".chosenDom").style["display"] = "none";
    giveUp.style["display"] = "none";
    document.querySelector(".instruction").style["font-size"] = "2rem";
    console.log("updates made?");
  }
  //tile placed
  else if (
    (gridValueCompare[0] == 0 && gridValueCompare[3] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] && gridValueCompare[3] == 0) ||
    (gridValueCompare[2] == gridValueCompare[3] && gridValueCompare[0] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] &&
      gridValueCompare[2] == gridValueCompare[3])
  ) {
    console.log("tile successfully placed");
    document.querySelector(".instruction").style["display"] = "inline-block";
    document.querySelector(
      ".instruction"
    ).innerHTML = `Congratulations, you placed a tile!`;
    addBlankLine();

    giveUp.removeAttribute("hidden");
    displayTile(currentGridValue);
    //To stop rotation
    secondWordValid = false;
    gridValueCompare = [];

    gridValues[i][0] = Number(chosen1);
    gridValues[i][1] = Number(chosen2);
    console.log("new gridvalues", gridValues[i][0]);
    console.log("new gridvalues", gridValues[i][1]);
    firstGo = false;

    i = "";

    tilesPlaced = true;

    document.querySelector(".chosenDom").style["display"] = "none";
  } else {
    console.log(" no fits");
    document.querySelector(".instruction").innerHTML =
      "It looks like this tile doesn't fit, try somwhere else";
    gridValueCompare = [];
    gridValues[i][0] = 0;
    gridValues[i][1] = 0;
    tilesPlaced = false;
    i = "";

    for (let i = 0; i < gridTiles.length; i++) {
      document
        .querySelector(gridTiles[i])
        .addEventListener("click", function () {
          currentGridValue = i;

          pushGridValues(currentGridValue);
        });
    }
    //document.querySelector(gridTiles[i]).addEventListener("click", pushGridValues());
  }
}
//issue too many dominoes spliced only happens with wrong tile placed

//Doesn't contain other functions
function finishGameDisplay() {
  console.log("giveup button clicked");
  document.querySelector(".createWordGrid").style["z-index"] = "-1";
  document.querySelector(".createWordGrid").style["display"] = "none";
  document.querySelector(".createWordGrid").style["opacity"] = "none";
  document.querySelector(".handLetters").style["display"] = "none";
  document.querySelector(".wordText").style["display"] = "none";
  document.querySelector(".wordText1").style["display"] = "none";
  document.querySelector(".wordText2").style["display"] = "none";
  document.querySelector(".wordInstruct").style["display"] = "none";
  document.querySelector(".redo").style["display"] = "none";
  document.querySelector(".submit").style["display"] = "none";
  redo2But.style["display"] = "none";
  submit2.style["display"] = "none";
  word2Instruct.style["display"] = "none";
  chosenDom.style["display"] = "none";
  document.querySelector(".buttons").style["display"] = "none";
  document.querySelector(".domHand").style["display"] = "none";
  giveUp.style["display"] = "none";
  instruction.style["display"] = "inline-block";
}

function displayTile(i) {
  if (firstGo == false && blockPlaceTile == false) {
    let rotation = 0;
    let margin = 0;
    if (i <= 3 || (6 <= i && i <= 9)) {
      //determine rotation and display of tile depending on grid location
      if (i <= 3 || (6 <= i && i <= 9)) {
        rotation = rotated ? 90 : -90;
        margin = -15;
      } else if (4 <= i <= 5 || 10 <= i <= 11) {
        rotation = rotated ? 180 : 0;
      }
    }

    const rotationStyle = `style="width:30px;height:60px;transform:rotate(${rotation}deg);margin-top:${margin}px;"`;
    const imgSrc = `Images/${domKey}.png`;
    const pngNameGrid = `<img src="${imgSrc}" ${rotationStyle}>`;
    document.querySelector(gridTiles[i]).innerHTML = pngNameGrid;
    document.querySelector(".chosenDom").innerHTML = "";
    //name for chosenDom, ensure not impacted by rotation
    chosenName =
      "<img src = Images/" + domKey + '.png style="width:60px;height:120px;">';
    console.log("gridtilesi in displaytile", gridTiles[i]);
    newTilesDominoes();
    refillLetters();
    dominoesPlaced += 1;
    blockPlaceTile = true;
    domKey = "";
    rotated = false;
    chosen1 = chosen1;
    chosen2 = chosen2;
  }
}

//give new word tiles and domino after first go
function newTilesDominoes() {
  if (firstGo == false) {
    document.querySelector(".wordText").classList.add("placeholder");
    wordText1.innerHTML = "Select letter tiles below to make the word";
    document.querySelector(".wordText2").style["display"] = "none";

    let rand1 = randomNumberDom();
    if (dominoHand.length < 4) {
      dominoHand.push(dominoes[rand1]);
    }
    console.log(
      "dominoes length before refill splice",
      dominoes,
      dominoes.length
    );
    dominoes.splice(rand1, 1);
    //console.log("dominoes.indexOf(rand1)", dominoes.indexOf(rand1))
    console.log(
      "dominoes length before refill splice",
      dominoes,
      dominoes.length
    );
    // console.log("dominoes after splice add", dominoHand);
    for (let i = 0; i < dominoHand.length; i++) {
      //domHandKeys1.push(...Object.keys(dominoHand[i]));
      console.log(
        "key in pngNam New Dom Tiles",
        String(Object.keys(dominoHand[i]))
      );

      let pngName =
        "<img src = Images/" +
        String(Object.keys(dominoHand[i])) +
        '.png  style="width:30px;height:60px;">';

      document.querySelector(dominoHandDisplayClasses[i]).innerHTML = pngName;
      document.querySelector(dominoHandDisplayClasses[i]).style["display"] =
        "inline-block";

      document.querySelector(".instructionCenter").innerHTML =
        "Now select another domino above that will fit in the grid";
      //change the order of selected domino and instruction back
      reverseOrder.style["flex-direction"] = "column";
      reverseOrder.style["margin-top"] = "0";
      chosenDom.style["margin-bottom"] = "-5rem";
      document.querySelector(".wordText").style["display"] = "none";
      document.querySelector(".wordText2").style["display"] = "none";
      document.querySelector(".createWordGrid").style["display"] = "none";
    }
    blockPlaceTile = true;
  }
}
function refillLetters() {
  //make sure can start with empty letters from word
  letters1Used = [];
  letters2Used = [];

  let unallocatedTiles = 15 - letterHand.length;
  for (let i = 0; i < unallocatedTiles; i++) {
    let randLetter1 = randomNumberLet();
    letterHand.push(letters[randLetter1]);
    letters.splice(randLetter1, 1);

    secondWordValid = false;
  }
  for (let j = 0; j < tiles.length; j++) {
    document.querySelector(tiles[j]).innerHTML = `${letterHand[j]}`;
    document.querySelector(tiles[j]).style["display"] = "inline-block";
  }
  turns += 1;
  resetNextTurn();
}

function resetNextTurn() {
  console.log("resetNextTurn running");
  selectedDomino = false;
  document.querySelector(".wordText1").innerHTML = "";
  wordText1 = "";
  document.querySelector(".wordText2").innerHTML = "";
  wordText2 = "";
  document.querySelector(".word1Instruct").innerHTML = "";
  document.querySelector(".word2Instruct").innerHTML = "";
  wordText.classList.add("placeholder");
  //document.querySelector(".rotate").style['display']= "none";

  ///make sure not too many letters get removed
  lettersUsed1 = [];
  lettersUsed2 = [];
  //ensure selected domino is empty
  chosenKey = [];
  domHandValues = [];
  chosenDomIndex = 0;
  wordNumber = 1;
  //only compare latest letters
  gridValueCompare = [];
}

//The user has selected the giveUp button
if (document.querySelector(".giveUp"))
  console.log("minHOFScore in giveup", minHOFScore);
document.querySelector(".giveUp").addEventListener("click", function () {
  //After the giveUp button is clicked calculate the current score based on domino values in the grid.
  calcScore(gridValues);
  //add blank line below
  addBlankLine();

  document.querySelector(
    ".instructionCenter"
  ).innerHTML = `You Have Scored ${score} Points`;
  //Check if the score qualifies for the Hall of Fame
  updateScores();
  if (score >= minHOFScore && score > 0) {
    //Display the Hall of Fame Form
    document.querySelector(".hallOfFame").style["display"] = "inline-block";
  } else if (score < Number(JSON.parse(localStorage.getItem("minimum")))) {
    //If the user doesn't qualify for the Hall of Fame display message in instruction.
    instruction.innerHTML =
      "You have not made it into the Hall of Fame in this game. Better luck next time.";

    instruction.style["display"] = "inline-block";
  }
  //Update scores in statistics

  finishGameDisplay();
  //add a space line height
  document.querySelector(".instructionCenter").style["font-size"] = "1rem";
});

//Make HOF Form section disappear after button clicked.
submitHOFBut.addEventListener("click", function () {
  instruction.innerHTML = "You are now in the Hall of Fame!";
  createWordGrid.style["display"] = "none";
  hallOfFame.style["display"] = "none";
});
