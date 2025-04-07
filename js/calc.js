function calc() {
    let action = prompt('Выбери действие: сложение, вычитание, умножение, деление, остаток, степень.', '');
    let valueFirst = (prompt('Введи первое число', ''));
    let a = Number(valueFirst);
    let valueSecond = (prompt("Введи второе число", ''));
    let b = Number(valueSecond);
    if (a == NaN) {
        return ("Error");
    }
    if (b == NaN) {
        return ("Error");
    }
    if (action == "сложение") {
        return a + b;
    } else if (action == "вычитание") {
        return a - b;
    } else if (action == "умножение") {
        return a * b;
    } else if (action == "деление") {
        return a / b;
    } else if (action == "остаток") {
        return a % b;
    } else if (action == "степень") {
        return a ** b;
    } else {
        return ("unknown operator");
    }
}
let result = calc();
alert(result);