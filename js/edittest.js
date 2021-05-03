let tests = JSON.parse(localStorage.getItem("testsArray"))
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
let currentTestId = JSON.parse(localStorage.getItem('currentTestId'))
let currentTest = null;
for (i = 0; i < tests.length; i++) {
    if (tests[i].currentTestId === currentTestId) {
        currentTest = tests[i]
    }
}

console.log(currentTest)
console.log(tests)

$("#question").hide();
let isOpen = false;

$("#startBtn").click(function () {
    if (isOpen) {
        $("#question").slideUp(1500)
        isOpen = false
    } else {
        $("#question").slideDown(1500)
        isOpen = true
    }
})
let testName = document.getElementById("title")
let testCategory = document.getElementById("theme")

let question1 = document.getElementById("question1text")
let question2 = document.getElementById("question2text")
let question3 = document.getElementById("question3text")
let question4 = document.getElementById("question4text")
let question5 = document.getElementById("question5text")
let question6 = document.getElementById("question6text")
let question7 = document.getElementById("question7text")
let question8 = document.getElementById("question8text")
let question9 = document.getElementById("question9text")
let question10 = document.getElementById("question10text")

let question1Variant1 = document.getElementById("question1Variant1")
let question1Variant2 = document.getElementById("question1Variant2")

let correctAnswer11 = document.getElementsByName("correct1")[0]
let correctAnswer12 = document.getElementsByName("correct1")[1]

let question2Variant1 = document.getElementById("question2Variant1")
let question2Variant2 = document.getElementById("question2Variant2")

let correctAnswer21 = document.getElementsByName("correct2")[0]
let correctAnswer22 = document.getElementsByName("correct2")[1]

let question3Variant1 = document.getElementById("question3Variant1")
let question3Variant2 = document.getElementById("question3Variant2")

let correctAnswer31 = document.getElementsByName("correct3")[0]
let correctAnswer32 = document.getElementsByName("correct3")[1]

let question4Variant1 = document.getElementById("question4Variant1")
let question4Variant2 = document.getElementById("question4Variant2")

let correctAnswer41 = document.getElementsByName("correct4")[0]
let correctAnswer42 = document.getElementsByName("correct4")[1]

let question5Variant1 = document.getElementById("question5Variant1")
let question5Variant2 = document.getElementById("question5Variant2")

let correctAnswer51 = document.getElementsByName("correct5")[0]
let correctAnswer52 = document.getElementsByName("correct5")[1]

let question6Variant1 = document.getElementById("question6Variant1")
let question6Variant2 = document.getElementById("question6Variant2")

let correctAnswer61 = document.getElementsByName("correct6")[0]
let correctAnswer62 = document.getElementsByName("correct6")[1]

let question7Variant1 = document.getElementById("question7Variant1")
let question7Variant2 = document.getElementById("question7Variant2")

let correctAnswer71 = document.getElementsByName("correct7")[0]
let correctAnswer72 = document.getElementsByName("correct7")[1]

let question8Variant1 = document.getElementById("question8Variant1")
let question8Variant2 = document.getElementById("question8Variant2")

let correctAnswer81 = document.getElementsByName("correct8")[0]
let correctAnswer82 = document.getElementsByName("correct8")[1]

let question9Variant1 = document.getElementById("question9Variant1")
let question9Variant2 = document.getElementById("question9Variant2")

let correctAnswer91 = document.getElementsByName("correct9")[0]
let correctAnswer92 = document.getElementsByName("correct9")[1]

let question10Variant1 = document.getElementById("question10Variant1")
let question10Variant2 = document.getElementById("question10Variant2")

let correctAnswer101 = document.getElementsByName("correct10")[0]
let correctAnswer102 = document.getElementsByName("correct10")[1]
//  получили валую всех инпутов 

testName.value = currentTest.testName
testCategory.value = currentTest.testCategory

question1.value = currentTest['questions'][0]['questionTitle']
question2.value = currentTest['questions'][1]['questionTitle']
question3.value = currentTest['questions'][2]['questionTitle']
question4.value = currentTest['questions'][3]['questionTitle']
question5.value = currentTest['questions'][4]['questionTitle']
question6.value = currentTest['questions'][5]['questionTitle']
question7.value = currentTest['questions'][6]['questionTitle']
question8.value = currentTest['questions'][7]['questionTitle']
question9.value = currentTest['questions'][8]['questionTitle']
question10.value = currentTest['questions'][9]['questionTitle']


question1Variant1.value = currentTest['questions'][0]['questionAnswers'][0]
question1Variant2.value = currentTest['questions'][0]['questionAnswers'][1]

question2Variant1.value = currentTest['questions'][1]['questionAnswers'][0]
question2Variant2.value = currentTest['questions'][1]['questionAnswers'][1]

question3Variant1.value = currentTest['questions'][2]['questionAnswers'][0]
question3Variant2.value = currentTest['questions'][2]['questionAnswers'][1]

