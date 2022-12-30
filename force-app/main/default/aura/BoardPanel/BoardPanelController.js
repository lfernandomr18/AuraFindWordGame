({
    startGame: function (component, event, helper) {
        //obtiene el combobox y obtiene el  valor de gameMode
        let gameModeCmbx = component.find("gameMode");
        let selectedValue = gameModeCmbx.get("v.value");
        //setea valor al atributo
        const selectedMode = component.get("v.selectedMode");
        component.set("v.selectedMode", selectedValue);
        // valida si selectedMode no es null
        if (selectedMode) {
            const boardComp = component.find("boardComp");
            //ejecuta method starGame de cmp Board
            boardComp.startGame();
        }

    },
    reshuffleBoard: function (component, event, helper) {
        const boardComp = component.find("boardComp");
        boardComp.reshufleBoard();
        component.set("v.reshufleDisabled", true);

    },
    onResultHandler: function (component, event, helper) {
        const result = event.getParam("result");
        if (result === "win") {
            component.set("v.reshufleDisabled", true);
        }
        else {
            component.set("v.reshufleDisabled", false);
        }
    }
})
