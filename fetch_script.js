const verseChoose= document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", ()=>{
    const verse= verseChoose.value
    updateDisplay(verse)
})

function updateDisplay(verse){
    verse=verse.replace(" ", "").toLowerCase();
    const url= `${verse}.txt`;
    //call the fetch APi, pass the url- returns a promise. 
    //when a promise is resolved, it returns a response object which is handled with the .then() method
    fetch(url).then(response=>{

        //our handler throws an error if the response did not succeed
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        } 
        //response succeeds, handler fetches the response as text and returns the promise returned by response.text()
        return response.text();
    })
    //the promise returned by response.text() is resolved, 
    // the handler receives the text of the poem and displays it in the poemDisplay element
    .then(text=>{
        poemDisplay.textContent=text;
    })
    //catch any errors that might happen, and dispaly an error message in the poemDisplay element
    .catch((error)=>{
        poemDisplay.textContent=`Could not fetch verse: ${error}`}
    )};

    updateDisplay("Verse 1");
    verseChoose.value="Verse 1";


