let testsBlock = $("#testsBlock");
let users = JSON.parse(localStorage.getItem("users"))
console.log(users)

let tests = JSON.parse(localStorage.getItem("testsArray"))
console.log(tests)
for (let i = 0; i < tests.length; i++) {
    let testCreator = null;
    for (let j = 0; j < users.length; j++) {
        if (users[j]['userId'] === tests[i]['userId']) {
            testCreator = users[j].userName
        }
    }
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
                        <button class="testCardTakeTest" onclick="passTest(${tests[i].currentTestId})">Пройти</button>
                        <span class="testCardSpan">От ${testCreator}</span>
                    </div>
            </div>
        </div>
    `)
}
{/* <button class="testCardTakeTest" onclick="openedtest(${tests[i].currentTestId})">Пройти</button> */ }

function changesCategory() {
    $("#testsBlock").empty();
    let category = $("#category").val();
    if (category === 'Все') {
        location.reload()
    } else {
        for (let i = 0; i < tests.length; i++) {
            if (category === tests[i].testCategory) {
                let testCreator = null;
                for (let j = 0; j < users.length; j++) {
                    if (users[j]['userId'] === tests[i]['userId']) {
                        testCreator = users[j].userName
                    }
                }
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
                        <button class="testCardTakeTest" onclick="passTest(${tests[i].currentTestId})">Пройти</button>
                        <span class="testCardSpan">От ${testCreator}</span>
                    </div>
            </div>
        </div>
    `)
            }
        }
    }

}

function passTest(id) {
    if (localStorage.getItem('loggedUser') === null) {
        alert('Прежде чем проходить тесты, вам следует авторизоваться! Эта мера нужна для составления рейтинга тестов.')
        location.href = 'login.html'
    } else {
        localStorage.setItem('passTestId', JSON.stringify(id))
        location.href = "passtest.html";
    }
}