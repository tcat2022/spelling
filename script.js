let speak = document.getElementById('speak');
let missed = document.getElementById('li-container');
let check = document.getElementById('check');
let textField = document.getElementById('text-field');
let number = 1;
let counter = true;
let score = 0
let scoreField  = document.getElementById('score')

window.onload = function() {
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    let voices = window.speechSynthesis.getVoices();
    localStorage.setItem('word' + number, word);
    let a = localStorage.getItem('word' + number);
    let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google US English";
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

    check.addEventListener('click', () => {
    number++
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    let voices = window.speechSynthesis.getVoices();
    localStorage.setItem('word' + number, word);
    let a = localStorage.getItem('word' + number);
    let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google US English";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9;
     window.speechSynthesis.speak(utterance);
   console.log(voices)
    if(counter != true){
        score += 1
      var p = document.createElement('p');
      p.textContent = number - 1 + '. ' + localStorage.getItem('word' + `${number - 1}`);
      missed.appendChild(p);
      p.classList.add('wrong')
      p.scrollIntoView();
    }else {
      var p1 = document.createElement('p');
      p1.textContent = number - 1 + '. ' +  localStorage.getItem('word' + `${number - 1}`);
      missed.appendChild(p1);
      p1.classList.add('correct')
      p1.scrollIntoView();
    }
    scoreField  = document.getElementById('score').innerText ='Missed ' + score + ' out of ' + `${number - 1}`;
    console.log(score)
     textField.value = '';
})

//repeats the random word from database
speak.addEventListener('click', () => {
  speak.classList.add('animation');
  setTimeout(function() {speak.classList.remove('animation')},100);
    let a = localStorage.getItem('word' + number);
    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google US English";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9;
    window.speechSynthesis.speak(utterance);  
})