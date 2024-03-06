import { getWalkers } from "./database.js"



document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        switch (whatWasClickedOn.dataset.type){
            case "walker":
                window.alert(`${whatWasClickedOn.dataset.name} works in ${whatWasClickedOn.dataset.city}`)
                break
        }
    }
)







export const Walkers = () => {
    let walkerHTML = "<ul>"
    const walkers = getWalkers()

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}"
                        data-city="${walker.city}"
                        data-name="${walker.name}"
                        data-type="walker">
                        ${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    return walkerHTML
}

