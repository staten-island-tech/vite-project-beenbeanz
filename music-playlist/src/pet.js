const petContainer = document.querySelector('.petContainer');
export let pet = '';
let petName = '';
function namePet(pet){
    if(pet.dataset.animal === 'whiteCat') petName = 'White Jelly Lan';
    else if(pet.dataset.animal === 'grayCat') petName = 'Jerome Johnson';
    else if(pet.dataset.animal === 'orangeCat') petName = 'Sassy Sally';
    else if(pet.dataset.animal === 'dog') petName = 'Twerking Terry';
    else if(pet.dataset.animal === 'lizard') petName = 'Beila Hu';
    else if(pet.dataset.animal === 'polar') petName = 'Michael Whalen';
    return petName;
}

let interval = 0;
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
        const playPauseBtns = document.querySelectorAll('.playPauseBtn');
        playPauseBtns.forEach(btn => {
            btn.style.pointerEvents = 'all';
        });

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

export function selectPet(e){   
    // html 
    pet = e.target;
    pet.classList.remove('petImg');
    pet.classList.add('selectedPet');
    petContainer.innerHTML = '';
    petContainer.insertAdjacentElement('beforeend', e.target);
    //creating pet
    namePet(pet)
    //display pet texts
    setInterval(displayPetDialogue, 1000);
    displayPetDialogue()
    clearInterval(displayPetDialogue)
}

export let hungerLvl = 0;
let lvl = 0;
let level = 0;
export let happyLvl = 0;

export function increaseHunger(){
    const hungerBar = document.querySelector('#hungerBar');
    const hungerBars = hungerBar.querySelectorAll('.individualBar');
    
    if(hungerLvl < hungerBars.length){
        hungerBars[hungerLvl].style.backgroundColor = '#000000';
        hungerLvl++;
    } else if(hungerLvl === 5){
        decreaseHunger()
    }
}
let hungerInterval;
let hungerIntervalSeconds = 0;
export function decreaseHunger(){
    const hungerBar = document.querySelector('#hungerBar');
    const hungerBars = hungerBar.querySelectorAll('.individualBar');
    if(hungerInterval) return;

    hungerInterval = setInterval(() => {
        hungerIntervalSeconds++;
        
        if(hungerIntervalSeconds % 3 === 0 && hungerLvl > 0){
            hungerBars[hungerLvl - 1].style.backgroundColor = 'transparent'
            hungerLvl--;
        }

        if (hungerLvl === 0) {
            clearInterval(hungerInterval);
            hungerInterval = null;
        }
    }, 1000);
}

export function increaseLvl(){
    const lvlBar = document.querySelector('#levelBar');
    const lvlBars = lvlBar.querySelectorAll('.individualBar');
    const levelText = document.querySelector('.level');
    
    if(lvl < lvlBars.length){
        lvlBars[lvl].style.backgroundColor = '#000000';
        lvl++;
    } else if(lvl >= lvlBars.length){
        lvlBars.forEach(bar => bar.style.backgroundColor = 'transparent');
        lvl = 0;
        level++;
        levelText.innerHTML = level;
    }
}

export function increaseHappiness(){
    const happyBar = document.querySelector('#happinessBar');
    const happyBars = happyBar.querySelectorAll('.individualBar');

    if(happyLvl < happyBars.length){
        happyBars[happyLvl].style.backgroundColor = '#000000';
        happyLvl++;
    }
}

let happinessInterval;
let happinessIntervalSeconds = 0;
export function decreaseHappiness(){
    const happyBar = document.querySelector('#happinessBar');
    const happyBars = happyBar.querySelectorAll('.individualBar');

    if(happinessInterval) return;

    happinessInterval = setInterval(() => {
        happinessIntervalSeconds++;
        
        if(happinessIntervalSeconds % 4 === 0 && happyLvl > 0){
            console.log(`${happyLvl}`)  
            happyBars[happyLvl - 1].style.backgroundColor = 'transparent'
            happyLvl--;
        }

        if (happyLvl === 0) {
            clearInterval(happinessInterval);
            happinessInterval = null;
        }
    }, 1000);
}

export function playGif(){
    const petImg = document.querySelector('.selectedPet');
    petImg.src = 'src/' + petImg.dataset.animal + '.gif';
}

export function stopGif(){
    const petImg = document.querySelector('.selectedPet');
    petImg.src = 'src/' + petImg.dataset.animal + '.png';
}
/*  one min of song -> happy++
    one song added -> hunger++
    when song is playing -> lvl progressively increases and activate gif
*/