export let pet = '';
const petContainer = document.querySelector('.petContainer');

export function selectPet(e){    
    pet = e.target;
    pet.classList.remove('petImg');
    pet.classList.add('selectedPet');
    console.log(pet);
    petContainer.innerHTML = '';
    petContainer.insertAdjacentElement('beforeend', e.target);

    let petName = '';
    console.log(pet.dataset.animal)
    if(pet.dataset.animal === 'whiteCat') petName = 'White Jelly Lan';
    else if(pet.dataset.animal === 'grayCat') petName = 'Jerome Johnson';
    else if(pet.dataset.animal === 'orangeCat') petName = 'Sassy Sally';
    else if(pet.dataset.animal === 'dog') petName = 'Twerking Terry';
    else if(pet.dataset.animal === 'lizard') petName = 'Beila Hu';
    else if(pet.dataset.animal === 'polar') petName = 'Michael Whalen';

    let interval = 0;
    setInterval(displayPetDialogue, 1000);

    function displayPetDialogue(){
        if(interval === 0){
            petContainer.insertAdjacentHTML('beforeend', `
                <p class='petDialogue'>Hi! My name is ${petName}!</p>    
            `);
        }
        else if(interval === 1){
            petContainer.insertAdjacentHTML('beforeend', `
                <p class='petDialogue'>I am very needy and I need to be leveled up.</p>    
            `);
        }
        else if(interval === 2){
            petContainer.insertAdjacentHTML('beforeend', `
                <p class='petDialogue'>Add songs to fill up my hungry stomach.</p>    
            `);
        }
        else if(interval === 3){
            petContainer.insertAdjacentHTML('beforeend', `
                <p class='petDialogue'>For each minute of a song that you add, it'll fill up my happiness level by 1.</p>    
            `);
        }
        else if(interval === 4){
            petContainer.insertAdjacentHTML('beforeend', `
                <p class='petDialogue'>When you play a nonexist song that doesn't have any audio, it'll also increase my level</p>    
            `);
        }
        else if(interval === 5){
            petContainer.insertAdjacentHTML('beforeend', `
                <p class='petDialogue'>Once I get to level 67, a special guest will appear and do his signature 67 dance!</p>    
            `);
        }
        else if(interval === 6){
            const petDialogues = document.querySelectorAll('.petDialogue');
            petDialogues.forEach(petDiag => petDiag.remove())
        }
        else if(interval === 7){
            petContainer.insertAdjacentHTML('beforeend', `
                <p class="progressBarLabel">Level <span class='level'>0</span></p>
                <div class="petProgressBars" id="levelBar">
                <div class="individualBar" style="background-color: none;"></div>
                <div class="individualBar" style="background-color: none;"></div>
                <div class="individualBar" style="background-color: none;"></div>
                <div class="individualBar" style="background-color: none;"></div>
                <div class="individualBar" style="background-color: none;"></div>
                </div>

                <p class="progressBarLabel">Hunger Bar</p>
                <div class="petProgressBars" id="hungerBar">
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                </div>

                <p class="progressBarLabel">Happiness Bar</p>
                <div class="petProgressBars" id="happinessBar">
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                    <div class="individualBar" style="background-color: none;"></div>
                </div>
            `);
        }
        interval++;
    }
    clearInterval(displayPetDialogue)
}

let hungerLvl = 0;
export function increaseHunger(){
    const hungerBar = document.querySelector('#hungerBar');
    const hungerBars = hungerBar.querySelectorAll('.individualBar');
    
    if(hungerLvl < hungerBars.length){
        hungerBars[hungerLvl].style.backgroundColor = '#000000';
        hungerLvl++;
    }
}

let lvl = 0;
let level = 0;
export function increaseLvl(){
    const lvlBar = document.querySelector('#levelBar');
    const lvlBars = lvlBar.querySelectorAll('.individualBar');
    const levelText = document.querySelector('.level');
    
    
    if(lvl < lvlBars.length){
        lvlBars[lvl].style.backgroundColor = '#000000';
        lvl++;
        console.log(lvl)
    } else if(lvl >= lvlBars.length){
        lvlBars.forEach(bar => bar.style.backgroundColor = 'transparent');
        lvl = 0;
        level++;
        levelText.innerHTML = level;
    }
}
/*  one min of song -> happy++
    one song added -> hunger++
    when song is playing -> lvl progressively increases and activate gif
*/