let speak = document.getElementById('speak');
let check = document.getElementById('check');
let textField = document.getElementById('text-field');
let number = 0;
let counter = false;
let score = 0
let scoreField  = document.getElementById('score').innerText = score;

//fixing ai voice bug
window.onload = function() {

        } 

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
     let value;
     setInterval(function() {
        value = textField.value
        if(value === a){
            counter = true;
             }else{
                counter = false
             }
    },1)   
    if(counter == true){
        score++
    }
    scoreField  = document.getElementById('score').innerText = score;
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