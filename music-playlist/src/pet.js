export let pet = '';
const petContainer = document.querySelector('.petContainer');

export function selectPet(e){
    
    pet = e.target;
    pet.classList.remove('petImg');
    pet.classList.add('selectedPet');
    console.log(pet);
    petContainer.innerHTML = '';
    petContainer.insertAdjacentElement('beforeend', e.target);

    petContainer.insertAdjacentHTML('beforebegin', `
        <p>hi</p>    
    `);
}
    
