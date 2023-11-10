let speak = document.getElementById('speak');
let check = document.getElementById('check');
let textField = document.getElementById('text-field');
let number = 0;
let counter = true;
let score = 0
let scoreField  = document.getElementById('score').innerText = score;

//fixing ai voice bug

window.onload = function() {
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    let voices = window.speechSynthesis.getVoices();
    localStorage.setItem('word' + number, word);
    let a = localStorage.getItem('word' + number);
    let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google UK English Male";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9;
     window.speechSynthesis.speak(utterance);
        } 

setInterval(function() {
    let value = textField.value
    let a = localStorage.getItem('word' + number);
    if(value === a){
        counter = true;
         }else{
            counter = false
         }
},1)

 //says a random word the from database
    check.addEventListener('click', () => {
    number++
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    let voices = window.speechSynthesis.getVoices();
    localStorage.setItem('word' + number, word);
    let a = localStorage.getItem('word' + number);
    let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google UK English Male";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9;
     window.speechSynthesis.speak(utterance);
   
    if(counter != true){
        score += 1
    }
    scoreField  = document.getElementById('score').innerText ='missed ' + score + ' out of ' + number;
    console.log(score)
     textField.value = '';
})

//repeats the random word from database
speak.addEventListener('click', () => {
    let a = localStorage.getItem('word' + number);
    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google UK English Male";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9;
    window.speechSynthesis.speak(utterance);  
})