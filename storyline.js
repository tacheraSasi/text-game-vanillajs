const stories = [
    {
        id: 1,
        text: "I'm in an old warehouse on 5th Street. The door is locked and I can hear them coming!",
        waitTime:500,
        options: [
            { text: "Look for a key.", nextStory: 3, waitTime:2000 },
            { text: "Find another way out.", nextStory: 4, waitTime:2000 }
        ]
    },
    {
        id: 2,
        text: "I don't think I can hide for long! Please, what should I do?",
        waitTime:1000,
        options: [
            { text: "Look for a key.", nextStory: 3, waitTime:2000 },
            { text: "Find another way out.", nextStory: 4, waitTime:1500 }
        ]
    },
    {
        id: 3,
        text: "I found a key! Trying it now...",
        waitTime:1500,
        options: [
            { text: "Be careful", nextStory: 5, waitTime:2000 }
        ]
    },
    {
        id: 4,
        text: "There's a small window. I think I can fit through it!",
        waitTime:2500,
        options: [
            { text: "Climb through the window.", nextStory: 6, waitTime:2000 },
            { text: "No they might see you.", nextStory: 7, waitTime:2000 }
        ]
    },
    {
        id: 5,
        text: "The key worked! i got out Thank you!",
        waitTime:2500,
        options: []
    },
    {
        id: 6,
        text: "I'm outside! I made it!",
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
        text: "The key didn't work! What now?",
        waitTime:2500,
        options: [
            { text: "Find another key.", nextStory: 9, waitTime:2000 },
            { text: "Find another way out.", nextStory: 4, waitTime:2000 }
        ]
    },
    {
        id: 9,
        text: "I found another key! Trying it now...",
        waitTime:2500,
        options: [
            { text: "Sure.", nextStory: 1, waitTime:1300 }
        ]
    },
    {
        id: 10,
        text: "The key worked! i'm is free!",
        waitTime:2500,
        options: []
    },
    {
        id: 11,
        text: "I hear footsteps! What should I do?",
        waitTime:2500,
        options: [
            { text: "Hide.", nextStory: 1, waitTime:2000 },
            { text: "Make a noise to distract them.", nextStory: 1, waitTime:2500 }
        ]
    },
    {
        id: 12,
        text: "I'm hiding, but I don't think this will work for long!",
        waitTime:2500,
        options: [
            { text: "Stay quiet.", nextStory: 1, waitTime:1500 },
            { text: "Run.", nextStory: 1, waitTime:2000 }
        ]
    },
    {
        id: 13,
        text: "I made a noise. They're coming! What now?",
        waitTime:2500,
        options: [
            { text: "Hide.", nextStory: 1, waitTime:2000 },
            { text: "Run.", nextStory: 1, waitTime:1000 }
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
        text: "I'm running! I found a door, but it's locked!",
        waitTime:2500,
        options: [
            { text: "Find a key.", nextStory: 3, waitTime:1000 },
            { text: "Find another way out.", nextStory: 4, waitTime:1000 }
        ]
    },
    {
        id: 16,
        text: "I'm Anne, I got this number from a whatsApp group",
        waitTime:1500,
        options: [
            { text: "Where are you?.", nextStory: 1, waitTime:1000 },
            { text: "Ohh okay", nextStory: 17, waitTime:1000 }
        ]
    },
    {
        id: 17,
        text: "I'm scared, please help me?",
        waitTime:1500,
        options: [
            { text: "Hide quickly.", nextStory: 12, waitTime:1000 },
        ]
    },
];
