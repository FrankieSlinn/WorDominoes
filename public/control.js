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
let domHandKeys = [];
//keys for second time dommino chosen
let domHandKeys1 = [];
let chosenKey = [];
let domKey = "";
let domHandFirst = [];
let doms = [".dom1", ".dom2", ".dom3", ".dom4"];
let chosenDomIndex = 0;
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
let chosenValue = 0;
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
let hallOfFame = document.querySelector(".hallOfFame");
let hallOfFameMessage = document.querySelector(".hallOfFameMessage");
let submitHOFBut = document.querySelector(".submitHOFBut");
let textSubmit = document.querySelector(".textSubmit"); 
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
let wordInstruct = document.querySelector(".word1Instruct");
let word1Instruct = document.querySelector(".word1Instruct");
let word2Instruct = document.querySelector(".word2Instruct");
let placeDomInstruct = "Select letter tiles below to make the word";

console.log("placeDomInstruct", placeDomInstruct);
console.log("wordText2", wordText2)

//Initial domino allocation 5
console.log(letters.length);
console.log("dominoes length", dominoes.length);


//To Do
//Resolve min score
//Format HOF
//Delete DB Items

//Set up score so compatible with backend. Test value

//score = document.getElementById("score");
//score.value = parseInt(50);3+
//console.log("score value", score.value);

//display at beginning

hallOfFame.style["display"] = "none";
textSubmit.style["display"] = "none";
document.querySelectorAll(".wordText").forEach(item=>{item.style["display"] = "none"});
document.querySelector(".wordText1").classList.add("placeholder");
document.querySelector(".wordText2").classList.add("placeholder");
buttons1.style["display"]="none";
buttons2.style["display"]="none"

//Ensures focus on top of the screen after refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
document.querySelector('html').style.scrollBehavior = ''; 

function randomNumberDom() {
  return Math.abs(Math.floor(Math.random() * (dominoes.length - 1)));
}

//generate first domino hand
console.log("dominoHand", dominoHand);

console.log("generation running");
//subtracted 1 to select starting from zero
if (firstGo == true) {
  let rand1 = dominoes[randomNumberDom()];
  console.log("rand1", rand1);
  dominoHand.push(rand1);
  dominoes.splice(dominoes.indexOf(rand1), 1);
  dominoesUsed.push(rand1);

  console.log("dominohand after rand1", dominoHand);
  console.log("dominoes after rand1", dominoes);
  console.log("after rand1", dominoes.length);
  let rand2 = dominoes[randomNumberDom()];
  console.log("rand2", rand2);
  dominoHand.push(rand2);
  dominoes.splice(dominoes.indexOf(rand2), 1);

  console.log("after rand2", dominoes.length);
  let rand3 = dominoes[randomNumberDom()];
  console.log("rand3", rand3);
  dominoHand.push(rand3);
  dominoes.splice(dominoes.indexOf(rand3), 1);

  console.log("after rand3", dominoes.lengh);
  let rand4 = dominoes[randomNumberDom()];
  dominoHand.push(rand4);
  dominoes.splice(dominoes.indexOf(rand4), 1);

  //dominoesUsed.forEach((item)=>dominoes.splice(dominoesUsed.indexOf(item), 1));
  console.log;

  console.log("after rand4", dominoes.length);

  console.log("dominoHand", dominoHand);

  //

  console.log("dominoes", dominoes);
  console.log("dominoes.length after first splice", dominoes.length);
  //console.log("dominoesrandomnumber", dominoes[rand]);

  console.log("dominoHand after first generated", dominoHand);
  firstGo = false;
}

//displayDominoes
for (let i = 0; i < dominoHand.length; i++) {
  selectedDomino = false;
  domHandKeys.push(...Object.keys(dominoHand[i]));
  console.log(
    "dominohandlength, dominohand after objectkeypush to keys",
    dominoHand.length,
    dominoHand
  );
  domHandKeys.map((i) => i.key);

  let pngName =
    "<img src = Images/" +
    domHandKeys[i] +
    '.png  style="width:30px;height:60px;">';

  if(document.querySelector(doms[i]))document.querySelector(doms[i]).innerHTML = pngName;
  console.log("doms[i].innerHTML before queryselector", doms[i].value);
  // pngNames.push(pngName);
  console.log("pngName", pngName);
  console.log("chosenName", chosenName);
}
//user selects domino