question4Variant1.value = currentTest['questions'][3]['questionAnswers'][0]
question4Variant2.value = currentTest['questions'][3]['questionAnswers'][1]

question5Variant1.value = currentTest['questions'][4]['questionAnswers'][0]
question5Variant2.value = currentTest['questions'][4]['questionAnswers'][1]

question6Variant1.value = currentTest['questions'][5]['questionAnswers'][0]
question6Variant2.value = currentTest['questions'][5]['questionAnswers'][1]

question7Variant1.value = currentTest['questions'][6]['questionAnswers'][0]
question7Variant2.value = currentTest['questions'][6]['questionAnswers'][1]

question8Variant1.value = currentTest['questions'][7]['questionAnswers'][0]
question8Variant2.value = currentTest['questions'][7]['questionAnswers'][1]

question9Variant1.value = currentTest['questions'][8]['questionAnswers'][0]
question9Variant2.value = currentTest['questions'][8]['questionAnswers'][1]

question10Variant1.value = currentTest['questions'][9]['questionAnswers'][0]
question10Variant2.value = currentTest['questions'][9]['questionAnswers'][1]


// заполнение данных для редактирования 
let createTestBtn = () => {
    let testName = document.getElementById("title").value
    let testCategory = document.getElementById("theme").value

    let question1 = document.getElementById("question1text")
    let question2 = document.getElementById("question2text")
    let question3 = document.getElementById("question3text")
    let question4 = document.getElementById("question4text")
    let question5 = document.getElementById("question5text")
    let question6 = document.getElementById("question6text")
    let question7 = document.getElementById("question7text")
    let question8 = document.getElementById("question8text")
    let question9 = document.getElementById("question9text")
    let question10 = document.getElementById("question10text")

    let question1Variant1 = document.getElementById("question1Variant1").value
    let question1Variant2 = document.getElementById("question1Variant2").value

    let correctAnswer11 = document.getElementsByName("correct1")[0]
    let correctAnswer12 = document.getElementsByName("correct1")[1]

    let question2Variant1 = document.getElementById("question2Variant1").value
    let question2Variant2 = document.getElementById("question2Variant2").value

    let correctAnswer21 = document.getElementsByName("correct2")[0]
    let correctAnswer22 = document.getElementsByName("correct2")[1]

    let question3Variant1 = document.getElementById("question3Variant1").value
    let question3Variant2 = document.getElementById("question3Variant2").value

    let correctAnswer31 = document.getElementsByName("correct3")[0]
    let correctAnswer32 = document.getElementsByName("correct3")[1]

    let question4Variant1 = document.getElementById("question4Variant1").value
    let question4Variant2 = document.getElementById("question4Variant2").value

    let correctAnswer41 = document.getElementsByName("correct4")[0]
    let correctAnswer42 = document.getElementsByName("correct4")[1]

    let question5Variant1 = document.getElementById("question5Variant1").value
    let question5Variant2 = document.getElementById("question5Variant2").value

    let correctAnswer51 = document.getElementsByName("correct5")[0]
    let correctAnswer52 = document.getElementsByName("correct5")[1]

    let question6Variant1 = document.getElementById("question6Variant1").value
    let question6Variant2 = document.getElementById("question6Variant2").value

    let correctAnswer61 = document.getElementsByName("correct6")[0]
    let correctAnswer62 = document.getElementsByName("correct6")[1]

    let question7Variant1 = document.getElementById("question7Variant1").value
    let question7Variant2 = document.getElementById("question7Variant2").value

    let correctAnswer71 = document.getElementsByName("correct7")[0]
    let correctAnswer72 = document.getElementsByName("correct7")[1]

    let question8Variant1 = document.getElementById("question8Variant1").value
    let question8Variant2 = document.getElementById("question8Variant2").value

    let correctAnswer81 = document.getElementsByName("correct8")[0]
    let correctAnswer82 = document.getElementsByName("correct8")[1]

    let question9Variant1 = document.getElementById("question9Variant1").value
    let question9Variant2 = document.getElementById("question9Variant2").value

    let correctAnswer91 = document.getElementsByName("correct9")[0]
    let correctAnswer92 = document.getElementsByName("correct9")[1]

    let question10Variant1 = document.getElementById("question10Variant1").value
    let question10Variant2 = document.getElementById("question10Variant2").value

    let correctAnswer101 = document.getElementsByName("correct10")[0]
    let correctAnswer102 = document.getElementsByName("correct10")[1]
    //  получили валую всех инпутов 



    if (question1.value.length === 0) {
        question1.style.border = "2px solid red"
    } else if (question2.value.length === 0) {
        question2.style.border = "2px solid red"
    } else if (question3.value.length === 0) {
        question3.style.border = "2px solid red"
    } else if (question4.value.length === 0) {
        question4.style.border = "2px solid red"
    } else if (question5.value.length === 0) {
        question5.style.border = "2px solid red"
    } else if (question6.value.length === 0) {
        question6.style.border = "2px solid red"
    } else if (question7.value.length === 0) {
        question7.style.border = "2px solid red"
    } else if (question8.value.length === 0) {
        question8.style.border = "2px solid red"
    } else if (question9.value.length === 0) {
        question9.style.border = "2px solid red"
    } else if (question10.value.length === 0) {
        question10.style.border = "2px solid red"
    }
    else if (question1Variant1.length === 0 && question1Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question2Variant1.length === 0 && question2Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question3Variant1.length === 0 && question3Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question4Variant1.length === 0 && question4Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question5Variant1.length === 0 && question5Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question6Variant1.length === 0 && question6Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question7Variant1.length === 0 && question7Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question8Variant1.length === 0 && question8Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question9Variant1.length === 0 && question9Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else if (question10Variant1.length === 0 && question10Variant2.length === 0) {
        alert("Введите варианты ответа")
    } else {

        if (correctAnswer11.checked === false && correctAnswer12.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer21.checked === false && correctAnswer22.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer31.checked === false && correctAnswer32.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer41.checked === false && correctAnswer42.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer51.checked === false && correctAnswer52.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer61.checked === false && correctAnswer62.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer71.checked === false && correctAnswer72.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer81.checked === false && correctAnswer82.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer91.checked === false && correctAnswer92.checked === false) {
            alert("Отметьте вариант ответа")
        } else if (correctAnswer101.checked === false && correctAnswer102.checked === false) {
            alert("Отметьте вариант ответа")
        }
        else {
            // let random = Math.floor(Math.random() * 1000) + 1;
            let test = {
                currentTestId: currentTest['currentTestId'],
                userId: currentTest['userId'],
                testName: testName,
                testCategory: testCategory,
                questions: [
                    {
                        questionTitle: question1,
                        questionAnswers: [
                            question1Variant1,
                            question1Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question2,
                        questionAnswers: [
                            question2Variant1,
                            question2Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question3,
                        questionAnswers: [
                            question3Variant1,
                            question3Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question4,
                        questionAnswers: [
                            question4Variant1,
                            question4Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question5,
                        questionAnswers: [
                            question5Variant1,
                            question5Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question6,
                        questionAnswers: [
                            question6Variant1,
                            question6Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question7,
                        questionAnswers: [
                            question7Variant1,
                            question7Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question8,
                        questionAnswers: [
                            question8Variant1,
                            question8Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question9,
                        questionAnswers: [
                            question9Variant1,
                            question9Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                    {
                        questionTitle: question10,
                        questionAnswers: [
                            question10Variant1,
                            question10Variant2,
                        ],
                        correctAnswersIndex: 0
                    },
                ]
            }
            // создание теста 


            if (correctAnswer11.checked === true) {
                test.questions[0].correctAnswersIndex = 0;
            } else if (correctAnswer12.checked === true) {
                test.questions[0].correctAnswersIndex = 1;
            }

            if (correctAnswer21.checked === true) {
                test.questions[1].correctAnswersIndex = 0;
            } else if (correctAnswer22.checked === true) {
                test.questions[1].correctAnswersIndex = 1;
            }

            if (correctAnswer31.checked === true) {
                test.questions[2].correctAnswersIndex = 0;
            } else if (correctAnswer32.checked === true) {
                test.questions[2].correctAnswersIndex = 1;
            }

            if (correctAnswer41.checked === true) {
                test.questions[3].correctAnswersIndex = 0;
            } else if (correctAnswer42.checked === true) {
                test.questions[3].correctAnswersIndex = 1;
            }

            if (correctAnswer51.checked === true) {
                test.questions[4].correctAnswersIndex = 0;
            } else if (correctAnswer52.checked === true) {
                test.questions[4].correctAnswersIndex = 1;
            }

            if (correctAnswer61.checked === true) {
                test.questions[5].correctAnswersIndex = 0;
            } else if (correctAnswer62.checked === true) {
                test.questions[5].correctAnswersIndex = 1;
            }

            if (correctAnswer71.checked === true) {
                test.questions[6].correctAnswersIndex = 0;
            } else if (correctAnswer72.checked === true) {
                test.questions[6].correctAnswersIndex = 1;
            }

            if (correctAnswer81.checked === true) {
                test.questions[7].correctAnswersIndex = 0;
            } else if (correctAnswer82.checked === true) {
                test.questions[7].correctAnswersIndex = 1;
            }

            if (correctAnswer91.checked === true) {
                test.questions[8].correctAnswersIndex = 0;
            } else if (correctAnswer92.checked === true) {
                test.questions[8].correctAnswersIndex = 1;
            }

            if (correctAnswer101.checked === true) {
                test.questions[9].correctAnswersIndex = 0;
            } else if (correctAnswer102.checked === true) {
                test.questions[9].correctAnswersIndex = 1;
            }

            // присваивание правильных ответов 

            for(i=0;i<tests.length;i++){
                if(currentTest['currentTestId'] === tests[i]['currentTestId']){
                    tests.splice(i,1)
                }
            }

            tests.push(test)
            localStorage.setItem('testsArray', JSON.stringify(tests))
            location.reload()
        }
    }

}



