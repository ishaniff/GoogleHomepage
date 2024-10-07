// let searchPrompt; i thought i needed this

document.getElementById("submit").onclick = function(){
    searchPrompt = document.getElementById("searchPrompt").value
    window.open(`https://www.google.com/search?q=${searchPrompt}`, '_blank')
}


 /* this part doesnt fully function as i want it to not sure why..
 if you clear the input prior to searching it works but after it does not i put this instead of a 
 lucky button because i didnt want a blank or no lucky button*/
document.getElementById("clearSearch").onclick = function(){
    searchPrompt.value = null
}


// document.getElementById("submit").addEventListener('keypress')
//     if (e.key === 'Enter') function(){
//     searchPrompt = document.getElementById("searchPrompt").value
//     window.open(`https://www.google.com/search?q=${searchPrompt}`, '_blank') }

/* this took like 3 hours to get functioning..... so many old/bad advices for this and then
i also was trying to do it with my submit id for like forty minutes and then lastly when i
was able to get it to register the enter key i didnt have .value at the end of the search prompt
so it was searching google for object html input elements */
document.getElementById("searchPrompt").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    window.open(`https://www.google.com/search?q=${searchPrompt.value}`, '_blank')
  }
});