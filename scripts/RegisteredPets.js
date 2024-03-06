import { getPets, getWalkers} from "./database.js"

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        
        switch (whatWasClickedOn.dataset.type){
            case "pet":
                for (const walker of getWalkers()) {
                    if (whatWasClickedOn.dataset.petswalkerid == walker.id){
                        window.alert(`${whatWasClickedOn.dataset.petname} is walked by ${walker.name}.`)
                        break
                    }
                }
                break
        }
    }
)





export const RegisteredPets = () => {
    const pets = getPets()
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li data-petswalkerid="${pet.walkerId}"
                    data-petname="${pet.name}"
                    data-type="pet"
                    data-type="pet">
                    ${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

