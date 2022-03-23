const sectionNewestEl = document.querySelector('.section--newest');

let newestPhones = [];

fetch(`https://api-mobilespecs.azharimm.site/v2/latest`)
    .then(response => response.json())
    .then(data => {
            newestPhones = data.data.phones.slice(0, 5);
            renderPhones(newestPhones);
        console.log(newestPhones);
    });

function renderPhones($phoneList) {

    $phoneList.forEach(el => {
        const element = document.createElement('div');
        element.classList.add('newest--item');


        const markup = `
            <div class="newest--item--img">
                <img src="${el.image}" alt="${el.phone_name}">
            </div>
            <div class="newest--item--text">
                <h2 class="newest--item--title">${el.phone_name}</h2>   
                <p></p> 
            </div>`;

        fetch(`${el.detail}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                element.querySelector('p').innerHTML = `brand: <strong>${data.data.brand}</strong><br>
                                                               os: <strong>${data.data.os}</strong><br>
                                                               dimensions: <strong>${data.data.dimension}</strong><br>
                                                               storage: <strong>${data.data.storage}</strong><br>
                                                               <strong>${data.data.release_date}</strong>`;
            });

        element.innerHTML = markup;

        sectionNewestEl.appendChild(element);
    });
}