//get selectedDominoValue/
let selDomValue = function () {
  
    for (let j = 0; j < dominoHand.length; j++) {
      console.log("selDomValue running");
      console.log("dominoHand before selection", dominoHand);
      if(document.querySelector(doms[j]))document.querySelector(doms[j]).addEventListener("click", function () {
        if (selectedDomino == false) {
        //remove rows from grid
        textSubmit.style["grid-template-rows"] = "1.5rem 3rem";
        textSubmit.style["grid-template-columns"] = "1fr 1fr";
        console.log("wordText2 in function", wordText2)
        


        //ensure not rotated
        secondWordValid = false;
        //document.querySelector(".text1Submit").style["display"] = "inline-block";
       document.querySelector(".wordText1").style["display"] = "inline-block";
       redo1But.style["display"] = "inline-block";
       document.querySelector(".buttons1").style["display"] = "inline-block";
       word1Instruct.style["display"] = "inline-block";
        document.querySelector(".wordText1").innerHTML = placeDomInstruct;
        document.querySelector(".wordText2").style["display"] = "none";
        document.querySelector(".wordText2").style["backgroundColor"] = "none";
        document.querySelector(".wordText2").style["visibility"] = "hidden";
        document.querySelector(".instruction").style["display"] = "none";
        chosenDomIndex = j;
        domHandValues.push(...Object.values(dominoHand[j]));
        chosenKey.push(...Object.keys(dominoHand[j]));
        console.log("chosenKey", chosenKey);
        chosenValue = Object.values(dominoHand[j]);
        console.log("dominoHand[j] in selDomValue", dominoHand[j]);
        console.log("dominoes", dominoes);
        console.log("index to splice", dominoes.indexOf(dominoHand[j]));
        //dominoes.splice(dominoes.indexOf(dominoHand[j]),1);
        dominoHand.splice(chosenDomIndex, 1);
        console.log(
          "dominoHand, dominoHand.length",
          dominoHand,
          dominoHand.length
        );

        console.log("dominoes", dominoes);
        console.log("dominoHand after first selection", dominoHand);

        //console.log("value of dominoHand after splice chosen from index", Object.values(dominoHand[j]));

        console.log("domHandValues", domHandValues);
        console.log(
          "domHandVlaues tostraing",
          toString(domHandValues.join(","))
        );
        domKey = String(chosenKey);
        //prevent rotation
        secondWordValid = false;
        chosen1 = String(domHandValues[0])[0];
        chosen2 = String(domHandValues[0])[1];
        document.querySelector(
          ".word1Instruct"
        ).innerHTML = `Make a Word With ${chosen1} Letters`;

        document.querySelector(".wordText1").style["display"] = "inline-block";
        document.querySelector(".word2Instruct").style["display"] = "none";
        document.querySelector(".wordText2").style["display"] = "none";
        document.querySelector(".giveUp").style["display"] = "inline-block";
        //domHandFirst.concat.apply = [...domHandValues];
        console.log("chosen1, chosen2", chosen1, chosen2);
        chosenValue = String(chosen1 + chosen2);
        console.log("domKey", domKey);
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
        document.querySelector(".chosenDom").style["display"] = "inline-block";
        document.querySelector(".handLetters").style["display"] =
          "inline-block";
        document.querySelector(doms[j]).style["display"] = "none";
        //doms.splice(j,1);
        //dominoHand.splice(indexOf(j,1));
        document.querySelector(
          ".word1Instruct"
        ).innerHTML = `Make a word with ${chosen1} letters`;
        document.querySelector(".wordText2").style["display"] = "none";
        document.querySelector(".submit1").style["display"] = "inline-block";
        document.querySelector(
          ".word2Instruct"
        ).innerHTML = `Make a word with ${chosen2} letters`;
        document.querySelector(".wordText2").innerHTML=  "Select letter tiles below to make the word";
        document.querySelector(".wordText2").classList.add("placeholder");

        showLetters();
        //function printChosenOne(){
        //  return chosen1};
       // document.querySelector(".wordText2").style["display"] = "inline-block";
        document.querySelector(".wordText").style["background-color"] =
          "#ABABAB";
        showLetters();
        document.querySelector(".presentLet").innerHTML = "";

        selectedDomino = true;
        }
      });
    }
    chosenValues.push(chosen1);
    chosenValues.push(chosen2);
  }


