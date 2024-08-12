const stories = [
    {
        id: 1,
        text: "I'm in a warehouse on 5th St. Door's locked, footsteps are getting closer. I'm scared!",
        waitTime: 500,
        options: [
            { text: "Look for a key.", nextStory: 3, waitTime: 1500 },
            { text: "Find another exit.", nextStory: 4, waitTime: 1500 }
        ]
    },
    {
        id: 2,
        text: "It's freezing and I hear footsteps. Please hurry!",
        waitTime: 500,
        options: [
            { text: "Search for a key.", nextStory: 3, waitTime: 1500 },
            { text: "Try to climb out.", nextStory: 4, waitTime: 1500 }
        ]
    },
    {
        id: 3,
        text: "Found a rusty key. Trying it now...",
        waitTime: 1500,
        options: [
            { text: "Unlock the door, keep me posted.", nextStory: 5, waitTime: 2000 },
            { text: "Search for another key or exit.", nextStory: 8, waitTime: 2000 }
        ]
    },
    {
        id: 4,
        text: "Small, dirty window up high. I think I can fit if I reach it.",
        waitTime: 1500,
        options: [
            { text: "Find something to climb.", nextStory: 6, waitTime: 2000 },
            { text: "Look for another exit.", nextStory: 7, waitTime: 2000 }
        ]
    },
    {
        id: 5,
        text: "The key worked! Door’s opening!",
        waitTime: 2000,
        options: [
            { text: "Get out quickly and find safety.", nextStory: 9, waitTime: 1500 },
            { text: "Check for dangers outside.", nextStory: 10, waitTime: 1500 }
        ]
    },
    {
        id: 6,
        text: "Used a chair to reach the window. Trying to open it.",
        waitTime: 2000,
        options: [
            { text: "Force it open, be careful!", nextStory: 11, waitTime: 1500 },
            { text: "If stuck, find another way.", nextStory: 12, waitTime: 1500 }
        ]
    },
    {
        id: 7,
        text: "Everything's sealed tight. I feel trapped.",
        waitTime: 2000,
        options: [
            { text: "Recheck window and door.", nextStory: 13, waitTime: 1500 },
            { text: "Search the room again.", nextStory: 14, waitTime: 1500 }
        ]
    },
    {
        id: 8,
        text: "Key didn’t work. What now?",
        waitTime: 2000,
        options: [
            { text: "Look for another key.", nextStory: 15, waitTime: 1500 },
            { text: "Try the window.", nextStory: 4, waitTime: 1500 }
        ]
    },
    {
        id: 9,
        text: "I’m out! Safe now. Thanks!",
        waitTime: 1500,
        options: []
    },
    {
        id: 10,
        text: "Checking for danger before moving. Don’t want to get caught!",
        waitTime: 1500,
        options: [
            { text: "Move carefully, find safety.", nextStory: 16, waitTime: 1500 }
        ]
    },
    {
        id: 11,
        text: "I pried the window open a bit, squeezing through.",
        waitTime: 1500,
        options: [
            { text: "Climb through carefully.", nextStory: 17, waitTime: 1500 },
            { text: "If tight, find another way.", nextStory: 18, waitTime: 1500 }
        ]
    },
    {
        id: 12,
        text: "Room’s sealed tight, feeling desperate.",
        waitTime: 1500,
        options: [
            { text: "Recheck for hidden exits.", nextStory: 19, waitTime: 1500 }
        ]
    },
    {
        id: 13,
        text: "Rechecked but still stuck. What now?",
        waitTime: 1500,
        options: [
            { text: "Force the window open.", nextStory: 20, waitTime: 1500 },
            { text: "Look for hidden tools.", nextStory: 21, waitTime: 1500 }
        ]
    },
    {
        id: 14,
        text: "Still searching, running out of time. Please help!",
        waitTime: 1500,
        options: [
            { text: "Search every corner.", nextStory: 22, waitTime: 1500 }
        ]
    },
    {
        id: 15,
        text: "Found another key in a drawer! Trying it now.",
        waitTime: 1500,
        options: [
            { text: "Try the key, let me know if it works.", nextStory: 23, waitTime: 1500 }
        ]
    },
    {
        id: 16,
        text: "Checking outside. Looks clear but I’m keeping watch.",
        waitTime: 1500,
        options: [
            { text: "Move carefully, keep updating me.", nextStory: 24, waitTime: 1500 }
        ]
    },
    {
        id: 17,
        text: "Halfway through the window, tight squeeze!",
        waitTime: 1500,
        options: [
            { text: "Push through, avoid noise.", nextStory: 25, waitTime: 1500 }
        ]
    },
    {
        id: 18,
        text: "Struggling to squeeze through. What’s next?",
        waitTime: 1500,
        options: [
            { text: "Use a tool to widen the window.", nextStory: 26, waitTime: 1500 }
        ]
    },
    {
        id: 19,
        text: "Rechecked everything. Nothing new.",
        waitTime: 1500,
        options: [
            { text: "Check every item and corner.", nextStory: 27, waitTime: 1500 }
        ]
    },
    {
        id: 20,
        text: "Forcing the window open. It’s moving a bit!",
        waitTime: 1500,
        options: [
            { text: "Keep going, watch for sharp edges.", nextStory: 28, waitTime: 1500 }
        ]
    },
    {
        id: 21,
        text: "Found a tool under a floorboard. Trying it now.",
        waitTime: 1500,
        options: [
            { text: "Use the tool, let me know if it helps.", nextStory: 29, waitTime: 1500 }
        ]
    },
    {
        id: 22,
        text: "Searching again. Exhausted but need to find a way.",
        waitTime: 1500,
        options: [
            { text: "Keep looking, stay hopeful.", nextStory: 30, waitTime: 1500 }
        ]
    },
    {
        id: 23,
        text: "New key worked! Unlocking and escaping.",
        waitTime: 1500,
        options: [
            { text: "Get out and stay hidden.", nextStory: 31, waitTime: 1500 }
        ]
    },
    {
        id: 24,
        text: "Moving to a safer spot now.",
        waitTime: 1500,
        options: [
            { text: "Let me know when you’re safe.", nextStory: 32, waitTime: 1500 }
        ]
    },
    {
        id: 25,
        text: "Made it through the window! Thanks a ton!",
        waitTime: 1500,
        options: []
    },
    {
        id: 26,
        text: "Enlarging the window with the tool. It’s working!",
        waitTime: 1500,
        options: [
            { text: "Get through quickly and carefully.", nextStory: 33, waitTime: 1500 }
        ]
    },
    {
        id: 27,
        text: "Found a hidden panel with something inside!",
        waitTime: 1500,
        options: [
            { text: "Open the panel, see what’s inside.", nextStory: 34, waitTime: 1500 }
        ]
    },
    {
        id: 28,
        text: "Forced it open. Crawling out now!",
        waitTime: 1500,
        options: [
            { text: "Check surroundings, find safety.", nextStory: 35, waitTime: 2000 }
        ]
    },
    {
        id: 29,
        text: "Using the tool. It’s unlocking something.",
        waitTime: 1500,
        options: [
            { text: "See what’s unlocked. Keep me posted.", nextStory: 36, waitTime: 2000 }
        ]
    },
    {
        id: 30,
        text: "Found a small escape route. Moving cautiously.",
        waitTime: 1500,
        options: [
            { text: "Proceed carefully, stay alert.", nextStory: 37, waitTime: 2000 }
        ]
    },
    {
        id: 31,
        text: "Safe now. Thank you for your help!",
        waitTime: 1500,
        options: []
    },
    {
        id: 32,
        text: "Safe spot found. All good. Thanks!",
        waitTime: 1500,
        options: []
    },
    {
        id: 33,
        text: "Escaped through the window. Thanks!",
        waitTime: 1500,
        options: []
    },
    {
        id: 34,
        text: "Found a hidden exit! Moving out now.",
        waitTime: 1500,
        options: [
            { text: "Exit safely and check surroundings.", nextStory: 38, waitTime: 2000 }
        ]
    },
    {
        id: 35,
        text: "Made it out. Staying hidden. Thanks!",
        waitTime: 1500,
        options: []
    },
    {
        id: 36,
        text: "Unlocked an exit. Getting out now.",
        waitTime: 1500,
        options: [
            { text: "Get to safety and check in.", nextStory: 39, waitTime: 2000 }
        ]
    },
    {
        id: 37,
        text: "Escape route’s working. Moving out safely.",
        waitTime: 1500,
        options: [
            { text: "Confirm safety when out.", nextStory: 40, waitTime: 2000 }
        ]
    },
    {
        id: 38,
        text: "Safe and hidden. Thanks for all!",
        waitTime: 1500,
        options: []
    },
    {
        id: 39,
        text: "Exiting now. Everything’s clear.",
        waitTime: 1500,
        options: []
    },
    {
        id: 40,
        text: "Made it! Safe and sound.",
        waitTime: 1500,
        options: []
    }
];
