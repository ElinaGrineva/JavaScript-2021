// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

console.log(numToObj(657));
function numToObj(n) {
    if (n < 0 || n > 999 || typeof n !== "number") {
        console.log("Неверное число. Введите число от 0 до 999.");
    } else {
        let str = n.toString();
        let obj = {};
        let l = str.length;
        switch (l) {
            case 3:
                obj["Сотни"] = str[l - 3];
            case 2:
                obj["Десятки"] = str[l - 2];
            case 1:
                obj["Единицы"] = str[l - 1];
        }
        return obj;
    }
}

// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

function addProductBasket(arr, name, price, quantity) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price * this.quantity;
}

var basket = [
    {
        product: 'Banana',
        price: 50,
        quantity: 2,
        total: totalSum
    },
    {
        product: 'Apple',
        price: 100,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'Mango',
        price: 150,
        quantity: 3,
        total: totalSum
    },
    {
        product: 'Lemon',
        price: 40,
        quantity: 5,
        total: totalSum
    },
]

function countBasketPrice(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

alert('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));

