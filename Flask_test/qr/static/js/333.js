// Модальное окно (начало)
var window = document.querySelector('.window');
var overflow = document.createElement('div');

function openWin() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    var height = document.querySelector('.window').offsetHeight;
    document.querySelector('.window').style.marginTop = - height / 2 + "px";
    document.querySelector('.window').style.top = "50%";
}

if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

overflow.onclick = function () {
    document.querySelector('.window').style.top = "-100%";
    overflow.remove();
}
// Модальное окно (конец)


function fun() {
    choice_two  = document.getElementById('choice_two').value;
    if (choice_two=="nalog1") {
        document.getElementById('test').innerHTML="Введите к-во л.с.:";
    }
    if (choice_two=="nalog2") {
        document.getElementById('test').innerHTML="Введите к-во кв.м.:";
    }
    if (choice_two=="gosposhlina1") {
        document.getElementById('test').innerHTML="Введите к-во шт.:";
    }
    if (choice_two=="gosposhlina2") {
        document.getElementById('test').innerHTML="Введите к-во шт.:";
    }
    if (choice_two=="shtraf1") {
        document.getElementById('test').innerHTML="Введите скорость превышения км.:";
    }
    if (choice_two=="shtraf2") {
        document.getElementById('test').innerHTML="Введите к-во раз неправильной парковки:";
    }
}


// Расчёт 
function raschet() {
    choice_two  = document.getElementById('choice_two').value;
    quantity = document.getElementById('quantity').value;
    // Налог за машину
    if (choice_two=="nalog1") {
        
        if(quantity == "") {
            alert("Вы не указали данные!");
        } else if (quantity > 0 && quantity < 100  ) {
            stoimost = 25*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 100 && quantity < 150) {
            stoimost = 50*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 150 && quantity < 200) {
            stoimost = 100*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 200 && quantity < 250) {
            stoimost = 125*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 250) {
            stoimost = 150*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else {
            alert("Вы указали неверные данные!");
        }
    }
    // Налог за квартиру
    if (choice_two=="nalog2") {
        if(quantity == "") {
            alert("Вы не указали данные!");
        } else if (quantity > 0 && quantity < 20) {
            stoimost = 10*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 20 && quantity < 30) {
            stoimost = 15*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 30 && quantity < 40) {
            stoimost = 20*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 40 && quantity < 50) {
            stoimost = 25*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 50) {
            stoimost = 30*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else {
            alert("Вы указали неверные данные!");
        }
    }  
    // Регистрационная госпошлина
    if (choice_two=="gosposhlina1") {
        if(quantity == "" || quantity < 1) {
            alert("Вы не указали данные, либо неверно их ввели!");
        } else {
            stoimost = 1700*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        }
    }  
    // Административная госпошлина
    if (choice_two=="gosposhlina2") {
        if(quantity == "" || quantity < 1) {
            alert("Вы не указали данные, либо неверно их ввели!");
        } else {
            stoimost = 1000*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        }
    }  
    // Штраф за превышение скорости
    if (choice_two=="shtraf1") {
        if(quantity == "") {
            alert("Вы не указали данные!");
        } else if (quantity > 0 && quantity < 20) {
            document.getElementById('stoimost').innerHTML = "Штраф непредусмотрен!";
        } else if (quantity >= 20 && quantity < 40) {
            stoimost = 500*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 40 && quantity < 59) {
            stoimost = 1000*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 60 && quantity < 79) {
            stoimost = 2500*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else if (quantity >= 80) {
            stoimost = 5000*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        } else {
            alert("Вы указали неверные данные!");
        }
    }  
    // Штраф за неправильную парковку
    if (choice_two=="shtraf2") {
        if(quantity == "" || quantity < 1) {
            alert("Вы не указали данные, либо неверно их ввели!");
        } else {
            stoimost = 1500*parseFloat(quantity);
            document.getElementById('stoimost').innerHTML = "Стоимость равна: "+ stoimost +" р.";
        }
    }  
}




