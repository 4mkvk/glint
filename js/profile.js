function editing(id) {
    localStorage.setItem('currentTestId', JSON.stringify(id))
    location.href = "editing.html";
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
                            <span class="testCardSpan">10 вопросов</span>
                        </div>
                        <div class="testCardDownBlock">
                            <div class="buttons-wrapper">
                                <button class="testCardTakeTest" onclick="editing(${tests[i].currentTestId})">Редактировать</button>
                                <button class="testCardTakeTest">Удалить</button>
                            </div>
                            <button class="testCardTakeTest">Пройти</button>
                    </div>
            </div>
    </div>
    `)
    }
}



