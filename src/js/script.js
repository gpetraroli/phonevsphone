const appState = {
    'phoneA': null,
    'phoneB': null
};

const searchInputAEl = document.querySelector('#search-a');
const selectInputAEl = document.querySelector('#select-a');
const btnSearchEl = document.querySelector('#search--action');
const btnSearchClearEl = document.querySelector('#search--clear');

const previewFirstEl = document.querySelector('.preview__first');
const previewSecondEl = document.querySelector('.preview__second');

searchInputAEl.addEventListener('change', ev => {

    fetch(`http://api-mobilespecs.azharimm.site/v2/search?query=${ev.target.value}`)
        .then(response => response.json())
        .then(data => {
            selectInputAEl.innerHTML = '';
            data.data.phones.forEach(el => {
                const option = document.createElement('option');
                option.value = el.slug;
                option.innerHTML = el.phone_name;
                selectInputAEl.appendChild(option);
            });
        });
});

btnSearchEl.addEventListener('click', ev => {
    getPhoneSpecs(selectInputAEl.value);
});

btnSearchClearEl.addEventListener('click', ev => {

    resetPreview();
});

function getPhoneSpecs(phone_slug) {
     fetch(`https://api-mobilespecs.azharimm.site/v2/${phone_slug}`)
        .then(response => response.json())
        .then(data => {
            if(!appState.phoneA) appState.phoneA = data.data;
            else appState.phoneB = data.data;

            updatePreview();
        });
}

function updatePreview() {
    searchInputAEl.value = '';
    selectInputAEl.querySelectorAll('option').forEach(el => {el.remove()});

    if(appState.phoneA) {
        previewFirstEl.querySelector('h2').innerHTML = appState.phoneA.phone_name;
        previewFirstEl.querySelector('img').src = appState.phoneA.thumbnail;
        console.log(appState)
    }
    if(appState.phoneB) {
        previewSecondEl.querySelector('h2').innerHTML = appState.phoneB.phone_name;
        previewSecondEl.querySelector('img').src = appState.phoneB.thumbnail;
    }
}

function resetPreview() {
    searchInputAEl.value = '';
    selectInputAEl.querySelectorAll('option').forEach(el => {el.remove()});

    previewFirstEl.querySelector('h2').innerHTML = '';
    previewFirstEl.querySelector('img').src = '';

    previewSecondEl.querySelector('h2').innerHTML = '';
    previewSecondEl.querySelector('img').src = '';

    appState.phoneA = null;
    appState.phoneB = null;
}
