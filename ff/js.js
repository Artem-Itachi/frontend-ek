quizlet = {
    question_arr: ['1) Кем является Минато для Наруто?', '2) Какой хвостатый запичатан в Наруто?', '3) Как называется спец отряд хокаге?',
        '4) Из какого клана Кушина?', '5) Чем закончился бой Итачи и Саске?', '6) Единственым персонажем читающим реп был...',
        '7) Какую из даных техник придумал 4 хокаге?', '8) Как звали возлюбленую Итачи?', '9) Кто скрывался под личность Тоби?', '10) Чем закончилась финальная битва Саске и Наруто?'],
    a1_arr: ['Дядя', 'Шукаку', 'Анбу', 'Удзумаки', 'Смерть Саске', 'Нагато', 'Расенган', 'Изуми', 'Мадара', 'Оба погибли'],
    a2_arr: ['Брат', 'Исобу', 'Акацука', 'Хатаке', 'Бой прервал Мадара', 'Гаара', 'Тысяча птиц', 'Хината', 'Обито', 'Наруто убил Саске и остался без руки'],
    a3_arr: ['Отец', 'Гьюки', 'Кара', 'Учиха', 'Они объединились ради какой то цели', 'Киллер-Би', 'Теневое клонирование', 'Сакура', 'Саске из будуйщего', 'Саске убил Наруто и остался без руки'],
    a4_arr: ['Лучший дург', 'Курама', 'Така', 'Сенджу', 'Смерть Итачи', 'Тен-тен', 'Эдо тенсей', 'Тэмари', 'Рейнкорнация Ашуры', 'Стали друзьями и лишились одной руки'],
    answer_arr:['Отец', 'Курама', 'Анбу', 'Удзумаки', 'Смерть Итачи', 'Киллер-Би', 'Расенган', 'Изуми', 'Обито', 'Стали друзьями и лишились одной руки'],
    n_right_answer_arr:[3, 4, 1, 1, 4, 3, 1, 1, 2, 4]
}
let n_answer = 9;
let right_answers = 0;
console.log(quizlet);
answers (n_question.value);
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
function f_out (){
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    console.log(n_a);
    if (n_a == n_right_answer){
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        console.log("right_answ = "+right_answers);
        if (n_question.value == n_answer){
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Количество правильных ответов:  " +right_answers+"</b>";
            right_div.appendChild(el1);
            resa.classList.remove("hidden");
        }
    }else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }
}
function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}
function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    answers(k);
}
function answers(k) {
    n_question.value = k;
    question.innerHTML=quizlet.question_arr[n_question.value];
    a1.innerHTML = quizlet.a1_arr[n_question.value];
    a2.innerHTML = quizlet.a2_arr[n_question.value];
    a3.innerHTML = quizlet.a3_arr[n_question.value];
    a4.innerHTML = quizlet.a4_arr[n_question.value];
    answer.innerHTML = quizlet.answer_arr[n_question.value];
    n_right_answer = quizlet.n_right_answer_arr[n_question.value];
}