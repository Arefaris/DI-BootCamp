let sentence = "The movie is not that bad, I like it"
//let sentence = "This movie is not so bad !"
//let sentence = "This dinner is bad !"
let wordNot = sentence.indexOf("not")
let wordBad = sentence.lastIndexOf("bad")
let new_sentence;

if (wordNot < wordBad && wordNot != -1 && wordBad != -1){
    new_sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3)
    console.log(new_sentence)
} else {
    console.log(sentence);
}