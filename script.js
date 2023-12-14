let speak = document.getElementById('speak');
let right = document.getElementById('right');
let missed = document.getElementById('li-container');
let check = document.getElementById('check');
let textField = document.getElementById('text-field');
let number = 1;
let counter = true;
let score = 0
let scoreField  = document.getElementById('score')
let completed = 0

window.onload = function() {
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    let voices = window.speechSynthesis.getVoices();
    localStorage.setItem('word' + number, word);
    let a = localStorage.getItem('word' + number);
    let index = wordList.indexOf(word);
    wordList.splice(index,1);
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

textField.addEventListener('keypress', (event) => {
  if (event.keyCode === 49) {
    event.preventDefault();
  }
});

document.body.addEventListener('click', function(){
  textField.focus();
})

    check.addEventListener('click', () => {
    number++
    completed++
    let word = wordList[Math.floor(Math.random()*wordList.length)];
    let voices = window.speechSynthesis.getVoices();
    localStorage.setItem('word' + number, word);
    let a = localStorage.getItem('word' + number);
    let index = wordList.indexOf(word);
    wordList.splice(index,1);
    console.log(index)
   let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google US English";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9;
     window.speechSynthesis.speak(utterance);

    if(counter != true){
        score += 1
      var p = document.createElement('p');
      var p1 = document.createElement('p');
      var p2 = document.createElement('p');
      p.textContent = number - 1 + '. ';
      p2.textContent =localStorage.getItem('word' + `${number - 1}`);
      p1.textContent = textField.value
      p1.classList.add('wrong')
      p.classList.add('black')
      p2.classList.add('correct')
      let div = document.createElement('div');
      div.classList.add('div')
      div.append(p,p1,p2)
      missed.append(div);
      p2.scrollIntoView(); 
    }else {
      var correct = document.createElement('p');
      var number1 = document.createElement('p');
      correct.textContent =localStorage.getItem('word' + `${number - 1}`);
      number1.textContent = number - 1 + '. ';
      let div = document.createElement('div');
      div.classList.add('div')
      div.append(number1,correct)
      missed.append(div);
      number1.classList.add('black')
      correct.classList.add('correct')
      correct.scrollIntoView();
    }
    let percentage = Math.floor(score/completed*100)
    right.innerText = `${100 - percentage}` + '%' + ' Right'
    scoreField  = document.getElementById('score').innerText ='Missed ' + score + ' out of ' + `${number - 1} `;
     textField.value = '';    
})

textField.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
  number++
  completed++
  let word = wordList[Math.floor(Math.random()*wordList.length)];
  let voices = window.speechSynthesis.getVoices();
  localStorage.setItem('word' + number, word);
  let a = localStorage.getItem('word' + number);
  let index = wordList.indexOf(word);
  wordList.splice(index,1);
  let utterance = new SpeechSynthesisUtterance(a);
  let desiredVoice = voices.find(function (voice) {
     return voice.name === "Google US English";
   });
   utterance.voice = desiredVoice;
   utterance.rate = .9;
   window.speechSynthesis.speak(utterance);
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
  let percentage = Math.floor(score/completed*100)
  right.innerText = `${100 - percentage}` + '%' + ' Right'
  scoreField  = document.getElementById('score').innerText ='Missed ' + score + ' out of ' + `${number - 1} `;
textField.value = '';
}
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

document.body.addEventListener('keypress', (event) => {
  if (event.keyCode == 49) {
    let a = localStorage.getItem('word' + number);
    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance(a);
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google US English";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9;
    window.speechSynthesis.speak(utterance);
  }})