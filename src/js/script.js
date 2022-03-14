const searchInputAEl = document.querySelector('#search-a');
const selectInputAEl = document.querySelector('#select-a');

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
            console.log(data.data.phones);
        });

});
