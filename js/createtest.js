let tests = JSON.parse(localStorage.getItem("testsArray"))
console.log(tests)

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

    let test = {
        testName: testName,
        testCategory: testCategory,
        questions: [
            {
                questionTitle: question1,
                questionAnswers: [
                    question1Variant1,
                    question1Variant2,
                ],
                correctAnswers1Index: 0
            },
            {
                questionTitle: question2,
                questionAnswers: [
                    question2Variant1,
                    question2Variant2,
                ],
                correctAnswers2Index: 0
            },
            {
                questionTitle: question3,
                questionAnswers: [
                    question3Variant1,
                    question3Variant2,
                ],
                correctAnswers3Index: 0
            },
            {
                questionTitle: question4,
                questionAnswers: [
                    question4Variant1,
                    question4Variant2,
                ],
                correctAnswers4Index: 0
            },
            {
                questionTitle: question5,
                questionAnswers: [
                    question5Variant1,
                    question5Variant2,
                ],
                correctAnswers5Index: 0
            },
            {
                questionTitle: question6,
                questionAnswers: [
                    question6Variant1,
                    question6Variant2,
                ],
                correctAnswers6Index: 0
            },
            {
                questionTitle: question7,
                questionAnswers: [
                    question7Variant1,
                    question7Variant2,
                ],
                correctAnswers7Index: 0
            },
            {
                questionTitle: question8,
                questionAnswers: [
                    question8Variant1,
                    question8Variant2,
                ],
                correctAnswers8Index: 0
            },
            {
                questionTitle: question9,
                questionAnswers: [
                    question9Variant1,
                    question9Variant2,
                ],
                correctAnswers9Index: 0
            },
            {
                questionTitle: question10,
                questionAnswers: [
                    question10Variant1,
                    question10Variant2,
                ],
                correctAnswers10Index: 0
            },
        ]
    }
    // создание теста 

    if (correctAnswer11.checked === true) {
        test.questions[0].correctAnswers1Index = 0;
    } else if (correctAnswer12.checked === true) {
        test.questions[0].correctAnswers1Index = 1;
    }

    if (correctAnswer21.checked === true) {
        test.questions[1].correctAnswers2Index = 0;
    } else if (correctAnswer22.checked === true) {
        test.questions[1].correctAnswers2Index = 1;
    }

    if (correctAnswer31.checked === true) {
        test.questions[2].correctAnswers3Index = 0;
    } else if (correctAnswer32.checked === true) {
        test.questions[2].correctAnswers3Index = 1;
    }

    if (correctAnswer41.checked === true) {
        test.questions[3].correctAnswers4Index = 0;
    } else if (correctAnswer42.checked === true) {
        test.questions[3].correctAnswers4Index = 1;
    }

    if (correctAnswer51.checked === true) {
        test.questions[4].correctAnswers5Index = 0;
    } else if (correctAnswer52.checked === true) {
        test.questions[4].correctAnswers5Index = 1;
    }

    if (correctAnswer61.checked === true) {
        test.questions[5].correctAnswers6Index = 0;
    } else if (correctAnswer62.checked === true) {
        test.questions[5].correctAnswers6Index = 1;
    }

    if (correctAnswer71.checked === true) {
        test.questions[6].correctAnswers7Index = 0;
    } else if (correctAnswer72.checked === true) {
        test.questions[6].correctAnswers7Index = 1;
    }

    if (correctAnswer81.checked === true) {
        test.questions[7].correctAnswers8Index = 0;
    } else if (correctAnswer82.checked === true) {
        test.questions[7].correctAnswers8Index = 1;
    }

    if (correctAnswer91.checked === true) {
        test.questions[8].correctAnswers9Index = 0;
    } else if (correctAnswer92.checked === true) {
        test.questions[8].correctAnswers9Index = 1;
    }

    if (correctAnswer101.checked === true) {
        test.questions[9].correctAnswers10Index = 0;
    } else if (correctAnswer102.checked === true) {
        test.questions[9].correctAnswers10Index = 1;
    }

    // присваивание правильных ответов 

    tests.push(test)
    localStorage.setItem('testsArray', JSON.stringify(tests))
    location.reload()
}

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

function showArray() {
    console.log(JSON.stringify(tests))
    JSON.parse(tests)
}