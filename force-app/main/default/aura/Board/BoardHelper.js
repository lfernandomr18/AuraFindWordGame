({
    getWords: function (count, previuswords) {
        if (count > 100) return;
        let wordsArray = [
            "expansion",
            "grandfather",
            "nappy",
            "oranges",
            "beds",
            "quack",
            "achiever",
            "yell",
            "hospital",
            "winter",
            "understood",
            "squalid",
            "merciful",
            "reaction",
            "wipe",
            "fearless",
            "tiresome",
            "introduce",
            "planes",
            "drum",
            "muddle",
            "capable",
            "canvas",
            "route",
            "enchanted",
            "quirky",
            "switch",
            "apparatus",
            "loss",
            "agreement",
            "substance",
            "back",
            "oafish",
            "expand",
            "aromatic",
            "quarrelsome",
            "free",
            "useful",
            "raspy",
            "drown",
            "ring",
            "lush",
            "numberless",
            "embarrass",
            "shrill",
            "rice",
            "ice",
            "crow",
            "pumped",
            "sparkle",
            "instruct",
            "girl",
            "glass",
            "frog",
            "murky",
            "impolite",
            "crabby",
            "pin",
            "grade",
            "upbeat",
            "linen",
            "flaky",
            "side",
            "unknown",
            "cactus",
            "round",
            "busy",
            "grab",
            "crush",
            "faithful",
            "mother",
            "clean",
            "unhealthy",
            "event",
            "absent",
            "thoughtless",
            "icy",
            "prefer",
            "charge",
            "confuse",
            "clam",
            "dress",
            "snake",
            "evasive",
            "unit",
            "flow",
            "annoying",
            "gusty",
            "possessive",
            "rhetorical",
            "rule",
            "frantic",
            "farm",
            "poor",
            "possess",
            "men",
            "pleasant",
            "zoom",
            "sidewalk",
            "reply"
        ];
        //if previuswords isn't empty, filter those previus words from wordsArray to prevent open blocks
        if (previuswords) {
            for (var i = 0; i < previuswords.length; i++) {
                wordsArray = wordsArray.filter(e => e !== previuswords[i]);
            }
        }
        wordsArray = this.randomizeArray(wordsArray);
        return wordsArray.slice(0, count);
    },
    randomizeArray: function (array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;

    },
    getWinWord: function (arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    },
    disableBoard: function (component) {
        component.set("v.boardDisabled", true);
    },
    enableBoard: function (component) {
        component.set("v.boardDisabled", false);
    },
    resetBoard: function (component, event, helper) {
        this.enableBoard(component);
        component.set("v.clickCount", 0);
        //reset the result
        component.set("v.result", "");
    }
})
