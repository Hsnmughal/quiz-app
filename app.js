window.onload = function () {
    innerdata(0)
}
var quiz = [
    {
        question: "Who is known as the father of Computer :",
        answer: "Charles Babbage",
        options: [
            "Charles Babbage",
            "Newton",
            "Bill Gates",
            "Charles Darwin"
        ]
    },
    {
        question: "Charles Babbage was also a :",
        answer: "Mathematician",
        options: [
            "Physician",
            "Scientist",
            "Mathematician",
            "Computer Engineer"
        ]
    },
    {
        question: "Charles Babbage invented the computer in between :",
        answer: "1833 and 1871",
        options: [
            "1813 and 1872",
            "1833 and 1871",
            "1833 and 1870",
            "1834 and 1835"
        ]
    },
];
var question_no = 0;
var score = 0;
function next() {
    check(question_no);
    question_no++;
    innerdata(question_no);
    removeActive();
}
function check(e) {
    var score1 = document.getElementById("score")
    var check1 = document.getElementsByClassName("active");
    if (check1[0].innerHTML == quiz[e].answer) {
        score += 10;
        score1.innerHTML = score
    }
}
function innerdata(e) {
    var ques = document.getElementById("question");
    ques.innerHTML = quiz[e].question;
    var opt1 = document.getElementById("op1");
    var opt2 = document.getElementById("op2");
    var opt3 = document.getElementById("op3");
    var opt4 = document.getElementById("op4");
    opt1.innerHTML = quiz[e].options[0];
    opt2.innerHTML = quiz[e].options[1];
    opt3.innerHTML = quiz[e].options[2];
    opt4.innerHTML = quiz[e].options[3];
}
function active(e) {
    removeActive()
    e.classList.add("active")
}
function removeActive() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
    }
}
