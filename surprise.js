const surpriseSection = document.getElementById('surprise');


const randomTime = Math.floor(Math.random()*7)*1000;
console.log(randomTime);

setTimeout( () => 
    surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime );