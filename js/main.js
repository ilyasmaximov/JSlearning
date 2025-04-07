

function MyFirstFunction () {
    let value = prompt("Введи число!", "");
    if (value > 0){
        alert("Больше нуля")
    } else if (value < 0) {
        alert("Меньше нуля")
    } else if (value == 0){
        alert("Нуль")
    } else {
        alert("ЧИСЛО!!!!!!!!")
    }
}