console.log("chosenValues", chosenValues);
selDomValue();
//selectDomino();
console.log("dominoHand outside function", dominoHand);
console.log(
  "dominovalues outside function, chosenvalue",
  chosenNums[0],
  chosenValue
);
console.log("chosen1 outside function", chosen1);
//console.log("printChosenOne", printChosenOne());
console.log("domHandValuesnew", domHandValues);
console.log("domHandValuestostring"), String(domHandValues[0]);

console.log("selecteddom", selectedDomino);

console.log("selecteddom after function", selectedDomino);

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
  }
}

//Make Word 1st field

makeFirstWord();

function makeFirstWord() {
  wordText1 = "";

  console.log("wordNumber in 1 first line", wordNumber);

  for (let i = 0; i < 15; i++) {
    if(document.querySelector(tiles[i]))document.querySelector(tiles[i]).addEventListener("click", function () {
      if (wordNumber == 1) {
        console.log("tile clicked");

        console.log("wordNumber in 1", wordNumber);
        console.log("firts word letterHand1[i]", letterHand[i]);
        document.querySelector(".wordText1").classList.remove("placeholder");
        wordText1 += letterHand[i];
        lettersUsed1.push(tiles[i]);
        document.querySelector(".wordText1").innerHTML = wordText1;
        document.querySelector(".buttons1").style["display"] = "inline-block";
        document.querySelector(".textSubmit").style["display"] = "inline-block";                     

        
        console.log(
          "wordText1 after created",
          document.querySelector(".wordText1").innerHTML
        );
        document.querySelector(".presentLet").innerHTML =
          "Now make two words with the same amount of letters as the domino dots so you can place this domino";

        document.querySelector(tiles[i]).style["display"] = "none";
      }
    });
  }
}
redo1();

//redo first word
function redo1() {
  console.log("redo1 running");
  document.querySelector(".redo1But").addEventListener("click", function () {
    console.log("redo clicked")
    document.querySelector(".wordText1").classList.add("placeholder")
    document.querySelector(".wordText1").innerHTML = "Select letter tiles below to make the word";
    
    lettersUsed1.forEach(
      (item) =>
        (document.querySelector(`${item}`).style["display"] = "inline-block")
    );
    wordText1 = "";
    lettersUsed1 = [];
  });
}

//Create 2nd Word

console.log("wordNumber in function two", wordNumber);
wordText2 = "";
for (let i = 0; i < 15; i++) {
  if(document.querySelector(tiles[i]))document.querySelector(tiles[i]).addEventListener("click", function () {
    if (wordNumber == 2) {
      wordText2 += letterHand[i];
      document.querySelector(".wordText2").classList.remove("placeholder");
      lettersUsed2.push(tiles[i]);
      console.log("lettersUsed2");
      document.querySelector(".wordText2").innerHTML = wordText2;
      document.querySelector(".buttons2").style["display"] = "inline-block";

      document.querySelector(tiles[i]).style["display"] = "none";
      //if undo display all tiles, reset everything

      //check if answer 1 submitted
    }
  });
}

