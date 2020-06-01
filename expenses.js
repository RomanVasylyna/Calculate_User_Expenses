//Вопросы
let money;
let time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = +prompt("Введите дату в формате YYYY-MM-DD", "");
  while(money == '' || isNaN(money) || money == null) {
  money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

//Объект с бюджетом
let appData = {
budget : money,
expenses : {},
optionalExpenses : {},
income : [],
timeData : time,
};


function chooseExpenses() {
  //Повторяем цикл два раза
  for(let i = 0; i < 2; i++) {
  //Каждый вопрос задаем по 2 раза
  let a = prompt("Введите обязательную статью расходов в этом месяце");
  let b = +prompt("Во сколько обойдется?");
  //Проверяем условие (Два раза)
  if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
  && a != '' && b != '' && a.length < 50){ //Проверяем возвращает ли prompt строку и не пустая ли она
    console.log("done"); //Выводим сообщение в консоль
    appData.expenses[b] = a; //Добавляем ответ в наш объект
  }
  };
  appData.savings = true;
}

chooseExpenses();
detectDayBudget();
detectWealthLvl();

function detectDayBudget() {
  //Добавляем новое свойство объекту (бюджет на день)
  appData.moneyPerDay = appData.budget / 30; //Бюджет на месяц делим на 30
  alert(`Ежедневный бюджет : ${Math.round(appData.moneyPerDay)}`); //Выводим на экран
}

function detectWealthLvl() {
  //Проверяем уровень достатка человека
  if(appData.moneyPerDay < 100){
  console.log('Минимальный уровень достатка');
  } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
  console.log('Средний уровень достатка');
  } else if(appData.moneyPerDay > 2000) {
  console.log('Зажиточный Хуила');
  } else {
  console.log('Проверьте правильность введенных данных');
  }
}

function checkSavings() {
  if(appData.savings) {
  let save = +prompt('Какова сумма накоплений?','');
  let percent = +prompt('Под какой процент?','');
  appData.monthIncome = (save / 100 / 12 * percent).toFixed();
  alert(`Ваш месячный доход с депозита : ${appData.monthIncome}`);
  }
}

function chooseOptExpenses() {
let question1 = prompt('Статья необязательных расходов?','');
let question2 = prompt('Статья необязательных расходов?','');
let question3 = prompt('Статья необязательных расходов?','');
appData.optionalExpenses.one = question1;
appData.optionalExpenses.two = question2;
appData.optionalExpenses.three = question3;
console.log(appData);
}

checkSavings();
chooseOptExpenses();
