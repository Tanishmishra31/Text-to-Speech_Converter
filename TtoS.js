let speech = new SpeechSynthesisUtterance(); // Create speech object
let voices = []; // Store all voices
let voiceSelect = document.querySelector("select"); // Dropdown


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); 
    speech.voice = voices[0]; 

   
    voiceSelect.innerHTML = "";

    
    voices.forEach((voice, i) => {
        let option = new Option(voice.name + " (" + voice.lang + ")", i);
        voiceSelect.add(option);
    });
};


voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
