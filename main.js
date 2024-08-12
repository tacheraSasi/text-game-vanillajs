const chatWindow = document.getElementById('chat-window')
const optionsContainer = document.getElementById('options-container')
let isTyping = false;

document.addEventListener("DOMContentLoaded",()=>{
    startGame()
})

const startGame = () => {
    const initialStory = {
        text: "You receive a frantic message from a girl named Anna. She's trapped in a room and needs your help to escape.",
        options: [
            { text: "Ask her where she is.", nextStory: 1 , waitTime: 2000},
            { text: "Tell her to hide.", nextStory: 2 , waitTime: 2500}
        ]
    };

    showStory(initialStory, 'anna');
};

const getStoryById = (id)=>{
    return stories.find(story=> story.id === id)
}

const showStory = (story,sender)=>{
    isTyping = false
    // typing(isTyping)
    
    
    const messageElement = document.createElement("div")
    messageElement.classList.add("message",sender)

    //timeout for the typing animation
    messageElement.innerHTML = "<i class='typing-text'><b>typing...</b></i>"
    messageElement.style.background = "transparent"
    setTimeout(()=>{
        messageElement.style.backgroundColor = "var(--incoming-chat-bg)"
        messageElement.innerText = story.text

        optionsContainer.innerHTML = ""
    
        story.options.forEach(option => {
            const button = document.createElement("button")
            button.classList.add("option-button")
            button.innerText = option.text
    
            button.addEventListener("click",()=>{
                const nextStory = getStoryById(option.nextStory)
                const messageContainer = document.createElement("div")
                messageContainer.classList.add("message-container")
    
                const userMessage = document.createElement("div")
                userMessage.classList.add("message","user")
                userMessage.innerText = option.text
                
                messageContainer.appendChild(userMessage)
                chatWindow.appendChild(messageContainer)
                console.log(messageContainer)
                chatWindow.scrollTop = chatWindow.scrollHeight
                isTyping = true
                // typing(isTyping)
                optionsContainer.innerHTML = ""
                
                setTimeout(()=> {
                    showStory(nextStory, 'anna')
    
                }, option.waitTime)//a different wait time for before anna starts to respond
            })
            optionsContainer.appendChild(button)
        })
    },story.waitTime)
    
    chatWindow.appendChild(messageElement)
    chatWindow.scrollTop = chatWindow.scrollHeight


}
function showOptions(optionsContainer) {
    
}
function typing(isTyping){
    const typing = document.createElement('span')
    typing.classList.add("typing-text")
    typing.innerHTML = "<i><b>typing...</b></i>"

    chatWindow.appendChild(typing)

    if (isTyping) {
        typing.style.display = "block"
    }else{
        typing.style.display = "none"

    }

}