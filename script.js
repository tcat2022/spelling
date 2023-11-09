let speak = document.getElementById('speak');
let check = document.getElementById('check');
let textField = document.getElementById('text-field');
let number = 0;

//fixing ai voice bug
window.onload = function() {
    let utterance = new SpeechSynthesisUtterance('');
    window.speechSynthesis.speak(utterance);
        } 

 //says a random word the from database
    let clicked = false;
    check.addEventListener('click', () => {
    textField.value = '';
    clicked = true
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
})

//repeats the random word from database
speak.addEventListener('click', () => {
    if(clicked === false){
        return;
    }
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