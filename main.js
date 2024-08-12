const chatWindow = document.getElementById('chat-window')
const optionsContainer = document.getElementById('options-container')
let isTyping = false;

document.addEventListener("DOMContentLoaded",()=>{
    startGame()
})

const startGame = () => {
    const initialStory = {
        text: "Hi i'm kinda trapped. I need you help, They tried to kidnap me.",
        options: [
            { text: "Where are you.", nextStory: 1 , waitTime: 1000},
            { text: "Who is this?.", nextStory: 16 , waitTime: 1500}
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
