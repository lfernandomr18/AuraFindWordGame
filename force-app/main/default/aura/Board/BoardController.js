({
    doInit: function (component, event, helper) {
        //obtiene modo
        const gameMode = component.get("v.mode");
        let column = 0;
        //set number of colums depending on gameMode
        if (gameMode && gameMode === "hard") {
            column = 6;
        }
        else if (gameMode && gameMode === "medium") {
            column = 4;
        }
        else {
            column = 3;
        }
        //seteo inicial de words,winWord y blocksize de acuerdo a gameMode
        let blockSize = 12 / column;
        const words = helper.getWords(column * column);
        const winword = helper.getWinWord(words);
        component.set("v.words", words);
        component.set("v.winWord", winword);
        component.set("v.blockSize", blockSize);
    },
    blockClickHandler: function (component, event, helper) {
        //contador de clicks 
        let clickCount = component.get("v.clickCount") + 1;
        // valor de palabra de block, el evento fue disparado desde blockClickHandler de de componente block
        const value = event.getParam("value");
        //se disablea board de acuerdo al valor de la palabra
        if (value === component.get("v.winWord")) {
            component.set("v.result", "YOU WIN");
            helper.disableBoard(component);
        } else if (clickCount === 3) {
            component.set("v.result", "YOU LOSE");
            helper.disableBoard(component);
        }
        component.set("v.clickCount", clickCount);
    },
})
