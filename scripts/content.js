let ulHeader = document.querySelector("ul.global-nav__primary-items");

let liViewPosts = document.createElement("li");


liViewPosts.classList.add("global-nav__primary-item");


let aViewPost = document.createElement("a");

aViewPost.setAttribute("target", "_blank");
aViewPost.setAttribute("href", "https://www.linkedin.com/my-items/saved-posts");
aViewPost.classList.add("app-aware-link", "global-nav__primary-link");

let divOutter = document.createElement("div");
divOutter.classList.add("ivm-imge-view-model", "global-nav__icon-ivm");

let divInner = document.createElement("div");
divInner.classList.add("ivm-view-attr__img-wrapper", "display-flex");

let img = document.createElement("img");
img.setAttribute("src", chrome.runtime.getURL("icons/save.png"));

divInner.appendChild(img);
divOutter.appendChild(divInner);
aViewPost.appendChild(divOutter);


let spanViewPosts = document.createElement("span");
spanViewPosts.classList.add("t-12", "break-words", "block", "t-black--light", "t-narmalglobal-nav__primary-link-text");
spanViewPosts.innerHTML = "Saved";

aViewPost.appendChild(spanViewPosts);
liViewPosts.appendChild(aViewPost);

ulHeader.appendChild(liViewPosts);
document.addEventListener("keypress", handlekbd);
function handlekbd(event){
if(event.shiftKey && event.altKey && event.code === 'keyO'){
    aViewPost.click();
}

}
let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;

speechRecognition.lang = "en-in";
speechRecognition.start();

speechRecognition.onresult = (event) => {
    
      let transcript = event.results[event.resultIndex][0].transcript;

        console.log(event);
        if(transcript.trim().toLowerCase().includes("open post")){
        aViewPost.click();
    }

};

