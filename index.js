


const input = document.querySelector("#input");
const output = document.querySelector("#output");



function getFirstCount(word){
    let newWord = []
    count
    for(let key of word){
        newWord.push(key)
        console.log(newWord)
    console.log(key);
    }
    return newWord.join("")
}
input.addEventListener("input",()=>{
    output.innerText =getFirstCount(input.value);
    //we can also use Event.target.value
    //currentTarget.value
});