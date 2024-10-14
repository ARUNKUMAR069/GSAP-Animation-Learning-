

function breakTextIntoLetters(text){
    let h1 = document.querySelector("h1");
    let h1Text = h1.textContent;
    // text.content used to get the text inside the h1
    let splitted1Text = h1Text.split("")
    
    var clutteredText = "";
    splitted1Text.forEach((letter,index)=>{
        if(index<(Math.floor(h1Text.length/2))){
       clutteredText +=`<span class="leftletter">${letter}</span>`;
    }else{
        clutteredText +=`<span class="rightletter">${letter}</span>`;
    }
    })
    h1.innerHTML = clutteredText;
}

breakTextIntoLetters("Sheryians");
gsap.from(".leftletter",{
    y: 70,
    duration: 0.8,
    opacity: 0,
    delay: 0.2,
    stagger: 0.3,
});
gsap.from(".rightletter",{
    y: 70,
    duration: 0.8,
    opacity: 0,
    delay: 0.2,
    stagger: -0.3,
});
    