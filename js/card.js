const slider = document.querySelector('.pets-slider');

//Вариант 1
// function creatSlides(item) {
//   return `
//      <li class="pets__card" ${item.name}>
//         <img src="${item.img}" alt="${item.name}" class="pets__image">
//         <h4 class="pets_pet-name">${item.name}</h4>
//         <button class="shelter__button shelter__button--learn-more">
//           Learn more
//         </button>
//       </li>`;
// }
// const renderSimilarPets = (item) => {
 //   return slider.innerHTML = item.map(creatSlide).join('');
 // }

 //Вариант 2
 const similarPetsTemplate = document.querySelector('#pets-template')
  .content
  .querySelector('.pets__card');

const renderSimilarPets = (similarPets) => {
  const petsListFragment = document.createDocumentFragment();

  similarPets.forEach(({name, img}) => {
    const petsElement = similarPetsTemplate.cloneNode(true);
    petsElement.querySelector('.pets__image').src = img;
    petsElement.querySelector('.pets_pet-name').textContent = name;
    petsListFragment.appendChild(petsElement);
  });

  slider.appendChild(petsListFragment);
};

fetch('./static/pets.json')
  .then((response) => response.json())
  .then((dataPets) => {
    renderSimilarPets(dataPets);
  });




