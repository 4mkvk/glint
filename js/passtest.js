let tests = JSON.parse(localStorage.getItem("testsArray"))
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
let currentTestId = JSON.parse(localStorage.getItem('passTestId'))
let currentTest = null;
for (i = 0; i < tests.length; i++) {
    if (tests[i].currentTestId === currentTestId) {
        currentTest = tests[i]
    }
}
if (localStorage.getItem('loggedUser') === null) {
    location.href = 'login.html'
}
console.log(currentTest)

let testName = document.getElementById("title")
document.title = `${currentTest.testName} - GLINT.kz`

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

let question1variants = document.getElementsByName('question1variants')
let question2variants = document.getElementsByName('question2variants')
let question3variants = document.getElementsByName('question3variants')
let question4variants = document.getElementsByName('question4variants')
let question5variants = document.getElementsByName('question5variants')
let question6variants = document.getElementsByName('question6variants')
let question7variants = document.getElementsByName('question7variants')
let question8variants = document.getElementsByName('question8variants')
let question9variants = document.getElementsByName('question9variants')
let question10variants = document.getElementsByName('question10variants')

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

question1.innerText = currentTest['questions'][0]['questionTitle']
question2.innerText = currentTest['questions'][1]['questionTitle']
question3.innerText = currentTest['questions'][2]['questionTitle']
question4.innerText = currentTest['questions'][3]['questionTitle']
question5.innerText = currentTest['questions'][4]['questionTitle']
question6.innerText = currentTest['questions'][5]['questionTitle']
question7.innerText = currentTest['questions'][6]['questionTitle']
question8.innerText = currentTest['questions'][7]['questionTitle']
question9.innerText = currentTest['questions'][8]['questionTitle']
question10.innerText = currentTest['questions'][9]['questionTitle']


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

$('#resultOfTest').hide()

document.getElementById('title').innerText = currentTest['testName']


