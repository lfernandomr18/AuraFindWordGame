({
    blockClickHandler: function (component, event, helper) {
        const open = component.get("v.open");
        if (!open) {
            component.set("v.open", true);
            const label = component.get("v.label");
            //setea el evento y lo dispara enviando como valor la palabra de componente block
            let compEvent = component.getEvent("onclick");
            compEvent.setParams({ value: label });
            compEvent.fire();
        }

    },
    scriptsLoaded: function (component, event, helper) {
        const divElement = component.getElement(".board-bloc");
        fitText(divElement);
    }
})
