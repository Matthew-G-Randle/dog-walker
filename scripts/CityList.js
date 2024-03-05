import { getWalkers } from "./database.js"


export const CityList = () => {
    let citiesHTML = "<ol>"
    const walkers = getWalkers()


    for (const walker of walkers) {
        citiesHTML += `<li>${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

