let ulHeader = document.querySelector(".global-nav__primary-items")

let liViewPost = document.createElement("li");
liViewPost.classList.add("global-nav__primary-item");

let aViewPost = document.createElement("a");
aViewPost.setAttribute("target" , "_blank");
aViewPost.setAttribute("href","https://www.linkedin.com/my-items/saved-posts/");
aViewPost.classList.add("app-aware-link", "global-nav__primary-link");

let divOuter = document.createElement("div");
divOuter.classList.add("ivm-image-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let image = document.createElement("img");
image.setAttribute("id","image_saved")
image.setAttribute("src",chrome.runtime.getURL("icons/save.png"));

divInner.appendChild(image);
divOuter.appendChild(divInner);
aViewPost.appendChild(divOuter);

let spanViewPost = document.createElement("span");
spanViewPost.classList.add("t-12", "break-words", "block", "t-black--light", "t-normal", "global-nav__primary-link-text")
spanViewPost.innerHTML = "saved";

aViewPost.appendChild(spanViewPost);
liViewPost.appendChild(aViewPost);
ulHeader.appendChild(liViewPost);

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event){
    if(event.shiftKey && event.altKey && event.code === "KeyO"){
        aViewPost.click();
    }
}


// Create a SpeechRecognition object
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang = "en-in";

// Start speech recognition
speechRecognition.start();

// Handle speech recognition results
speechRecognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;

    console.log(event);

    if (transcript.trim().toLowerCase().includes("open post")) {
        aViewPost.click();
    }
};


speechRecognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    // Check if the error is "no-speech" and provide specific feedback to the user
    if (event.error === 'no-speech') {
        alert("No speech detected. Please speak louder or check your microphone.");
    } else {
        alert("Speech recognition error occurred. Please try again later.");
    }
};



// Restart speech recognition after it ends
speechRecognition.onend = () => {
    speechRecognition.start();
};