redo2();
function redo2() {
 document.querySelector(".redo2But").addEventListener("click", function () {
    document.querySelector(".wordText2").classList.add("placeholder")
    document.querySelector(".wordText2").innerHTML = "Select letter tiles below to make the word";
   
    console.log("lettersused2 in function for it", lettersUsed2);
    //wordText2 = "";

    lettersUsed2.forEach(
      (item) => (document.querySelector(item).style["display"] = "inline-block")
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
    //console.log(this.responseText);
    console.log("xhr responsetext", xhr.responseText);
    console.log("xhr responsetext", xhr.responseText[0]);
    var parser = new DOMParser();
    doc = parser.parseFromString(this.responseText, "text/xml");

    doc = parser.parseFromString(this.responseText, "text/xml");
    if (
      this.responseText.length !== 14 &&
      document.querySelector(".wordText1").innerHTML.length == chosen1
    ) {
      firstWordValid = true;
      document.querySelector(".word1Instruct").innerHTML = "Valid Word";
      document.querySelector(".buttons1").style["display"] = "none";
      document.querySelector(".wordText2").style["display"] = "inline-block";
      document.querySelector(".wordText2").style["visibility"] = "visible";
      document.querySelector(".wordText2").classList.add("placeholder");
      console.log("lettersUsed1", lettersUsed1);
      console.log("firstWordValid", firstWordValid, wordText1);
      console.log("letterhand before remove", letterHand);
      //for(let i =0; i<lettersUsed1.length; i++){

      //letters.splice((letters.indexOf(document.querySelector(lettersUsed1[i]).innerHTML)),1);

      // console.log("text.indexof(lettersUsed1[i])", text.indexof(lettersUsed1[i]))
      //};
      wordNumber = 2;
    } else if (
      document.querySelector(".wordText1").innerHTML.length !== Number(chosen1)
    ) {
      console.log(
        "wordtext1length, chosen1.length",
        document.querySelector(".wordText1").innerHTML.length,
        chosen1
      );
      document.querySelector(
        ".word1Instruct"
      ).innerHTML = `The word doesn't have the right amount of letters. It needs ${chosen1} letters. Try Again.`;
      document.querySelector(".wordText1").innerHTML = "";
      lettersUsed1.forEach(
        (item) =>
          (document.querySelector(`${item}`).style["display"] = "inline-block")
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
      lettersUsed1.forEach(
        (item) =>
          (document.querySelector(`${item}`).style["display"] = "inline-block")
      );
      wordText1 = "";
      lettersUsed1 = [];
      wordNumber = 1;
      console.log("wordNumber", wordNumber);
    }
  }
});

console.log("firstWord", firstWord);

if(document.querySelector(".submit1"))document.querySelector(".submit1").addEventListener("click", function () {
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
    //console.log(this.responseText);
    console.log("xhr responsetext", xhr.responseText);
    //console.log("xhr responsetext", xhr.responseText[0]);
    var parser = new DOMParser();
    doc = parser.parseFromString(this.responseText, "text/xml");

    doc = parser.parseFromString(this.responseText, "text/xml");
    console.log("this.responseText", this.responseText);
    if (
      this.responseText.length !== 14 &&
      document.querySelector(".wordText2").innerHTML.length == chosen2
    ) {
      secondWordValid = true;
      //document.querySelector(".word2Instruct").innerHTML =
        "Congratulations, you completed a tile!";
        document.querySelector(".word1Instruct").style["display"] = "none";
        document.querySelector(".redo").style["display"] = "none";
        document.querySelector(".submit").style["display"] = "none";
        wordText.style["display"] = "none";
        document.querySelector(".wordText2").style["display"] = "none";
        word2Instruct.style["display"] = "none";
        //wordText2.style["display"] = "none";
        textSubmit.style["display"] = "none";


      document.querySelector(".presentLet").innerHTML =
        "<strong>Congratulations, you won a tile! <br><br>Click on a space in the domino grid on the top to place your tile. Remember: dominoes can only be placed next to each other if they have the same number of dots on their connecting sides.<br><br><p>To rotate, click on the domino below.</p></strong>";
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
      lettersUsed2.forEach(
        (item) =>
          (document.querySelector(`${item}`).style["display"] = "inline-block")
      );
      wordText1 = "";
      lettersUsed2 = [];
      wordNumber = 2;
    } else {
      secondWordValid = false;
      document.querySelector(".word2Instruct").innerHTML =
        "Not a Valid Word. Try Again.";
      document.querySelector(".wordText2").innerHTML = "";
      console.log("lettersused2 in function for it", lettersUsed2);
      wordText2 = "";

      lettersUsed2.forEach(
        (item) =>
          (document.querySelector(item).style["display"] = "inline-block")
      );
      lettersUsed2 = [];
      wordNumber = 2;
    }
  }
});
console.log("secondWord", secondWord);
if(document.querySelector(".submit2"))document.querySelector(".submit2").addEventListener("click", function () {
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
  if(document.querySelector(gridTiles[i]))document.querySelector(gridTiles[i]).addEventListener("click", function () {
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

if(document.querySelector(".chosenDom"))document.querySelector(".chosenDom").addEventListener("click", function () {
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
function evaluateGrid(i) {
  currentGridValue = i;
  console.log("currentGridValue in evaluate grid", currentGridValue);
  if (
    ((gridValueCompare[0] == 0 && gridValueCompare[3] == 0) ||
      (gridValueCompare[0] == gridValueCompare[1] &&
        gridValueCompare[3] == 0) ||
      (gridValueCompare[2] == gridValueCompare[3] &&
        gridValueCompare[0] == 0) ||
      (gridValueCompare[0] == gridValueCompare[1] &&
        gridValueCompare[2] == gridValueCompare[3])) &&
    dominoesPlaced == gridTiles.length
  ) {
    //...(Object.values(gridValues[9])) is 0  NOTE: doesn't work with [0]
    console.log("WordDomination!!!!!");
    let score = 0;
    for (let i = 0; i < gridValues.length; i++) {
      score += gridValues[i][0];
      score += gridValues[i][1];
    }
    score = score + 30;
    score.value = score;
    console.log("scorevalue", score.value);
    localStorage.setItem("score", JSON.stringify(score));
    document.querySelector(
      ".instruction"
    ).innerHTML = `Congratulations, You have achieved Word Domination! Your score is ${score}`;
    document.querySelector(".chosenDom").style["display"] = "none";
    document.querySelector(".instruction").style["font-size"] = "2rem";
  } else if (
    (gridValueCompare[0] == 0 && gridValueCompare[3] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] && gridValueCompare[3] == 0) ||
    (gridValueCompare[2] == gridValueCompare[3] && gridValueCompare[0] == 0) ||
    (gridValueCompare[0] == gridValueCompare[1] &&
      gridValueCompare[2] == gridValueCompare[3])
  ) {
    console.log("tile successfully placed");
    document.querySelector(".instruction").style["display"] =
    "inline-block";
    document.querySelector(".instruction").innerHTML =
      "Congratulations, you placed a tile!";

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
          console.log("selectDomGrid in evaluate gridrunning");

          // gridTilesi = gridTiles[i];
          //gridValuesi = gridValues[i];
          //console.log("dominoHand in selectDomGrid after splice", dominoHand);

          console.log("in in selectDomGrid", i);

          pushGridValues(currentGridValue);
        });
    }
    //document.querySelector(gridTiles[i]).addEventListener("click", pushGridValues());
  }
}
//issue too many dominoes spliced only happens with wrong tile placed

//Doesn't contain other functions

function displayTile(i) {
  if (firstGo == false && blockPlaceTile == false) {
    console.log("currentGridValue in display tile", currentGridValue);

    console.log("in in selectDomGrid", currentGridValue);
    console.log("domTile selected");
    console.log("gridTiles i", currentGridValue);
    if (i <= 3 || (6 <= i && i <= 9)) {
      console.log("i ,=3", i <= 3);
      console.log("6<=i<=9", 6 <= i <= 9);
      console.log("i for rotation", i);
      console.log("pngName with rotation");
      if (rotated == false) {
        console.log("dom on grid hor rotated is false");
        pngNameGrid =
          "<img src = Images/" +
          domKey +
          '.png  style="width:30px;height:60px;transform:rotate(-90deg);margin-top:-15px;">';
        console.log("tiles on top, bottom", pngName);
      } else {
        pngNameGrid =
          "<img src = Images/" +
          domKey +
          '.png  style="width:30px;height:60px;transform:rotate(90deg);margin-top:-15px;">';
      }
      //document.querySelector(doms[i]).innerHTML = "";
    } else if (4 <= i <= 5 || 10 <= i <= 11) {
      console.log("unrotate pngname, i", i);
      if (rotated == false) {
        pngNameGrid =
          "<img src = Images/" +
          domKey +
          '.png  style="width:30px;height:60px;">';
        console.log("tiles on sides", pngName);
      } else {
        pngNameGrid =
          "<img src = Images/" +
          domKey +
          '.png  style="width:30px;height:60px;transform:rotate(180deg)">';
      }
    }
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
    console.log("new Tiles Dominoes running");
    document.querySelector(".wordText").classList.add("placeholder");
    wordText1.innerHTML = "Select letter tiles below to make the word";
    document.querySelector(".wordText2").style["display"] = "none";
    

    let rand1 = randomNumberDom();

    //ranDomino = dominoes[rand1]-1;

    //console.log("dominoes after spliced chosen dominoe", dominoes)
    // console.log("chosenDomIndex", chosenDomIndex);
    // console.log("dominoHand next turn before push",dominoHand);
    console.log("rand1", rand1);
    console.log(
      "String(Object.keys(dominoes[rand1]))",
      String(Object.keys(dominoes[rand1]))
    );
    // console.log("dominoes[rand1]", dominoes[rand1]);
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
      // console.log("dominoHandlength", dominoHand.length);
      // console.log("dominoHand", dominoHand);
      // console.log("doms[i]", doms[i]);
      let pngName =
        "<img src = Images/" +
        String(Object.keys(dominoHand[i])) +
        '.png  style="width:30px;height:60px;">';
      console.log("doms[i], i", doms[i], i);
      document.querySelector(doms[i]).innerHTML = pngName;
      document.querySelector(doms[i]).style["display"] = "inline-block";
      // console.log("html in each domino in hand after new dom allocated", document.querySelector(`${doms[i]}`).innerHTML)}

      // console.log("doms.length", doms.length)
      //console.log("dominoesrandomnumber", dominoes[rand1]);
      //  console.log("dominoHand in new tiles after splice", dominoHand);
      console.log("domHandKeys1", domHandKeys1);

      console.log(
        "documentqueryselectordoms[chosendomindex])",
        document.querySelector(doms[chosenDomIndex]).innerHTML
      );
      document.querySelector(".presentLet").innerHTML =
        "Now select another domino above that will fit in the grid";
      document.querySelector(".wordText").style["display"] = "none";
      document.querySelector(".wordText2").style["display"] = "none";
      document.querySelector(".textSubmit").style["display"] = "none";
    }
    blockPlaceTile = true;
  }
}
function refillLetters() {
  //make sure can start with empty letters from word
  letters1Used = [];
  letters2Used = [];
  console.log("letters length before refill", letters.length);
  console.log("letterhand length before refill", letterHand, letterHand.length);
  let unallocatedTiles = 15 - letterHand.length;
  for (let i = 0; i < unallocatedTiles; i++) {
    console.log("letter allocation running");
    let randLetter1 = randomNumberLet();
    // console.log("randLetter1", randLetter1)
    letterHand.push(letters[randLetter1]);
    // console.log("letterHand after refill", letterHand);
    letters.splice(randLetter1, 1);
    // console.log("letters length after refill", letters.length)
    // console.log("letterHand after first turn", letterHand);
    // console.log("i in refillletters",i)
    //reset rotation
    secondWordValid = false;
  }
  for (let j = 0; j < tiles.length; j++) {
    //  console.log("j in innerhtml for letters", j);
    //  console.log("letterhand j", letterHand[j]);
    // console.log("tiles[j]", tiles[j]);
    document.querySelector(tiles[j]).innerHTML = `${letterHand[j]}`;
    document.querySelector(tiles[j]).style["display"] = "inline-block";
  }
  //console.log("letters length after refill, letters", letters.length, letters);
  turns += 1;
  console.log("turn", turns);
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
if(document.querySelector(".giveUp"))document.querySelector(".giveUp").addEventListener("click", function () {
  document.querySelector(".textSubmit").style["z-index"] = "-1";
  document.querySelector(".textSubmit").style["display"] = "none";
  document.querySelector(".textSubmit").style["opacity"] = "none";
  document.querySelector(".handLetters").style["display"] = "none";
  document.querySelector(".wordText").style["display"] = "none";
  document.querySelector(".wordText1").style["display"] = "none";
  document.querySelector(".wordText2").style["display"] = "none";
  document.querySelector(".wordInstruct").style["display"] = "none";
  document.querySelector(".buttons").style["display"] = "none";
  document.querySelector(".domHand").style["display"] = "none";
  giveUp.style["display"] = "none";
  let score = 0;
  for (let i = 0; i < gridValues.length; i++) {
    score += gridValues[i][0];
    score += gridValues[i][1];
  }
  console.log("score after calculated", score);
  console.log("score from min", Number(JSON.parse(localStorage.getItem("minimum"))))

  if(score >=Number(JSON.parse(localStorage.getItem("minimum")))&&score>0){
    console.log("hall of fame displayed")
   document.querySelector(".hallOfFame").style["display"] = "inline-block";
  }
  let scoreForm = document.getElementById("score");
  scoreForm.value = score;
  console.log("score.value", scoreForm.value);
  localStorage.setItem("score", JSON.stringify(score));


  document.querySelector(
    ".presentLet"
  ).innerHTML = `You Have Scored ${score} Points`;
  document.querySelector(".presentLet").style["font-size"] = "1.5rem";
});
//Make HOF Form section disappear after button clicked.
submitHOFBut.addEventListener("click", function(){
  console.log("submitHOFBut clicked");
  textSubmit.style["display"] = "none";
  hallOfFame.style["display"] = "none";
})

console.log("minimum test at source", JSON.parse(localStorage.getItem("minimum")))
