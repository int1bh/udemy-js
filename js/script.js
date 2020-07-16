'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

document.querySelector('.promo__genre').textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

let form = document.forms[1];
let inputForm = form.getElementsByClassName('adding__input')[0];
let button = form.getElementsByTagName('button')[0];

button.onclick = function () {
    event.preventDefault();
    let val = inputForm.value;
    if (val.length > 21) {
        let valShort = val.slice(0, 19);
        movieDB.movies.push(valShort +'...');
    } else {
        movieDB.movies.push(val);
    }
    
    movieList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
};

let deleteElement = document.getElementsByClassName('delete');
console.log(deleteElement);
