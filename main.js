
//1)  Если а – четное посчитать а*б, иначе а+б
function odd(a, b){
    return a % 2 === 0 ? a * b : a + b;
}

//2) Определить какой четверти принадлежит точка координат x, y

function quarter(x, y) {
    let result;

    if( x > 0 && y > 0 ){
        result = 1;
    }
    else if(x < 0 && y > 0){
        result = 2;
    }
    else if(x < 0 && y < 0){
        result = 3;
    }
    else if(x > 0 && y < 0 ){
        result = 4;
    }
    else {
        result = "Никакой четверти не принадлежит";
    }
    return result;
}

//3) Найти суммы только положительных из трех чисел !!!!

function onlyPositiveSum(a, b, c) {
    let result = 0;
    if(a >= 0 && b >= 0 && c >= 0){
        result = a + b + c;
    }
    else{
        if (a >= 0 && b >= 0 && c <= 0){
            result = a + b;
        }
        else if(a <= 0 && b >= 0 && c >= 0){
            result = b + c;
        }
        else if(a >= 0 && b <= 0 && c >= 0){
            result = a + c;
        }
        else if(a >= 0 && b <= 0 && c <= 0){
            result = a;
        }
        else if(a <= 0 && b >= 0 && c <= 0){
            result = b;
        }
        else if(a <= 0 && b <= 0 && c >= 0){
            result = c;
        }
    }
    return result;
}

//4) Посчитать выражение макс(а*б*с, а+б+с)+3

function maxOf(a, b, c){

    function maximum(x, y){
        x = a * b * c;
        y = a + b + c;
        let result;
        x > y ? result = x : result = y;

       return result;
    }

    return maximum() + 3;
}
// 5. Написать программу определения оценки студента по его рейтингу,
//  на основе следующих правил

function mark(number){
    let result;
    if(number >= 0 && number <= 19){
        result = "F";
    }
    else if(number >= 20 && number <= 39){
        result = "E";
    }
    else if(number >= 40 && number <= 59){
        result = "D";
    }
    else if(number >= 60 && number <= 74){
        result = "C";
    }
    else if(number >= 75 && number <= 89){
        result = "B";
    }
    else if(number >= 90 && number <= 100){
        result = "A";
    }

    return result;
}

//-----------------------------------------------------------Циклы-----------------------------------------------
//1) Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumOfEven(){
    let sum = 0;
    let counter = 0;
        for(let i = 0; i < 99; i++) {
            if(i % 2 === 0){
                sum += i;
                counter++;
            }
        }
     return "Сумма четных: " + sum + ", " + "Количество: " + counter ;
   }

//2) Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function isSimple(number) {
    if(number === 1){
        return  false;
    }
    else if(number === 2){
        return  true;
    }
    else{
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
}

//3 Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
/**
 * @return {number}
 */
function SQRT(number) {
    return number ** (1 / 2);
}

//4 Факториал числа

function factorial(number) {
    let result;
    if(number === 0){
        result = 0;
    }
    if(number === 1){
        result = 1;
    }
    else if(number > 1){
        result = 1;
        for(let i = 1; i <= number; i++){
            result *= i;
        }
    }
    else {
        result = null;
    }
    return result;
}

//5 Посчитать сумму цифр заданного числа

function sumOfCurrentNumbers(number) {
   let i = 0;
   let sum = 0;
   while ( number > 0){
       sum += number % 10;
       number = number / 10;

       i++;
   }
   return sum;
}

//6 Вывести число, которое является зеркальным отображением !!ДОРАБОТАТЬ
function mirrorDisplaytion(number){
    let newNumber = 0;

    while (number > 0){
        let digit = number % 10;
        number = number / 10;
        newNumber *= 10;
        newNumber += digit;
    }

    return newNumber;
}



//------------------------------------------Одномерные массивы------------------------------------------

//1 Найти минимальный элемент массива
function minElement(array) {

    let min = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}
// 2 Найти максимальный элемент массива

function maxElement(array) {
   // array = [20, 2, -3, 4, -20, 12];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}


//3. Найти индекс минимального элемента массива
function minimalIndexOfElement(array){
    //array = [10, -20, 30, -25, 40, -80];
    let minValue = array[0];
    let minIndex;
    for(let i = 0; i < array.length; i++){
        if(array[i] < minValue){
            minIndex = i;
        }
    }
    return minIndex;
}

//4. Найти индекс максимального элемента массива
function maxIndexOfElement(array){
    //array = [10, -20, 30, 50, -95, 22, 44];
    let maxElement = array[0];
    let maxIndex;

    for (let i = 0; i < array.length; i++){
        if(array[i] > maxElement){
            maxIndex = i;
        }
    }
    return maxIndex;
}

//5. Посчитать сумму элементов массива с нечетными индексами 
function sumWithOddIndexes(array) {
    array = [1, 2, 3, 4, 5, 6, 7, 8];
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(i % 2 !== 0){
            sum += array[i];
        }
    }
    return sum;
}

//6. Сделать реверс массива (массив в обратном направлении)
function reverseOfArray(array) {
    // array = [1, 2, 3, 4, 6, 7, 8];
    let temp;
    let tempLast;
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        tempLast = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
        array[i] = tempLast;
    }
    return array;
}

//7. Посчитать количество нечётных элементов
function counterOfOddElement(array) {
   // array = [1, 2, 3, 4, 5, 6];
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            counter++;
        }
    }
    return counter;
}

//8. Поменять местами первую и вторую половину массива,
//например, для массива 1 2 3 4, результат 3 4 1 2

function mirrorChange(array) {
    array = [1, 2, 3, 4];

    for(let i = 0; i < array.length / 2 + array.length % 2; i++){
        let temp = array[i];
        array[i] = array[array.length / 2 + array.length % 2 + i];
        array[array.length / 2 + array.length % 2 + i] = temp;
    }
    return array;
}

// 9 Bubble
function bubbleSort(array) {
    array = [2, 1, 3, 8, 7, 0];
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

// 10 Select

function selectSort(array) {
    let min;
    for(let i = 0; i < array.length - 1; i++){
        min = i;
        for(let j = i; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
   return array;
}

// 11 Insert

// 12 Quick

// 13 Merge

// 14 Shell

// 15 Heap


//-----------------------------Функции--------------------------------
// Получить строковое название недели по номеру дня


function nameOfDay(number){
    // работает если параметр обернём в ''
    let result;
    let week = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday",
    };
    for(let key in week){
        if(key === number){
            result = week[key];
        }
    }

    return result;
}

function nameOfDay2(number){
    let result;
    switch (number) {
        case 1 :
            result = "Sunday";
            break;
        case 2 :
            result = "Monday";
            break;
        case 3 :
            result = "Tuesday";
            break;
        case 4 :
            result = "Wednesday";
            break;
        case 5 :
            result = "Thursday";
            break;
        case 6 :
            result = "Friday";
            break;
        case 7 :
            result = "Saturday";
            break;

        default:
            break;
    }
    return result;
}

//2. Найти расстояние между двумя точками в двухмерном декартовом пространстве

function distanceBetweenPoints(x1, y1, x2, y2) {
    return ( (x2 - x1) ** 2  + (y2 - y1) ** 2) ** (1/2);
}
