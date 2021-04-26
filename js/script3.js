class Test {
    _title;
    _description;
    _questions = [];
    constructor(title, description, questions) {
        this._title = title;
        this._description = description;
        this._questions = questions;
    }
};

class Question {
    _text;
    _variant1;
    _variant2;
    _correct;
    constructor(text, variant1, variant2, correct) {
        this._text = text;
        this._variant1 = variant1;
        this._variant2 = variant2;
        this._correct = correct;
    }
};

let questionsArray = [];

$("#addQuestionBtn").click(function () {

    let question1text = $("#question1text").val();
    let question1Variant2 = $("#question1Variant2").val();
    let question1Variant1 = $("#question1Variant1").val();
    // let correct1 = $("#correct1").checked;
    let correct1 = $("#correct1").click(function () {
        //  
        for (var i = 0; i < correct1question.length; i++) {
            if (correct1question[i].type == "radio" && correct1question[i].checked) {
                alert("selected: " + correct1question[i].value);
            }
        }
    })
    // if(correct1===true){
    //     $("#correct1").val();
    // }else{
    //     $("#correct1").val();
    // }
    //     function check()
    // {
    //     var inp = document.getElementsByName('r');
    //     for (var i = 0; i < inp.length; i++) {
    //         if (inp[i].type == "radio" && inp[i].checked) {
    //             alert("selected: " + inp[i].value);
    //         }
    //     }
    // }
    //     function check2()
    //     {
    //         alert("selected: " + $('input[name=r]:checked').val());
    //     }

    let question2text = $("#question2text").val();
    let question2Variant2 = $("#question2Variant2").val();
    let question2Variant1 = $("#question2Variant1").val();
    let correct2 = $("#correct2");

    let question3text = $("#question3text").val();
    let question3Variant2 = $("#question3Variant2").val();
    let question3Variant1 = $("#question3Variant1").val();
    let correct3 = $("#correct3");

    let question4text = $("#question4text").val();
    let question4Variant2 = $("#question4Variant2").val();
    let question4Variant1 = $("#question4Variant1").val();
    let correct4 = $("#correct4");

    let question5text = $("#question5text").val();
    let question5Variant2 = $("#question5Variant2").val();
    let question5Variant1 = $("#question5Variant1").val();
    let correct5 = $("#correct5");

    let question1 = new Question(question1text, question1Variant2, question1Variant1, correct1);
    let question2 = new Question(question2text, question2Variant2, question2Variant1, correct2);
    let question3 = new Question(question3text, question3Variant2, question3Variant1, correct3);
    let question4 = new Question(question4text, question4Variant2, question4Variant1, correct4);
    let question5 = new Question(question5text, question5Variant2, question5Variant1, correct5);


    questionsArray.push(question1);
    questionsArray.push(question2);
    questionsArray.push(question3);
    questionsArray.push(question4);
    questionsArray.push(question5);

    console.log(questionsArray)
    console.log("Questions: ")
    //аппэнд блока 


})

$("#createTestBtn").click(function () {
    let title = $("#title").val();
    let description = $("#description").val();

    let test = new Test();
    test._title = title;
    test._description = description;
    test._questions = questionsArray;

    let local = JSON.parse(localStorage.getItem("test"));
    local.push(test);
    localStorage.setItem("test", JSON.stringify(local));
    //сохранение в локал сторич
    console.log("созданный тест")
    console.log(test)

})




