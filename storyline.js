const stories = [
    {
        id: 1,
        text: "Anna: I'm in an old warehouse on 5th Street. The door is locked and I can hear them coming!",
        waitTime:2500,
        options: [
            { text: "Ask her to look for a key.", nextStory: 3, waitTime:2000 },
            { text: "Tell her to find another way out.", nextStory: 4, waitTime:2000 }
        ]
    },
    {
        id: 2,
        text: "Anna: I don't think I can hide for long! Please, what should I do?",
        waitTime:2500,
        options: [
            { text: "Ask her to look for a key.", nextStory: 3, waitTime:2000 },
            { text: "Tell her to find another way out.", nextStory: 4, waitTime:1500 }
        ]
    },
    {
        id: 3,
        text: "Anna: I found a key! Trying it now...",
        waitTime:2500,
        options: [
            { text: "Wait.", nextStory: 5, waitTime:2000 }
        ]
    },
    {
        id: 4,
        text: "Anna: There's a small window. I think I can fit through it!",
        waitTime:2500,
        options: [
            { text: "Tell her to climb through the window.", nextStory: 6, waitTime:2000 },
            { text: "Tell her to wait.", nextStory: 7, waitTime:2000 }
        ]
    },
    {
        id: 5,
        text: "The key worked! Anna is free!",
        waitTime:2500,
        options: []
    },
    {
        id: 6,
        text: "Anna: I'm outside! I made it!",
        waitTime:2500,
        options: []
    },
    {
        id: 7,
        text: "The bad guys found Anna. Game over.",
        waitTime:2500,
        options: []
    },
    {
        id: 8,
        text: "Anna: The key didn't work! What now?",
        waitTime:2500,
        options: [
            { text: "Tell her to find another key.", nextStory: 9, waitTime:2000 },
            { text: "Tell her to find another way out.", nextStory: 4, waitTime:2000 }
        ]
    },
    {
        id: 9,
        text: "Anna: I found another key! Trying it now...",
        waitTime:2500,
        options: [
            { text: "Wait.", nextStory: 1, waitTime:1300 }
        ]
    },
    {
        id: 10,
        text: "The key worked! Anna is free!",
        waitTime:2500,
        options: []
    },
    {
        id: 11,
        text: "Anna: I hear footsteps! What should I do?",
        waitTime:2500,
        options: [
            { text: "Tell her to hide.", nextStory: 1, waitTime:2000 },
            { text: "Tell her to make a noise to distract them.", nextStory: 1, waitTime:2500 }
        ]
    },
    {
        id: 12,
        text: "Anna: I'm hiding, but I don't think this will work for long!",
        waitTime:2500,
        options: [
            { text: "Tell her to stay quiet.", nextStory: 1, waitTime:1500 },
            { text: "Tell her to run.", nextStory: 1, waitTime:2000 }
        ]
    },
    {
        id: 13,
        text: "Anna: I made a noise. They're coming! What now?",
        waitTime:2500,
        options: [
            { text: "Tell her to hide.", nextStory: 1, waitTime:3000 },
            { text: "Tell her to run.", nextStory: 1, waitTime:1000 }
        ]
    },
    {
        id: 14,
        text: "The bad guys found Anna. Game over.",
        waitTime:2500,
        options: []
    },
    {
        id: 15,
        text: "Anna: I'm running! I found a door, but it's locked!",
        waitTime:2500,
        options: [
            { text: "Tell her to find a key.", nextStory: 3, waitTime:1000 },
            { text: "Tell her to find another way out.", nextStory: 4, waitTime:1000 }
        ]
    },
];
