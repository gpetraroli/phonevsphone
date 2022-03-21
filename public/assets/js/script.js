const appState = {
    'phoneA': null,
    'phoneB': null
};

const searchInputAEl = document.querySelector('#search__input-text');
const selectInputAEl = document.querySelector('#search__input-select');
const btnSearchEl = document.querySelector('#search__control--add');
const btnSearchClearEl = document.querySelector('#search__control--clear');
const btnSearchCompareEl = document.querySelector('#search__control--compare');

const previewFirstEl = document.querySelector('.preview--first');
const previewSecondEl = document.querySelector('.preview--second');

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

            selectInputAEl.focus();
        });
});

btnSearchEl.addEventListener('click', ev => {
    if (selectInputAEl.value) getPhoneSpecs(selectInputAEl.value);
});

btnSearchClearEl.addEventListener('click', ev => {
    resetPreview();
});

btnSearchCompareEl.addEventListener('click', ev => {
       location.href = "compare.php";
});

function getPhoneSpecs(phone_slug) {
    if (!appState.phoneA) document.querySelector('.lds-dual-ring--a').style.display = 'inline-block';
    else document.querySelector('.lds-dual-ring--b').style.display = 'inline-block';
    fetch(`https://api-mobilespecs.azharimm.site/v2/${phone_slug}`)
        .then(response => response.json())
        .then(data => {
            if (!appState.phoneA) appState.phoneA = data.data;
            else appState.phoneB = data.data;

            updatePreview();
            setLocalStorage();
        });
}

function updatePreview() {
    document.querySelectorAll('.lds-dual-ring').forEach(el => el.style.display = 'none');

    searchInputAEl.value = '';
    selectInputAEl.querySelectorAll('option').forEach(el => {
        el.remove()
    });

    if (appState.phoneA) {
        searchInputAEl.focus();
        previewFirstEl.querySelector('h2').innerHTML = appState.phoneA.phone_name;
        previewFirstEl.querySelector('img').src = appState.phoneA.thumbnail;

        previewFirstEl.querySelector('p').innerHTML = `brand: <strong>${appState.phoneA.brand}</strong><br>
                                                               os: <strong>${appState.phoneA.os}</strong><br>
                                                               dimensions: <strong>${appState.phoneA.dimension}</strong><br>
                                                               <strong>${appState.phoneA.release_date}</strong>`;
    }
    if (appState.phoneB) {
        btnSearchCompareEl.disabled = false;
        btnSearchCompareEl.focus();
        btnSearchEl.disabled = true;

        previewSecondEl.querySelector('h2').innerHTML = appState.phoneB.phone_name;
        previewSecondEl.querySelector('img').src = appState.phoneB.thumbnail;

        previewSecondEl.querySelector('p').innerHTML = `brand: <strong>${appState.phoneB.brand}</strong><br>
                                                               os: <strong>${appState.phoneB.os}</strong><br>
                                                               dimensions: <strong>${appState.phoneB.dimension}</strong><br>
                                                               <strong>${appState.phoneB.release_date}</strong>`;
    }
}

function resetPreview() {
    btnSearchCompareEl.disabled = true;
    btnSearchEl.disabled = false;

    searchInputAEl.value = '';
    selectInputAEl.querySelectorAll('option').forEach(el => {
        el.remove()
    });

    previewFirstEl.querySelector('h2').innerHTML = '';
    previewFirstEl.querySelector('img').src = '';
    previewFirstEl.querySelector('p').innerHTML = ''

    previewSecondEl.querySelector('h2').innerHTML = '';
    previewSecondEl.querySelector('img').src = '';
    previewSecondEl.querySelector('p').innerHTML = ''

    appState.phoneA = null;
    appState.phoneB = null;

    setLocalStorage();

    searchInputAEl.focus();
}

function setLocalStorage() {

    window.localStorage.setItem('appState', JSON.stringify(appState));
}
