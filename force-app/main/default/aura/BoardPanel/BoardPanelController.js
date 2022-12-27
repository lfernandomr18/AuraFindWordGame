({
    startGame: function (component, event, helper) {
        let gameModeCmbx = component.find("gameMode");
        let selectedValue = gameModeCmbx.get("v.value");
        const selectedMode = component.get("v.selectedMode");
        component.set("v.selectedMode", selectedValue);
        if (selectedMode) {
            const boardComp = component.find("boardComp");
            boardComp.startGame();
        }

    },
    reshuffleBoard: function (component, event, helper) {

    }
})
