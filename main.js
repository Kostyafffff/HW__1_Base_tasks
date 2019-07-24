
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
        if(a < 0 && b >= 0 && c >= 0){
            result = b + c;
        }
        else if(a <= 0 && b <= 0 && c >= 0){
            result = c;
        }
        else if(b < 0 && a >= 0 && c >= 0){
            result = a + c;
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

//2) Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1) !!ДОРАБОТАТЬ

function isSimple(number) {

}

//3 Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска) !!ДОРАБОТАТЬ
function SQRT() {

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
    let newNumber = "";
    while (number > 0){
        newNumber += number % 10;
        number /= 10;
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
    array = [10, -20, 30, 50, -95, 22, 44];
    let maxElement = array[0];
    let maxIndex;

    for (let i = 0; i < array.length; i++){
        if(array[i] > maxElement){
            maxIndex
        }
    }
}





