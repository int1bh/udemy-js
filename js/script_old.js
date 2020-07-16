'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели', '');
        }
    },
    rememberMyFilms: function() {
        let c = 1,
            d = 1;
    
    
        while (c <= 2 & d <= 2) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != "" && b != "") {
                personalMovieDB.movies[a] = b;
                c++;
                d++;
            }
    
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else {
            alert("Вы киноман");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('Условие не сработало');
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let queryGenres = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (queryGenres == null || queryGenres === ""){
                i--;
            } else {
                personalMovieDB.genres[i] = queryGenres;
            }
            
        }
    
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};




personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

personalMovieDB.genres.forEach(function(value, i){
    console.log(`Любимый жанр № ${i+1} - это ${value}`);
    });