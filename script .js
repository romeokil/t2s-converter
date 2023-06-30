let speech=new SpeechSynthesisUtterance();

//ab wo jo select hai usme different voices dena hai.
let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    //initializing the first voice(or making it default)
    // speech.voice=voices[0];
 
    //inserting the name of different sounds present in the system in that select area
    voices.forEach((voice,i) => (voiceSelect.options[i]=new Option(voice.name,i)));
}

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})


//button pe eventlistener add kr diya hai ab jbbhi click krega tb wo jo text wala part ko bolega
document.querySelector("button").addEventListener("click",()=>{
     speech.text=document.querySelector("textarea").value;
     window.speechSynthesis.speak(speech);
})