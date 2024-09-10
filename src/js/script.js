/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

// через цикл 'for'
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');

    if (!a || !b || a === null || b === undefined || a.length > 50 || b.length > 50) {
        i--;
        continue;
    }

    personalMovieDB.movies[a] = b;
}

// через цикл 'while'
// let i = 0;

// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько оцените его?');

//     if (!a || !b || a === null || b === undefined || a.length > 50 || b.length > 50) {
//         continue;
//     }

//     personalMovieDB.movies[a] = b;
//     i++;
// }

// через цикл 'do'
// let i = 0;

// do {
//     const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько оцените его?');

//     if (!a || !b || a === null || b === undefined || a.length > 50 || b.length > 50) {
//         continue;
//     }

//     personalMovieDB.movies[a] = b;
//     i++;
// }
// while(i < 2);

console.log(personalMovieDB);