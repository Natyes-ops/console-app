let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели'); //можно было добавить унарный +

let personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {}, // не объект а массив
    privat: false,
}
// нужно задать по два раза
let ques = prompt('Один из последних просмотренных фильмов?'); 
let quesTwo = prompt('На сколько оцените его?');

let q = prompt('Один из последних просмотренных фильмов?'); 
let qTwo = prompt('На сколько оцените его?');

personalMobieDB.movies[ques] = quesTwo;
personalMobieDB.movies[q] = qTwo;



console.log(personalMobieDB);
