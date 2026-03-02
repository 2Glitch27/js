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


// function hello (str) {
//   return str[0].toUppercase() + str.substr (1, str.length - 1).toLowerCase();
// }

// function m (n) {
//     let arr = [];
//    for (i = 0; i < n; i++){
//     arr.push(n - i);
//    }
//    return arr;


// }

// function repeatStr (n, s){
//     let str = '';
//     for (i = n; i > 0; i--){
//         str += s
//     }
//     return str;
// }
// function repeatStr (n, s){
//     let str = s
// return str.repeat(n) или
// return s.repeat(n)
// }

//const repeatStr = (n, s) => s.repeat(n)

// возведенние в степень 
// function ad (a, b){
//     if (b === 1){
//         return 1
//     }
//     return a * ad(a, b - 1);
// }
// let x = document.getElementById('') id
// const y = document.querySelector('.text') класс самый верхний
// const y = document.querySelectorAll('.text') все с этим классом
// const c = y.childNodes возвращает ноды 
// const c = y.children возвращает теги
// const next = y.nextElementSibling следуюший 
// const next = y.previousElementSibling пред 
// const btn = document.querySelector('button');
// if (btn){
//     btn.addEventListener('click', () => {
//         btn.classList.add('red') добавить класс
//         btn.classList.remove('red') удалить 
            // btn.classList.toggle('red') при 1 добавляет при 2 удаляет
            // if (btn.classList.contains('red')) проверка 
//     })
// }




// методы массивов
// const str = 'строка'
// console.log(str.split().join('')) перевод в массив и обратно в строку
// console.log(str.split(''))
// console.log(str.replace(указывается что нужно оставить))
// console.log(str.split(' '))  перевод строк в массивы
// console.log (str.revarse()) переворачивает массив

// const isP = (word) => {
//    if (word.toLowerCase() === word.toLowerCase().split('').revarse().join('')){
//     return true
//    }
//    return false
// }

// console.log (word.split(' ').reverse().join()) сравнение строки


// arr.forEach(item => {
//     console.log(item)
// })

// let dud = numbers.map (item => item *2) создает новый массив 

// let n = numbers.filter (num = > num % 2 === 0) на основе условия вытаскивает значение

// console.log (numbers.sort((a, b) => b - a)) сортировка 
// console.log (numbers.some(num => num > 1)) выводит t/f если хотя бы 1 правильно
// console.log (numbers.every(num => num > 0)) проверяет все и отдает t/f если все правильно
//console.log (arr1.concat(arr2, [5,6])) об массивы 
// console.log (array.splice(1, 1)) 1 начать и 1 сколько ост обрезает

// const now = new Date(); выводит время
// const data = new Date('2023-12-31'); выводит указанное время
// now.get 
// now.set 


// function addDays(date, days){
// const result = new Date(date)
// result.getDate(result.getDate() + days)
// return result;
// }


// function vali(date){
//     return date instanceof Date && !isNaN(date)
// }

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     sayHi(){
//         alert(`hi, ${this.name}`)
//     }
// }
// const human = new Person ('name', 'age')
// human.sayHi();
// class L extends Person {

// }


// class Book {
//     constructor(title, author, year ){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     read(){
//         return(`Надо прочитать ${this.title}, ${this.author}, ${this.year}`)
//     }
// }

// const x = new Book('')
// x.read()

// 9.1 и 9.2

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHi(){
//         console.log(`hi ${this.name}`)
//     }

// }
// const man = new Person ('da', 14);
// man.sayHi();


// class Worker extends Person {
//     constructor (name, age, position, iq){
//         super(name, age);
//         this.position = position;
//         this._iq = iq
//     }
//     get iq(){
//         return this._iq
//     }
//     set iq(value){
//         this._iq = value;
//     }

// }




// class BankAccount{
//     constructor(name, balance){
//         this.name =name;
//         this.balance = balance
//     }
//     deposit(amount){
//         if (amount > 0){
//             this.balance += amount
//         }else {
//             console.log('net')
//         }
//     }
//     withdraw(amount){
//         if (amount > this.balance){
//             console.log('net deneg')
//         }else if (amount < 0){
//             console.log('ne otric')
//         }else{
//             this.balance -= amount;
//         }
//     }
//     check(){
//         console.log(this.balance)
//     }
// }


// class Student {
//     constructor (name, Fname){
//         this.name = name;
//         this.Fname = Fname;
//         this.grades = [];

//     }
//     addGrade(subject, grade){
//         this.grades.push({
//             subject: subject,
//             grade: grade,
//         });

//     }
//     getAverseGrade(){
//         let sum = 0;
//         if (this.grades.length === 0){
//             return sum;
//         }
//         this.grades.forEach(item => {
//             sum += item.grade;
//         })
//         return Math.round(sum / this.grades.length)


//     }
//     getInfo(){

//     }
// }


// class User {
//     constructor (password){
//         this._password = password;
//     }
//     get password(){
//         return this._password.replace(/./g, '*')
//     }
//     set password(value){
//         if (value.length < 6){
//             return 
//         }
//     }

//     checkPassword(attemp){
//         return this._password === attemp;
//     }
// }
















