let speak = document.getElementById('speak')

window.onload = function() {
    let voices = window.speechSynthesis.getVoices();
    let utterance = new SpeechSynthesisUtterance('test');
    let desiredVoice = voices.find(function (voice) {
       return voice.name === "Google UK English Male";
     });
     utterance.voice = desiredVoice;
     utterance.rate = .9
     window.speechSynthesis.speak(utterance);
     console.log(voices)
  };

speak.addEventListener('click', () => {
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
})
