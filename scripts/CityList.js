import { getWalkers } from "./database.js"


document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        switch (whatWasClickedOn.dataset.type){
            case "city":
                window.alert(`${whatWasClickedOn.dataset.name} works in ${whatWasClickedOn.dataset.city}`)
                break
        }
    }
)






export const CityList = () => {
    let citiesHTML = "<ol>"
    const walkers = getWalkers()


    for (const walker of walkers) {
        citiesHTML += `<li data-city="${walker.city}"
        data-name="${walker.name}"
        data-type="city">${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

