let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели');

let personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
}

let ques = prompt('Один из последних просмотренных фильмов?');
let quesTwo = prompt('На сколько оцените его?');

personalMobieDB.movies[ques] = quesTwo;


console.log(personalMobieDB);
