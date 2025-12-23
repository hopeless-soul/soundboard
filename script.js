const sounds = {
    correct: new Audio("./truth-detector-bassboosted.mp3"),
    wrong: new Audio("./lie-detector-meme.mp3"),
    brainDamage: new Audio("./shocked-sound-effect.mp3"),
};

sounds.correct.volume = 0.2;
sounds.wrong.volume = 1.0;
sounds.brainDamage.volume = 0.4;



function playSound(name) {
    const sound = sounds[name];
    if (!sound) {
        console.log('Invalid sound name: ' + name);
        return
    };

    sound.currentTime = 0;
    sound.play();
}

