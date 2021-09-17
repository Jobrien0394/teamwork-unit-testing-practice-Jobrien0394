// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.
const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
const punctuation = ['!', '.', '?', ':', ',']

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end. */

function encodeVowelWord(word) {
  if (vowels.includes(word[0])) {
  return word + "-yay";
  }
}

// Write your unit tests here
const testVowelWords = {
  eat     :     "eat-yay",
  omelet  :  "omelet-yay",
  are     :     "are-yay",
  egg     :     "egg-yay",
  explain : "explain-yay",
  always  :  "always-yay",
  ends    :    "ends-yay",
  every   :   "every-yay",
  another : "another-yay",
  under   :   "under-yay",
  island  :  "island-yay",
  elegant : "elegant-yay",
};
  // encode as yay
  console.assert(encodeVowelWord("eat") === "eat-yay", {
    expected: "eat-yay",
    result: encodeVowelWord("eat")
  })
  
  console.assert(encodeVowelWord("omelet") === "omelet-yay", {
    expected: "omelet-yay",
    result: encodeVowelWord("omelet")
  })

  console.assert(encodeVowelWord("are") === "are-yay", {
    expected: "are-yay",
    result: encodeVowelWord("are")
  })
/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
*/
function encodeConsonantWord(word) {
  let consonants = "";
  let baseWord = "";

  for (let i = 0; i < word.length; i++){
    if (vowels.includes(word[0])) {
      return;
    }
    else if (vowels.includes(word[i])){
      consonants = word.slice(0,i);
      baseWord = word.slice(i);
      break;                // break kicks out of loop
    }
  }
  return baseWord + "-" + consonants + "ay";
  // let pref = word.match (vowels)
  // let suff = word.match (vowels, "")
  // return suff+ "-" + pref + "ay";
}

// Write your unit tests here
const testSimpleConsonantWords = {
  latin  :   "atin-lay",
  banana :  "anana-bay",
  happy  :   "appy-hay",
  duck   :    "uck-day",
  dopest :  "opest-day",
  me     :      "e-may",
  too    :     "oo-tay",
  will   :    "ill-way",
  moist  :   "oist-may",
  wet    :     "et-way",
  real   :    "eal-ray",
  simple :  "imple-say",
  say    :     "ay-say",
  bagel  :   "agel-bay",
  you    :     "ou-yay",
};

// check for consonant word and result
console.assert(encodeConsonantWord("latin") === "atin-lay", {
  expected: "atin-lay",
  result: encodeConsonantWord("latin")
})
console.assert(encodeConsonantWord("banana") === "anana-bay", {
  expected: "anana-bay",
  result: encodeConsonantWord("banana")
})
console.assert(encodeConsonantWord("happy") === "appy-hay", {
  expected: "appy-hay",
  result: encodeConsonantWord("happy")
})

/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/

function encodeWord(word) {
  if (vowels.includes(word[0])) {
    return encodeVowelWord(word)
  }
  else {
    return encodeConsonantWord(word)
  }
 // return (word.match(vowels)[0] === "") ?encodeVowelWord(word):encodeConsonantWord(word);
}

// Write your unit tests here
const testClusteredConsonantWords = {
  cheers : "eers-chay",
  shesh  :  "esh-shay",
  smile  :  "ile-smay",
  string : "ing-stray",
  thanks : "anks-thay",
  trash  :  "ash-tray",
  stupid : "upid-stay",
  glove  :  "ove-glay",
};

console.assert(encodeWord("cheers") === "eers-chay", {
  expected: "eers-chay",
  result: encodeWord("cheers")
})

console.assert(encodeWord("shesh") === "esh-shay", {
  expected: "esh-shay",
  result: encodeWord("shesh")
})

console.assert(encodeWord("smile") === "ile-smay", {
  expected: "ile-smay",
  result: encodeWord("smile")
})

console.assert(encodeWord("string") === "ing-stray", {
  expected: "ing-stray",
  result: encodeWord("string")
})
/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/

function encodeText(text) {
// Split the given text and store each word in an array
  let arrayOfWords = text.split(" ");
  // create an empty array to store our pig-latined words
  let result = [];
  // for loop, loops over the array of words we created 
  for (let index = 0; index < arrayOfWords.length; index++) {
    // current word in the array
   let currentWord = arrayOfWords[index];
    // call our encodeWord function on each word of our array and store it in a new variable
    let encodedWord = encodeWord(currentWord);
    // Push that pig-latined word onto our storage array
    result.push(encodedWord);
  }
  // Join our array back up to be returned as a string sentence AND return it!
  console.log(result.join(" "));
  return result.join(" ");

  
  //  function encode(word) {
//    let i = word.(punctuation);
//    if(i !== null) i = i[0];
//    else i = ""
//    return encodeWord(word.replace(punctuation)) + i;
//  }
//  return text.split("").map( (word) => {return encode(word)} ).join("");
}
console.assert(encodeText("this is a string") === "is-thay is-yay a-yay ing-stray", {
  expected: "is-thay is-yay a-yay ing-stray",
  result: encodeText("this is a string")
})
// Write your unit tests here
  document.getElementById("submit").addEventListener("click",
  testFunction = function(event) {
    event.preventDefault();
    newComplaint = document.getElementById("complaint_input").value;
    document.getElementById("complaint_output").value=encodeText
    (newComplaint);
  });

// function testFunction(dict, f){
//   let pid=f.name;
//   let timeStamp=function(){
//       let newDate=new Date();
//       return `[${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDay()} ${newDate.getSeconds()}.${newDate.getMilliseconds()}]`
//   }
//   for (i in dict){
//       let v=dict[i];
//       let result="";result=f(i);
//       let message="_( "+pid+" "+timeStamp()+" ) >> ";
//       message = message + (result===v?"pass":"fail: "+i+" is {"+result+"}"+" ; expected {"+v+"}");
//       console.log(message);
//   }
// }

// const encodedSentence = {
//   "Here is the input."  : "ere-hay is-yay e-thay input-yay.",
//   "No more of this!" : "o-Nay ore-may of-yay is-thay!" ,
// };
// testFunction(encodedSentence, encodeText);


//   document.getElementById("submit").addEventListener("click",
//    someFunction = function(event){
//     event.preventDefault(); // this is for the browser to try and “submit” the form to a URL
//     console.log(event+ " _[" + (new Date()).toISOString() + "]" + " Hello World");
//     thisNewComplaint=document.getElementById("complaint_input").value;
//     document.getElementById("complaint_output").value=encodeText(thisNewComplaint);
//    });