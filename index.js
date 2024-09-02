buttons = document.querySelectorAll("button")

for(let i = 0; i < buttons.length; i++){
    let buttonId = buttons[i].id 
    
    switch (buttonId) {
        case "btn1":
            buttons[i].addEventListener("click", function(){
                window.location.assign("https://www.britannica.com/story/ada-lovelace-the-first-computer-programmer")
            })
            break;
        
        case "btn2":
            buttons[i].addEventListener("click", function(){
                window.location.assign("https://education.nationalgeographic.org/resource/worlds-first-computer-bug/")
            })
            break;

        case "btn3":
            buttons[i].addEventListener("click", function(){
                window.location.assign("https://home.cern/science/computing/birth-web")
            })
            break

        case "btn4":
            buttons[i].addEventListener("click", function(){
                window.location.assign("https://dev.to/dboatengx/history-of-javascript-how-it-all-began-92a")
            })
            break;

        case "btn5":
            buttons[i].addEventListener("click", function(){
                window.location.assign("https://www.quora.com/What-is-the-most-expensive-valuable-line-of-code-you-know-of")
            })
            break;





        default:
            break;
    }

}
