let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
    
}

// let pourcentage =()=>{


// let myH2 = document.querySelector("#soft-skills").children;





// for (const key in softSkills) {
//     let titre = myH2[i]
    
//     titre.innerHTML = `${key} : ${softSkills[key]}`
//     console.log(key);
//     console.log(softSkills[key]);

//     let verif = parseInt(softSkills[key]);
    


//     if (verif >50 && verif <100) {
//         titre.style.background = "green"
//         titre.style.color = "white"
        
        
//     }
//     else if (verif < 50 ) {

//         titre.style.background = "red"
        
//     }
//     else if (verif == 100) {
//         titre.style.background = "gold"
        
//     }
//     i++
//     console.log(titre);
// }
// }



let pourcentage = ()=>{
    
let myH2 = document.querySelector("div#soft-skills").children;
for (const key in softSkills) {

    for (let i = 0; i < myH2.length; i++) {
        if (myH2[i].textContent == key) {
            myH2[i].innerHTML = myH2[i].textContent + softSkills[key];
             // logique pour afficher style dans le DOM
             let softSkillLength = softSkills[key].length;
             let verif = softSkills[key].substring(0, softSkillLength - 1);
            //  console.log(verif);
            if (verif >50 && verif <100 && verif != 50) {
                myH2[i].style.background ="green"
                myH2[i].style.color ="white"

                
            }
            else if (verif < 50) {
                myH2[i].style.background ="red"
                
            }
            else if (verif == 100) {
                myH2[i].style.background ="gold"
                
            }
            myH2[i].style.width =`${verif}%`
            
        }
        
    }
}

}
pourcentage();





