const cityDropdown = document.getElementById('city-dropdown');
const mediumDropdown = document.getElementById('medium-dropdown');
const hustleDropdown = document.getElementById('hustle-dropdown');
const cityEl = document.getElementById('city');
const mediumEl = document.getElementById('medium');
const hustleEl = document.getElementById('hustle');
// const themeInput = document.getElementById('theme');
// const themeButton = document.getElementById('save-button');
const themeEl = document.getElementById('soundtrack');


let cityReport = 0;
let mediumReport = 0;
let hustleReport = 0;
// let themes = [];

cityDropdown.addEventListener('change', () => {
    // console.log('changing select', cityDropdown.value);
    cityReport++;
    // console.log(cityReport);
    cityEl.style.backgroundImage = `url('./assets/cities/${cityDropdown.value}.jpg')`;
    displayStats();
});

mediumDropdown.addEventListener('change', () => {
  // console.log('changing select', mediumDropdown.value);
    mediumReport++;
  // console.log(mediumReport);
    mediumEl.style.backgroundImage = `url('./assets/mediums/${mediumDropdown.value}.jpg')`;
    displayStats();
});

hustleDropdown.addEventListener('change', () => {
  // console.log('changing select', hustleDropdown.value);
    hustleReport++;
  // console.log(hustleReport);
    hustleEl.style.backgroundImage = `url('./assets/hustle/${hustleDropdown.value}.jpg')`;
    displayStats();
});

function displayStats() {
    themeEl.textContent = `You have changed the city ${cityReport} times.You have changed the city ${mediumReport} times. You have changed the side jobs ${hustleReport} times.` ;
}

// themeButton.addEventListener('click', () => {
//   themes.push(catchphraseInput.value);
//   // console.log('changing input', catchphraseInput.value);
//   // console.log(catchphrases);
// displayThemes();

// function displayThemes() {
//     themeEl.textContent = '';
//     for (let theme of themes) {
//         const li = document.createElement('div');
//         li.textContent = theme;
//         themeEl.append(li);
//     }
// }