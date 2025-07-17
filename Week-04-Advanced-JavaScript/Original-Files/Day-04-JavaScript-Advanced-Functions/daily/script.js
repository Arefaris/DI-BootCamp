function makeAllCaps(arr){
 return new Promise((res, rej)=>{
    if (arr.every(el => typeof el === "string")){
        res(arr.map(element => {
            return element.toUpperCase()
        }))
    }else {
        rej("Not every element of the array is a string")
    }
 })
}

function sortWords(arr) {
    return new Promise((res, rej)=>{
        if (arr.length > 4){
            res(arr.toSorted())
        }else {
            rej("Legnth of the array is less then 4 elements")
        }
    })
}

// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

    
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))


//2nd

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(json){
    
    return new Promise((res, rej)=>{
        let obj = JSON.parse(morse)
        if (Object.keys(obj).length === 0){
            rej("empty object")
        }else{
            res(obj)
        }
    })
}

function toMorse(morseJS){
    
    let userWord = prompt().toLowerCase()
    
    let arrOfUserWords = userWord.split("")

    return new Promise((res, rej)=>{
        let letters = Object.keys(morseJS)
        
        for (let i=0; i < arrOfUserWords.length; i++){
            let char = arrOfUserWords[i]
            let index = letters.indexOf(char)

            if (index !== -1){
                arrOfUserWords[arrOfUserWords.indexOf(char)] = morseJS[char]
            }else {
                rej(`the promise rejects because the character ${arrOfUserWords[index]} doesn't exist in the morse javascript object`)
            }

            res(arrOfUserWords)
        }
        
    })
}

function joinWord(morseTranslation){
     morseTranslation.forEach(element => {
        let p = document.createElement("p")
        p.textContent = element
        document.body.appendChild(p)
     });
}

toJs(morse).then(val => toMorse(val)).then(val => joinWord(val)).catch(e => console.log(e))