var btntranslate = document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output")
 
var serverurl = "https://api.funtranslations.com/translate/minion.json"
 
function getTranslationurl(text) {
    return serverurl + "?" + "text=" + text
 }
 function errorHandler(error){
     console.log("error occured", error);
     alert("something is wrong with server");
 }
function clickHandler() {
     //outputdiv.innerText="keep quiet! " + txtInput.value;
     var inputText = txtInput.value;
     fetch(getTranslationurl(inputText))
        .then(response => response.json())
        .then(json => {
           var translatedText = json.contents.translated;
           outputdiv.innerText = translatedText;})
        .catch(errorHandler)
};
btntranslate.addEventListener("click", clickHandler );
