
let inputText = document.querySelector(".input-text");
let wordCount = document.querySelector(".word-count");
let charCount = document.querySelector(".character-count");
let paraCount = document.querySelector(".paragraph-count");
let sentenceCount = document.querySelector(".sentence-count");

inputText.addEventListener("input",()=>{
    //character count
    charCount.textContent = inputText.value.length;


    //remove white space from input text
    let textTrim = inputText.value.trim();

    //count words
    wordCount.textContent = textTrim.split(/\s+/).filter((item)=> item).length;

    //count sentence
    sentenceCount.textContent = textTrim.split(".").filter((item)=> item).length;
    //paragraph count
    paraCount.textContent = textTrim.split("\n\n").filter((item)=> item).length
})
