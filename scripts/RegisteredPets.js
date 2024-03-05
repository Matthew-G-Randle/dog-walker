import { getPets } from "./database.js"



export const RegisteredPets = () => {
    const pets = getPets()
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

