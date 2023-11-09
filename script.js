let check = document.getElementById('check')


check.addEventListener('click', () => {
    var word = wordList[Math.floor(Math.random()*wordList.length)];
    document.getElementById("example").innerText = word;
})
