let speak = document.getElementById('speak')
let check = document.getElementById('check')
let textField = document.getElementById('text-field')
//fixing ai voice bug
window.onload = function() {
    Random()
        } 
    function Random() {
        let word = wordList[Math.floor(Math.random()*wordList.length)];
        let voices = window.speechSynthesis.getVoices();
        let utterance = new SpeechSynthesisUtterance(word);
        let desiredVoice = voices.find(function (voice) {
           return voice.name === "Google UK English Male";
         });
         utterance.voice = desiredVoice;
         utterance.rate = .9
         window.speechSynthesis.speak(utterance);
         console.log(voices)
    }
  //repeats the random word from database
speak.addEventListener('click', () => {
    Random()
})
check.addEventListener('click', () => {
textField.value = '';
Random()
})