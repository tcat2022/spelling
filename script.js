let speak = document.getElementById('speak')


speak.addEventListener('click', () => {
   let word = wordList[Math.floor(Math.random()*wordList.length)];
   let voices = window.speechSynthesis.getVoices();
   let utterance = new SpeechSynthesisUtterance(word);
   let desiredVoice = voices.find(function (voice) {
      return voice.name === "Google UK English Male";
    });
    utterance.voice = desiredVoice;
    utterance.rate = .8
    window.speechSynthesis.speak(utterance);
    console.log(voices)
})
