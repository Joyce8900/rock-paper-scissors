function getComputerChoice(){
    let choice = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);

    return choice[randomIndex];
}

function getUserChoice(){
    let choice = prompt('Digite sua opção: (Rock,Paper,Scissors)');
    switch (choice){
        
    }

}

console.log(getComputerChoice())