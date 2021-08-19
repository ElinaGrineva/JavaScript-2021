// 1. Почему код дает именно такие результаты?

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2. Увеличивает var a на единицу
// d = b++; alert(d);           // 1. Увеличивает var b на единицу, но выводит предыдущее значение.
// c = (2 + ++a); alert(c);      // 5. В первом примере a = 2, а в этом уже 3, поэтому итог будет 3 + 2 = 5
// d = (2 + b++); alert(d);      // 4. Во втором примере мы прибавили к b единицу (но вывилось 1) и она стала 2, итого будет 2 + 2 = 4
// alert(a);                    // 3. В первой и в третьем примере прибавили единицу.
// alert(b);                    // 3. Во втором и четвертом примере прибавили единицу.


// 2. Чему будет равен x ? 
// var a = 2;
// var x = 1 + (a *= 2);
// alert(x); // x = 5, потому что a *= 2, берет значение переменной а и домнажает на 2 (итого переменная а равна 4), 
// //потом прибавляем 1.


// 3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

var a = -10;
var b = 6;

if (a >= 0 && b >= 0) {
    alert(a - b);
}
else if (a < 0 && b < 0) {
    alert(a * b);
}
else if (a > 0 || b > 0) {
    alert(a + b);
}
else {
    alert('Something wrong');
}



//4. Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch организовать вывод чисел от a до 15.

var a = 13;

switch (a) {
    case 1:
        alert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 2:
        alert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 3:
        alert([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 4:
        alert([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 5:
        alert([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 6:
        alert([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 7:
        alert([7, 8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 8:
        alert([8, 9, 10, 11, 12, 13, 14, 15]);
        break;
    case 9:
        alert([9, 10, 11, 12, 13, 14, 15]);
        break;
    case 10:
        alert([10, 11, 12, 13, 14, 15]);
        break;
    case 11:
        alert([11, 12, 13, 14, 15]);
        break;
    case 12:
        alert([12, 13, 14, 15]);
        break;
    case 13:
        alert([13, 14, 15]);
        break;
    case 14:
        alert([14, 15]);
        break;
    case 15:
        alert(15);
        break;
    default:
        alert('Your number is out of range')
        break;
}

// 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.

function addition(x, y) {
    return (x + y);
}

function subtraction(x, y) {
    return (x - y);
}

function multiplication(x, y) {
    return (x * y);
}

function division(x, y) {
    return (x / y);
}

alert(addition(5, 2));
alert(subtraction(5, 2));
alert(multiplication(5, 2));
alert(division(5, 2));

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции.
// В зависимости от переданного значения выполнить одну из арифметических операций(использовать функции из пункта 5) и вернуть полученное значение(применить switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return addition(arg1, arg2)
            break;
        case 'subtraction':
            return subtraction(arg1, arg2)
            break;
        case 'multiplication':
            return multiplication(arg1, arg2)
            break;
        case 'division':
            return division(arg1, arg2)
            break;
        default:
            alert('Something wrong')
            break;
    }
}

alert(mathOperation(5, 2, 'subtraction'));
alert(mathOperation(5, 2, 'division'));
alert(mathOperation(5, 2, 'addition'));
alert(mathOperation(5, 2, 'cod'));