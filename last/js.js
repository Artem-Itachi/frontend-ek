es (72 sloc) 2.2 KB
var out = {};
fetch('http://localhost/bd/ff.php').then(response => response.json())
    .then(function (test) {
            console.log(test);
            out = test;
            answers(n_question.value, test);
            btn.addEventListener("click", f_out);
            btn1.addEventListener("click", f_out1);
            btn2.addEventListener("click", () => f_out2(test));
        }
    );
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