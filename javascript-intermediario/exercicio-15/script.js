class Spaceship{
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false;
        this.entraceDoorsOpen = false;
    }

    hitch(){
        this.isHitched = true;
    }
}

let spaceships = new Array()
let chosenOption

function showMenu(){
    do{
        chosenOption = prompt("Escolha uma opção: \n" + "1 - Realizar engate\n" +
                            "2 - Imprimir naves\n" + "3 - Sair do programa")
    } while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3" )
    
    
}

    do{
    showMenu()
    switch(chosenOption){
        case "1":
            let name = prompt("Informe o nome da nave: ")
            let crewQuantity = prompt("Informe a quantidade de tripulantes: ")
            spaceships.push(new Spaceship(name, crewQuantity))
    
            spaceships[spaceships.length - 1].hitch()
            spaceships[spaceships.length - 1].entraceDoorsOpen = true
    
            break
        
        case "2": 
            spaceships.forEach(function(currentSpaceship){
                alert("Nave: "+ currentSpaceship.name + "\nQuantidade de tripulantes: " + currentSpaceship.crewQuantity +
                "\nEstá engatada?" + currentSpaceship.isHitched + "\nPortas abertas?" + currentSpaceship.entraceDoorsOpen)
            })
            break
    
        case "3": 
            alert("Saindo do programa!")
            break
    }
}while(chosenOption != "3")