// заполнение данных для редактирования 
let createTestBtn = () => {

    let correctAnswer11 = document.getElementsByName("correct1")[0]
    let correctAnswer12 = document.getElementsByName("correct1")[1]

    let correctAnswer21 = document.getElementsByName("correct2")[0]
    let correctAnswer22 = document.getElementsByName("correct2")[1]

    let correctAnswer31 = document.getElementsByName("correct3")[0]
    let correctAnswer32 = document.getElementsByName("correct3")[1]

    let correctAnswer41 = document.getElementsByName("correct4")[0]
    let correctAnswer42 = document.getElementsByName("correct4")[1]

    let correctAnswer51 = document.getElementsByName("correct5")[0]
    let correctAnswer52 = document.getElementsByName("correct5")[1]

    let correctAnswer61 = document.getElementsByName("correct6")[0]
    let correctAnswer62 = document.getElementsByName("correct6")[1]

    let correctAnswer71 = document.getElementsByName("correct7")[0]
    let correctAnswer72 = document.getElementsByName("correct7")[1]

    let correctAnswer81 = document.getElementsByName("correct8")[0]
    let correctAnswer82 = document.getElementsByName("correct8")[1]

    let correctAnswer91 = document.getElementsByName("correct9")[0]
    let correctAnswer92 = document.getElementsByName("correct9")[1]

    let correctAnswer101 = document.getElementsByName("correct10")[0]
    let correctAnswer102 = document.getElementsByName("correct10")[1]


    let correctAnswer1 = document.getElementsByName("correct1")

    let correctAnswer2 = document.getElementsByName("correct2")

    let correctAnswer3 = document.getElementsByName("correct3")

    let correctAnswer4 = document.getElementsByName("correct4")

    let correctAnswer5 = document.getElementsByName("correct5")

    let correctAnswer6 = document.getElementsByName("correct6")

    let correctAnswer7 = document.getElementsByName("correct7")

    let correctAnswer8 = document.getElementsByName("correct8")

    let correctAnswer9 = document.getElementsByName("correct9")

    let correctAnswer10 = document.getElementsByName("correct10")
    //  получили валую всех инпутов 


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
        
        // создание теста 
        let correctAnswersCount = 0;

        if(correctAnswer1[currentTest['questions'][0]['correctAnswersIndex']].checked === true){
            correctAnswersCount++;
            document.getElementById('message1').style.display = 'none'
            question1variants[0].style.border = 'none'
            question1variants[1].style.border = 'none'
        } else{
            document.getElementById('message1').style.display = 'block';
            question1variants[0].style.border = '1px solid red'
            question1variants[1].style.border = '1px solid red'
            question1variants[currentTest['questions'][0]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer2[currentTest['questions'][1]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message2').style.display = 'none'
            question2variants[0].style.border = 'none'
            question2variants[1].style.border = 'none'
        }else{
            document.getElementById('message2').style.display = 'block';
            question2variants[0].style.border = '1px solid red'
            question2variants[1].style.border = '1px solid red'
            question2variants[currentTest['questions'][1]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer3[currentTest['questions'][2]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message3').style.display = 'none'
            question3variants[0].style.border = 'none'
            question3variants[1].style.border = 'none'
        }else{
            document.getElementById('message3').style.display = 'block';
            question3variants[0].style.border = '1px solid red'
            question3variants[1].style.border = '1px solid red'
            question3variants[currentTest['questions'][2]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer4[currentTest['questions'][3]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message4').style.display = 'none'
            question4variants[0].style.border = 'none'
            question4variants[1].style.border = 'none'
        }else{
            document.getElementById('message4').style.display = 'block';
            question4variants[0].style.border = '1px solid red'
            question4variants[1].style.border = '1px solid red'
            question4variants[currentTest['questions'][3]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer5[currentTest['questions'][4]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message5').style.display = 'none'
            question5variants[0].style.border = 'none'
            question5variants[1].style.border = 'none'
        }else{
            document.getElementById('message5').style.display = 'block';
            question5variants[0].style.border = '1px solid red'
            question5variants[1].style.border = '1px solid red'
            question5variants[currentTest['questions'][4]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer6[currentTest['questions'][5]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message6').style.display = 'none'
            question6variants[0].style.border = 'none'
            question6variants[1].style.border = 'none'
        }else{
            document.getElementById('message6').style.display = 'block';
            question6variants[0].style.border = '1px solid red'
            question6variants[1].style.border = '1px solid red'
            question6variants[currentTest['questions'][5]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer7[currentTest['questions'][6]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message7').style.display = 'none'
            question7variants[0].style.border = 'none'
            question7variants[1].style.border = 'none'
        }else{
            document.getElementById('message7').style.display = 'block';
            question7variants[0].style.border = '1px solid red'
            question7variants[1].style.border = '1px solid red'
            question7variants[currentTest['questions'][6]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer8[currentTest['questions'][7]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message8').style.display = 'none'
            question8variants[0].style.border = 'none'
            question8variants[1].style.border = 'none'
        }else{
            document.getElementById('message8').style.display = 'block';
            question8variants[0].style.border = '1px solid red'
            question8variants[1].style.border = '1px solid red'
            question8variants[currentTest['questions'][7]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer9[currentTest['questions'][8]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message9').style.display = 'none'
            question9variants[0].style.border = 'none'
            question9variants[1].style.border = 'none'
        }else{
            document.getElementById('message9').style.display = 'block';
            question9variants[0].style.border = '1px solid red'
            question9variants[1].style.border = '1px solid red'
            question9variants[currentTest['questions'][8]['correctAnswersIndex']].style.border = '1px solid green'
        }
        if(correctAnswer10[currentTest['questions'][9]['correctAnswersIndex']].checked === true){
            correctAnswersCount++
            document.getElementById('message10').style.display = 'none'
            question10variants[0].style.border = 'none'
            question10variants[1].style.border = 'none'
            
        }else{
            document.getElementById('message10').style.display = 'block';
            question10variants[0].style.border = '1px solid red'
            question10variants[1].style.border = '1px solid red'
            question10variants[currentTest['questions'][9]['correctAnswersIndex']].style.border = '1px solid green'
        }
        // присваивание правильных ответов 
        console.log(correctAnswersCount)
        $('#resultOfTest').show()
        $('#correctAnswersCount').text(`Вы ответили на ${correctAnswersCount} вопросов из 10`)
        if(correctAnswersCount <= 3 && correctAnswersCount >= 0){
            $('#resultMessage').text(`Ужасный результат`)
        }else if(correctAnswersCount <= 6 && correctAnswersCount >= 4){
            $('#resultMessage').text(`Нормальный результат`)
        }else if(correctAnswersCount <= 8 && correctAnswersCount >= 7){
            $('#resultMessage').text(`Хороший результат`)
        } else {
            $('#resultMessage').text(`Отличный результат`)
        }

        currentTest['passCount']++
        console.log(currentTest['passCount'])
        for (i = 0; i < tests.length; i++) {
            if (tests[i]['currentTestId'] === currentTestId) {
                tests.splice(i, 1)
                tests.push(currentTest)
                localStorage.setItem('testsArray', JSON.stringify(tests))
            }
        }
    }

}


function showArray() {
    console.log(JSON.stringify(tests))
    JSON.parse(tests)
}
