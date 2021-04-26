btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
function f_out (){
    console.log(t1.checked);
    console.log(t2.checked);
    console.log(t3.checked);
    console.log(t4.checked);
    if (t1.checked){
        right.classList.remove("hidd");
        wrong.classList.add("hidd");
    }else{
        right.classList.add("hidd");
        wrong.classList.remove("hidd");
    }
}
function f_out1 (){
    answer.classList.toggle("hidd");
    btn1.classList.toggle("opend");
}
