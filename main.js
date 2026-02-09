// console.log("Привет");
// let x = ' Привет мир';
// console.log(x);
// let valuePrompt = prompt();
// alert(valuePrompt);
// console.log(+valuePrompt)


// valuePrompt = +prompt('Введите ваше число');
// alert(valuePrompt ** 2);

// let x = +prompt('Введите ваше 1 число');
// let y = +prompt('Введите ваше 2 число');
// let average = (x + y) / 2;
// alert(average)

// let x = +prompt('Введите длину стороны квадрата');
// let s = x ** 2;
// alert( " Площадь квадрата равна " +s);






// let nick = prompt('Введите ваше имя');
// alert( "Привет, " + nick );

// let yearOfBirth = +prompt('Введите год своего рождения');
// const ourYear = 2026;
// alert(ourYear - yearOfBirth);

// let squareLength = +prompt('Введите длину стороны квадрата');
// alert (squareLength * 4);

// let circleRadius = +prompt('Введите радиус окружности');
// const PI = 3.14;
// alert((circleRadius ** 2) * PI);


// let distance = +prompt('Введите расстояние в км');
// let time = +prompt('Введите часы ');
// alert (distance / time);

// let dollars = +prompt('Введите доллары');
// const exchange = 0.84;
// alert( dollars * exchange);

// let flashDriveCapacity = +prompt('Введите объем флешки');
// let transformation = flashDriveCapacity * 1024;
// alert(Math.floor(transformation/820));


// let wallet = +prompt('Введите сумму в кошельке');
// let price = +prompt('Введите цену');
// alert (wallet - price);









// let x = +prompt ("Введите число");
// if(x > 0 ){
//     alert ( " Число больше 0")
// } else if ( x < 0 ){
//     alert ( " Число меньше 0")
// } else ( x = 0){
//     alert ( " Число  0")
// }


// let x = +prompt ("Введите число");
// if(x > 0 && x < 120 ){
//     alert ( " Число больше 0")
// } else {
//     alert ( " Что то пошло не так")
// }

// switch(){
//     case 1:
//         console.log()
//     break;
//      case 1:
//         console.log()
//     break;
//      case 1:
//         console.log()
//     break;
//      case 1:
//      case 1:
//         console.log()
//     default:
//         console.log()




// let age = +prompt(" Введите возраст");
// if (age > 0 && age <= 2) {
//     alert ("ребенок")
// } else if (age > 12 && age <= 18){
//     alert ("подросток")
// }else if (age > 18 && age <= 60){
//     alert ("взрослый")
// }else if (age > 60 && age <= 120){
//     alert ("пенсионер")
// }else {
//     alert ("не знаю кто ты")
// } 



// let year = +prompt ("Введите год");
// let test1 = year % 400;
// let test2 = year % 4;
// let test3 = year % 100;
// if(test1 == 0 || test2 == 0 && test3 > 0 ){
//     alert ( " год високосный")
// } else {
//     alert ( " год не високосный")
// } 

// console.log ( 251 % 100)


//вывести h столько сколько пользователь запросит

// let x = +prompt();
// let i = 0
// while(i < x){
//     console.log(" h");
//     i++;
// }

// вывести числа от введенного до 0
// let x = +prompt("ss");
// while( x >= 0 ){
// console.log(x);
//     x--;
//     
// }


// предлагать решать пока не ответит правильно 2+2*2

// let x = 0;
// do{
//     x = +prompt(" введите ")
// }while(x !==6);
// alert ( " ");

//codewars задачи leetcode


// function sum(x, y){
//     let sum = x + y;
// console.log(" сумма двух чисел" + sum);
// }
// sum( 5, 10);

//function sum(x, y){
//     let sum = x + y;
//  return sum;
// }
// const Tsum = sum( 5, 10);
//console.log(Tsum)

//const sayHello = function (){
//     alert(" ff");
// }

//анонимные функции чекни


// const arrowFunc = () => 
// const arrowFunc = ( x, y) => x + y



// принимает 2 числа и возвращает меньшее
// const minValue = (x, y) => {
//    return Math.min(x, y); 1
//     if( x > y){           2
//     return y
// }return x
//    }
// console.log (minValue (10, 5))

// let x = +prompt();
// let y = +prompt();

// if ( x > y){
//     console.log(y);
// } else{
//     console.log(x);
// }

// if( x > y){
//     return y
// }else{
//     return x
// }

// if( x > y){
//     return y
// }return x



// const calc = ( x, y, sing) => {
//     switch (sing) {
//         case "+" :
//             return x + y;
//         case "-" :
//             return x - y;
//         case "*" :
//             return x * y;
//         case "/" :
//             return x / y;
//     }
// }

// console.log(calc(10, 5 "+"))



// const objOld = new Object ();
// let objNew = {
//     name: 'Никита',
//     secondName: 'Елагин',    //всегда ставить запятую даже в конце


// };
// console.log(objNew.name);
// objNew.age = 28; // добавлеие обновление инфы
// delete objNew.age; // удаление 

// console.log( objNew['is admin']) // если название в скобках


// const user = {};
// console.log(user);
// user.name = 'da';
// console.log(user);
// user.SecondName = 'pp';
// console.log(user);
// user.name = 'net';
// console.log(user);
// delete user.name;
// console.log(user);

// функция котоаря возвращает true если у объекта нет свойств
// const isEpty = (obj) => {
//     for (key in obj){
//         return false;
//     }
//     return true;
// }

// arr.push (); добавляет в конце
// arr.pop(); удаляет в конце
// arr.unshift(); добавляет в начало
// arr.shift(); удаляет в начале

// for ( item of arr){
//     console.log(item)
// }


