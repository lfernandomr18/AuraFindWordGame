({
    doInit : function(component, event, helper) { 
            const gameMode=component.get("v.mode");
            let column=0;
            if(gameMode && gameMode==="hard"){
                column=6;
            }
            else if(gameMode && gameMode==="medium"){
                column=4;
            }
            else{
                column=3;
            }
            let blockSize=12/column;
            const words =helper.getWords(column*column);
            const winword=helper.getWinWord(words);
            component.set("v.words",words);
            component.set("v.winWord",winword); 
            component.set("v.blockSize",blockSize);              
    },
    blockClickHandler: function(component, event, helper) {
        let clickCount= component.get("v.clickCount")+1;
        const value=event.getParam("value"); 
        if(value===component.get("v.winWord")){
            component.set("v.result","YOU WIN");
            helper.disableBoard(component);
        }else if(clickCount===3){
            component.set("v.result","YOU LOSE");
            helper.disableBoard(component);
        }
        component.set("v.clickCount",clickCount);  
    },
})
