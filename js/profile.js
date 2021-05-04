function editing(id) {
    localStorage.setItem('currentTestId', JSON.stringify(id))
    location.href = "editing.html";
}
if (localStorage.getItem('loggedUser') === null) {
    location.href = 'login.html'
}

let testsBlock = $("#testsBlock");
let users = JSON.parse(localStorage.getItem("users"))
let tests = JSON.parse(localStorage.getItem("testsArray"))
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
console.log(tests)
console.log(users)
console.log(loggedUser)

for (let i = 0; i < tests.length; i++) {
    if (loggedUser.userId === tests[i].userId) {
        testsBlock.append(`
    <div class="testCard">
            <div class="testCardImageBlock">
                <img src="./img/test-card.png" alt="" class="testCardImage">
                </div>
                    <div class="testCardContent">
                        <div class="testCardTitleBlock">
                            <span class="testCardTitle">${tests[i].testName}</span>
                            <span class="testCardSpan">10 вопросов</span> <span class="testCardSpan">Пройден ${tests[i].passCount} раз(а)</span>
                        </div>
                        <div class="testCardDownBlock">
                            <div class="buttons-wrapper">
                                <button class="testCardTakeTest" onclick="editing(${tests[i].currentTestId})">Редактировать</button>
                                <button class="testCardTakeTest" onclick ="deleteTest(${tests[i].currentTestId})">Удалить</button>
                            </div>
                            <button class="testCardTakeTest" onclick="passTest(${tests[i].currentTestId})">Пройти</button>
                    </div>
            </div>
    </div>
    `)
    }
}

function deleteTest(id) {
    for(i=0;i<tests.length;i++){
        if(tests[i]['currentTestId'] === id){
            tests.splice(i,1)
            localStorage.setItem('testsArray', JSON.stringify(tests))
            location.reload()
        }
    }
}

function passTest(id){
    localStorage.setItem('passTestId', JSON.stringify(id))
    location.href = "passtest.html";
}