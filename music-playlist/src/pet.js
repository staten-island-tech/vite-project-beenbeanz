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

    petContainer.insertAdjacentHTML('beforebegin', `
        <p class='petDialogue'>Hi my name is ${petName}</p>    
    `);
}
    
