let worsArray = ["apple", "pear", "banana", "melon", "kiwi"]

function makeAllCaps(worsArray){
    return new Promise((resolve, reject) => {
        let every = words.every((word) => typeof word === "string");
        if (every){
            resolve(words.map((word) => word.toUpperCase()));
        } else {
            reject("")
        }
    })
}

makeAllCaps(worsArray)
.then(upperCaseWords => {
    console.log(upperCaseWords)
    return sortWords(upperCaseWords)
})
.then(sorte)
function sortWords(words) {
    return new Promise((res, rej)=>{
        if(words.length > 4){
            res(words.sort())
        }
        else {
            rej("Error: Array is less than 4 items")
        }
    })
}

///


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


const toJs = (jsonString) => {
    return Promise((res, rej) => {
        try {
            let obj = JSON.parse(jsonString)
            if(Object.keys(obj).length === 0){
                rej("Error: this is an empty json object")
            }
            res(obj)
        } catch (error){
            rej("Error: this is not a valid JSON format")
        }
    })
}

const toMorse = (morseJS) => {
    const userStr = "hello"

    if(!userStr){
        return Promise.reject("Error: no input provided")
    }

    const arrStr = userStr.toLowerCase().split("");

    const returnArr = arrStr.map(char => {
        if (char in morseJS){
            return morseJS[char]
        }
        else {
            throw new Error(`Char ${char}`)
        }
        
    })
    return Promise.resolve(returnArr)
}
toJs(morse)
.then((result) => {
    console.log(result)
})